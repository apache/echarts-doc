/**
 * @file Data table
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var Component = require('dt/ui/Component');
    var dataTableProcessor = require('./dataTableProcessor');
    var EditorData = require('./EditorData');
    var Handsontable = require('handsontable');

    // Constants
    var ROW_COL_HEAD_ACTIVE_CLASS = 'rchead-highlight';
    var SELECTOR_DATA_TABLE = '.ecdoc-sprsht-ht';

    /**
     * @class
     * @extends dt/ui/Component
     */
    var DataTable = Component.extend({

        _define: {
            tpl: require('tpl!./spreadsheet.tpl.html'),
            tplTarget: 'DataTable',
            css: 'ecdoc-sprsht-datatable',
            viewModel: function () {
                return {
                    jsDataOb: null // 外部传入
                };
            }
        },

        /**
         * @public
         */
        _init: function () {
            /**
             * handsontable 实例
             */
            this._htIns = null;
            // 行列选中，在handsontable尚未找到设置或API
            this._createHandsontable();
        },

        /**
         * @public
         */
        clearContent: function () {
            if (this._htIns) {
                this._htIns.dtEditorData.clear();
            }
        },

        /**
         * @public
         */
        refresh: function () {
            if (this._htIns) {
                this._htIns.render();
            }
        },

        /**
         * @public
         * @param {string} target 'lt', 'rb', 'l', 'r', 't', 'b'
         */
        scrollViewportTo: function (target) {
            var htIns = this._htIns;
            var dataWindow = htIns.dtEditorData.getDataWindowSize();
            var maxCol = Math.max(0, dataWindow.colCount - 1);
            var maxRow = Math.max(0, dataWindow.rowCount - 1);

            var mapping = {
                lt: [0, 0],
                rb: [maxRow, maxCol],
                l: [null, 0],
                r: [null, maxCol],
                t: [0, null],
                b: [maxRow, null]
            };

            htIns.scrollViewportTo.apply(htIns, mapping[target]);
        },

        /**
         * @override
         */
        _dispose: function () {
            // 现在没有会dispose的场景，不实现
        },

        /**
         * @private
         */
        _createHandsontable: function () {
            var options = this._makeHandsontableOptions();
            if (!options.data) {
                // 初始数据
                options.data = [[]];
            }

            var $dataTable = this.$el(
                'dataTable', this.$el().find(SELECTOR_DATA_TABLE)
            );

            var htIns = this._htIns = new Handsontable($dataTable[0], options);

            // var htIns = this._htIns = $dataTable.handsontable('getInstance');
            // 直接使用htIns.dtEditorData即可引用editorData实例。
            // 加dt前缀是防止与handsontable自身的属性冲突。
            htIns.dtEditorData = new EditorData(htIns);

            // Enhance features for handsontable
            $dataTable.on(
                'click',
                'table.htCore thead th',
                function (event) {
                    selectCol(htIns, event.currentTarget);
                }
            );
            $dataTable.on(
                'click',
                'table.htCore tbody th',
                function (event) {
                    selectRow(htIns, event.currentTarget);
                }
            );

            this._viewModel().jsDataOb.bindDataTable(htIns);
        },

        /**
         * @inner
         */
        _makeHandsontableOptions: function () {
            var that = this;
            return {
                cells: function (row, col) {
                    // 此函数将在循环体中被频繁调用。（每次更改handsontable时调用）
                    if (that._htIns) {
                        dataTableProcessor.processCell(
                            this, that._viewModel().jsDataOb, row, col
                        );
                    }
                    // this.readOnly = true;
                },
                afterChange: function (change, source) {
                    // source可为：
                    // "alter", "empty", "edit", "populateFromArray", "loadData", "autofill", "paste"
                    // 其中 alter, empty目前不知含义
                    // 原则：只有loadData认为是不用执行持久化
                    if (source === 'loadData') {
                        return;
                    }
                    refreshJSData();
                },
                afterCreateRow: refreshJSData,
                afterCreateCol: refreshJSData,
                afterRemoveRow: refreshJSData,
                afterRemoveCol: refreshJSData,
                afterSelection: function () {
                    refreshRowColHeadHighlight(this.view.wt);
                },
                afterDeselect: function () {
                    clearRowColHeadHighlight(this.view.wt);
                },
                afterRender: function () {
                    refreshRowColHeadHighlight(this.view.wt);
                },
                minSpareRows: 1,
                minSpareCols: 1,
                rowHeaders: true,
                colHeaders: true,
                contextMenu: true,
                minRows: 50,
                minCols: 15,
                stretchH: 'last', // 设为'all'时，列拖拽改变宽度时体验稍有问题。
                // width: function //??
                // height: function //??
                trimWhitespace: true,
                manualColumnResize: true,
                manualColumnMove: false,
                fillHandle: true,
                undo: true,
                outsideClickDeselects: true,
                enterBeginsEditing: true,
                autoWrapCol: false,
                autoWrapRow: false,
                copyRowsLimit: 600000, // 此设定是否合理??
                copyColsLimit: 600000, // 此设定是否合理??
                pasteMode: 'overwrite',
                columnSorting: false,
                persistentState: false
            };

            // 注意这个方法会频繁调用，所以在processor中统一使用throttle。
            function refreshJSData() {
                that._viewModel().jsDataOb.fillJSDataByDataTable();
            }
        }

    });

    // 增补handsontable功能，点击col head 能够选择一列
    function selectCol(htIns, rowHead) {
        var wtTable = htIns.view.wt.wtTable;
        var ths = wtTable.THEAD.childNodes[0].childNodes;
        var rowCount = htIns.countRows();

        for (var i = 0, len = ths.length; i < len; i++) {
            if (rowHead === ths[i]) {
                var srcColIndex = wtTable.columnFilter.visibleRowHeadedColumnToSourceColumn(i);
                htIns.selectCell(0, srcColIndex, rowCount - 1, srcColIndex, false);
                break;
            }
        }
    }

    // 增补handsontable功能，点击row head 能够选择一行
    function selectRow(htIns, colHead) {
        var wtTable = htIns.view.wt.wtTable;
        var trs = wtTable.TBODY.childNodes;
        var colCount = htIns.countCols();

        for (var i = 0, len = trs.length; i < len; i++) {
            if (colHead === trs[i].childNodes[0]) {
                var srcRowIndex = wtTable.rowFilter.visibleToSource(i);
                htIns.selectCell(srcRowIndex, 0, srcRowIndex, colCount - 1, false);
                break;
            }
        }
    }

    // 增补handsontable功能，选中时增加row col head 上的高亮
    function refreshRowColHeadHighlight(wt) {
        // inactive rows and cols
        clearRowColHeadHighlight(wt);

        var selected = getSelectedArea(wt);
        var wtTable = wt.wtTable;

        if (!selected) {
            return;
        }

        // active row head
        for (var i = selected.r; i <= selected.r2; i++) {
            var rowHead = getRowHead(wtTable, i);
            rowHead && $(rowHead).addClass(ROW_COL_HEAD_ACTIVE_CLASS);
        }
        // active col head
        for (var i = selected.c; i <= selected.c2; i++) {
            var colHead = getColHead(wtTable, i);
            colHead && $(colHead).addClass(ROW_COL_HEAD_ACTIVE_CLASS);
        }
    }

    // 清除row col head 上的高亮
    function clearRowColHeadHighlight(wt) {
        // inactive rows and cols
        $('.' + ROW_COL_HEAD_ACTIVE_CLASS, wt.wtTable.TABLE)
            .removeClass(ROW_COL_HEAD_ACTIVE_CLASS);
    }

    // 如果有选中，返回：{r: number, c: number, r2: number, c2: number} 保证r小于r2，c小于c2。
    // 如果没有选中，返回undefined
    function getSelectedArea(wt) {
        var ret = {};
        var tmp;

        var selected = wt.selections.area.selected;
        if (selected && selected.length >= 2) {
            ret.r = selected[0][0];
            ret.c = selected[0][1];
            ret.r2 = selected[1][0];
            ret.c2 = selected[1][1];
        }
        else {
            // 如果没有选中区域的话，area中的selected无内容
            selected = wt.selections.current.selected;
            if (selected && selected.length >= 1) {
                ret.r = selected[0][0];
                ret.c = selected[0][1];
                ret.r2 = ret.r;
                ret.c2 = ret.c;
            }
            else {
                return;
            }
        }

        ret.r > ret.r2 && (tmp = ret.r, ret.r = ret.r2, ret.r2 = tmp);
        ret.c > ret.c2 && (tmp = ret.c, ret.c = ret.c2, ret.c2 = tmp);

        return ret;
    }

    // 获得col head节点
    function getColHead(wtTable, c) {
        if (!wtTable.isColumnBeforeViewport(c)
            && !wtTable.isColumnAfterViewport(c)
        ) {
            return wtTable.THEAD
                .childNodes[0]
                .childNodes[wtTable.columnFilter.sourceColumnToVisibleRowHeadedColumn(c)];
        }
    }

    // 获得row head节点
    function getRowHead(wtTable, r) {
        if (!wtTable.isRowBeforeViewport(r)
            && !wtTable.isRowAfterViewport(r)
        ) {
            return wtTable.TBODY
                .childNodes[wtTable.rowFilter.sourceToVisible(r)]
                .childNodes[0];
        }
    }

    return DataTable;
});
