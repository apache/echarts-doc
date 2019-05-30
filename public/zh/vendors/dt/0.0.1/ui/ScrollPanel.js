/**
 * @file 最简单的有滚动条的panel
 *  现只支持纵向滚动条。支持“anchor”。其他功能需求需要时候再加。
 *  anchor 名称只允许是字母和数字和$、-、_
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-05
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');
    var toInt = lib.toInt;

    require('jqueryui');
    require('jquerymousewheel');

    // Constants
    var MAIN_CSS = 'cpt-sclpn';
    var CON_CSS = MAIN_CSS + '-con';
    var CON_V_SCROLL_CSS = MAIN_CSS + '-con-vscl';
    var V_BAR_CSS = MAIN_CSS + '-vsclbar';
    var V_BAR_THUMB_CSS = MAIN_CSS + '-vsclbar-thumb';
    var DEFAULT_CON_ATTR = 'cpt-sclpn-con';
    var DEFAULT_ANCHOR_ATTR = 'cpt-sclpn-anchor';

    /**
     * 模板中的声明方式：
     * <div data-cpt="
     *     type: 'scrollPanel',
     *     viewModel: {css: 'some-css-class'}">
     *     <div data-cpt-sclpn-con>
     *         ...内容...
     *     </div>
     * </div>
     *
     * 内部Componnet可直接使用
     * var updater = this.getAncestorLocalOb('LOCAL_OB_SCROLL_RESIZE');
     * updater && updater({});
     * 来触发大小变更后的刷新。
     */
    var ScrollPanel = Component.extend({

        _define: {
            viewModel: function () {
                return {
                    conAttr: DEFAULT_CON_ATTR,
                    anchorAttr: DEFAULT_ANCHOR_ATTR,
                    updater: createUpdater() // 可外部传入
                };
            },
            viewModelPublic: ['conAttr', 'anchorAttr', 'updater'],
            suppressConstructSub: true, // scrollPanel 本身不拥有、不初始化子component。
            css: MAIN_CSS
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            var $main = this.$el();
            var updater = viewModel.updater;

            // 使内部Component可以触发ScrollPanel的refresh
            this.localOb('LOCAL_OB_SCROLL_RESIZE', updater._refresher);

            this.$el(
                'con', $main.find('[data-' + viewModel.conAttr + ']')
            ).css({position: 'absolute', top: 0}).addClass(CON_CSS);

            this._initVScrollBar();
            this._initWheel();

            // refresh的依赖
            this._disposable(updater._refresher.subscribe(this._refresh, this));

            // position的依赖
            this._disposable(updater._pos.subscribe(this._applyPosObj, this));

            // TODO
            // 和updater绑定，输出当前位置值。后续有需求再加。

            $(window).on(this._event('resize'), $.proxy(this._refresh, this));
        },

        /**
         * @override
         */
        _dispose: function () {
            $(window).off(this._event());
            this.$el('con').off('mousewheel');
        },

        /**
         * @private
         */
        _initVScrollBar: function () {
            var $vsclbar = $([
                '<div class="', V_BAR_CSS, '">',
                    '<div class="', V_BAR_THUMB_CSS, '">',
                    '</div>',
                '</div>'
            ].join('')).appendTo(this.$el());
            this.$el('vsclbar', $vsclbar);

            this.$el(
                'vsclbarThumb', $vsclbar.find('.' + V_BAR_THUMB_CSS)
            ).draggable({
                containment: 'parent',
                axis: 'y',
                scroll: false,
                drag: $.proxy(onThumbDrag, this)
            });

            var that = this;
            function onThumbDrag(event, ui) {
                that._updatePositionByThumb(ui.position.top);
            }
        },

        /**
         * @private
         */
        _initWheel: function () {
            this.$el('con').on('mousewheel', onMouseWheel);

            var that = this;

            function onMouseWheel(event) {
                // var deltaY = Math.max(window.devicePixelRatio || 1, 1) * 4;
                // 实时取devicePixelRatio，因为可能在不同显示器中切换。
                // var deltaY = 4 / (window.devicePixelRatio || 1);
                // event.deltaY不随devicePixelRatio变化
                var deltaY = 1;

                // if (event.deltaY) {// 触摸板时deltaY可能为0
                    // that._moveThumb(-event.deltaY / Math.abs(event.deltaY) * deltaY);
                that._moveThumb(-event.deltaY * deltaY);
                // }
                event.preventDefault();
                event.stopPropagation();
            }
        },

        /**
         * 设置content height的scale。
         * 使用场景如：内容区域使用了css3的transform: scale(...)
         *
         * @public
         * @param {number} scale
         */
        setContentHeightScale: function (scale) {
            this._contentHeightSale = scale;
        },

        /**
         * @public
         */
        refresh: function () {
            this._viewModel().updater.refresh();
        },

        /**
         * @private
         */
        _refresh: function () {
            var $vsclbar = this.$el('vsclbar');
            var $con = this.$el('con');
            var $thumb = this.$el('vsclbarThumb');
            var mainHeight = this.$el().height();
            var conHeight = this._getContentHeight();

            // 缓存
            if (!this._outerCached) {
                this._thumbVOuter =
                    toInt($thumb.css('padding-top'))
                    + toInt($thumb.css('padding-bottom'))
                    + toInt($thumb.css('border-top-width'))
                    + toInt($thumb.css('border-bottom-width'))
                    + toInt($thumb.css('margin-top'))
                    + toInt($thumb.css('margin-bottom'));
                this._outerCached = true;
            }

            if (conHeight && conHeight > mainHeight) {
                this._scrollDisabled = false;
                $vsclbar.show();
                $con.addClass(CON_V_SCROLL_CSS);

                // 因为现实滚动条会影响布局，所以重新计算尺寸
                conHeight = this._getContentHeight();
                mainHeight = this.$el().height();

                // 计算thumb的尺寸
                var vsclbarHeight = $vsclbar.height();
                // 先不设thumb最小的尺寸。后续需要再说。
                var vsclbarThumbHeight = toInt(vsclbarHeight * (mainHeight / conHeight));

                $thumb.css(
                    'height', (vsclbarThumbHeight - this._thumbVOuter) + 'px'
                );

                // 缓存
                this._mainHeight = mainHeight;
                this._conHeight = conHeight;
                this._vsclbarHeight = vsclbarHeight;
                this._vsclbarThumbHeight = vsclbarThumbHeight;

                // 因为内容大小可能变化了，故重新设定滚动条和内容的位置
                this._setPosition(null, false);
            }
            else {
                this._scrollDisabled = true;
                $vsclbar.hide();
                $con.removeClass(CON_V_SCROLL_CSS);

                this._setPosition(0, false);
            }

        },

        /**
         * @private
         */
        _getContentHeight: function () {
            var conHeight = this.$el('con').outerHeight();
            if (this._contentHeightSale != null) {
                conHeight = conHeight * this._contentHeightSale;
            }
            return conHeight;
        },

        /**
         * @private
         */
        _moveThumb: function (offset) {
            if (this._scrollDisabled) {
                return;
            }

            var $thumb = this.$el('vsclbarThumb');
            var currTop = toInt($thumb.css('top')) || 0;
            this._setThumb(currTop + offset);
        },

        /**
         * @private
         */
        _setThumb: function (nextTop, suppressUpdatePosition) {
            var topMax = this._vsclbarHeight - this._vsclbarThumbHeight;
            if (nextTop > topMax) {
                nextTop = topMax;
            }
            if (nextTop < 0) {
                nextTop = 0;
            }

            var $thumb = this.$el('vsclbarThumb');
            $thumb.css('top', toInt(nextTop) + 'px');

            !suppressUpdatePosition && this._updatePositionByThumb(nextTop);
        },

        /**
         * @private
         */
        _setPosition: function (nextTop, suppressUpdateThumb) {
            var $con = this.$el('con');

            if (nextTop == null) {
                // 使用当前的位置
                nextTop = -(toInt($con.css('top')) || 0);
            }

            var diff = this._conHeight - this._mainHeight;
            nextTop < 0 && (nextTop = 0);
            nextTop > diff && (nextTop = diff);
            $con.css('top', -toInt(nextTop) + 'px');

            !suppressUpdateThumb && this._updateThumbByPosition(nextTop);
        },

        /**
         * @private
         */
        _updatePositionByThumb: function (nextThumbTop) {
            this._setPosition(
                toInt(this._conHeight * nextThumbTop / this._vsclbarHeight),
                true
            );
        },

        /**
         * @private
         */
        _updateThumbByPosition: function (nextTop) {
            this._setThumb(
                toInt(nextTop * this._vsclbarHeight / this._conHeight),
                true
            );
        },

        /**
         * @private
         */
        _applyPosObj: function (pos) {
            // 暂只支持anchor
            var $con = this.$el('con');
            var $anchor = $con.find(
                '*[data-' + this._viewModel().anchorAttr + '=' + pos.anchor + ']'
            );
            if ($anchor.length) {
                var nextTop = $anchor.offset().top - $con.offset().top;
                this._setThumb(
                    toInt(this._vsclbarHeight * nextTop / this._conHeight)
                );
            }
        }

    });

    /**
     * 产生一个更新器。写成这样只是为了便于传递到外部，作为此scrollPanel的操作器。
     *
     * @public
     * @static
     * @return {Object} updater
     */
    var createUpdater = ScrollPanel.createUpdater = function () {
        /**
         * 内含 left 和 top 域，{number}类型。
         *
         */
        var updater = lib.ob({});
        /**
         * @private
         */
        updater._pos = lib.ob({});
        /**
         * @private
         */
        updater._refresher = lib.ob();

        $.extend(updater, updaterMethods);

        return updater;
    };

    var updaterMethods = {

        /**
         * 内容大小改变时调用
         *
         * @public
         */
        refresh: function () {
            // 没有使用延迟刷新，因为那会导致页面跳动。
            this._refresher({});
        },

        /**
         * 设置位置。（暂不支持得到位置，暂不支持px值设置，因为现在没这需要）
         *
         * @public
         * @param {Object} value
         * @param {string=} value.anchor 指定转移到的anchor
         * @return {boolean=} value.head true则表示移动到头（暂不支持）
         * @return {boolean=} value.tail true则表示移动到尾（暂不支持）
         */
        position: function (value) {
            // 因为是对象，所以每次都触发change事件。
            this._pos(value);
        }

    };

    return ScrollPanel;
});
