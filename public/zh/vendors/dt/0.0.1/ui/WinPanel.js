/**
 * @file Window panel.
 * @author sushuang(sushuang@baidu.com)
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var config = require('../config');
    var BasePanel = require('./BasePanel');
    var inner = lib.makeInner();

    // Constant
    var MAIN_TPL_TARGET = 'winPanel';
    var CLOSE_BTN_SELECTOR = '.dtui-close-cross';
    var CON_SELECTOR = '.dtui-winpn-con';
    var MASK_CSS = 'winpn';


    /**
     * 初始z-index，之后往上递增
     *
     * @type {number}
     */
    var zIndex;

    /**
     * wave端header入口
     *
     * @class
     * @extends ./BasePanel
     */
    var WinPanel = inner.attach(BasePanel.extend({

        _define: {
            tpl: require('tpl!./ui.tpl.html'),
            tplTarget: 'winPanel',
            // 是否点击panel外部就关闭panel。子类继承时可打开此开关。
            closeWhenClickOther: false
        },

        /**
         * @override
         */
        _init: function () {
            var $el = $(this._renderTpl(MAIN_TPL_TARGET))
                .appendTo(document.body)
                .hide();

            if (zIndex == null) {
                zIndex = config('panelBaseZIndex');
            }

            this._manuInitView($el);

            var innerThis = inner(this);
            innerThis.mainEl = $el;
            innerThis.isOpen = false;

            this.$el('winPanel$content', $el.find(CON_SELECTOR));
            innerThis.maskKey = Math.random() + ''; // 每一个winPanel实例，拥有一个mask。

            $el.on(
                this._event('click'),
                CLOSE_BTN_SELECTOR,
                $.proxy(onCloseBtnClick, this)
            );

            this._afterInit(this.$content());

            function onCloseBtnClick() {
                if (!this._onCloseBtnClick || this._onCloseBtnClick() !== false) {
                    this.close();
                }
            }
        },

        /**
         * @override
         */
        _disposeFinally: function () {
            var innerThis = inner(this);
            lib.disposeGlobalMask(innerThis.maskKey);
            innerThis.mainEl.remove();
            innerThis.mainEl = null;
        },

        /**
         * @public
         * @param {Object=} options 任意参数，子类可定义
         */
        open: function (options) {
            if (this.isOpen()) {
                return;
            }

            var $el = this.$el();
            var $content = this.$content();
            var innerThis = inner(this);

            // 遮罩
            lib.globalMask(
                config('panelMastOpacity'),
                innerThis.maskKey,
                MASK_CSS,
                {click: $.proxy(onMaskClick, this)}
            );

            function onMaskClick() {
                if (this._getDefineProperty('closeWhenClickOther')) {
                    this.close();
                }
            }

            innerThis.isOpen = true;
            this._beforeShow($content, options);
            $el.show();
            this._afterShow($content, options); // 在定位前执行，可进行内容填充。

            // 定位
            $el.css({
                'top': 0 - Math.round($el.outerHeight()),
                'marginLeft': 0 - Math.round($el.outerWidth() / 2),
                'marginTop': 0,
                'z-index': zIndex++
            });

            var isNoAnimate = this._getDefineProperty('noAnimate');
            $el.animate(
                {
                    top: '50%',
                    marginTop: 0 - Math.round($el.outerHeight() / 2)
                },
                isNoAnimate ? 0 : config('winPanelAnimationDuration')
            );
        },

        /**
         * @public
         */
        close: function () {
            if (!this.isOpen()) {
                return;
            }

            var $el = this.$el();
            var innerThis = inner(this);

            innerThis.isOpen = false;
            this._beforeHide(this.$content());

            var me = this;

            var isNoAnimate = this._getDefineProperty('noAnimate');
            $el.animate(
                {
                    top: 0 - Math.round($el.outerHeight()),
                    marginTop: 0
                },
                isNoAnimate ? 0 : config('winPanelAnimationDuration'),
                'swing',
                function () {
                    $el.hide();
                    lib.globalMask(false, innerThis.maskKey);
                    me._afterHide(me.$content());
                    me.fire('close');
                }
            );
        },

        /**
         * 得到内容容器
         *
         * @protected
         * @return {jQuery}
         */
        $content: function () {
            return this.$el('winPanel$content');
        },

        /**
         * 是否处于open状态
         *
         * @public
         * @return {boolean} 是否处于打开状态
         */
        isOpen: function () {
            return inner(this).isOpen;
        },

        /**
         * 子类可实现
         *
         * @protected
         * @abstract
         * @param {jQuery} $content 内容容器
         */
        _afterInit: $.noop,

        /**
         * 子类可实现
         *
         * @protected
         * @abstract
         * @param {jQuery} $content 内容容器
         */
        _beforeShow: $.noop,

        /**
         * 子类可实现
         *
         * @protected
         * @abstract
         * @param {jQuery} $content 内容容器
         */
        _afterShow: $.noop,

        /**
         * 子类可实现
         *
         * @protected
         * @abstract
         * @param {jQuery} $content 内容容器
         */
        _beforeHide: $.noop,

        /**
         * 子类可实现
         *
         * @protected
         * @abstract
         * @param {jQuery} $content 内容容器
         */
        _afterHide: $.noop,

        /**
         * 默认的关闭按钮点击事件处理
         *
         * @protected
         * @abstract
         * @return {boolean} 如果返回false，则不close
         */
        _onCloseBtnClick: $.noop

    }));

    return WinPanel;
});
