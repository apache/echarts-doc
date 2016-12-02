/**
 * @file Code Input
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var dtLib = require('dt/lib');
    var Component = require('dt/ui/Component');
    var codeInputsProcessor = require('./codeInputsProcessor');

    /**
     * @class
     * @extends dt/ui/Component
     */
    var CodeInputs = Component.extend({

        _define: {
            tpl: require('tpl!./spreadsheet.tpl.html'),
            tplTarget: 'CodeInputs',
            css: 'ecdoc-sprsht-codeinputs',
            viewModel: function () {
                return {
                    jsDataOb: null, // 外部传入
                    mainListViewModels: dtLib.obArray([])
                };
            }
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            viewModel.jsDataOb.bindCodeInputs(viewModel.mainListViewModels);
        },

        /**
         * @override
         */
        _dispose: function () {
            // 现在没有会dispose的场景，不实现
        }

    });

    return CodeInputs;
});
