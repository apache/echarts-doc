/**
 * @file Tree list (forest)
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');
    var encodeHTML = lib.encodeHTML;

    // Constant
    var SLIDE_INTERVAL = 200;
    var UNDEFINED;

    var DATASOURCE_ID = 'id-0';

    /**
     * @class
     * @extends dt/ui/Component
     */
    var TreeSelect = Component.extend({

        _define: {
            css: 'dtui-treelist',
            viewModel: function () {
                return {
                    /**
                     * 如果是lib.ob则表示单选，其值对应于datasource中的value，表示选中的项。
                     * 如果是lib.obArray则表示多选，其中：obArray中每项是value
                     * 可在valueInfo中设置参数：{
                     *     noAnimation: boolean 关闭动画，默认false
                     *     scrollToTarget: 滚屏到第一个目标。默认undefined（不滚屏）。
                     *                     {Object} 表示滚屏到第一个目标在浏览器窗口中所处的位置，
                     *                     Object内容为：{clientX: number}。
                     *     collapseLevel: number 用于达到“先折叠再展开”的效果。
                     *                           默认null即不collapse。
                     *                           传入collapse level，即最高折叠到树的这层，最高是0层。
                     *     always: Function 动画结束的回调。即使关闭动画，这个函数也会总会被异步触发。
                     * }
                     * 可以对此ob进行监听：
                     * treeList.viewModel('selected').subscribe(function (nextValue, ob) {
                     *     // 这里nextValue 就是树节点上的value字段
                     *     // 如果要获取整个树节点的信息(dataItem)，使用：
                     *     var dataItemArray = ob.getTreeDataItem();
                     *     var dataItem = ob.getTreeDataItem(true);
                     *     // 如果enhanceSelected设为了false，则没有此功能，只能手动使用findDataItemByOb来完成此功能。
                     *     // 如果一个ob会被多个组件共享，为避免冲突，enhanceSelected可以关掉。
                     * });
                     */
                    selected: lib.ob(),
                    enhanceSelected: true,
                    /**
                     * hovered
                     * 可在valueInfo中设置参数以及监听：同viewModel.selected
                     */
                    hovered: lib.ob(),
                    enhanceHovered: true,
                    /**
                     * highlighted
                     * 可在valueInfo中设置参数：同viewModel.selected
                     */
                    highlighted: lib.obArray(),
                    enhanceHighlighted: true,
                    /**
                     * @type {Array.<Object>}
                     *
                     * 每项为：
                     * {
                     *  value: ..., // 不禁止value重复。如果重复，同value的项会同时被选中。不可为undefined。
                     *  text: ...,
                     *  itemEncodeHTML: // 每项的文字是否encodeHTML，默认为true。
                     *  tooltip: ..., // 鼠标hover提示文字，如果需要的话，string。
                     *  tooltipEncodeHTML: ... // 文字是否要encdeHTML，默认为true。
                     *  children: [ {同构子项}, {}, ... ]
                     *  childrenPre: // children前文字，如 ": {"
                     *  childrenPost: // children后文字，如 "}"
                     *  childrenBrief: // chilren折叠时显示的文字，如 "..."
                     *  expanded: {boolean} 初始状态是展开还是折叠。默认折叠（false）
                     * }
                     * 不能有空项。value可为任意基本类型。
                     */
                    datasource: [],
                    /**
                     * 大小改变事件。展开折叠时触发。
                     */
                    resizeEvent: lib.ob()
                };
            },
            viewModelPublic: ['selected', 'hovered', 'highlighted', 'resizeEvent']
        },

        /**
         * @override
         */
        _init: function () {
            var viewModel = this._viewModel();
            lib.assert(lib.obTypeOf(viewModel.selected));
            lib.assert(lib.obTypeOf(viewModel.highlighted) === 'obArray');

            this._enhanceOb();
            this._prepareDatasource();
            this._initContent();
            // this._initTooltip();
            this._initChange();
            this._initMouse();
            // this._initExpand();
        },

        /**
         * 向ob添加方法，便于外界使用
         *
         * @private
         */
        _enhanceOb: function () {
            var viewModel = this._viewModel();

            if (viewModel.enhanceSelected) {
                var selectedOb = viewModel.selected;
                selectedOb.getTreeDataItem = $.proxy(this.findDataItemByOb, this, selectedOb);
            }

            if (viewModel.enhanceHighlighted) {
                var highlightedOb = viewModel.highlighted;
                highlightedOb.getTreeDataItem = $.proxy(this.findDataItemByOb, this, highlightedOb);
            }

            if (viewModel.enhanceHovered) {
                var hoveredOb = viewModel.hovered;
                hoveredOb.getTreeDataItem = $.proxy(this.findDataItemByOb, this, hoveredOb);
            }
        },

        /**
         * @private
         */
        _getCss: function (type) {
            var suffix = ({
                item: '-i',
                thumb: '-thumb',
                text: '-text',
                textActive: '-text-active',
                textHover: '-text-hover',
                textHighlight: '-text-highlight',
                list: '-list',
                parent: '-parent',
                collapsed: '-collapsed',
                expanded: '-expanded',
                post: '-post'
            })[type || ''];

            return this.css() + suffix;
        },

        /**
         * @private
         */
        _prepareDatasource: function () {
            var datasource = this._viewModel().datasource;

            this._containerMap = lib.createLiteHashMap();

            var dataItemMap = this._dataItemMap = lib.createLiteHashMap();
            var levelMap = this._levelMap = lib.createLiteHashMap();

            this._travelData(datasource, function (dataItem, level) {
                var id = dataItem.value;
                dataItemMap.set(id, dataItem);
                levelMap.set(id, level);
            });
        },

        /**
         * @private
         */
        _initContent: function () {
            var datasource = this._viewModel().datasource;

            if (datasource && datasource.length) {
                var initValues = [datasource[0].value];
                var children = datasource[0].children;
                if (children && children.length) {
                    initValues.push(children[0].value);
                }
                this._build(datasource, null, lib.createLiteHashMap(initValues), true);
            }
        },

        // /**
        //  * @private
        //  */
        // _initContent: function () {
        //     var itemCss = this._getCss('item');
        //     var parentCss = this._getCss('parent');
        //     var thumbCss = this._getCss('thumb');
        //     var collapsedCss = this._getCss('collapsed');
        //     var textCss = this._getCss('text');
        //     var listCss = this._getCss('list');
        //     var postCss = this._getCss('post');
        //     var html = [];

        //     this._travelData(
        //         this._viewModel().datasource,
        //         {
        //             preList: function (treeList, thisPath, parent) {
        //                 // 第一层（树林的根）展开，其他默认收缩。
        //                 var isRoot = thisPath === '';
        //                 var display = isRoot ? '' : 'display:none';
        //                 var notRendered = isRoot ? '' : 'data-not-rendered';
        //                 html.push('<ul class="', listCss, '" style="', display, '" ', notRendered, '>');
        //                 // return !isRoot;
        //             },
        //             postList: function () {
        //                 html.push('</ul>');
        //             },
        //             preChildren: function (dataItem, thisPath, parent, isLast, level) {
        //                 var otherCss = (dataItem.children && dataItem.children.length)
        //                     ? (parentCss + ' ' + collapsedCss)
        //                     : '';
        //                 var dataPath = ' ' + PATH_ATTR + '="' + thisPath + '" ';
        //                 var dataLevel = ' ' + LEVEL_ATTR + '="' + level + '" ';
        //                 var dataEncodeHTML = ' ' + ENCODE_HTML_ATTR + '="'
        //                     + (dataItem.itemEncodeHTML !== false ? '1' : '0') + '" ';
        //                 var anchor = dataItem.anchor ? ' name="' + dataItem.anchor + '" ' : ' ';
        //                 var encode = dataItem.itemEncodeHTML !== false ? encodeHTML : returnInput;
        //                 var textHTML = encode(toText(dataItem.text));
        //                 var childrenPreHTML = encode(toText(dataItem.childrenPre));
        //                 var childrenPostHTML = encode(toText(dataItem.childrenPost));
        //                 var childrenBriefHTML = encode(toText(dataItem.childrenBrief));

        //                 html.push(
        //                     '<li class="', itemCss, ' ', otherCss, '" ',
        //                         dataPath, dataLevel, dataEncodeHTML, '>',
        //                     '<i class="', thumbCss, '"></i>', // 展开收起的控制器。
        //                     anchor,
        //                     '<span ',
        //                         ' class="', textCss, '" ', dataPath, '>',
        //                         textHTML, childrenPreHTML, childrenBriefHTML, childrenPostHTML,
        //                     '</span>'
        //                 );
        //             },
        //             postChildren: function (dataItem, thisPath, parent, isLast) {
        //                 html.push('</li>');
        //                 var encode = dataItem.itemEncodeHTML !== false ? encodeHTML : returnInput;
        //                 if (isLast && parent && parent.childrenPost) {
        //                     html.push('<li class="' , postCss, '">', encode(parent.childrenPost), '</li>');
        //                 }
        //             }
        //         }
        //     );

        //     this.el().innerHTML = html.join('');
        // },

        // /**
        //  * @private
        //  */
        // _initTooltip: function () {
        //     var datasource = this._viewModel().datasource;
        //     var loc = {
        //         x: 0,
        //         y: -15,
        //         xAnchor: 'center',
        //         yAnchor: 'bottom'
        //     };
        //     var that = this;

        //     this._disposable(lib.bindTooltip({
        //         bindEl: this.el(),
        //         followMouse: true,
        //         selector: '.' + this._getCss('text'),
        //         location: loc,
        //         text: getText,
        //         encodeHTML: false // 在getText中处理encodeHTML
        //     }));

        //     function getText(itemEl) {
        //         if (that.isFrozen()) {
        //             return;
        //         }
        //         var dataItem = that._findDataItemByPath(
        //             datasource, $(itemEl).attr(PATH_ATTR)
        //         );

        //         var tooltipText = (dataItem || {}).tooltip;
        //         if (tooltipText != null) {
        //             return dataItem.tooltipEncodeHTML !== false
        //                 ? encodeHTML(tooltipText) : tooltipText;
        //         }
        //         // tooltipText为空则不显示tooltip
        //     }
        // },

        /**
         * @private
         */
        _initChange: function () {
            var viewModel = this._viewModel();

            var selOb = viewModel.selected;
            this._disposable(selOb.subscribe(this._updateSelectedByModel, this));
            this._updateSelectedByModel(selOb(), selOb); // 设初始值

            var highlightedOb = viewModel.highlighted;
            this._disposable(highlightedOb.subscribe(this._updateHighlightedByModel, this));
            this._updateHighlightedByModel(highlightedOb(), highlightedOb); // 设初始值
        },

        /**
         * @private
         */
        _initMouse: function () {
            var $el = this.$el();
            var viewModel = this._viewModel();
            var itemCss = this._getCss('item');
            var textHoverCss = this._getCss('textHover');
            var textCss = this._getCss('text');
            var thumbCss = this._getCss('thumb');
            var that = this;

            // 鼠标事件
            $el.on(this._event('mouseenter'), '.' + textCss, '.' + itemCss, onItemTextEnter);
            $el.on(this._event('mouseleave'), '.' + textCss, '.' + itemCss, onItemTextLeave);
            $el.on(this._event('click'), '.' + textCss, onItemTextClick);
            $el.on(this._event('click'), '.' + thumbCss, onThumbClick);

            function onItemTextEnter(e) {
                if (that.isFrozen()) {
                    return;
                }
                var $item = $(this);
                $item.addClass(textHoverCss);
                var dataItem = that._findDataItemByEl(this);
                viewModel.hovered(dataItem.value, {dataItem: dataItem});
            }

            function onItemTextLeave(e) {
                if (that.isFrozen()) {
                    return;
                }
                $(this).removeClass(textHoverCss);
                viewModel.hovered(UNDEFINED);
            }

            function onItemTextClick(e) {
                if (that.isFrozen()) {
                    return;
                }
                var obType = lib.obTypeOf(viewModel.selected);
                var dataItem = that._findDataItemByEl(this);
                var value = dataItem.value;

                if (obType === 'obArray') { // 多选
                    var selected = viewModel.selected();
                    var index = lib.arrayIndexOf(selected, value);
                    if (index >= 0) {
                        selected.splice(index, 1);
                    }
                    else {
                        selected.push(value);
                    }
                    value = selected;
                }
                // else 单选

                viewModel.selected(value, {preventExpand: true, dataItem: dataItem});
            }

            function onThumbClick() {
                if (that.isFrozen()) {
                    return;
                }
                that._toggleSingleItem(that._findItemEl($(this)));
            }
        },

        // /**
        //  * @protectd
        //  */
        // _initExpand: function () {
        //     var that = this;
        //     var datasource = this._viewModel().datasource;
        //     var $itemEls = this.$el().find('.' + this._getCss('item')).filter(function () {
        //         return !!that._findDataItemByEl(this).expanded;
        //     });
        //     this._expandOrCollapse($itemEls, 'expand', {noAnimation: true});
        // },

        /**
         * Do not build util needed, to enhance performance.
         *
         * @private
         */
        _build: function (treeList, hostDataItem, targetValueMap, isInit) {
            var listCss = this._getCss('list');
            var itemCss = this._getCss('item');
            var parentCss = this._getCss('parent');
            var thumbCss = this._getCss('thumb');
            var collapsedCss = this._getCss('collapsed');
            var textCss = this._getCss('text');
            var listCss = this._getCss('list');
            var postCss = this._getCss('post');

            var containerMap = this._containerMap;
            if (containerMap.get(DATASOURCE_ID) == null) {
                var thisEl = this.$el()[0];
                thisEl.innerHTML = '<ul class="' + listCss
                    + '" data-id="' + DATASOURCE_ID + '"></ul>';
                containerMap.set(DATASOURCE_ID, thisEl.getElementsByTagName('ul')[0]);
            }

            buildAndCollect(treeList, hostDataItem);

            function buildAndCollect(thisList, hostDataItem) {
                if (!thisList || !thisList.length) {
                    return;
                }

                var needRenderList;

                for (var i = 0, len = thisList.length; i < len; i++) {
                    var dataItem = thisList[i];

                    needRenderList |= (
                        dataItem.__needRenderChildren = buildAndCollect(dataItem.children, dataItem)
                    );

                    if (targetValueMap.get(dataItem.value) != null) {
                        needRenderList = true;
                    }
                }

                // If container found, indicate that is has rolluped to a render point.
                var container = containerMap.get(hostDataItem ? hostDataItem.value : DATASOURCE_ID);
                if (needRenderList && container && !thisList.__rendered) {
                    var htmlCollector = [];

                    build(thisList, hostDataItem, htmlCollector);

                    container.innerHTML = htmlCollector.join('');

                    // Cache containers for search.
                    var subContainers = container.getElementsByTagName('ul');
                    for (var i = 0; i < subContainers.length; i++) {
                        var subContainer = subContainers[i];
                        containerMap.set(subContainer.getAttribute('data-id'), subContainer);
                    }

                    needRenderList = false;
                }

                return needRenderList;
            }

            function build(thisList, hostDataItem, htmlCollector) {
                if (!thisList || !thisList.length) {
                    return;
                }

                for (var i = 0; i < thisList.length; i++) {
                    var dataItem = thisList[i];
                    var encode = dataItem.itemEncodeHTML !== false ? encodeHTML : returnInput;

                    var otherCss = (dataItem.children && dataItem.children.length)
                        ? (parentCss + ' ' + collapsedCss)
                        : '';
                    var anchor = dataItem.anchor ? ' name="' + dataItem.anchor + '" ' : ' ';
                    var textHTML = encode(toText(dataItem.text));
                    var childrenPreHTML = encode(toText(dataItem.childrenPre));
                    var childrenPostHTML = encode(toText(dataItem.childrenPost));
                    var childrenBriefHTML = encode(toText(dataItem.childrenBrief));
                    var idString = ' data-id="' + dataItem.value + '" ';

                    htmlCollector.push(
                        '<li class="', itemCss, ' ', otherCss, '" ', idString, '>',
                        '<i class="', thumbCss, '"></i>', // 展开收起的控制器。
                        anchor,
                        '<span class="', textCss, '" ', idString, '>',
                            textHTML, childrenPreHTML, childrenBriefHTML, childrenPostHTML,
                        '</span>'
                    );

                    if (dataItem.children && dataItem.children.length) {
                        var styleStr = isInit ? '' : ' style="display:none" ';
                        htmlCollector.push(
                            '<ul class="', listCss, '" ', idString, styleStr, '>'
                        );
                        if (dataItem.__needRenderChildren) {
                            build(dataItem.children, dataItem, htmlCollector);
                        }
                        htmlCollector.push('</ul>');
                        dataItem.__needRenderChildren = null;
                    }

                    htmlCollector.push('</li>');

                    if (i === thisList.length - 1 && hostDataItem && hostDataItem.childrenPost) {
                        htmlCollector.push('<li class="' , postCss, '">', encode(parent.childrenPost), '</li>');
                    }
                }

                thisList.__rendered = true;
            }
        },

        /**
         * @private
         */
        _updateSelectedByModel: function (nextValue, ob) {
            var viewModel = this._viewModel();
            var obType = lib.obTypeOf(viewModel.selected);
            var activeCss = this._getCss('textActive');
            var expandList = [];
            var that = this;

            lib.assert(obType !== 'obArray' || $.isArray(nextValue));

            var nextValueMap = lib.createLiteHashMap(
                obType === 'obArray' ? nextValue : nextValue ? [nextValue] : []
            );

            this._build(viewModel.datasource, null, nextValueMap);

            this._travelItemText(function ($text, thisValue) {
                if (nextValueMap.hasOwnProperty(thisValue)) {
                    $text.addClass(activeCss);
                    if (!ob.peekValueInfo('preventExpand')) {
                        expandList.push(that._findItemEl($text));
                    }
                }
                else {
                    $text.removeClass(activeCss);
                }
            });

            this._showItems(
                $(expandList),
                {
                    noAnimation: ob.peekValueInfo('noAnimation'),
                    collapseLevel: ob.peekValueInfo('collapseLevel'),
                    always: ob.peekValueInfo('always'),
                    scrollToTarget: ob.peekValueInfo('scrollToTarget')
                }
            );
        },

        /**
         * @private
         */
        _updateHighlightedByModel: function (nextValue, ob) {
            var highlightedCss = this._getCss('textHighlight');
            var highlightList = [];
            var that = this;

            var nextValueMap = lib.createLiteHashMap(nextValue);

            this._build(this._viewModel().datasource, null, nextValueMap);

            this._travelItemText(function ($text, thisValue) {
                if (nextValueMap.hasOwnProperty(thisValue)) {
                    $text.addClass(highlightedCss);
                    if (!ob.peekValueInfo('preventExpand')) {
                        highlightList.push(that._findItemEl($text));
                    }
                }
                else {
                    $text.removeClass(highlightedCss);
                }
            });

            this._showItems(
                $(highlightList),
                {
                    noAnimation: ob.peekValueInfo('noAnimation'),
                    collapseLevel: ob.peekValueInfo('collapseLevel'),
                    always: ob.peekValueInfo('always'),
                    scrollToTarget: ob.peekValueInfo('scrollToTarget')
                }
            );
        },

        /**
         * @private
         * @param {jQuery} $itemEls
         * @param {Object=} options
         * @param {number=} [options.collapseLevel]
         * @param {boolean=} [options.noAnimation]
         * @param {Function=} [options.always]
         * @param {boolean=} [options.scrollToTarget]
         */
        _showItems: function ($itemEls, options) {
            options = options || {};
            var $ancestors = this._getAncestorItems($itemEls);

            this._collapseAll({
                collapseLevel: options.collapseLevel,
                noAnimation: options.noAnimation,
                always: $.proxy(doExpand, this)
            });

            function doExpand() {
                if (this.isDisposed()) {
                    return;
                }
                this._expandOrCollapse(
                    $ancestors, 'expand',
                    {noAnimation: options.noAnimation, always: $.proxy(doFinal, this)}
                );
            }

            function doFinal() {
                if (this.isDisposed()) {
                    return;
                }
                var scrollTarget = $($itemEls[0]);
                var scrollToTarget = options.scrollToTarget;
                if (scrollToTarget && scrollTarget.length) {
                    (scrollToTarget.container || $('html,body')).animate({
                        scrollTop: scrollTarget.offset().top - (scrollToTarget.clientX || 30)
                    });
                }
                options.always && options.always();
            }
        },

        /**
         * Do not include items itselves.
         *
         * @protected
         * @param {jQuery} $itemEls
         * @return {jQuery}
         */
        _getAncestorItems: function ($itemEls) {
            var that = this;
            var ancestors = [];

            $itemEls.each(function () {
                var $itemEl = $(this);
                var baseCss = that.css();
                var itemCss = that._getCss('item');
                var $el = $itemEl.parent();

                while ($el && $el.length && !$el.hasClass(baseCss)) {
                    if ($el.hasClass(itemCss)) {
                        ancestors.push($el[0]);
                    }
                    $el = $el.parent();
                }
            });

            return $(ancestors);
        },

        /**
         * @protected
         */
        _getParentItem: function ($itemEl) {
            return $itemEl.parent().closest('.' + this._getCss('item'));
        },

        /**
         * @protected
         *
         * @param {Function} callback
         */
        _travelItemText: function (callback) {
            var $o = this.$el().find('.' + this._getCss('text'));

            var that = this;
            $o.each(function () {
                var $this = $(this);
                var thisValue = that._findDataItemByEl(this).value;
                callback.call(that, $this, thisValue);
            });
        },

        /**
         * @protected
         * @param {number} collapseLevel
         * @param {Object} options
         * @param {boolean} [options.collapseLevel]
         * @param {boolean=} [options.noAnimation]
         * @param {Function=} [options.always]
         */
        _collapseAll: function (options) {
            var collapseLevel = options.collapseLevel;
            var levelMap = this._levelMap;
            var that = this;

            if (collapseLevel == null || collapseLevel < 0) {
                setTimeout(doFinal, 0);
            }
            else {
                var itemSelector = '.' + this._getCss('item');
                var $changeItems = this.$el().find(itemSelector).filter(function () {
                    return levelMap.get(this.getAttribute('data-id')) >= collapseLevel;
                });

                this._expandOrCollapse(
                    $changeItems, 'collapse',
                    {noAnimation: options.noAnimation, always: doFinal}
                );
            }

            function doFinal() {
                !that.isDisposed() && options.always && options.always();
            }
        },

        /**
         * 展开和收起单层。所有展开收起的最终逻辑都走这里。
         *
         * @protected
         * @param {jQuery} $itemEls 可能是多个element
         * @param {string} type 'expand' or 'collapse'
         * @param {Object} options
         * @param {boolean=} [options.noAnimation] default false
         * @param {Function=} [options.always]
         */
        _expandOrCollapse: function ($itemEls, type, options) {
            options = options || {};
            var collapsedCss = this._getCss('collapsed');
            var expandedCss = this._getCss('expanded');
            var viewModel = this._viewModel();
            var that = this;

            var cssToRemove;
            var cssToAdd;
            var animateFn;

            if (type === 'expand') {
                cssToRemove = collapsedCss;
                cssToAdd = expandedCss;
                animateFn = 'slideDown';
            }
            else { // type === 'collapse'
                cssToRemove = expandedCss;
                cssToAdd = collapsedCss;
                animateFn = 'slideUp';
            }

            var $toBeChangedItemEls = $itemEls.filter('.' + cssToRemove);
            // 只有顶层的才实施动画，其他没有动画。
            var changeItems = {
                withAnimation: [],
                withoutAnimation: []
            };

            $toBeChangedItemEls.each(function () {
                if (that._getParentItem($(this)).hasClass(expandedCss)) {
                    changeItems.withAnimation.push(this);
                }
                else {
                    changeItems.withoutAnimation.push(this);
                }
            });

            // 开始变化视图
            $toBeChangedItemEls
                .removeClass(cssToRemove)
                .addClass(cssToAdd);

            if (type === 'expand') {
                this._resetItemText($toBeChangedItemEls);
            }

            if (type === 'expand') {
                doWithoutAnimation($.proxy(doWithAnimation, this, doFinal));
            }
            else { // type === 'collapse'
                doWithAnimation($.proxy(doWithoutAnimation, this, doFinal));
            }

            function doWithAnimation(then) {
                if (that.isDisposed()) {
                    return;
                }
                that._findElInItem($(changeItems.withAnimation), 'list')
                    [animateFn](options.noAnimation ? 0 : SLIDE_INTERVAL) // 动画
                    .promise().always(then);
            }

            function doWithoutAnimation(then) {
                if (that.isDisposed()) {
                    return;
                }
                that._findElInItem($(changeItems.withoutAnimation), 'list')
                    [animateFn](0)
                    .promise().always(then);
            }

            function doFinal() {
                if (that.isDisposed()) {
                    return;
                }
                if (type === 'collapse') {
                    that._resetItemText($toBeChangedItemEls);
                }
                viewModel.resizeEvent({});
                options.always && options.always();
            }
        },

        /**
         * @protected
         * @param {jQuery} $itemEl 一个element
         */
        _toggleSingleItem: function ($itemEl) {
            var collapsedCss = this._getCss('collapsed');
            var expandedCss = this._getCss('expanded');
            var viewModel = this._viewModel();

            var dataItem = this._findDataItemByEl($itemEl[0]);
            if (dataItem.children && dataItem.children.length && !dataItem.children.__rendered) {
                this._build(dataItem.children, dataItem, lib.createLiteHashMap([dataItem.children[0].value]));
            }

            var $listEl = this._findElInItem($itemEl, 'list');

            if ($itemEl.hasClass(collapsedCss)) {
                $itemEl.removeClass(collapsedCss).addClass(expandedCss);
                $listEl.slideDown(SLIDE_INTERVAL, $.proxy(handleSlideEnd, this, false));
                this._resetItemText($itemEl);
            }
            else if ($itemEl.hasClass(expandedCss)) {
                $itemEl.removeClass(expandedCss).addClass(collapsedCss);
                $listEl.slideUp(SLIDE_INTERVAL, $.proxy(handleSlideEnd, this, true));
            }

            function handleSlideEnd(resetText) {
                if (this.isDisposed()) {
                    return;
                }
                resetText && this._resetItemText($itemEl);
                viewModel.resizeEvent({});
            }
        },

        /**
         * 判断是否datasource中有某value
         *
         * @public
         * @param {*} value 给定的value
         * @return {Boolean} 是否有value
         */
        hasValue: function (value) {
            var has = false;

            this._travelData(this._viewModel().datasource, function (dataItem) {
                if (dataItem.value === value) {
                    has = true;
                }
            });

            return has;
        },

        /**
         * @public
         * @param {Object} ob
         * @param {boolean} single 如果为true，返回第一个结果。如果为false，返回数组。
         *                         默认为false。
         * @return {(Array.<Object>|Object)}
         */
        findDataItemByOb: function (ob, single) {
            var values = lib.obTypeOf(ob) === 'obArray' ? ob() : [ob()];
            return this.findDataItemByValues(values, single);
        },

        /**
         * @public
         * @param {Array.<*>} values
         * @param {boolean} single 如果为true，返回第一个结果。如果为false，返回数组。
         *                         默认为false。
         * @return {(Array.<Object>|Object)}
         */
        findDataItemByValues: function (values, single) {
            var result = [];
            this._travelData(this._viewModel().datasource, function (dataItem) {
                if (lib.arrayIndexOf(values, dataItem.value) >= 0) {
                    result.push(dataItem);
                }
            });

            return single ? result[0] : result;
        },

        _travelData: function (treeList, callback, level) {
            level = level || 0;
            if (treeList && treeList.length) {
                for (var i = 0, len = treeList.length; i < len; i++) {
                    if (treeList[i]) {
                        callback(treeList[i], level);
                        this._travelData(treeList[i].children, callback, level + 1);
                    }
                }
            }
        },

        // /**
        //  * 深度优先遍历treeListData。
        //  *
        //  * @private
        //  * @param {Array.<Object>} treeList 被遍历的对象。
        //  * @param {Array.<Function>} callbacks 遍历过程中的回调处理函数。
        //  * @param {Function} callbacks.preList 访问本list前的处理函数，参数：
        //  *                                     {Array.<Object>} 本list。
        //  *                                     {string} path 当前节点的位置信息, 形如'4,1,5'
        //  *                                     返回 true 则 skipChildren。
        //  * @param {Function} callbacks.postList 访问子孙前的处理，参数同preList。
        //  * @param {Function} callbacks.preChildren 访问子孙前的处理，参数：
        //  *                                     {Object} item 当前节点,
        //  *                                     {string} path 当前节点的位置信息, 形如'4,1,5'
        //  *                                     {boolean} isLast
        //  * @param {Function} callbacks.postChildren 访问子孙后的处理，参数同callbacks.preChildren
        //  * @param {string=} parentPath 父节点的位置信息, 形如'4,1,5'，递归内部使用。
        //  * @param {Object=} parent 若没有则可以不传
        //  */
        // _travelData: function (treeList, callbacks, parentPath, parent, level) {
        //     parentPath = (parentPath == null || parentPath === '')
        //         ? '' : (parentPath + ',');
        //     level == null && (level = 0);

        //     if (treeList && treeList.length) {
        //         var skipChildren = callbacks.preList && callbacks.preList(treeList, parentPath, parent);

        //         if (!skipChildren) {
        //             for (var i = 0, len = treeList.length; i < len; i++) {
        //                 var dataItem = treeList[i];
        //                 var thisPath = parentPath + i;
        //                 var isLast = i === len - 1;

        //                 callbacks.preChildren
        //                     && callbacks.preChildren(dataItem, thisPath, parent, isLast, level);
        //                 this._travelData(dataItem.children, callbacks, thisPath, dataItem, level + 1); // 递归
        //                 callbacks.postChildren
        //                     && callbacks.postChildren(dataItem, thisPath, parent, isLast, level);
        //             }
        //         }

        //         callbacks.postList && callbacks.postList(treeList, parentPath, parent);
        //     }
        // },

        _findDataItemByEl: function (itemEl) {
            return itemEl && this._dataItemMap.get(itemEl.getAttribute('data-id'));
        },

        // /**
        //  * @private
        //  * @param {Array.<Object>} treeList 在这里面find。
        //  * @param {string} path 节点的位置信息, 形如'4,1,5'。
        //  * @return {Object=} 找到的节点对象，没找到返回空。
        //  */
        // _findDataItemByPath: function (treeList, path) {
        //     path = path.split(',');
        //     treeList = treeList || [];
        //     var dataItem;

        //     for (var i = 0, len = path.length; i < len && treeList; i++) {
        //         dataItem = treeList[path[i]];
        //         treeList = (dataItem || {}).children;
        //     }

        //     return dataItem;
        // },

        /**
         * 从item中某个el找到itemEl
         *
         * @private
         */
        _findItemEl: function ($subEl) {
            var baseCss = this.css();
            var itemCss = this._getCss('item');

            while (!$subEl.hasClass(itemCss)) {
                if ($subEl.hasClass(baseCss)) {
                    return null;
                }

                $subEl = $subEl.parent();
            }

            return $subEl;
        },

        /**
         * @inner
         * @this {Object} TreeSelect实例
         */
        _findElInItem: function ($itemEls, cssName) {
            return $itemEls.find('> .' + this._getCss(cssName));
        },

        /**
         * @private
         */
        _resetItemText: function ($itemEls) {
            var that = this;

            $itemEls.each(function () {
                var $itemEl = $(this);
                var dataItem = that._findDataItemByEl(this);
                var encode = dataItem.itemEncodeHTML !== false ? encodeHTML : returnInput;
                var $textEl = that._findElInItem($itemEl, 'text');

                if ($itemEl.hasClass(that._getCss('collapsed'))) {
                    $textEl[0].innerHTML = encode([
                        toText(dataItem.text),
                        toText(dataItem.childrenPre),
                        toText(dataItem.childrenBrief),
                        toText(dataItem.childrenPost)
                    ].join(''));
                }
                else if ($itemEl.hasClass(that._getCss('expanded'))) {
                    $textEl[0].innerHTML = encode([
                        toText(dataItem.text),
                        toText(dataItem.childrenPre)
                    ].join(''));
                }
            });
        }

    });

    function returnInput(v) {
        return v;
    }

    function toText(val) {
        return val != null ? val : '';
    }

    return TreeSelect;
});