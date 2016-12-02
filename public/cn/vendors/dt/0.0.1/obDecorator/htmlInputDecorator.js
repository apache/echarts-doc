/**
 * @file 在lib.observable基础上加了写入控制。主要用于html的标记清理和xss避免。
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-11
 */

define(function (require) {

    var lib = require('../util');

    /**
     * 使用方式例如：
     * var htmlInputDecorator = require('...');
     * var decoratedOb = htmlInputDecorator({value: lib.ob('xxx')}).value;
     *
     * @public
     * @param {Object} options
     * @param {lib.ob} options.value 要被decorate的ob。
     * @param {string=} options.htmlAllow 参见htmlCleaner。
     * @return {Object}
     */
    function htmlInputDecorator(options) {
        options.value.extendWriter(
            lib.curry(valueWriter, options.htmlAllow)
        );

        return options;
    }

    /**
     * @inner
     */
    function valueWriter(htmlAllow, writer, value, valueInfo, options) {
        value = lib.htmlClean(
            value == null ? '' : (value + ''),
            htmlAllow
        );

        writer(value, valueInfo, options);
    }

    return htmlInputDecorator;
});
