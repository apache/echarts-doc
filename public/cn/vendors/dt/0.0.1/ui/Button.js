/**
 * @file 简单的小按钮（支持鼠标按住移入移出控件区域时的视图变化）
 * @author sushuang(sushuang@baidu.com)
 * @date 2014-03
 */

define(function (require) {

    var $ = require('jquery');
    var Component = require('./Component');
    var lib = require('../lib');

    // Constant
    var MAIN_CSS = 'dtui-btn';
    var EVENTS = ['click', 'mouseenter', 'mouseleave'];

    /**
     * 模板中声明方法举例：
     *  <div data-cpt="
     *      type: 'button',
     *      name: 'xxxxx',
     *      text: lib.ob('this is a button')"></div>
     *  或
     *  <div data-cpt="
     *      type: 'button',
     *      name: 'xxxxx',
     *      viewModel: {
     *          text: lib.ob('this is a button')
     *      }"></div>
     *
     * @class
     * @extends common/component/Component
     */
    var Button = Component.extend({

        /**
         * @protected
         * @type {Object}
         */
        _define: {
            viewModel: function () {
                return {
                    // button内的文字。如果text是lib.ob，则可由外部控制文字的变化。
                    text: lib.ob(''),
                    // encodeHTML是否交由控件负责
                    dontEncodeHTML: false
                };
            },
            viewModelPublic: ['text'],
            css: MAIN_CSS
        },

        /**
         * @override
         * @protected
         */
        _init: function () {
            var viewModel = this._viewModel();
            var $el = this.$el();
            var that = this;
            var hoverCss = this.getFullCss('-hover').join(' ');
            var activeCss = this.getFullCss('-active').join(' ');
            var actived = false;
            var $doc = $(document);

            this._eventHandlerMap = {};

            $el.on(this._event('mouseenter'), onMouseEnter);
            $el.on(this._event('mouseleave'), onMouseLeave);
            $el.on(this._event('mousedown'), onMouseDown);
            $el.on(this._event('mouseup'), onMouseUp);

            var me = this;
            $.each(EVENTS, function (idx, eventName) {
                $el.on(me._event(eventName), function (e) {
                    me.trigger.call(me, eventName, e);
                });
            });

            // binding ob
            if (lib.obTypeOf(viewModel.text) === 'ob') {
                this._disposable(
                    viewModel.text.subscribe(updateViewByModel, this)
                );
            }

            // 设初始值
            var initVal = lib.value(viewModel.text);
            $el.html(
                viewModel.dontEncodeHTML ? initVal : lib.encodeHTML(initVal)
            );

            function onMouseEnter() {
                if (viewModel.disabled()) {
                    return;
                }

                $el.addClass(hoverCss);

                if (actived) {
                    $el.addClass(activeCss);
                }
            }

            function onMouseLeave() {
                $el.removeClass(hoverCss);
                $el.removeClass(activeCss);
            }

            function onMouseDown() {
                if (viewModel.disabled()) {
                    return;
                }

                $el.addClass(activeCss);
                actived = true;

                // FIXME
                // 这个简单实现并不仔细（stopPropagation），但是暂不认为影响很大。
                $doc.one(
                    that._event('mouseup'),
                    function () {
                        actived = false;
                    }
                );
            }

            function onMouseUp() {
                $el.removeClass(activeCss);
            }

            function updateViewByModel(nextText) {
                // 暂时内部所有内容都当做text
                $el.html(
                    viewModel.dontEncodeHTML
                        ? nextText
                        : lib.encodeHTML(nextText)
                );
            }
        },

        /**
         * @override
         * @protected
         */
        _parseViewModel: function (inputViewModel, cptDef) {
            // 兼容直接在ctpDef设text，而非在viewModel上设text的情况。
            // 这是为了简化模板书写。
            if (cptDef.text != null) {
                inputViewModel.text = cptDef.text;
            }
            if (cptDef.css != null) {
                inputViewModel.css = cptDef.css;
            }
            if (cptDef.dontEncodeHTML != null) {
                inputViewModel.dontEncodeHTML = cptDef.dontEncodeHTML;
            }
            return inputViewModel;
        },

        /**
         * 注册事件：click、mouseenter、mouseleave
         *
         * @public
         * @param {string} event 不可带后缀
         * @param {Function} handler 处理器
         */
        on: function (event, handler) {
            lib.assert(event.indexOf('.') < 0);
            var eventHandlerMap = this._eventHandlerMap;

            if ($.inArray(event, EVENTS) >= 0) {
                eventHandlerMap[event] = eventHandlerMap[event] || [];
                eventHandlerMap[event].push(handler);
            }
        },

        /**
         * 触发事件处理handle
         *
         * @public
         * @param {string} eventName 要触发的事件名
         * @param {Object} event 事件对象
         */
        trigger: function (eventName, event) {
            var viewModel = this._viewModel();
            var handleList = this._eventHandlerMap[eventName];

            if (viewModel.disabled()) {
                return;
            }

            if (handleList && handleList.length) {
                $.each(handleList, function (idx, handle) {
                    if ($.isFunction(handle)) {
                        handle.call(this, event);
                    }
                });
            }
        },

        /**
         * 销毁
         *
         * @override
         * @protected
         */
        _dispose: function () {
            this.$el().off();
            this._eventHandlerMap = null;
        }

    });

    return Button;
});
