/**
 * @file data table processor
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var renderers = require('./dataTableCellRenderers');
    var helper = require('./helper');
    var constant = require('./constant');

    /**
     * @public
     */
    var processor = {};

    /**
     * 此方法只可在jsDataFactory中使用。
     * 此方法不做throttle，因为只用于监听ob。
     * 约定在ob更新的上游进行throttle（即codeInputsProcessor.fillJSData）
     *
     * @public
     * @param {Object} jsDataOb
     */
    processor.fillFromJSData = function (jsDataOb) {
        var htIns = jsDataOb.getHTIns();
        var editorData = htIns.dtEditorData;
        var dataWindow = editorData.getDataWindowSize();
        var colCount = jsDataOb.getColCount();
        var rowCount = jsDataOb.getRowCount();
        var jsData = jsDataOb();
        var jsDataType = jsDataOb.getType();

        editorData.enlarge(colCount, rowCount);

        // Render
        var seriesInfo = jsDataOb.getSeriesInfo(jsDataType, colCount);

        for (var colIndex = 0; colIndex < dataWindow.colCount; colIndex++) {
            var seriesIndex = Math.floor(colIndex / seriesInfo.colStep);
            var oneSeriesData = jsData[seriesIndex];

            for (var rowIndex = 0; rowIndex < dataWindow.rowCount; rowIndex++) {
                if (!oneSeriesData || rowIndex >= oneSeriesData.length) {
                    editorData.uncheckSet(rowIndex, colIndex, null);
                }
                else {
                    fillBySeriesLine[jsDataType](
                        rowIndex, seriesIndex, oneSeriesData[rowIndex],
                        seriesInfo, jsDataOb, editorData
                    );
                }
            }
        }
    };

    /**
     * 此方法只可在jsDataFactory中使用。
     *
     * @public
     */
    processor.fillJSData = function (jsDataOb) {
        var htIns = jsDataOb.getHTIns();
        var editorData = htIns.dtEditorData;
        var jsData = [];
        var dataWindow = editorData.getDataWindowSize();
        var jsDataType = jsDataOb.getType();
        var seriesInfo = jsDataOb.getSeriesInfo(jsDataType, dataWindow.colCount);

        // 取数据
        for (var seriesIndex = 0; seriesIndex < seriesInfo.count; seriesIndex++) {
            var oneSeries = [];
            for (var rowIndex = 0; rowIndex < dataWindow.rowCount; rowIndex++) {
                var line = getJSDataLine[jsDataType](
                    rowIndex, seriesIndex, seriesInfo, jsDataOb, editorData
                );
                oneSeries.push(line);
            }
            jsData.push(oneSeries);
        }

        jsDataOb(jsData, dtLib.valueInfoForConfirmed(constant.UI_DATA_TABLE));
    };

    /**
     * @public
     */
    processor.processCell = function (colSettings, jsDataOb, row, col) {
        var htIns = jsDataOb.getHTIns();
        var colCount = htIns.countCols();
        var seriesInfo = jsDataOb.getSeriesInfo(jsDataOb.getType(), colCount);

        if (seriesInfo.colStep > 1) {
            if (Math.floor(col / seriesInfo.colStep) % 2 === 0) {
                colSettings.renderer = renderers.high;
            }
            else {
                colSettings.renderer = renderers.normal;
            }
        }
        else { // 两个else分开写是为了逻辑上好读。
            colSettings.renderer = renderers.normal;
        }
    };

    /**
     * @inner
     */
    var fillBySeriesLine = {}; // jshint ignore:line

    function arrayFillBySeriesLine(rowIndex, seriesIndex, line, seriesInfo, jsDataOb, editorData) {
        var seriesIndexBase = seriesIndex * seriesInfo.colStep;
        if ($.isArray(line)) {
            for (var colRelatedIndex = 0, lenj = line.length; colRelatedIndex < lenj; colRelatedIndex++) {
                var finalValue = helper.formatJSDataToEditorData(
                    line[colRelatedIndex], jsDataOb, editorData
                );
                editorData.uncheckSet(
                    rowIndex, colRelatedIndex + seriesIndexBase, finalValue
                );
            }
        }
        else {
            var finalValue = helper.formatJSDataToEditorData(
                line, jsDataOb, editorData
            );
            editorData.uncheckSet(rowIndex, seriesIndexBase, finalValue);
        }
    }

    fillBySeriesLine[constant.JSDATA_DIM_ARRAY] = arrayFillBySeriesLine;

    fillBySeriesLine[constant.JSDATA_ARRAY_OBJECT] = function (
        rowIndex, seriesIndex, line, seriesInfo, jsDataOb, editorData
    ) {
        var seriesIndexBase = seriesIndex * seriesInfo.colStep;
        var propertyMetas = jsDataOb.getPropertyMetas();
        for (var i = 0, len = propertyMetas.length; i < len; i++) {
            var meta = propertyMetas[i];

            var finalValue = helper.formatJSDataToEditorData(
                line[meta.propertyName], jsDataOb, editorData
            );
            editorData.uncheckSet(rowIndex, seriesIndexBase, finalValue);
        }
    };

    fillBySeriesLine[constant.JSDATA_GEO] = arrayFillBySeriesLine;


    /**
     * @inner
     */
    var getJSDataLine = {}; // jshint ignore:line

    function arrayGetJSDataLine(rowIndex, seriesIndex, seriesInfo, jsDataOb, editorData) {
        var seriesIndexBase = seriesIndex * seriesInfo.colStep;
        var line;
        var itemDataType = jsDataOb.getItemDataType();

        if (seriesInfo.seriesDim === 2) {
            line = [];
            for (var colRelatedIndex = 0; colRelatedIndex < seriesInfo.colStep; colRelatedIndex++) {
                var finalValue = editorData.get(
                    rowIndex, colRelatedIndex + seriesIndexBase, itemDataType
                );
                finalValue = helper.formatEditorDataToJSData(
                    finalValue, jsDataOb, editorData
                );
                line.push(finalValue);
            }
        }
        else { // seriesInfo.seriesDim === 1
            line = helper.formatEditorDataToJSData(
                editorData.get(rowIndex, seriesIndexBase, itemDataType),
                jsDataOb, editorData
            );
        }
        return line;
    }

    getJSDataLine[constant.JSDATA_DIM_ARRAY] = arrayGetJSDataLine;

    getJSDataLine[constant.JSDATA_ARRAY_OBJECT] = function (
        rowIndex, seriesIndex, seriesInfo, jsDataOb, editorData
    ) {
        var seriesIndexBase = seriesIndex * seriesInfo.colStep;
        var propertyMetas = jsDataOb.getPropertyMetas();
        var line = {};

        for (var colRelatedIndex = 0, len = propertyMetas.length;
            colRelatedIndex < len;
            colRelatedIndex++
        ) {
            var meta = propertyMetas[colRelatedIndex];
            var finalValue = editorData.get(
                rowIndex, colRelatedIndex + seriesIndexBase, meta.itemDataType
            );
            finalValue = helper.formatEditorDataToJSData(
                finalValue, jsDataOb, editorData
            );
            line[meta.propertyName] = finalValue;
        }
        return line;
    };

    getJSDataLine[constant.JSDATA_GEO] = arrayGetJSDataLine;

    return processor;
});
