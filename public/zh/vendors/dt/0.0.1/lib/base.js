/**
 * @file 各种工具
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var arrProtoSlice = Array.prototype.slice;
    var arrProtoIndexOf = Array.prototype.indexOf;
    var BLANK_REG = /^[\s\t\xa0\u3000]*$/;
    var EC_VALUE_NULL = '-'; // echarts的空值不是null，是'-'
    var EC_NAME_DEFAULT = '-';
    var COMPONENT_FLAG = '\x0E\x0F__is__component__\x0F\x0E';
    var COMPONENT_EL_FLAG = '\x0E\x0F__component__\x0F\x0E';

    /**
     * @public
     */
    var lib = {};

    /**
     * uuid计数
     *
     * @inner
     */
    var lUID = 0;

    /**
     * 方法静态化（反柯里化）
     *
     * @inner
     * @param {Function} method 待静态化的方法
     *
     * @return {Function} 静态化包装后方法
     */
    var uncurry = lib.uncurry = function (method) {
        return function () {
            return Function.call.apply(method, arguments);
        };
    };

    /**
     * @public
     */
    lib.arraySlice = uncurry(arrProtoSlice);

    /**
     * 为函数提前绑定参数（柯里化）
     *
     * @see http://en.wikipedia.org/wiki/Currying
     * @param {Function} fn 要绑定的函数
     * @param {...args=} args 函数执行时附加到执行时函数前面的参数
     *
     * @return {Function} 封装后的函数
     */
    lib.curry = function (fn) {
        // 减少调用堆栈，直接用 arrProtoSlice
        var args = arrProtoSlice.call(arguments, 1);
        return function () {
            return fn.apply(this, args.concat(arrProtoSlice.call(arguments)));
        };
    };

    /**
     * 暂还是用userAgent判断ie版本
     *
     * @public
     */
    lib.ieVersion = /msie (\d+\.\d+)/i.test(navigator.userAgent)
        ? (document.documentMode || +RegExp['\x241']) : undefined;

    var replaceReg = /([&<>"'])/g;
    var replaceMap = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        '\'': '&#39;',
    };

    /**
     * 对目标字符串进行html编码
     * 编码字符有5个：&<>"'
     *
     * @public
     * @param {string} source 目标字符串
     * @return {string} html编码后的字符串
     */
    lib.encodeHTML = function (source) {
        return source == null
            ? ''
            : (source + '')
                .replace(replaceReg, function (str, char) {
                    return replaceMap[char];
                });
    };

    /**
     * 对目标字符串进行html解码（from tangram）
     *
     * @public
     * @param {string} source 目标字符串
     * @return {string} html解码后的字符串
     */
    lib.decodeHTML = function (source) {
        if (source == null) {
            return '';
        }

        var str = String(source)
            .replace(/&quot;/g, '"')
            .replace(/&lt;/g, '<')
            .replace(/&gt;/g, '>')
            .replace(/&amp;/g, '&');

        // 处理转义的中文和实体字符
        return str.replace(
            /&#([\d]+);/g,
            function (a, b) {
                return String.fromCharCode(parseInt(b, 10));
            }
        );
    };

    /**
     * 断言
     *
     * @public
     * @param {boolean} exprResult 条件判断结果
     * @param {string=} errorMessage
     */
    lib.assert = function (exprResult, errorMessage) {
        if (!exprResult) {
            throw new Error(errorMessage || 'assert fail!');
        }
    };

    /**
     * 遍历对象。
     * 修复IE8-的enumerable bug。
     * 不建议使用此方法。
     * 因为编码时候应避免覆盖 bugEnums 列出的内置属性。
     *
     * @public
     * @param {Object} obj
     * @param {function (string, *)} callback
     */
    lib.objForEach = function (obj, callback) {
        var key;
        for (key in obj) {
            if (obj.hasOwnProperty(key)) {
                callback(key, obj[key]);
            }
        }
        if (hasEnumBug) {
            for (var i = 0; key = bugEnums[i++];) {
                if (obj[key] !== Object.prototype[key]) {
                    callback(key, obj[key]);
                }
            }
        }
    };
    var hasEnumBug = !{toString: 1}.propertyIsEnumerable('toString');
    var bugEnums = [
        'toString', 'toLocaleString', 'valueOf', 'hasOwnProperty',
        'isPrototypeOf', 'propertyIsEnumerable', 'constructor'
    ];

    /**
     * 尽在当前js context下保证唯一的uid。
     * 跨iframe（及其他更大的跨越）不唯一。
     * 使用自增的方式生成id时，不需考虑number过大而产生上溢，导致uid重复。
     * 因为 假设调用此方法的速率是1,000,000/s，达到上限需要超过200年。
     * 参见 http://blog.vjeux.com/2010/javascript/javascript-max_int-number-limits.html
     *
     * @public
     * @return {number} uid
     */
    lib.localUID = function () {
        return lUID++;
    };

    /**
     * 创建oo编程中读写私有变量的函数。
     * 使用方式：在SomeClass.js中，
     *
     * var inner = dtLib.makeInner();
     * var SomeClass = function () {
     *     // 写入私有变量
     *     inner(this).x = 10;
     *     // 读取私有变量
     *     inner(this).y = inner(this).x;
     * };
     *
     * 注意：
     * 一个inner只能用于一个类，不能用于多个类。
     * 一个类只使用一个inner，不能使用多个inner。
     *
     * 仅仅进行了上面的步骤，类的实例还是不能在不同的js引擎context下传递（如不同iframe或postMessage）。
     * 如果要能够传输，需要把inner中的id绑到Class上：
     * inner.attach(SomeClass);
     * 注意此句须在使用inner(...)前执行。
     * 执行过后SomeClass不可对其prototype进行整体重置（不可SomeClass.prototype = { ... }）。
     *
     * @public
     */
    lib.makeInner = function () {
        // 动态生成id，从而类继承不会覆盖。
        var dynamicId = '\x06\x06__private_d_' + lib.localUID();
        var inner = function (obj) {
            return obj[dynamicId] || (obj[dynamicId] = {});
        };

        /**
         * @public
         * @return {Object} Clz
         */
        inner.attach = function (Clz) {
            // 挂在Class上的id只需保证prototype链上的不同即可。
            var staticIdPrefix = '\x06\x06__private_s_';
            var attachKey = '\x06\x06__private_attach_';
            var proto = Clz.prototype;

            if (proto.hasOwnProperty(attachKey)) {
                dynamicId = proto[attachKey];
            }
            else if (proto[attachKey]) {
                dynamicId = proto[attachKey] =
                    staticIdPrefix + (Number(proto[attachKey].split('_s_')[1]) + 1);
            }
            else {
                dynamicId = proto[attachKey] = staticIdPrefix + '0';
            }

            return Clz;
        };

        return inner;
    };

    /**
     * 因为esl 1.6.10的循环引用并不可靠（重复执行factory）
     * 所以把Component的判断放到了这里避免循环引用。
     *
     * @param {*} o 要判断的对象
     * @param {boolean=} setComponent 表示调用此函数设置component标记。
     * @return {boolean} 是否为Component
     */
    lib.isComponent = function (o, setComponent) {
        if (Object(o) !== o) {
            return false;
        }
        if (setComponent) {
            o[COMPONENT_FLAG] = 1;
        }
        return !!o[COMPONENT_FLAG];
    };

    /**
     * 如果是cpt的main element，则能够得到cpt实例，否则返回空
     *
     * @public
     * @param {(HTMLElement|jQuery)} el
     * @return {Object} component实例
     */
    lib.getComponent = function (el) {
        if (lib.isJQuery(el)) {
            el = el[0];
        }
        if (!el) {
            return false;
        }
        return el[COMPONENT_EL_FLAG];
    };

    /**
     * @public
     * @param {(HTMLElement|jQuery)} el
     * @param {(Object|boolean)=} cpt
     * @return {Object} component实例
     */
    lib.bindComponent = function (el, cpt) {
        if (lib.isJQuery(el)) {
            el = el[0];
        }
        if (!el) {
            return false;
        }

        if (lib.isComponent(cpt)) {
            el[COMPONENT_EL_FLAG] = cpt;
        }
        else if (cpt === false) {
            el[COMPONENT_EL_FLAG] = null;
        }

        return el[COMPONENT_EL_FLAG];
    };

    /**
     * 判断是否是jquery
     *
     * @public
     */
    lib.isJQuery = function (o) {
        return o instanceof $;
    };

    /**
     * parseInt简写
     *
     * @public
     */
    lib.toInt = function (o) {
        return parseInt(o, 10);
    };

    /**
     * 属性赋值（对象浅拷贝）
     * 与extend的不同点在于，可以指定拷贝的属性，
     * 但是不能同时进行多个对象的拷贝。
     * target中与source中相同的属性会被覆盖。
     * prototype属性不会被拷贝。
     *
     * @public
     * @param {(Object|Array)} target 目标对象
     * @param {(Object|Array)} source 源对象
     * @param {(Array.<string>|Object)} inclusion 包含的属性列表
     *          如果为{Array.<string>}，则意为要拷贝的属性名列表，
     *              如['aa', 'bb']表示将source的aa、bb属性
     *              分别拷贝到target的aa、aa上
     *          如果为{Object}，则意为属性名映射，
     *              如{'sAa': 'aa', 'sBb': 'bb'}表示将source的aa、bb属性
     *              分别拷贝到target的sAa、sBb上
     *          如果为null或undefined，
     *              则认为所有source属性都要拷贝到target中
     * @param {Array.<string>} exclusion 不包含的属性列表，
     *              如果与inclusion冲突，以exclusion为准.
     *          如果为{Array.<string>}，则意为要拷贝的属性名列表，
     *              如['aa', 'bb']表示将source的aa、bb属性分别拷贝到target的aa、aa上
     *          如果为null或undefined，则忽略此参数
     * @param {boolean} errorWhenConflict 如果target上已经有此属性，则抛出异常。
     *                                    默认false。
     *                                    往往用于早发现“误覆盖不可覆盖的属性”的问题。
     * @return {(Object|Array)} 目标对象
     */
    lib.assign = function (target, source, inclusion, exclusion, errorWhenConflict) {
        var inclusionMap = makeClusionMap(inclusion);
        var exclusionMap = makeClusionMap(exclusion);

        for (var i in source) {
            if (source.hasOwnProperty(i)
                // 为了安全，多写了几个hasOwnProperty，
                // 因为不知道浏览器环境中会不会有插件向Object.property上挂东西。
                && (!exclusionMap.hasOwnProperty(i))
            ) {
                var targetAttr = null;

                if (!inclusion) {
                    targetAttr = i;
                }
                else if (inclusionMap.hasOwnProperty(i)) {
                    targetAttr = inclusionMap[i];
                }

                if (targetAttr != null) {
                    if (errorWhenConflict && target.hasOwnProperty(targetAttr)) {
                        throw new Error('Target attr "' + targetAttr + '" exists!');
                    }
                    target[targetAttr] = source[i];
                }
            }
        }

        return target;
    };

    /**
     * 做inclusion map, exclusion map
     */
    function makeClusionMap(clusion) {
        var clusionMap = {};
        var type = $.type(clusion);

        if (type === 'array') {
            for (var i = 0, len = clusion.length; i < len; i++) {
                clusionMap[clusion[i]] = clusion[i];
            }
        }
        else if (type === 'object') {
            for (var i in clusion) {
                if (clusion.hasOwnProperty(i)) {
                    clusionMap[clusion[i]] = i;
                }
            }
        }

        return clusionMap;
    }

    /**
     * 是否是（广义的）对象。array、HTMLElement等都是对象。
     *
     * @pubilc
     * @param {*} value 判断目标
     * @return {boolean} 是否是对象
     */
    var isObject = lib.isObject = function (value) {
        // Avoid a V8 JIT bug in Chrome 19-20.
        // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
        var type = typeof value;
        return type === 'function' || (!!value && type == 'object');
        // return Object(value) === value;
    };

    /**
     * 是否是空对象
     *
     * @public
     * @param {Object} o 输入对象
     * @return {boolean} 是否是空对象
     */
    lib.isEmptyObj = function (o) {
        if (!isObject(o)) {
            return false;
        }
        /* jshint unused:true */
        for (var i in o) {
            if (o.hasOwnProperty(i)) {
                return false;
            }
        }
        /* jshint unused:false */
        return true;
    };

    /**
     * 是否是NaN。默认的isNaN会认为undefined也是NaN。
     *
     * @public
     * @param  {*} obj
     * @return {boolean}
     */
    lib.isNaN = function (obj) {
        // `NaN` is the only value for which `===` is not reflexive.
        // (from underscore)
        return obj !== obj;
    };

    /**
     * 得到从前向后第一次匹配的项的index。也可用于判断item是否在array中。
     *
     * @public
     * @param {Array} array
     * @param {*} item 要判断的项
     * @param {string=} key 如果传此项，表示array的每项是对象，判断每项的key域是否有item。
     *                      如果缺省此项，则判断array的每项是否是item。
     * @return {number} index，如果没找到，返回-1。
     */
    lib.arrayIndexOf = function (array, item, key) {
        if (!array) {
            return -1;
        }
        if (arguments.length < 3 && typeof arrProtoIndexOf === 'function') {
            return arrProtoIndexOf.call(array, item);
        }
        for (var i = 0, len = array.length; i < len; i++) {
            if (
                (arguments.length < 3 && array[i] === item)
                || (isObject(array[i]) && array[i][key] === item)
            ) {
                return i;
            }
        }
        return -1;
    };

    /**
     * 顾名思义
     *
     * @public
     */
    lib.arrayRemoveItem = function (array, itemToRemove) {
        var index = lib.arrayIndexOf(array, itemToRemove);
        if (index > 0) {
            array.splice(index, 1);
        }
        else if (index === 0) {
            array.shift();
        }
    };

    /**
     * @public
     */
    lib.arrayMap = function (arr, mappingFn) {
        var result = [];
        for (var i = 0, len = (arr || []).length; i < len; i++) {
            result.push(mappingFn(arr[i]));
        }
        return result;
    };

    /**
     * array比较，暂只提供浅比较。
     *
     * @public
     * @param {array} arr1
     * @param {array} arr2
     * @return {boolean} 是否相同
     */
    lib.arrayEquals = function (arr1, arr2) {
        if (!$.isArray(arr1) || !$.isArray(arr2) || arr1.length !== arr2.length) {
            return false;
        }

        for (var i = 0, len = arr1.length; i < len; i++) {
            if (arr1[i] !== arr2[i]) {
                return false;
            }
        }

        return true;
    };

    /**
     * @public
     * @param {Object} obj
     * @return {Array.<string>} keys
     */
    lib.objectKeys = function (obj) {
        var keys = [];
        if (!lib.isObject(obj)) {
            return keys;
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                keys.push(key);
            }
        }
        return keys;
    };

    /**
     * @public
     * @param {Object} obj
     * @param {(string|Array)} attrName 可以是'some'，也可以是['some1', 'some2']
     */
    lib.objHasAttr = function (obj, attrName) {
        if ($.type(attrName) === 'string') {
            attrName = [attrName];
        }
        for (var i = 0, len = attrName.length; i < len; i++) {
            if (obj.hasOwnProperty[attrName[i]]) {
                return true;
            }
        }
        return false;
    };

    /**
     * @public
     * @param {*} obj1
     * @param {*} obj2
     * @return {Array.<Object>} result
     */
    lib.diffObjects = function (obj1, obj2) {
        var result = arguments[2] || [];
        var path = arguments[3] || [];
        var type1 = $.type(obj1);
        var type2 = $.type(obj2);

        if (type1 !== type2) {
            return addResult();
        }

        if (type1 === 'array') {
            if (obj1.length !== obj2.length) {
                return addResult();
            }
            for (var i = 0, len = obj1.length; i < len; i++) {
                path.push(i);
                lib.diffObjects(obj1[i], obj2[i], result, path);
                path.pop();
            }
        }
        else if (type1 === 'object' && type2 === 'object') {
            var keys1 = lib.objectKeys(obj1);
            var keys2 = lib.objectKeys(obj2);

            if (!lib.arrayEquals(keys1, keys2)) {
                return addResult();
            }
            for (var i = 0, len = keys1.length; i < len; i++) {
                var key = keys1[i];
                path.push(key);
                lib.diffObjects(obj1[key], obj2[key], result, path);
                path.pop();
            }
        }
        else if (type1 === 'date') {
            if (obj1.getTime() !== obj2.getTime()) {
                return addResult();
            }
        }
        else if (type1 === 'regexp') {
            if (obj1.toString() !== obj2.toString()) {
                return addResult();
            }
        }
        else if (obj1 !== obj2) {
            return addResult();
        }

        return result;

        function addResult() {
            result.push({path: path.join('.'), obj1: obj1, obj2: obj2});
            return result;
        }
    };

    /**
     * 是否文本内容为空：null、undefined、空（包括全空格）字符串
     * 是否数值为空：null、undefined（不含NaN）
     *
     * @public
     * @param {*} value
     * @return {boolean}
     */
    lib.isBlank = function (value) {
        return value == null || BLANK_REG.test(value);
    };

    /**
     * 转换成echarts识别的value。其实就是处理EC_VALUE_NULL的情况。
     *
     * @public
     * @param {*} val
     * @return {boolean}
     */
    lib.toEcValue = function (val) {
        return val == null ? EC_VALUE_NULL : val;
    };

    /**
     * 从echarts转换成本系统通用的value格式。其实就是处理EC_VALUE_NULL的情况。
     *
     * @public
     * @param {*} val
     * @return {boolean}
     */
    lib.fromEcValue = function (val) {
        return val === EC_VALUE_NULL ? null : val;
    };

    /**
     * 有些name要设默认值，暂统一。
     *
     * @public
     * @param {string} str
     * @return {string}
     */
    lib.toNotEmptyEcName = function (str) {
        return lib.isBlank(str) ? EC_NAME_DEFAULT : str;
    };

    /**
     * 是否支持base64。
     *
     * @public
     * @type {boolean}
     */
    lib.isSupportBase64 = (function () {
        var data = new Image();
        var support = true;
        data.onload = data.onerror = function () {
            if (this.width !== 1 || this.height !== 1) {
                support = false;
            }
        };
        data.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==';
        return support;
    })();

    /**
     * 未安装flash则为0，否则为版本号如'10.1'。
     *
     * @public
     * @type {number}
     */
    lib.flashVersion = (function () {
        var version;

        try {
            version = navigator.plugins['Shockwave Flash'];
            version = version.description;
        }
        catch (ex) {
            try {
                version = new ActiveXObject('ShockwaveFlash.ShockwaveFlash')
                    .GetVariable('$version');
            }
            catch (ex2) {
                version = '0.0';
            }
        }
        version = version.match(/\d+/g);
        return parseFloat(version[0] + '.' + version[1]);
    })();

    /**
     * 是否支持css transition。
     *
     * @public
     * @type {boolean}
     */
    lib.supportTransition = (function () {
        var s = document.createElement('p').style;
        var r = 'transition' in s
            || 'WebkitTransition' in s
            || 'MozTransition' in s
            || 'msTransition' in s
            || 'OTransition' in s;
        s = null;
        return r;
    })();

    /**
     * 空方法
     */
    lib.noop = new Function(); // jshint ignore:line

    /**
     * @public
     * @param {Object} obj targe object
     * @param {(string|Array.<string>)} property only has this property
     * @return {boolean}
     */
    lib.onlyHasProperty = function (obj, property) {
        var ret = true;
        if (property == null) {
            return false;
        }
        if (!$.isArray(property)) {
            property = [property];
        }
        for (var key in obj) {
            if (obj.hasOwnProperty(key) && lib.arrayIndexOf(property, key) === -1) {
                ret = false;
            }
        }
        return ret;
    };

    return lib;
});
