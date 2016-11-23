/**
 * @file 在lib.observable基础上加了写入控制。主要用于paper number的输入。
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-11
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../util');

    /**
     * 使用方式例如：
     * var integerInputDecorator = require('...');
     * var decoratedOb = integerInputDecorator({value: lib.ob(0)});
     *
     * @public
     * @param {Object} options
     * @param {lib.ob} options.value 要被decorate的ob。
     * @param {(number|Function)=} options.min 合法输入的最小值，
     *                                         如果为Function，则输入参数是当前value，返回值为number表示min
     * @param {(number|Function)=} options.max 合法输入的最大值
     *                                         如果为Function，则输入参数是当前value，返回值为number表示max
     * @return {Object}
     */
    function integerInputDecorator(options) {
        options.value.extendWriter(
            lib.curry(integerInputWriter, options.min, options.max)
        );
        return options;
    }

    /**
     * 提供对ob的扩展，parse输入内容成float。@see dataDriven.js。
     *
     * @inner
     */
    function integerInputWriter(min, max, writer, value, valueInfo, options) {
        value = parseInt($.trim(value + ''), 10);

        // 如果输入非法，当做没有输入。
        if (!value && value !== 0) {
            return;
        }

        if ($.isFunction(min)) {
            min = min(value);
        }
        if ($.isFunction(max)) {
            max = max(value);
        }
        // 目前实现的策略是：如果超过了min、max，则当做输入了min、max。
        // 如果要有其他策略，则需要时再加配置。
        if (min != null && value < min) {
            value = min;
        }
        if (max != null && value > max) {
            value = max;
        }

        writer(value, valueInfo, options);
    }

    return integerInputDecorator;
});
