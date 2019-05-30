/**
 * @file Text input and textarea input.
 * @author sushuang(sushuang@baidu.com)
 */

define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');

    /**
     * 模板中的声明方法举例：
     *  <div data-cpt="
     *      type: 'dt/ui/TextInput',
     *      name: 'myTextInput',
     *      viewModel: {
     *          value: viewModel.valueOb,
     *          css: 'dtm-text-input',
     *          type: 'textarea', // 默认为'text'
     *          disabled: viewModel.disabled, // lib.ob(boolean)
     *          alert: viewModel.alert, // lib.ob(boolean|string)
     *          placeholder: lib.ob('asdf')
     *      }">
     *  </div>
     *
     * @class
     * @extends dt/ui/Component
     */
    var TextInput = Component.extend({

        _define: {
            css: 'dtui-txipt',
            viewModel: function () {
                return {
                    // 如果需要对数据进行验证，验证不通过时改变当前输入框中的值，
                    // 或者需要对输入进行parse，
                    // 则使用ob.extendWriter，把验证逻辑扩展进ob即可。
                    value: lib.ob(''),
                    mouseEnterSelect: false, // 也可以是lib.ob(true)，这样可以动态更改。
                    type: 'text', // 可选值：'text'（默认）, 'textarea'
                    placeholder: lib.ob(''), // 可以是lib.ob('asdf')
                    alert: lib.ob(false), // 如果为true则只显示alert css，如果为string则还显示错误信息
                    confirmPoint: {
                        pressEnter: true,
                        blur: true
                    }
                };
            },
            viewModelPublic: ['value', 'placeholder', 'text', 'mouseEnterSelect', 'type', 'alert']
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            var type = viewModel.type = viewModel.type || 'text';
            var $mainEl = this.$el();

            $mainEl.addClass(this.getFullCss(
                type === 'textarea' ? '-type-textarea' : '-type-text'
            ).join(' '));

            var html = ''
                + (type === 'textarea'
                    ? '<textarea></textarea>'
                    : '<input type="text"/>'
                )
                + '<span class="'
                + this.getFullCss('-alert-mark').join(' ')
                + '" style="display:none"></span>'
                + '<span class="'
                + this.getFullCss('-alert-text').join(' ')
                + '" style="display:none"></span>';
            this._$input = $($mainEl.html(html)[0].firstChild);

            this._$input.on(
                this._event('mouseenter'),
                function () {
                    if (lib.peek(viewModel.mouseEnterSelect)) {
                        this.select && this.select();
                    }
                }
            );

            this._initAlert();
            this._initPlaceHolder();
            this._initViewUpdater();
            this._initModelUpdater();
        },

        /**
         * @public
         */
        focus: function () {
            this._$input.focus();
        },

        /**
         * @public
         */
        select: function () {
            this._$input.select();
        },

        /**
         * @private
         */
        _initAlert: function () {
            var $mainEl = this.$el();
            var cssAlertMark = this.getFullCss('-alert-mark');
            var cssAlertText = this.getFullCss('-alert-text');

            var $alertMark = this.$el(
                'alertMark', $mainEl.find('.' + cssAlertMark[cssAlertMark.length - 1])
            );
            var $alertText = this.$el(
                'alertText', $mainEl.find('.' + cssAlertText[cssAlertText.length - 1])
            );

            $alertMark.on(this._event('mouseenter'), showAlert);
            $alertMark.on(this._event('mouseleave'), hideAlert);

            this._disposable(this._viewModel().alert.subscribe(updateAlert, this));

            function updateAlert(alert) {
                var $el = this.$el();
                var alertCss = this.getFullCss('-alert').join(' ');

                if (alert) {
                    $el.addClass(alertCss);
                    if ($.type(alert) === 'string') {
                        $alertText[0].innerHTML = lib.encodeHTML(alert);
                        $alertMark.show();
                    }
                }
                else {
                    $el.removeClass(alertCss);
                    $alertMark.hide();
                }
            }

            function showAlert() {
                $alertText.show();
            }
            function hideAlert() {
                $alertText.hide();
            }
        },

        /**
         * @private
         */
        _initPlaceHolder: function () {
            var placeholderOb = this._viewModel().placeholder;

            if (lib.obTypeOf(placeholderOb) === 'ob') {
                placeholderOb.subscribe(onChange, this);
                onChange.call(this, placeholderOb());
            }
            else if (placeholderOb != null) {
                onChange.call(this, placeholderOb);
            }

            function onChange(text) {
                this._$input.attr('placeholder', text);
            }
        },

        /**
         * @private
         */
        _initViewUpdater: function () {
            var viewModel = this._viewModel();
            var $input = this._$input;

            // disabled
            this._disposable(viewModel.disabled.subscribe(
                function (dis) {
                    $input[0].disabled = !!dis;
                },
                this
            ));

            // 建立文本输入和value的依赖
            this._disposable(viewModel.value.subscribe(updateText, this));

            // 第一次调用
            updateText(viewModel.value());

            function updateText(nextValue) {
                // 此更新由文本输入触发时，也会重新写入。因为value可能会在decorator中被改变。
                $input.val(nextValue);
            }
        },

        /**
         * @private
         */
        _initModelUpdater: function () {
            var viewModel = this._viewModel();
            var insUID = this.uid();
            var $input = this._$input;
            var that = this;

            // 现在是失焦触发更新，并未做随着输入实时更新。暂无此需求。

            // 监听value对文本输入的依赖
            var confirmPoint = viewModel.confirmPoint || {};
            if (confirmPoint.blur) {
                $input.on(this._event('blur'), confirmInput);
            }
            if (confirmPoint.pressEnter) {
                $input.on(this._event('keypress'), onKeyPress);
            }

            function onKeyPress(event) {
                if (that.isDisabled()) {
                    return;
                }

                if (viewModel.type === 'text' && event.which === 13) { // Enter键
                    confirmInput();
                    event.preventDefault();
                }
            }

            function confirmInput() {
                if (that.isDisabled()) {
                    return;
                }

                viewModel.value(
                    $input.val(), lib.valueInfoForConfirmed(insUID), {force: true}
                );
                // 因为 value 写入时会负责校验，所以写入完后，还应把当前状态回显到屏幕上
                $input.val(viewModel.value());
            }
        },

        /**
         * @override
         */
        _dispose: function () {
            this._$input.off(this._event());
            this._$input = null;
            this.$el().html('');
        }

    });

    return TextInput;
});
