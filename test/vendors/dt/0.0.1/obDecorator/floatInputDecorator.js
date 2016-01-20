/**
 * @file 在lib.observable基础上加了写入控制。主要用于float number的输入。
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-11
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../util');

    /**
     * 使用方式例如：
     * var floatInputDecorator = require('...');
     * var decoratedOb = floatInputDecorator({value: lib.ob(123.45)}).value;
     *
     * @public
     * @param {Object} options
     * @param {lib.ob} options.value 要被decorate的ob。
     * @param {number=} options.min 合法输入的最小值
     * @param {number=} options.max 合法输入的最大值
     * @return {Object}
     */
    function floatInputDecorator(options) {
        options.value.extendWriter(
            lib.curry(floatInputWriter, options.min, options.max)
        );
        return options;
    }

    /**
     * 提供对ob的扩展，parse输入内容成float。@see dataDriven.js。
     *
     * @inner
     */
    function floatInputWriter(min, max, writer, value, valueInfo, options) {
        value = parseFloat($.trim(value + ''));

        // 如果输入非法，当做没有输入。
        if (!value && value !== 0) {
            return;
        }

        // 目前实现的策略是：如果超过了min、max，则当做输入了min、max。
        // 如果要有其他策略，则需要时在加配置。
        if (min != null && value < min) {
            value = min;
        }
        if (max != null && value > max) {
            value = max;
        }

        writer(value, valueInfo, options);
    }

    return floatInputDecorator;
});
