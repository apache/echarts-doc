/**
 * @file data table base processor
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var helper = {};

    /**
     * @public
     */
    helper.formatJSDataToEditorData = function (value, jsDataOb, editorData) {
        var emptyValue = jsDataOb.getEmptyValue();
        if (value === emptyValue) {
            return editorData.getEmptyValue();
        }
        // Dont use stringify methods.
        // 'toString' conversion relies on handsontable, just for simple.
        return value;
    };

    /**
     * @public
     */
    helper.formatEditorDataToJSData = function (value, jsDataOb, editorData) {
        var emptyValue = editorData.getEmptyValue();
        if (value === emptyValue) {
            return jsDataOb.getEmptyValue();
        }
        return value;
    };

    /**
     * @public
     */
    helper.objectPropertyCount = function (obj) {
        obj = obj || {};
        var count = 0;
        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                count++;
            }
        }
        return count;
    };

    /**
     * @public
     * @param {string} data
     * @return {Array}
     */
    helper.parseToArray = function (data) {
        var result;
        try {
            result = (new Function('return (' + data + ')'))(); // jshint ignore:line
        }
        catch (e) {
        }
        if (!$.isArray(result)) {
            result = null;
        }
        return result;
    };

    return helper;
});
