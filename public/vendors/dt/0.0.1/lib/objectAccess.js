/**
 * @file 对象的访问和写入
 */
define(function (require) {

    var lib = {};
    var model = require('./model');
    var UNDEFINED;

    // Constant
    var PATH_DELIMITER_REG = /[\.\[]/;
    var PATH_BRACKET_BEGIN_REG = /\[/g;
    var PATH_BRACKET_END_REG = /\]/g;

    /**
     * 根据对象路径得到数据。
     * 路径中支持特殊字符（只要不和分隔符冲突即可），如asdf.xxx-b.eee。
     * 如果未取到目标，返回undefined。
     * 注意：此方法不会去trim路径中的中英文空格tab等。
     * 为了安全，没有使用new Function实现。
     * 例如：
     *      已有var obj = {aaa: [123, {fff: 678 }]};（路径中有数组）
     *      可用getByPath('aaa.1.fff', obj);
     *      或getByPath('aaa[1].fff', obj); 得到数值678。
     *
     * @public
     * @param {(string|Array)} path 如xxx.sss.aaa[2][3].some，或者['xxx', 'sss', 2, 3]
     * @param {Object} context 设置的目标
     * @param {Function=} actionChoice 过程中判断当前context、pathUnit时接下来行为
     *                                 返回 lib.getByPath.Action 枚举值。
     * @return {*} 取得的数据
     */
    var getByPath = lib.getByPath = function (path, context, actionChoice) {
        if (path == null) {
            return context;
        }

        var pathArr = isArray(path) ? path : getByPath.parsePath(path);
        var actionChoice = actionChoice || gbpActionChoiceDefault;

        // 创建虚拟根基兼容输入context本身非法情况
        context = {k: context};
        pathArr.unshift('k');

        for (var i = 0, len = pathArr.length; i < len; i++) {
            var pathUnit = pathArr[i];
            var action = !i ? gbpAction.DRILL_DOWN : actionChoice(context, pathUnit);

            switch (action) {
                case gbpAction.DRILL_DOWN:
                    context = context[pathUnit];
                    break; // 继续下钻
                case gbpAction.RETURN: return; // 静默返回
                // 即 case 'THROW': 抛出异常
                default: throw new Error('path: ' + pathUnit);
            }
        }
        return context;
    };

    /**
     * getByPath 的 action枚举
     *
     * @public
     */
    var gbpAction = getByPath.Action = {
        DRILL_DOWN: 'drillDown', // 表示继续下钻
        THROW: 'throw', // 表示抛出异常
        RETURN: 'return' // 表示静默结束
    };

    /**
     * 可选择的 action choice
     *
     * @pubic
     */
    var gbpActionChoice = getByPath.actionChoice = {
        notObjectThrow: function (o) {
            return isObject(o) ? gbpAction.DRILL_DOWN : gbpAction.THROW;
        },
        notObjectReturn: function (o) {
            return isObject(o) ? gbpAction.DRILL_DOWN : gbpAction.RETURN;
        },
        atomThrow: function (o) {
            return (isObject(o) && !model.isAtom(o))
                ? gbpAction.DRILL_DOWN : gbpAction.THROW;
        },
        notPlainThrow: function (o) {
            // 数组放开可以取值，供Component的_sub使用
            return (isObject(o) && model.isPlain(o))
                ? gbpAction.DRILL_DOWN : gbpAction.THROW;
        },
        notPlainReturn: function (o) {
            return (isObject(o) && model.isPlain(o))
                ? gbpAction.DRILL_DOWN : gbpAction.RETURN;
        }
    };

    var gbpActionChoiceDefault = gbpActionChoice.notObjectThrow;


    /**
     * 将a.b[3][4]变为a.b.3.4，可以用于比较path一致性
     *
     * @public
     */
    getByPath.normalizePath = function (path) {
        return path
            .replace(PATH_BRACKET_BEGIN_REG, '.')
            .replace(PATH_BRACKET_END_REG, '');
    };

    /**
     * 将path转为array，每项为路径节点
     *
     * @public
     */
    getByPath.parsePath = function (path) {
        return path
            .replace(PATH_BRACKET_END_REG, '')
            .split(PATH_DELIMITER_REG);
    };

    /**
     * 根据对象路径设置数据。
     * 如果路径中没有对象/数组，则创建之。遇到“[]”则表示创建数组。
     * 路径中支持特殊字符（只要不和分隔符冲突即可），如asdf.xxx-b.eee。
     * 注意：此方法不会去trim路径中的中英文空格tab等。
     * 例如：
     *      var obj = {asdf: {zxcv: [43, 44]} };
     *      可用对obj赋值：lib.setByPath('asdf.zxcv[1][2].fff', 678, obj);
     *      使obj值最终为：
     *          {
     *              asdf: {
     *                  zxcv: [43, [undefined, undefined, {fff: 678}]]
     *              }
     *          };（路径中有数组）
     *
     * @public
     * @param {string} path 如xxx.sss.aaa[2][3].some
     * @param {*} value 要设置的值
     * @param {Object} context 设置的目标
     * @param {Function=} actionChoice 过程中判断当前context、pathUnit时接下来行为
     *                                 返回 lib.setByPath.Action 枚举值。
     * @param {Function=} setter 表示，最后的设置的回调。给一个定制“最后设置动作”的机会。
     *                                参数：context, finalPathUnit, value。
     *                                返回值：真正设置的value, 会被用作setByValue的最终返回值。
     * @return {*} value
     */
    var setByPath = lib.setByPath = function (
        path, value, context, actionChoice, setter
    ) {
        if (path == null) {
            return;
        }

        var pathArr = path.split(PATH_DELIMITER_REG);
        var actionChoice = actionChoice || sbpActionChoiceDefault;
        var lastContext;
        var pathUnit;

        // 创建虚拟根基兼容输入context本身非法情况
        context = {k: context};
        pathArr.unshift('k');

        for (var i = 0, mayArr, len = pathArr.length; i < len; i++) {
            pathUnit = pathArr[i];
            var pathUnitLen = pathUnit.length;

            // 以']'结尾表明可能需要创建数组而非创建普通对象
            mayArr = 0;
            if (pathUnit.indexOf(']') === pathUnitLen - 1) {
                pathArr[i] = pathUnit = pathUnit.slice(0, pathUnitLen - 1);
                mayArr = 1;
            }

            var action = !i ? sbpAction.DRILL_DOWN : actionChoice(context, pathUnit);

            switch (action) {
                case sbpAction.OVERLAP: // 构建路径中途的对象或数组
                    lastContext[pathArr[i - 1]] = context = mayArr ? [] : {};
                    break;
                case sbpAction.DELETE: // 删除并静默返回
                    delete lastContext[pathArr[i - 1]];
                    return;
                case sbpAction.DRILL_DOWN: break; // 直接继续下钻
                case sbpAction.RETURN: return; // 静默返回
                // 即 case sbpAction.THROW: 抛出异常
                default: throw new Error('path: ' + pathUnit);
            }
            lastContext = context;
            context = context[pathUnit];
        }

        // 执行set
        if (typeof setter === 'function') {
            value = setter(lastContext, pathUnit, value);
        }
        else {
            lastContext[pathUnit] = value;
        }

        return value;
    };

    /**
     * getByPath 的 action枚举
     *
     * @public
     */
    var sbpAction = setByPath.Action = {
        DRILL_DOWN: 'drillDown', // 表示继续下钻
        THROW: 'throw', // 表示抛出异常
        RETURN: 'return', // 表示静默结束
        OVERLAP: 'overlap', // 表示新建对象或数组来覆盖
        DELETE: 'delete' // 删除并静默返回
    };

    /**
     * 可选择的action choice
     *
     * @public
     */
    var sbpActionChoice = setByPath.actionChoice = {
        notObjectOverlap: function (o) {
            return isObject(o)
                ? sbpAction.DRILL_DOWN
                : sbpAction.OVERLAP;
        },
        notObjectThrow: function (o) {
            return isObject(o)
                ? sbpAction.DRILL_DOWN
                : (o !== UNDEFINED
                    ? sbpAction.THROW
                    : sbpAction.OVERLAP
                );
        },
        notObjectReturn: function (o) {
            return isObject(o)
                ? sbpAction.DRILL_DOWN
                : (o !== UNDEFINED
                    ? sbpAction.RETURN
                    : sbpAction.OVERLAP
                );
        },
        atomThrow: function (o) {
            return (isObject(o) && !model.isAtom(o))
                ? sbpAction.DRILL_DOWN
                : (o !== UNDEFINED
                    ? sbpAction.THROW
                    : sbpAction.OVERLAP
                );
        },
        notPlainThrow: function (o) {
            // 数组放开可以设值，供Component的_sub使用
            return (isObject(o) && model.isPlain(o))
                ? sbpAction.DRILL_DOWN
                : (o !== UNDEFINED
                    ? sbpAction.THROW
                    : sbpAction.OVERLAP
                );
        },
        notPlainOverlap: function (o) {
            return (isObject(o) && model.isPlain(o))
                ? sbpAction.DRILL_DOWN
                : sbpAction.OVERLAP;
        }
    };

    var sbpActionChoiceDefault = sbpActionChoice.notObjectThrow;

    /**
     * 根据对象路径删除数据。
     * 路径中支持特殊字符（只要不和分隔符冲突即可），如asdf.xxx-b.eee。
     * 注意：此方法不会去trim路径中的中英文空格tab等。
     * 例如：
     *      var obj = {asdf: {zxcv: [43, 44]} };
     *      可：lib.deleteByPath('asdf.zxcv');
     *      使obj值最终为：
     *          {
     *              asdf: {
     *              }
     *          };
     *
     * @public
     * @param {string} path 如xxx.sss.aaa[2][3].some
     * @param {Object} context 设置的目标
     * @param {Function=} actionChoice 过程中判断当前context、pathUnit时接下来行为
     *                                 返回 lib.setByPath.Action 枚举值。
     * @return {*} value
     */
    lib.deleteByPath = function (
        path, context, actionChoice, setter
    ) {
        var ret;
        setByPath(path, UNDEFINED, context, actionChoice, deleteSetter);
        return ret;

        function deleteSetter(lastContext, pathUnit) {
            ret = lastContext[pathUnit];
            delete lastContext[pathUnit];
        }
    };

    /**
     * 根据realpath缩减path，保留原先的[]等标记
     *
     * @public
     * @param {string} path
     * @param {Array} realPath
     * @return {string}
     */
    lib.reducePath = function (path, realPath) {
        var pathArr = path.split(PATH_DELIMITER_REG);
        var retArr = [];
        var i = 0;

        for (var len = pathArr.length; i < len; i++) {
            var pathUnit = pathArr[i];
            var pathUnitLen = pathUnit.length;
            var isArr = false;

            if (pathUnit.indexOf(']') === pathUnitLen - 1) {
                isArr = true;
                pathUnit = pathUnit.slice(0, pathUnitLen - 1);
            }
            if (pathUnit !== realPath[i]) {
                break;
            }
            else {
                retArr.push((i === 0 ? '' : (isArr ? '[' : '.')) + pathArr[i]);
            }
        }

        return retArr.join('');
    };


    // 此方法中，array、HTMLElement等都是Object
    function isObject(o) {
        return o === Object(o);
    }

    function isArray(o) {
        return Object.prototype.toString.call(o) === '[object Array]';
    }

    return lib;

});
