/**
 * @file 最简单的文本，能随valueOb联动变化。
 * @author sushuang(sushuang@baidu.com)
 */

define(function (require) {

    var lib = require('../lib');
    var Component = require('./Component');

    /**
     * 模板中的声明方法举例：
     *  <div data-cpt="
     *      type: 'dt/ui/Text',
     *      name: 'myText',
     *      viewModel: {
     *          value: viewModel.valueOb,
     *          css: 'dtm-text'
     *      }">
     *  </div>
     *
     * @class
     * @extends dt/ui/Component
     */
    var Text = Component.extend({

        _define: {
            css: 'dtui-tx',
            viewModel: function () {
                return {
                    // 可以配合obDecorator/htmlInputDecorator使用。
                    value: lib.ob(''),
                    encodeHTML: lib.ob(true)
                };
            },
            viewModelPublic: ['value', 'encodeHTML']
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            var valueOb = viewModel.value;
            var encodeHTMLOb = viewModel.encodeHTML;

            viewModel.value.subscribe(handleChange, this);
            viewModel.encodeHTML.subscribe(handleChange, this);

            // Init.
            handleChange.call(this);

            function handleChange() {
                var text = valueOb();
                if (encodeHTMLOb()) {
                    text = lib.encodeHTML(this._stringify(text));
                }
                this.el().innerHTML = text;
            }
        },

        _stringify: function (value) {
            if (value == null) {
                return '';
            }
            return String(value);
        },

        /**
         * @override
         */
        _dispose: function () {
            this.$el().html('');
        }

    });

    return Text;
});
