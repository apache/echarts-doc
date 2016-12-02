/**
 * @file JSON相关工具
 */
/* jshint evil:true */
define(function (require) {

    var json = {};

    /**
     * 宽松的parseJSON，不检查正确性，可以使用注释，可以使用单引号。
     * 注意安全性！此方法原则上可执行任何js代码。
     *
     * @public
     * @param {string} data
     * @param {Object=} scope
     * @return {Object} result
     */
    json.parseJSONLaxly = function (data, scope) {
        return (new Function('return (' + data + ');')).call(scope);
    };

    return json;
});
