/**
 * API doc.
 */
define(function (require) {

    var $ = require('jquery');
    var Component = require('dt/ui/Component');
    var schemaHelper = require('./schemaHelper');
    var dtLib = require('dt/lib');
    var docUtil = require('./docUtil');
    var lang = require('./lang');

    require('dt/componentConfig');

    var SCHEMA_URL = './schema.json';
    var TPL_TARGET = 'APIMain';
    var SELECTOR_TYPE = '.ecdoc-api-type';
    var SELECTOR_DESC = '.ecdoc-api-desc';
    var SELECTOR_DESC_AREA = '.ecdoc-api-desc-area';
    var SELECTOR_DEFAULT = '.ecdoc-api-default';
    var SELECTOR_OPTION_PATH = '.ecdoc-api-option-path';
    var SELECTOR_COLLAPSE_RADIO = '.query-collapse-radio input[type=radio]';
    var SELECTOR_QUERY_RESULT_INFO = '.query-result-info';
    var SELECTOR_CHART_CLOSE_BUTTON = '.api-chart-close-btn';
    var SELECTOR_CHART_AREA = '.ecdoc-api-chart-query-area';
    var SELECTOR_DESC_GROUP_AREA = '.ecdoc-api-doc-group-area';
    var SELECTOR_DESC_GROUP_CONTENT = '.ecdoc-api-doc-group-content';
    var CSS_CHART_AREA_CLOSE = 'ecdoc-api-chart-query-area-close';
    var CSS_DESC_AREA_FULL = 'ecdoc-api-desc-area-full';
    var CSS_CLOSE_BUTTON = 'glyphicon glyphicon-resize-small';
    var CSS_OPEN_BUTTON = 'glyphicon glyphicon-resize-full';
    var CSS_DESC_GROUP_HIGHLIGHT = 'ecdoc-api-doc-group-line-highlight';

    /**
     * @public
     * @type {Object}
     */
    var api = {};

    /**
     * @type {Object}
     */
    var apiMai;

    /**
     * @public
     */
    api.init = function () {
        apiMai = new APIMain($('.ecdoc-apidoc'));
    };

    /**
     * @class
     * @extends dt/ui/Component
     */
    var APIMain = Component.extend({

        _define: {
            tpl: require('tpl!./main.tpl.html'),
            css: 'ecdoc-apidoc',
            viewModel: function () {
                return {
                    apiTreeDatasource: [],
                    apiTreeSelected: dtLib.ob(),
                    apiTreeHighlighted: dtLib.obArray(),
                    apiTreeHovered: dtLib.ob()
                };
            }
        },

        getLang: function () {
            return lang;
        },

        _prepare: function () {
            $.getJSON(docUtil.addVersionArg(SCHEMA_URL)).done($.proxy(onLoaded, this));

            function onLoaded(schema, catagory) {
                // Before render page
                this._prepareDoc(schema);

                // Render page
                this._applyTpl(this.$el(), TPL_TARGET);

                // After render page
                this._initDoc();
                this._initResize();
            }
        },

        _prepareDoc: function (schema) {
            var renderBase = {};

            schemaHelper.buildDoc(schema, renderBase);

            this._docTree = {
                value: 'root',
                text: 'var option = ',
                childrenPre: '{',
                childrenPost: '}',
                childrenBrief: ' ... ',
                children: renderBase.children[0].children,
                expanded: true,
                optionPathHTML: 'option',
                type: 'Object',
                hasObjectProperties: true
            };

            this._viewModel().apiTreeDatasource = [this._docTree];
        },

        _initDoc: function () {
            this._initTree();
            this._initQueryBox();
        },

        _initTree: function () {
            var viewModel = this._viewModel();
            this._disposable(viewModel.apiTreeHovered.subscribe(
                $.proxy(handleChange, this, false)
            ));
            this._disposable(viewModel.apiTreeSelected.subscribe(
                $.proxy(handleChange, this, true)
            ));

            function handleChange(persistent, nextValue, ob) {
                var treeItem = ob.getTreeDataItem(true);

                this._updateDesc(persistent, nextValue, treeItem);

                // 更新hash
                // if (persistent && treeItem.optionPathForHash) {
                //     helper.hashRoute({queryString: treeItem.optionPathForHash});
                // }
            }
        },

        _initQueryBox: function () {
            var queryInput = this._sub('queryInput');
            var queryMode = this._sub('queryMode');
            var queryValueOb = queryInput.viewModel('value');
            queryValueOb.subscribe(queryBoxGo, this);
            var checked = queryMode.viewModel('checked');

            checked.subscribe(onModeChanged, this);
            onModeChanged.call(this, checked());

            this._sub('collapseAll').on('click', $.proxy(collapseAll, this));

            $(document).keypress(function (e) {
                var tagName = (e.target.tagName || '').toLowerCase();
                if (e.which === 47 && tagName !== 'input' && tagName !== 'textarea') { // "/"键
                    queryInput.focus();
                    queryInput.select();
                    e.preventDefault();
                }
            });

            function onModeChanged(nextValue) {
                var dataItem = queryMode.getDataItem(nextValue);
                queryInput.viewModel('placeholder')(dataItem.placeholder);
                queryBoxGo.call(this);
            }

            function queryBoxGo() {
                var queryStr = queryValueOb();
                if (queryStr) {
                    this.doQuery(queryStr, checked(), false, true);
                }
            }

            function collapseAll() {
                this._setResultInfo(null);
                this._viewModel().apiTreeHighlighted([], {collapseLevel: 1});
            }
        },

        _updateDesc: function (persistent, nextValue, treeItem) {
            this._showHoverTargetDesc(treeItem ? treeItem : false);

            if (treeItem && persistent) {
                this._showDescGroup(treeItem);
            }
        },

        _wrapDesc: function (treeItem) {
            var type = treeItem.type || '';

            if ($.isArray(type)) {
                type = type.join(', ');
            }

            return {
                type: dtLib.encodeHTML(type),
                descText: lang.langCode === 'en' // 不需要encodeHTML，本身就是html
                    ? (treeItem.descriptionEN || '')
                    : (treeItem.descriptionCN || ''),
                defaultValueText: dtLib.encodeHTML(treeItem.defaultValueText),
                optionPath: treeItem.optionPathHTML
            };
        },

        _showHoverTargetDesc: function (treeItem) {
            var $el = this.$el();
            var $descArea = $el.find(SELECTOR_DESC_AREA);

            if (treeItem === false) {
                $descArea.stop().fadeOut();
                return;
            }

            $descArea.stop().css('opacity', 1).show();

            var desc = this._wrapDesc(treeItem);

            $el.find(SELECTOR_TYPE)[0].innerHTML = desc.type;
            $el.find(SELECTOR_DESC)[0].innerHTML = desc.descText;
            $el.find(SELECTOR_DEFAULT)[0].innerHTML = desc.defaultValueText;
            $el.find(SELECTOR_OPTION_PATH)[0].innerHTML = desc.optionPath;
        },

        _showDescGroup: function (treeItem) {
            var $el = this.$el();

            // treeItem
            var base = treeItem.hasObjectProperties
                ? treeItem
                : treeItem.parent;

            var baseDesc = this._wrapDesc(base);
            var descList = [''
                + '<div class="ecdoc-api-doc-group-line ' + getHighlightCss(base) + '">'
                + '<span class="ecdoc-api-doc-group-title">' + baseDesc.optionPath + ' '
                + '{ ' + baseDesc.type + ' } '
                + getDefaultHTML(baseDesc) + '<br>'
                + baseDesc.descText
                + '</div>'
            ];
            var children = base.children;
            if (children) {
                for (var i = 0; i < children.length; i++) {
                    var descItem = this._wrapDesc(children[i]);
                    descList.push(''
                        + '<div class="ecdoc-api-doc-group-line ' + getHighlightCss(children[i]) + '">'
                        + '<span class="ecdoc-api-doc-line-label">' + descItem.optionPath + '</span>'
                        + '{ ' + descItem.type + ' }&nbsp;&nbsp;&nbsp;'
                        + getDefaultHTML(descItem) + '<br>'
                        + descItem.descText
                        + '</div>'
                    );
                }
            }

            var $content = $el.find(SELECTOR_DESC_GROUP_CONTENT);
            $content[0].innerHTML = descList.join('');

            // Set highlight
            var highlighted = $content.find('.' + CSS_DESC_GROUP_HIGHLIGHT)[0];
            if (highlighted) {
                $el.find(SELECTOR_DESC_GROUP_AREA)[0].scrollTop = highlighted.offsetTop;
            }

            function getHighlightCss(item) {
                return item === treeItem ? CSS_DESC_GROUP_HIGHLIGHT : '';
            }

            function getDefaultHTML(descItem) {
                return descItem.defaultValueText
                    ? '[ default=' + descItem.defaultValueText + ' ]'
                    : '';
            }
        },

        /**
         * @private
         */
        _handleHashQuery: function (queryString) {
            var dataItem = this._viewModel().apiTreeSelected.getTreeDataItem(true);
            if (!dataItem || queryString !== dataItem.optionPathForHash) {
                this.doQuery(queryString, 'optionPath', true);
            }
        },

        /**
         * Query doc tree and scroll to result.
         * QueryStr like 'series[i](applicable:pie,line).itemStyle.normal.borderColor'
         *
         * @public
         * @param {string} queryStr Query string.
         * @param {string} queryArgName Value can be 'optionPath', 'fuzzyPath', 'anyText'.
         * @param {boolean} selectFirst Whether to select first result, default: false.
         * @param {boolean} showResult
         */
        doQuery: function (queryStr, queryArgName, selectFirst, showResult) {
            var result;

            try {
                var args = {};
                args[queryArgName] = queryStr;
                result = schemaHelper.queryDocTree(this._docTree, args);
            }
            catch (e) {
                alert(e);
                return;
            }

            if (showResult) {
                this._setResultInfo(result.length);
            }

            var collapseLevel = null;
            $(SELECTOR_COLLAPSE_RADIO).each(function () {
                if (this.checked && this.value === '1') {
                    collapseLevel = 2;
                }
            });

            if (!result.length) {
                return;
            }

            var valueSet = [];
            for (var i = 0, len = result.length; i < len; i++) {
                valueSet.push(result[i].value);
            }

            var viewModel = this._viewModel();
            if (selectFirst) {
                viewModel.apiTreeHighlighted(
                    valueSet,
                    {scrollToTarget: false, collapseLevel: collapseLevel, always: next}
                );
            }
            else { // Only highlight
                viewModel.apiTreeHighlighted(
                    valueSet,
                    {scrollToTarget: {clientX: 180}, collapseLevel: collapseLevel}
                );
            }

            function next() {
                viewModel.apiTreeSelected(
                    result[0].value,
                    {scrollToTarget: {clientX: 180}, collapseLevel: collapseLevel}
                );
            }
        },

        /**
         * @private
         * @param {number=} count null means clear.
         */
        _setResultInfo: function (count) {
            var text = count == null
                ? ''
                : (count === 0
                    ? lang.queryBoxNoResult
                    : dtLib.strTemplate(
                        lang.queryResultInfo, {count: count}
                    )
                );
            this.$el().find(SELECTOR_QUERY_RESULT_INFO)[0].innerHTML = text;
        },

        _initResize: function () {
            var $chartCloseBtn = $(SELECTOR_CHART_CLOSE_BUTTON);
            var $chartArea = $(SELECTOR_CHART_AREA);
            var $descArea = $(SELECTOR_DESC_AREA);
            $chartCloseBtn
                .addClass(CSS_CLOSE_BUTTON)
                .on('click', onClick);

            function onClick() {
                $chartArea.toggleClass(CSS_CHART_AREA_CLOSE);
                $descArea.toggleClass(CSS_DESC_AREA_FULL);
                $chartCloseBtn.toggleClass(CSS_CLOSE_BUTTON).toggleClass(CSS_OPEN_BUTTON);
            }
        }
    });

    return api;
});
