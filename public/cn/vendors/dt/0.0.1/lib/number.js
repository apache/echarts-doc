/**
 * @file:    数值相关工具函数
 * @author:  sushuang(sushuang@baidu.com)
 */

define(function (require) {

    var number = {};

    var PX_STR_REGEXP = /^(\d+)px$/;
    var PERCENT_STR_REGEXP = /^(\d+|\d+\.\d+)%$/;

    /**
     * 得到序数词(1st, 2nd, 3rd, 4th, ...)的英文后缀
     *
     * @public
     * @param {number} number 序数的数值
     * @return {string} 序数词英文后缀
     */
    number.ordinalSuffix = function (number) {
        /* jshint eqeqeq:false */
        if (number == 1) {
            return 'st';
        }
        else if (number == 2) {
            return 'nd';
        }
        else if (number == 3) {
            return 'rd';
        }
        else {
            return 'th';
        }
        /* jshint eqeqeq:true */
    };

    /**
     * 数值前部补0
     *
     * @public
     * @param {(number|string)} source 输入数值, 可以整数或小数
     * @param {number} length 输出数值长度
     * @return {string} 输出数值
     */
    number.pad = function (source, length) {
        var pre = '';
        var negative = (source < 0);
        var string = String(Math.abs(source));

        if (string.length < length) {
            pre = (new Array(length - string.length + 1)).join('0');
        }

        return (negative ?  '-' : '') + pre + string;
    };

    /**
     * 将数值按照指定格式进行格式化
     * 支持：
     *      三位一撇，如：'23,444,12.98'
     *      前后缀，如：'23,444$', '23,444%', '#23,444'
     *      四舍五入
     *      四舍六入中凑偶（IEEE 754标准，欧洲金融常用）
     *      正数加上正号，如：'+23.45%'
     *
     * @public
     * @example formatNumber(10000/3, "I,III.DD%"); 返回"3,333.33%"
     * @param {number} num 要格式化的数字
     * @param {string} formatStr 指定的格式
     *              I代表整数部分,可以通过逗号的位置来设定逗号分隔的位数
     *              D代表小数部分，可以通过D的重复次数指定小数部分的显示位数
     * @param {string} usePositiveSign 是否正数加上正号
     * @param {number} cutMode 舍入方式：
     *                      0或默认:四舍五入；
     *                      2:IEEE 754标准的五舍六入中凑偶；
     *                      other：只是纯截取
     * @param {boolean} percentMultiply 百分数（formatStr满足/[ID]%/）是否要乘以100
     *                      默认为false
     * @return {string} 格式化过的字符串
     */
    number.formatNumber = function (
        num, formatStr, usePositiveSign, cutMode, percentMultiply
    ) {
        if (!formatStr) {
            return num;
        }

        if (percentMultiply && /[ID]%/.test(formatStr)) {
            num = num * 100;
        }

        // 精度、舍入
        var formatDec = /D+/.exec(formatStr);
        var formatDecLen = (formatDec && formatDec.length > 0)
                ? formatDec[0].length : 0;
        num = number.fixNumber(num, formatDecLen, cutMode);

        var str;
        var numStr = num.toString();
        var tempAry = numStr.split('.');
        var intStr = tempAry[0];
        var decStr = (tempAry.length > 1) ? tempAry[1] : '';

        str = formatStr.replace(/I+,*I*/g, function () {
            var matchStr = arguments[0];
            var commaIndex = matchStr.lastIndexOf(',');
            var replaceStr;
            var splitPos;
            var parts = [];

            if (commaIndex >= 0 && commaIndex !== intStr.length - 1) {
                splitPos = matchStr.length - 1 - commaIndex;
                var diff;
                while (
                    (diff = intStr.length - splitPos) > 0
                    && splitPos > 0 /*防止配错引起死循环*/
                ) {
                    parts.push(intStr.substr(diff, splitPos));
                    intStr = intStr.substring(0, diff);
                }
                parts.push(intStr);
                parts.reverse();
                if (parts[0] === '-') {
                    parts.shift();
                    replaceStr = '-' + parts.join(',');
                }
                else {
                    replaceStr = parts.join(',');
                }
            }
            else {
                replaceStr = intStr;
            }

            if (usePositiveSign && replaceStr && replaceStr.indexOf('-') < 0) {
                replaceStr = '+' + replaceStr;
            }

            return replaceStr;
        });

        str = str.replace(/D+/g, function () {
            var matchStr = arguments[0];
            var replaceStr = decStr;

            if (replaceStr.length > matchStr.length) {
                replaceStr = replaceStr.substr(0, matchStr.length);
            }
            else {
                replaceStr += (
                    new Array(matchStr.length - replaceStr.length)
                ).join('0');
            }
            return replaceStr;
        });
        // if (!/[1-9]+/.test(str)) {// 全零去除加减号，都不是效率高的写法
            // str.replace(/^(\+|\-)./, '');
        // }
        return str;
    };

    /**
     * 不同方式的舍入
     * 支持：
     *      四舍五入
     *      四舍六入中凑偶（IEEE 754标准，欧洲金融常用）
     * 如果 precision 为空，则原样返回。
     *
     * @public
     * @param {(number|string)} num 要处理的数据。string时可包含首位空格。
     * @param {number=} precision 0 表示整数，2表示两位小数，...
     * @param {number=} cutMode 舍入方式
     *                         0或默认:四舍五入；
     *                         2:IEEE 754标准的四舍六入中凑偶
     * @return {number} 舍入后的数据
     */
    number.fixNumber = function (num, precision, cutMode) {
        num = getNumber(num);

        if (precision == null || num == null) {
            return num;
        }

        if (!cutMode) {// 四舍五入
            var p = Math.pow(10, precision);
            return (Math.round(num * p)) / p ;
        }
        /* jshint eqeqeq:false */
        else if (cutMode == 2) {// 四舍六入中凑偶
            return Number(num).toFixed(precision);
        }
        /* jshint eqeqeq:false */
        else {// 原样
            return Number(num);
        }
    };

    /**
     * @see number.validateNumeric
     * 如果是Numeric，就返回数值。否则返回 null。
     * 注意，number支持 111e2 这种形式。也就是说，输入是'111e2'，得到的值是11100。
     *
     * @public
     * @param {*} v 输入，可以是123、'123'、'  123  '
     * @return {number} 数值
     */
    var getNumber = number.getNumber = function (v) {
        var vp = parseFloat(v);
        return v - vp >= 0 ? vp : null;
    };

    /**
     * 从array中提炼number，非number的内容都被忽略。
     * number的定义见getNumber函数。
     * 如输入：[123, NaN, '122', null]
     * 得到输出：[123, 122]
     *
     * @public
     * @param {Array} arr 输入数组
     * @return {Array} 结果数组
     */
    number.refineNumber = function (arr) {
        var ret = [];

        for (var i = 0, len = arr.length; i < len; i++) {
            var num = getNumber(arr[i]);
            num != null && ret.push(num);
        }

        return ret;
    };

    /**
     * 判断是否是合法数值。可识别首尾空格。NaN、Infinity都不是合法的。'1'是合法的。
     * @see jQuery.isNumeric
     *
     * @public
     * @param {*} v
     * @return {Boolean} 是否合法
     */
    number.validateNumeric = function (v) {
        // 暂完全用jq的isNumeric，后续如果出现不满足再增加逻辑。
        // parseFloat NaNs numeric-cast false positives (null|true|false|"")
        // ...but misinterprets leading-number strings, particularly hex literals ("0x...")
        // subtraction forces infinities to NaN
        return v - parseFloat(v) >= 0;
    };

    /**
     * 判断是否是整数。
     *
     * @public
     * @param {*} v
     * @return {Boolean} 是否合法
     */
    number.isInteger = function (v) {
        return number.validateNumeric(v) && v % 1 === 0;
    };

    /**
     * 是否是这种格式：'22px'（不允许前后空白）
     */
    number.isPxStr = function (v) {
        return PX_STR_REGEXP.test(v);
    };

    /**
     * 转换 '12px' 成 12
     * 如果不是合法的pxStr，则返回null
     */
    number.parsePxStr = function (v) {
        return PX_STR_REGEXP.test(v)
            ? parseFloat(RegExp.$1)
            : null;
    };

    /**
     * 是否是这种格式：'33.44%'（不允许前后空白）
     */
    number.isPercentStr = function (v) {
        return PERCENT_STR_REGEXP.test(v);
    };

    /**
     * 转换 '33.44%' 成 33.44
     * 如果不是合法的percentStr，则返回null
     */
    number.parsePercentStr = function (v) {
        return PERCENT_STR_REGEXP.test(v)
            ? parseFloat(RegExp.$1)
            : null;
    };

    return number;

});
