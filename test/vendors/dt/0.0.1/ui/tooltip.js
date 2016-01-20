/**
 * @file Global tooltip
 */

define(function (require) {

    /**
     * Typical Usage in component:
     *
     * this._disposable(lib.bindTooltip({
     *     bindEl: this.el(),
     *     followMouse: true,
     *     selector: '.the-css-selecotr-of-the-target-element-which-needs-tooltip',
     *     encodeHTML: false // Setting to false if we do encodeHTML in 'text' handler function.
     *     location: {
     *         x: 0,
     *         y: -15,
     *         xAnchor: 'center',
     *         yAnchor: 'bottom'
     *     },
     *     text: function (itemEl) {
     *         var dataItem = dataList[$(itemEl).data(INDEX_ATTR)];
     *         var tooltipText = dataItem.tooltip;
     *         if (tooltipText != null) {
     *             return dataItem.tooltipEncodeHTML !== false
     *                 ? encodeHTML(tooltipText) : tooltipText;
     *         }
     *         // Return undefined if we don't need tooltip.
     *     }
     * }));
     */

    var $ = require('jquery');
    // Must not requrire('../lib'), because tooltip is required in ../lib.js.
    var base = require('../lib/base');
    var model = require('../lib/model');
    var isFunction = $.isFunction;
    var extend = $.extend;

    var TOOLTIP_NAMESPACE = '.dtui-global-tooltip-namespace';
    var CSS_GLOBAL_TOOLTIP = 'dtui-global-tooltip';

    var DEFAULT_LOCATION = {
        x: 0,
        y: -5,
        xAnchor: 'center',
        yAnchor: 'bottom'
    };

    var DEFAULT_LOCATION_FOLLOW = {
        x: 0,
        y: -15,
        xAnchor: 'center',
        yAnchor: 'bottom'
    };

    var tooltip = {};
    var $elTooltip = null;
    var disabled = false;

    /**
     * 显示tooltip
     *
     * @public
     * @param {Object} options 选项
     * @param {string?} options.text 信息文字，默认不会encodeHTML。参数为当前hover的selector对应的的el。
     *                               如果text为null或undefined，则表示不显示tooltip
     * @param {Object} options.location 绝对坐标。location定义 @see locateTooltip
     * @param {boolean=} options.encodeHTML 是否encodeHTML，默认为true
     */
    tooltip.showTooltip = function (options) {
        if (disabled) {
            return;
        }

        options = options || {};
        var text = options.text;

        if (text == null) {
            tooltip.hideTooltip();
            return;
        }

        text = options.encodeHTML !== false
            ? base.encodeHTML(text) : text;

        getTooltipEl().html(text).show(); // 先show减少后续jq计算

        locateTooltip(options.location);
    };

    /**
     * 隐藏tooltip
     *
     * @public
     */
    tooltip.hideTooltip = function () {
        getTooltipEl().hide();
    };

    /**
     * 禁用tooltip
     *
     * @public
     */
    tooltip.disableTooltip = function () {
        tooltip.hideTooltip();
        disabled = true;
    };

    /**
     * 启用tooltip
     *
     * @public
     */
    tooltip.enableTooltip = function () {
        disabled = false;
    };

    /**
     * 更新tooltip位置
     *
     * @inner
     * @param {Object} location 绝对坐标
     *      {Object} {
     *          x: ooo,
     *          y: ooo,
     *          xAnchor: 'left' 或 'center' 或 'right'，默认'center'
     *          yAnchor: 'top' 或 'center' 或 'bottom'，默认'top'
     *      }
     *      比如，xAnchor如果为'right'，表示x坐标是指tooltip的右边缘的x坐标。其他意义类同。
     */
    function locateTooltip(location) {
        var $tooltipEl = getTooltipEl();

        var x = location.x;
        var y = location.y;
        x == null && (x = 0);
        y == null && (y = 0);

        var xAnchor = location.xAnchor || 'center';
        var yAnchor = location.yAnchor || 'top';

        var tooltipWidth = xAnchor === 'left' ? 0 : $tooltipEl.outerWidth();
        var tooltipHeight = yAnchor === 'top' ? 0 : $tooltipEl.outerHeight();

        $tooltipEl.css({

            left: Math.round(
                    xAnchor === 'left'
                    ? x
                    : (xAnchor === 'center'
                        ? (x - tooltipWidth / 2)
                        : (x - tooltipWidth)
                    )
                ) + 'px',

            top: Math.round(
                    yAnchor === 'top'
                    ? y
                    : (yAnchor === 'center'
                        ? (y - tooltipHeight / 2)
                        : (y - tooltipHeight)
                    )
                ) + 'px'
        });
    }

    /**
     * 对一个元素，鼠标hover显示tooltip
     *
     * @public
     * @param {Object} options 选项
     * @param {HTMLElement} options.bindEl 在此el上绑定事件
     * @param {(string|Function)} options.text 信息文字。参见encodeHTML参数。
     * @param {string=} options.selector 用于事件代理。如果缺省则相当于取bindEl。
     * @param {booelan} options.followMouse 鼠标随动，默认是true
     * @param {(Function|Object)=} options.location 坐标
     *      location定义 @see locateTooltip
     *      {Function} 须返回上述location对象
     *      当 followMouse 时，location中为相对鼠标的坐标。否则为绝对坐标。
     *      缺省则默认给定一个localtion。
     * @param {boolean=} options.encodeHTML 是否encodeHTML，默认为true
     * @return {Object} tooltip实例，用于提供刷新等方法的调用
     */
    tooltip.bindTooltip = function (options) {
        options = model.merge(
            {}, options, {clone: true, assignWhenCannotClone: true}
        );
        var optLoc = options.location;
        var followMouse = options.followMouse;
        base.assert(!base.isJQuery(options.bindEl));
        var $bindEl = $(options.bindEl);
        var current;

        var mouseEnterArgs = [
            'mouseenter' + TOOLTIP_NAMESPACE,
            function (event) {
                setCurrent(event);
                tooltip.showTooltip({
                    text: getText(current),
                    encodeHTML: options.encodeHTML,
                    location: getLocation(current)
                });
            }
        ];
        var mouseLeaveArgs = [
            'mouseleave' + TOOLTIP_NAMESPACE,
            function () {
                current = null;
                tooltip.hideTooltip();
            }
        ];
        var mouseMoveArgs = [
            'mousemove' + TOOLTIP_NAMESPACE,
            function (event) {
                setCurrent(event);
                locateTooltip(getLocation(current));
            }
        ];

        // 事件代理
        var selector = options.selector;
        if (selector) {
            mouseEnterArgs.splice(1, 0, selector);
            mouseLeaveArgs.splice(1, 0, selector);
            mouseMoveArgs.splice(1, 0, selector);
        }

        $bindEl
            .on.apply($bindEl, mouseEnterArgs)
            .on.apply($bindEl, mouseLeaveArgs);
        followMouse && $bindEl
            .on.apply($bindEl, mouseMoveArgs);

        function setCurrent(event) {
            // 暂存用于refreshContent
            current = {
                currentTarget: event.currentTarget,
                pageX: event.pageX,
                pageY: event.pageY
            };
        }

        function getText(current) {
            var optText = options.text;
            return isFunction(optText)
                ? optText(current.currentTarget) : optText;
        }

        function getLocation(current) {
            var loc = isFunction(optLoc)
                ? optLoc(current.currentTarget) : extend(
                        {},
                        optLoc || (followMouse ? DEFAULT_LOCATION_FOLLOW : DEFAULT_LOCATION)
                    );

            if (followMouse) {
                loc.x += current.pageX;
                loc.y += current.pageY;
            }
            else if (!optLoc) {
                var $target = $(current.currentTarget);
                var offset = $target.offset();

                loc.x += offset.left + $target.outerWidth() / 2;
                loc.y += offset.top;
            }

            return loc;
        }

        var handle = {

            /**
             * 刷新文字。比如发生了点击事件，可手动调用此方法刷新文字。
             * dispose后调用此方法不会做任何事。
             *
             * @public
             */
            refresh: function () {
                if (current) {
                    tooltip.showTooltip({
                        text: getText(current),
                        encodeHTML: options.encodeHTML,
                        location: getLocation(current)
                    });
                }
            },

            /**
             * 如果正在显示，则用此方法可以改变显示内容。
             * dispose后调用此方法不会做任何事。
             *
             * @public
             * @param {string} text
             */
            setText: function (text) {
                if (current) {
                    tooltip.showTooltip({
                        text: text,
                        encodeHTML: options.encodeHTML,
                        location: getLocation(current)
                    });
                }
            },

            /**
             * 隐藏
             *
             * @public
             */
            hide: function () {
                if (current) {
                    tooltip.hideTooltip();
                }
            },

            /**
             * 清除绑定
             *
             * @public
             */
            dispose: function () {
                if (current) {
                    tooltip.hideTooltip();
                    current = null;
                }
                $bindEl.off(TOOLTIP_NAMESPACE);
            }
        };

        return handle;
    };

    function getTooltipEl() {
        if (!$elTooltip) {
            $elTooltip = $(
                '<div class="' + CSS_GLOBAL_TOOLTIP + '" '
                + 'style="display:none;"></div>'
            ).appendTo(document.body);
        }
        return $elTooltip;
    }

    return tooltip;

});
