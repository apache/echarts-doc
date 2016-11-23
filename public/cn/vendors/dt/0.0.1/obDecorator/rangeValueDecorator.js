/**
 * @file 在lib.observable基础上加了写入控制。不满足条件不会写入。
 *      暂只支持min、max、多value。暂不支持自定义比较。
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-05
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../util');
    var libPeek = lib.peek;
    var fixNumber = lib.fixNumber;

    /**
     * 对输入的ob进行decorate。建立他们直接的联动或验证。
     * 验证规则：
     *     设置value时，超出max/min界限时，会调整max min
     *     设置maxmin时如果不大于/小于所有value，或者min大于max，则设置失败，返回当前max/min
     * 使用方式例如：
     *     var rangeValueDecorator = require('...');
     *     var decoratedOb = rangeValueDecorator({
     *         max: lib.ob(-20),
     *         min: lib.ob(1000),
     *         value: [lib.ob(123), lib.ob(987)]
     *         precision: lib.ob(2)
     *     });
     *
     * @param {Object} options
     * @param {Object=} options.max lib.ob类型。最值，为空则表示不使用max
     * @param {Object=} options.min lib.ob类型最值。为空则表示不使用min
     * @param {(Object|Object|Array.{Object}} value lib.ob类型，或者数组中是lib.ob。要包装的值
     * @param {(Object|number)=} precision lib.ob类型。如果是2，表示精度为小数点后两位；0表示精度为整数。缺省则不限制精度
     * @return {Object} 包装好的ob对象。
     */
    function rangeValueDecorator(options) {
        options = options || {};

        // 闭包中维持的变量
        var minOb = options.min;
        var maxOb = options.max;
        var vals = options.value;
        var precision = options.precision; // precision不需包装

        var valueMax;
        var valueMin;

        if (minOb != null) {
            minOb.extendWriter(minWriter);
        }
        if (maxOb) {
            maxOb.extendWriter(maxWriter);
        }


        if ($.isArray(vals)) {
            updateMinMaxForArr();
            for (var i = 0, len = vals.length; i < len; i++) {
                vals[i].extendWriter(
                    lib.curry(valueWriter, i, updateMinMaxForArr)
                );
            }
        }
        else if ($.isPlainObject(vals)) {
            updateMinMaxForObj();
            for (var key in vals) {
                if (vals.hasOwnProperty(key)) {
                    vals[key].extendWriter(
                        lib.curry(valueWriter, key, updateMinMaxForObj)
                    );
                }
            }
        }
        else {
            updateMinMaxForSingle();
            vals.extendWriter(
                lib.curry(valueWriter, null, updateMinMaxForSingle)
            );
        }

        return options;

        /**
         * @inner
         */
        function updateMinMaxForArr(val, updateIndex) {
            // 这里做了n^2的实现而没考虑性能，
            // 是因为绝大部分场景下n很小。
            // 这样实现略简单些。
            valueMax = Number.MIN_VALUE;
            valueMin = Number.MAX_VALUE;

            for (var i = 0, len = vals.length; i < len; i++) {
                var thisVal = i === updateIndex ? val : libPeek(vals[i]);
                if (thisVal < valueMin) {
                    valueMin = thisVal;
                }
                if (thisVal > valueMax) {
                    valueMax = thisVal;
                }
            }
        }

        function updateMinMaxForObj(val, updateKey) {
            // 这里做了n^2的实现而没考虑性能，
            // 是因为绝大部分场景下n很小。
            // 这样实现略简单些。
            valueMax = Number.MIN_VALUE;
            valueMin = Number.MAX_VALUE;

            for (var key in vals) {
                if (vals.hasOwnProperty(key)) {
                    var thisVal = key === updateKey ? val : libPeek(vals[i]);
                    if (thisVal < valueMin) {
                        valueMin = thisVal;
                    }
                    if (thisVal > valueMax) {
                        valueMax = thisVal;
                    }
                }
            }
        }

        function updateMinMaxForSingle(val) {
            valueMin = valueMax = !arguments.length ? libPeek(vals) : val;
        }

        /**
         * @private
         */
        function formatNumber(val) {
            return fixNumber(parseFloat(val), libPeek(precision));
        }

        /**
         * 写入value。
         * val 可能是任意非法的数值，负责校验。
         */
        function valueWriter(key, updataMinMax, writer, value, valueInfo, options) {
            if (!lib.validateNumeric(value)) {
                return;
            }

            value = formatNumber(value);

            updataMinMax(value, key);

            // 先设完 valueMin valueMax 才可设置 maxOb minOb
            if (maxOb != null && value > libPeek(maxOb)) {
                maxOb(value);
            }
            if (minOb != null && value < libPeek(minOb)) {
                minOb(value);
            }

            // 最后才可更新自身
            writer(value, valueInfo, options);
        }

        /**
         * 写入min
         */
        function minWriter(writer, value, valueInfo, options) {
            if (!lib.validateNumeric(value)) {
                return;
            }

            value = formatNumber(value);

            // 合法，才能设置成功
            if (value <= valueMin) {
                writer(value, valueInfo, options);
            }
        }

        /**
         * 写入max
         */
        function maxWriter(writer, value, valueInfo, options) {
            if (!lib.validateNumeric(value)) {
                return;
            }

            value = formatNumber(value);

            // 合法，才能设置成功
            if (value >= valueMax) {
                writer(value, valueInfo, options);
            }
        }

    } // end of function RangeValueDecorator

    return rangeValueDecorator;
});
