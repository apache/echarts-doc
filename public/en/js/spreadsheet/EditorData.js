/**
 * @file data table data
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var dtLib = require('dt/lib');

    /**
     * @class
     */
    var EditorData = function (htIns) {
        this._data = htIns.getSourceData();
        this._htIns = htIns;
    };

    var editorDataProto = EditorData.prototype;

    /**
     * 清空所有数据
     *
     * @pubilc
     */
    editorDataProto.clear = function () {
        // 使用全赋null的方式，不可破坏editorData的结构。
        for (var i = 0, data = this._data, len = data.length; i < len; i++) {
            for (var j = 0, lenj = data[i].length; j < lenj; j++) {
                data[i][j] = null;
            }
        }
    };

    /**
     * 扩展data尺寸。在使用uncheckSet前使用。
     * 这种设计难看，但这是为了适配handsontable，同时性能考虑。
     *
     * @public
     * @param {number} rowCount 如果小于当前data的rowCount，则row不扩展。
     * @param {number} colCount 如果小于当前data的colCount，则col不扩展。
     */
    editorDataProto.enlarge = function (rowCount, colCount) {
        var data = this._data;
        var currColCount = this._htIns.countCols();
        colCount = Math.max(colCount, currColCount);

        if (colCount > currColCount) {
            for (var i = 0, len = data.length; i < len; i++) {
                data.length = colCount;
            }
        }

        if (rowCount > data.length) {
            for (var i = data.length; i < rowCount; i++) {
                data.push(new Array(colCount));
            }
        }
    };

    /**
     * 向data中设置值。
     * uncheck的意思是，向二维数组中set前不检查非空（性能考虑）。
     * 所以使用uncheckSet前，应该先使用enlarge函数，保证data二维数组的尺寸足够大。
     * 此方法会被频繁调用。
     *
     * @public
     */
    editorDataProto.uncheckSet = function (rowIndex, colIndex, data) {
        this._data[rowIndex][colIndex] = data;
    };

    /**
     * 将二维数组写入handsontable中
     *
     * @public
     * @param {Array} data
     */
    editorDataProto.writeArray = function (data, itemFormatter) {
        var data = data || [[]];

        var rowCount = data.length;
        var colCount = 0;

        $.each(data, function (idx, item) {
            var item = item || [];

            colCount = Math.max(item.length, colCount);
        });

        this.clear();
        this.enlarge(rowCount, colCount);

        var me = this;
        $.each(data, function (idx, itemx) {

            $.each(itemx || [], function (idy, itemy) {
                me.uncheckSet(idx, idy, itemFormatter(itemy));
            });
        });
    };

    /**
     * 得到data中的值。如果rowIndex或colIndex超出范围，不会抛异常而是返回空。
     * 此方法会被频繁调用。
     *
     * @public
     * @param {number} rowIndex
     * @param {number} colIndex
     * @param {string=} dataType 提供数据过滤的功能（如适当地处理null、非法number、trim等情况）。
     *                           可以是'string', 'number', 'auto'（能转成number则为number，否则为string）。
     *                           如果不传，则返回原始值。
     *                           注意，number支持 111e2 这种形式。也就是说，excel中输入了111e2，得到的值是11100。
     * @return {*} value
     *             string时返回值必为string.
     *             number时如果非法则返回null.
     */
    editorDataProto.get = function (rowIndex, colIndex, dataType) {
        var row = this._data[rowIndex];
        var value = row ? row[colIndex] : null;

        // Empty value is null and ''.
        // If a cell has been edited, the value can not be null but ''.
        if (value === '') {
            value = null;
        }

        if (dataType === 'string') {
            value = value == null ? '' : String(value);
        }
        else if (dataType === 'number') {
            value = dtLib.getNumber(value);
        }
        else if (dataType === 'auto') {
            var newValue = dtLib.getNumber(value);
            if (newValue != null) {
                value = newValue;
            }
        }

        return value;
    };

    /**
     * 是否是空单元格
     *
     * @public
     * @param {number} rowIndex
     * @param {number} colIndex
     * @return {boolean} isBlank
     */
    editorDataProto.isBlank = function (rowIndex, colIndex) {
        return dtLib.isBlank(this.get(rowIndex, colIndex));
    };

    /**
     * @public
     */
    editorDataProto.getEmptyValue = function () {
        return null; // null 表示empty value.
    };

    /**
     * 得到数据边界
     *
     * @public
     * @param {Object} htIns
     * @return {Object} {colCount: ..., rowCount: ...}
     */
    editorDataProto.getDataWindowSize = function () {
        var htIns = this._htIns;
        var colCount = htIns.countCols();
        var rowCount = htIns.countRows();
        var editorData = htIns.dtEditorData;

        // 找到row数据边界
        var i = rowCount - 1;
        var realRowCount = 0;
        for (; i >= 0; i--) {
            for (var j = 0; j < colCount; j++) {
                if (editorData.get(i, j) != null) {
                    realRowCount = i + 1;
                    break;
                }
            }
            if (realRowCount) {
                break;
            }
        }

        // 找到col数据边界
        var j = colCount - 1;
        var realColCount = 0;
        for (; j >= 0; j--) {
            for (var i = 0; i < realRowCount; i++) {
                var val = editorData.get(i, j);
                if (val != null && val !== '') {
                    realColCount = j + 1;
                    break;
                }
            }
            if (realColCount) {
                break;
            }
        }

        return {colCount: realColCount, rowCount: realRowCount};
    };

    return EditorData;
});
