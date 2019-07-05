/**
 * @file 枚举的相关实现。
 */
define(function (require) {

    var $ = require('jquery');

    var enumeration = {};

    var VALID_KEY_REG = /^[A-Z][A-Z_]*$/;

    /**
     * 枚举的key须符合规范：用全大写加下划线的方式命名。
     *
     * 创建enum。例如：
     * var SomeEnum = lib.makeEnum(
     *     {
     *         AAA: 'asdf',
     *         BB_EE: 'zxcv',
     *         CC_DD_FF: '1234
     *     },
     *     {
     *         myMethod1: function () {... },
     *         myMethod2: function () {... }
     *     }
     * );
     *
     * 或者：
     * var SomeEnum = lib.makeEnum(
     *     ['AAA', 'BB_EE', 'CC_DD_FF']
     * )
     * 这种情况，key和value是相同的值，比如key和value均为'AAA'。
     *
     * 则此枚举可如此使用：
     * var val = SomeEnum.AAA;
     * SomeEnum.myMethod1();
     *
     * 每个枚举对象都有默认方法，参见：defaultEnumMethods。
     * 外部传入的方法可以覆盖defaultEnumMethods。
     *
     * @param {(Object|Array)} keyValues value赋进来后请不要在外界修改。
     * @param {Object=} methods 此枚举所挂的方法集合，会放到prototype上。
     * @return {Object} enum实例
     */
    enumeration.makeEnum = function (keyValues, methods) {
        methods = methods || {};
        keyValues = translateInput(keyValues);
        checkInputValid(keyValues);

        function Clz() {}
        $.extend(Clz.prototype, defaultEnumMethods, methods);

        return $.extend(new Clz(), keyValues);
    };

    /**
     * 枚举的默认方法集合
     *
     * @inner
     * @type {Object}
     */
    var defaultEnumMethods = {

        /**
         * 判断是否是enum的key
         *
         * @public
         * @param {string} enumKey
         * @return {boolean}
         */
        has: function (enumKey) {
            return this.hasOwnProperty(enumKey);
        },

        /**
         * 判断是否是enum的value
         *
         * @public
         * @param {*} enumValue
         * @return {boolean}
         */
        hasValue: function (enumValue) {
            return this.getKeyByValue(enumValue) != null;
        },

        /**
         * 得到value。
         * 一般情况下，直接用 SomeEnum.SOME_KEY 即可。不需要使用此方法。
         * 除非输入的enumKey不确定值。
         *
         * @public
         * @param {string} enumKey
         * @return {boolean}
         */
        get: function (enumKey) {
            return this.hasOwnProperty(enumKey) ? this[enumKey] : null;
        },

        /**
         * 得到第一个出现的key。会进行遍历。用“===”比较。
         *
         * @public
         * @param {*} enumValue
         * @return {boolean}
         */
        getKeyByValue: function (enumValue) {
            for (var key in this) {
                if (this.hasOwnProperty(key) && this[key] === enumValue) {
                    return key;
                }
            }
            return null;
        },

        /**
         * 判断 targetValues 是否全在 baseKeys 中的方便方法。
         * 使用方法如：
         *     TheEnum.constains(['LINE', 'BAR', 'PIE'], _myChartType1);
         *     TheEnum.constains(['LINE', 'BAR', 'PIE'], [_myChartType1, _myChartType2]);
         *
         * @public
         * @param {Array.<string>} baseKeys 如：['LINE', 'BAR', 'PIE']，对应的是enum的key。
         * @param {string|Array.<string>} targetValues 要判断的values，可以如[_myChartType1, _myChartType2]。
         *                                                也可以如_myChartType1。
         * @return {boolean} 是否包含
         */
        contains: function (baseKeys, targetValues) {
            if (targetValues && !$.isArray(targetValues)) {
                targetValues = [targetValues];
            }

            for (var i = 0, len = targetValues.length; i < len; i++) {
                var has = false;
                for (var j = 0, lenj = baseKeys.length; j < lenj; j++) {
                    if (this[baseKeys[j]] === targetValues[i]) {
                        has = true;
                    }
                }
                if (!has) {
                    return false;
                }
            }

            return true;
        },

        /**
         * 遍历enum
         *
         * @public
         * @param {Function} callback 参数为：key, value。
         * @param {Object} scope callback调用时的this。
         */
        forEachEnum: function (callback, scope) {
            for (var key in this) {
                if (this.hasOwnProperty(key)
                    // 避免遍历到私有属性，如this._someProp
                    && VALID_KEY_REG.test(key)
                ) {
                    callback.call(scope, key, this[key]);
                }
            }
        }

    };

    /**
     * @inner
     */
    function translateInput(keyValues) {
        var ret;

        if ($.type(keyValues) === 'array') {
            ret = {};
            for (var i = 0, len = keyValues.length; i < len; i++) {
                ret[keyValues[i]] = keyValues[i];
            }
        }
        else {
            ret = keyValues;
        }

        return ret;
    }

    /**
     * @inner
     */
    function checkInputValid(keyValues) {
        for (var key in keyValues) {
            if (keyValues.hasOwnProperty(key) && !VALID_KEY_REG.test(key)) {
                throw new Error('Key must be spelled like "AAAA_BBB".');
            }
        }
    }

    return enumeration;
});
