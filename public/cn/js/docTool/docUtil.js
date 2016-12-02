/**
 * @file Extra util methods for doc.
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var globalArgs = require('globalArgs');
    var dtLib = require('dt/lib');

    /**
     * @public
     * @type {Object}
     */
    var util = {};

    /**
     * @public
     */
    util.getGlobalArg = function (prop, defaultValue) {
        return globalArgs.hasOwnProperty(prop) ? globalArgs[prop] : defaultValue;
    };

    /**
     * @pubilc
     */
    util.addVersionArg = function (url) {
        return globalArgs.basePath
            + url + (url.indexOf('?') >= 0 ? '&' : '?')
            + '_v_=' + globalArgs.version;
    };

    /**
     * @public
     * @param {string} data
     * @return {Object|Array}
     */
    util.parseToObject = function (data) {
        var result = (new Function('return (' + data + ')'))(); // jshint ignore:line
        var type = $.type(result);
        dtLib.assert(type === 'object' || type === 'array');
        return result;
    };

    /**
     * @public
     * @param {Array} arr
     * @param {*} item
     * @return {boolean}
     */
    util.contains = function (arr, item) {
        return dtLib.arrayIndexOf(arr, item) >= 0;
    };

    /**
     * Change the sequence of the property in the object.
     * The "for in" sequence of an object,
     * @see https://javascriptweblog.wordpress.com/2011/01/04/exploring-javascript-for-in-loops/
     *
     * @public
     * @param {Object} obj
     * @param {string} propertyName Only supports owned properties. (obj.hasOwnProperty(propertyName) === true)
     * @param {string} targetPlace Value can be 'last', 'first', 'before', 'after'.
     * @param {string=} refPropertyName When targetPlace is 'before' or 'after',
     *                                  refPropertyName indicate the reference property.
     * @return {Object} The result object, which is not the original object.
     */
    util.changeIterationSequence = function (obj, propertyName, targetPlace, refPropertyName) {
        // Find property value.
        var propertyValue;
        for (var p in obj) {
            if (obj.hasOwnProperty(p) && propertyName === p) {
                propertyValue = obj[p];
                break;
            }
        }

        // Create new object, cause IE do not change property iteration sequence
        // when deleting a property and re-defining it.
        var newObj = {};

        if (targetPlace === 'first') {
            newObj[propertyName] = propertyValue;
        }
        for (var p in obj) {
            if (obj.hasOwnProperty(p) && p !== propertyName) {
                if (targetPlace === 'before' && p === refPropertyName) {
                    newObj[propertyName] = propertyValue;
                }

                newObj[p] = obj[p];

                if (targetPlace === 'after' && p === refPropertyName) {
                    newObj[propertyName] = propertyValue;
                }
            }
        }
        if (targetPlace === 'last') {
            newObj[propertyName] = propertyValue;
        }

        return newObj;
    };

    /**
     * Normalize <string> or Array.<string> to Array.<string>
     *
     * @public
     * @param {string|Array.<string>} value
     * @return {Array} result, must be array.
     */
    util.normalizeToArray = function (value) {
        if (!value) {
            return [];
        }
        if (!$.isArray(value)) {
            return [value];
        }
        return value;
    };

    /**
     * @public
     */
    util.log = function (txt) {
        if (console && $.isFunction(console.log)) {
            console.log(txt);
        }
    };

    return util;
});