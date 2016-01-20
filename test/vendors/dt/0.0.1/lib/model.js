/**
 * @file atom、merge、view-model 相关工具
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var base = require('./base');
    var dataDriven = require('./dataDriven');

    var lib = {};
    var ATOM_FLAG = '\x0E\x0F__atom__\x0F\x0E';
    var UNDEFINED;

    /**
     * atom的意义类似于“非普通对象”。
     * atom在merge时不可复制的。
     * 在各种参数传递过程中，atom总是引用传递，而非clone传递。除非手动clone。
     * 如果想把一个普通的object设为atom，则使用lib.setAtom方法即可。
     * ko的subscribable默认是atom。
     * 非plainObject（比如undefined、null、Array）都是atom。
     *
     * @public
     * @param {*} o
     * @param {boolean} ignoreAtomFlag 默认为false。一般不需要使用。
     * @return {boolean}
     */
    var isAtom = lib.isAtom = function (o, ignoreAtomFlag) {
        return Object(o) !== o // 非对象则都是atom
            || (!ignoreAtomFlag && o[ATOM_FLAG])
            // 下几句同时存在只是为了加速和健壮性
            || dataDriven.obTypeOf(o)
            || base.isComponent(o)
            || !$.isPlainObject(o);
    };

    /**
     * @see lib.isAtom 定义为：array或者!lib.isAtom。意义类似于“普通数组或普通对象”。
     * 数组放开。在某些场景下（Component::_sub），数组需要侵入访问
     */
    lib.isPlain = function (o, ignoreAtomFlag) {
        return $.isArray(o) || !isAtom(o, ignoreAtomFlag);
    };

    /**
     * 把一个object设为atom
     * @see isAtom
     *
     * @public
     * @param {*} o
     * @return {boolean}
     */
    lib.atom = function (o) {
        if (Object(o) === o && !o[ATOM_FLAG]) {
            o[ATOM_FLAG] = 1;
        }
        return o;
    };

    /**
     * 克隆atom（对不支持clone的值，返回undefined）
     * 例如：HTMLElement不支持clone。
     *
     * @public
     * @param {*} o
     * @param {Object} options
     * @param {booelan} options.assignWhenCannotClone 默认为false
     * @return {boolean}
     */
    lib.cloneAtom = function (o, options) {
        var type = $.type(o);
        var obType;
        var res;

        if (!isAtom(o, true)) {
            // 最先 clone 手动标记为atom的plainObject
            if (o[ATOM_FLAG]) {
                o[ATOM_FLAG] = 0; // 暂时去除atom标记
                res = merge({}, o, {clone: true});
                res[ATOM_FLAG] = o[ATOM_FLAG] = 1; // 重置atom标记
                return res;
            }
            // 非atom则返回空
            else {
                return;
            }
        }
        /*jshint boss:true */
        else if (obType = dataDriven.obTypeOf(o)) {// dataDriven clone
            return dataDriven[obType](
                merge({}, o.peek(), {clone: true})
            );
        }
        else if (base.isComponent(o)) {// Component clone
            return o.clone();
        }
        else if (type === 'date') {// javascript Date clone
            return new Date(o.getTime());
        }
        else if (type === 'regexp') {// javascript RegExp clone
            return new RegExp(o);
        }
        else if (type === 'array') {// array clone
            res = [];
            for (var i in o) {
                if (o.hasOwnProperty(i)) {
                    res[i] = merge({}, o[i], {clone: true});
                }
            }
            return res;
        }
        else if (
            type in {// 认为不可改变，直接返回原值
                'function': 1, 'undefined': 1, 'null': 1,
                'boolean': 1, 'number': 1, 'string': 1
            }
            || (options && options.assignWhenCannotClone)
        ) {
            return o;
        }
        // 其他情况，返回空。
    };

    /**
     * 此merge方法是viewMode merge的基本逻辑。可用于深度extend，也可用于clone。
     * 遇到 非atom时才深入递归merge。否则直接覆盖。
     * 如果target或input直接是atom，则直接被覆盖返回。
     * input为undefined时，会忽略之而不会去向前merge。
     * 注意：ko的observable、overvableArray等均非plainObject.
     *
     * @public
     * @param {*} target merge的目标，如果非atom则会被更改
     * @param {*} source merge的输入。
     * @param {Object=} options 配置项，最后一个输入
     * @param {boolean=} options.clone true则遇到atom时clone；false则传引用（默认）。
     * @param {boolean=} options.onlyMergeOwnPropertyInTarget
     *      只在target上出现并own的属性才会被merget过来。默认false。
     * @param {booelan=} options.assignWhenCannotClone 默认为false
     * @param {Object=} options.levelOneNeedMerge 每个key为第一层的属性名，value指定是否merge。
     *      传了此列表后，只有列出的属性才会深度merge，其他直接传引用。
     * @return {*} merge结果
     */
    var merge = lib.merge = function (target, source, options) {
        if (source === UNDEFINED) {
            // undefined时什么都不会执行。所以（在递归中）不可能用undefined来清除target的属性。
            // 这种设定方便于“默认值不要被随便清除”的场景。
            // 如果想清除target的属性，可以使用null。
            return target;
        }
        else if (isAtom(source)) {
            // atom的source会“替换”target。merge结果从返回值中体现。
            // 这是合merge逻辑的。
            return (options && options.clone)
                ? lib.cloneAtom(source, options) : source;
        }
        else {
            if (isAtom(target)) {
                // atom的target无法被修改，只是被“替换”。
                // merge到新建的空对象，这保证了非atom的source在merge中不会被修改。
                target = {};
            }

            // 第一层属性的处理，如果设定levelOneNeedMerge的话。
            var needMergeMap = options && options.levelOneNeedMerge;
            options && (options.levelOneNeedMerge = null); // 递归时不要此参数

            // 双方都非atom时，深度递归
            for (var key in source) { // jshint ignore:line
                if (!source.hasOwnProperty(key)
                    || (options
                        && options.onlyMergeOwnPropertyInTarget
                        && !target.hasOwnProperty(key)
                    )
                ) {
                    continue;
                }
                target[key] = !needMergeMap || needMergeMap[key]
                    ? merge(target[key], source[key], options) // 深度merge
                    : source[key]; // 直接引用传递
            }
            return target;
        }
    };

    /**
     * 克隆
     *
     * @public
     * @param {*} o
     * @param {booelan=} assignWhenCannotClone 默认为false
     * @return {o} 副本
     */
    lib.clone = function (o, assignWhenCannotClone) {
        if (o === UNDEFINED) {
            return UNDEFINED;
        }

        return merge(
            {},
            o,
            {
                clone: true,
                assignWhenCannotClone: assignWhenCannotClone
            }
        );
    };

    return lib;
});
