/**
 * @file Check buttons and radio buttons.
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var lib = require('../lib');
    var Component = require('./Component');
    var encodeHTML = lib.encodeHTML;

    // Constant
    var INDEX_ATTR = 'value-index';

    /**
     * @class
     * @extends dt/ui/Component
     */
    var CheckButton = Component.extend({

        _define: {
            css: 'dtui-chkbtn',
            viewModel: function () {
                return {
                    /**
                     * 如果是lib.ob则表示单选，其值对应于dataList中的value，表示选中的项。
                     * 如果是lib.obArray则表示多选，obArray中每项表示被选中的值。
                     * 在其subcription响应函数中，如：
                     * checkBtn.viewModel('checked').subscribe(function (nextValue, ob) {
                     *     var dataItem = ob.peekValueInfo(); // 可以得到该项的传入数据。
                     * })
                     */
                    checked: lib.ob(),
                    /**
                     * 每项为：
                     * {
                     *  value: ..., // value可以为任意类型。不禁止value重复。如果重复，同value的项会同时被选中。
                     *  text: ..., // 本控件负责encodeHTML
                     *  tooltip: ..., // 鼠标hover提示文字，如果需要的话，string。
                     *  tooltipEncodeHTML: ... // 文字是否要encdeHTML，默认为true。
                     * }
                     * 不能有空项。value可为任意基本类型。
                     */
                    dataList: []
                };
            },
            viewModelPublic: ['checked']
        },

        /**
         * @public
         */
        getDataItem: function (value) {
            var dataList = this._viewModel().dataList;
            var index = lib.arrayIndexOf(dataList, value, 'value');
            return index >= 0 ? $.extend({}, dataList[index]) : null;
        },

        /**
         * @override
         */
        _init: function () {
            lib.assert(lib.obTypeOf(this._viewModel().checked));

            this._initContent();
            this._initTooltip();
            this._initChange();
            this._initMouse();
        },

        /**
         * @private
         */
        _getItemCss: function (type) {
            var suffix = ({
                '': '-i',
                'hover': '-i-hover',
                'active': '-i-active'
            })[type || ''];
            return this.css() + suffix;
        },

        /**
         * @private
         */
        _initContent: function () {
            var dataList = this._viewModel().dataList;
            var itemCss = this._getItemCss();
            var html = [];

            for (var i = 0, data; data = dataList[i]; i++) {
                html.push(
                    '<span class="', itemCss, '" data-', INDEX_ATTR, '="', i, '">',
                        encodeHTML(data.text),
                    '</span>'
                );
            }

            this.el().innerHTML = html.join('');
        },

        /**
         * @private
         */
        _initTooltip: function () {
            var dataList = this._viewModel().dataList;
            var loc = {
                x: 0,
                y: -15,
                xAnchor: 'center',
                yAnchor: 'bottom'
            };

            this._disposable(lib.bindTooltip({
                bindEl: this.el(),
                followMouse: true,
                selector: '.' + this._getItemCss(),
                location: loc,
                text: getText,
                encodeHTML: false // 在getText中处理encodeHTML
            }));

            function getText(itemEl) {
                var dataItem = dataList[$(itemEl).data(INDEX_ATTR)];
                var tooltipText = dataItem.tooltip;
                if (tooltipText != null) {
                    return dataItem.tooltipEncodeHTML !== false
                        ? encodeHTML(tooltipText) : tooltipText;
                }
                // 返回空则不显示tooltip
            }
        },

        /**
         * @private
         */
        _initChange: function () {
            var viewModel = this._viewModel();
            var $items = this.$el().find('.' + this._getItemCss());
            var itemActiveCss = this._getItemCss('active');

            // binding ob
            this._disposable(
                lib.obSubscribe(viewModel.checked, updateViewByModel)
            );

            // 设初始值
            updateViewByModel(viewModel.checked());

            function updateViewByModel(nextValue) {
                var obType = lib.obTypeOf(viewModel.checked);

                $items.each(function () {
                    var $this = $(this);
                    var thisValue = viewModel.dataList[$this.data(INDEX_ATTR)].value;
                    $this[
                        (
                            obType === 'obArray'
                                ? lib.arrayIndexOf(nextValue, thisValue) >= 0 // 多选情况
                                : thisValue === nextValue // 单选情况
                        )
                        ? 'addClass' : 'removeClass'
                    ](itemActiveCss);
                });
            }
        },

        /**
         * @private
         */
        _initMouse: function () {
            var $el = this.$el();
            var viewModel = this._viewModel();
            var itemCss = this._getItemCss();
            var itemHoverCss = this._getItemCss('hover');
            var insUID = this.uid();

            // 鼠标事件
            $el.on(this._event('mouseenter'), '.' + itemCss, onMouseEnter);
            $el.on(this._event('mouseleave'), '.' + itemCss, onMouseLeave);
            $el.on(this._event('click'), '.' + itemCss, onClick);

            function onMouseEnter() {
                if (viewModel.disabled()) {
                    return;
                }
                $(this).addClass(itemHoverCss);
            }

            function onMouseLeave() {
                $(this).removeClass(itemHoverCss);
            }

            function onClick() {
                if (viewModel.disabled()) {
                    return;
                }

                var item = viewModel.dataList[$(this).data(INDEX_ATTR)];
                var currValue = item.value;
                if (lib.obTypeOf(viewModel.checked) === 'obArray') {
                    var checkedValues = viewModel.checked();
                    var index = lib.arrayIndexOf(checkedValues, currValue);
                    if (index >= 0) {
                        checkedValues.splice(index, 1);
                    }
                    else {
                        checkedValues.push(currValue);
                    }
                    currValue = checkedValues;
                }

                viewModel.checked(
                    currValue,
                    lib.valueInfoForConfirmed(insUID, {dataItem: item})
                );
            }
        }

    });

    return CheckButton;
});
