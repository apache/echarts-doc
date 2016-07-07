/**
 * @file A simple 'set'
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');

    // 'instanceof' is not reliable (in crossing iframe and some postMessage scene).
    var SET_MARK = '__\x06isDTLibSet';

    /**
     * A simple 'set'
     *
     * @public
     * @class
     * @param {string|Array.<string>|Set} value like: 'line', or ['line', 'pie'], or 'line, pie'
     */
    var Set = function (value) {
        this._valueSet = {};
        this[SET_MARK] = true;
        this.reset(value);
    };

    /**
     * If input is set, then return it, Otherwise create set.
     *
     *
     * @public
     * @static
     * @param {*} value
     * @return {Set}
     */
    Set.getSet = function (value) {
        return Set.isSet(value) ? value : new Set(value);
    };

    /**
     * Whether the input is an instance of Set.
     *
     * @public
     * @static
     * @param {*} value
     * @return {boolean} is set
     */
    Set.isSet = function (value) {
        return isObject(value) && !!value[SET_MARK];
    };

    Set.prototype = {

        constructor: Set,

        /**
         * @public
         * @param {string|Array.<string>|Set} value
         * @return {Set}
         */
        add: function (value) {
            $.extend(this._valueSet, this._normalize(value));
            return this;
        },

        /**
         * @public
         */
        union: function (value) {
            return this.add(value);
        },

        /**
         * @public
         * @param {string|Array.<string>|Set} value
         * @return {Set}
         */
        reset: function (value) {
            this._valueSet = this._normalize(value);
            return this;
        },

        /**
         * @public
         * @param {string|Array.<string>|Set} value
         * @return {boolean}
         */
        contains: function (value) {
            var inputSet = this._normalize(value);
            for (var key in inputSet) {
                if (inputSet.hasOwnProperty(key) && !this._valueSet.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        },

        /**
         * @public
         * @param {string|Array.<string>|Set} value
         * @return {Set}
         */
        intersects: function (value) {
            var inputSet = this._normalize(value);
            var intersection = [];
            for (var key in inputSet) {
                if (inputSet.hasOwnProperty(key) && this._valueSet.hasOwnProperty(key)) {
                    intersection.push(key);
                }
            }
            return new Set(intersection);
        },

        /**
         * @public
         * @param {string|Array.<string>|Set} value
         * @return {Set}
         */
        subtracts: function (value) {
            var inputSet = this._normalize(value);
            var result = [];
            for (var key in this._valueSet) {
                if (this._valueSet.hasOwnProperty(key) && !inputSet.hasOwnProperty(key)) {
                    result.push(key);
                }
            }
            return new Set(result);
        },

        /**
         * @public
         * @return {boolean}
         */
        isEmpty: function () {
            return this.count() === 0;
        },

        /**
         * @public
         * @return {number}
         */
        count: function () {
            var count = 0;
            for (var value in this._valueSet) {
                if (this._valueSet.hasOwnProperty(value)) {
                    count++;
                }
            }
            return count;
        },

        /**
         * @pubilc
         * @return {Array.<string>}
         */
        list: function () {
            var set = this._valueSet;
            var list = [];
            for (var key in set) {
                if (set.hasOwnProperty(key)) {
                    list.push(key);
                }
            }
            return list;
        },

        /**
         * @public
         * @return {Set}
         */
        clone: function () {
            return new Set(this);
        },

        /**
         * @public
         * @param {Function} filter param: setItem, return: boolean
         * @return {Object} a new set.
         */
        filter: function (filter) {
            var set = this._valueSet;
            var list = [];
            for (var key in set) {
                if (set.hasOwnProperty(key)) {
                    if (filter(key)) {
                        list.push(key);
                    }
                }
            }
            return new Set(list);
        },

        /**
         * @public
         * @param {Function} mapping param: setItem, return: newItem
         * @return {Object} a new set.
         */
        map: function (mapping) {
            var set = this._valueSet;
            var list = [];
            for (var key in set) {
                if (set.hasOwnProperty(key)) {
                    list.push(mapping(key));
                }
            }
            return new Set(list);
        },

        /**
         * i.e.:
         * There is a Set: [-3, 40, 150, 999]
         * var result = someSet.classsify(function (item) {
         *     if (item > 100) {
         *         return 'big'; // return class name
         *     }
         *     else if (item <= 100 && item > 0) {
         *         return 'small'; // return class name
         *     }
         *     else {
         *         return {
         *             iDontKnow1: {value: item},
         *             iDontKnow2: {value: item + 1}
         *         }; // return class name and value
         *     }
         * });
         * Then the result is: {
         *     big: setA, // contains: 150, 999
         *     small: setB, // contains: 40
         *     iDontKnow1: setC // contains: {value: -3}
         *     iDontKnow2: setC // contains: {value: -2}
         * };
         *
         * @public
         * @param {Function} classifier param: {*} setItem,
         *                              return: {string|Object}
         *                                  string: class name
         *                                  Object: key is class name, value is transformed set content.
         * @param {Array.<string>=} keyList If used, empty set will be created when no value in the class.
         * @return {Object} key in className, value is Set
         */
        classify: function (classifier, keyList) {
            var set = this._valueSet;
            var ret = {};
            for (var key in set) {
                if (set.hasOwnProperty(key)) {
                    var clzResult = classifier(key);
                    if (!isObject(clzResult)) {
                        var clzResultObj = {};
                        clzResultObj[clzResult] = key;
                        clzResult = clzResultObj;
                    }
                    for (var className in clzResult) {
                        if (clzResult.hasOwnProperty(className)) {
                            var clz = ret[className] || (ret[className] = new Set());
                            clz.add(clzResult[className]);
                        }
                    }
                }
            }

            for (var i = 0, len = (keyList || []).length; i < len; i++) {
                if (!ret[keyList[i]]) {
                    ret[keyList[i]] = new Set();
                }
            }

            return ret;
        },

        /**
         * @inner
         * @param {string|Array.<string>|Set} value
         * @return {Object}
         */
        _normalize: function (value) {
            var set = {};
            var type = $.type(value);

            if (!value) {
                return set;
            }

            if (Set.isSet(value)) {
                value = value.list();
            }
            else if (type === 'string') {
                value = value.split(',');
                for (var i = 0, len = value.length; i < len; i++) {
                    value[i] = $.trim(value[i]);
                }
            }
            else if (type !== 'array') {
                throw new Error();
            }

            for (var i = 0, len = value.length; i < len; i++) {
                set[value[i]] = 1;
            }
            return set;
        }
    };

    function isObject(value) {
        return Object(value) === value;
    }

    return Set;
});