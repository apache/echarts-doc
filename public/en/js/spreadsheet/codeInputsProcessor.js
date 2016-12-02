/**
 * @file data table processor
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var helper = require('./helper');
    var lang = require('./lang');
    var constant = require('./constant');

    /**
     * @public
     */
    var processor = {};

    /**
     * 此方法只可在jsDataFactory中使用。
     * 此方法不做throttle，因为只用于监听ob。
     * 约定在ob更新的上游进行throttle（即dataTableProcessor.fillJSData）
     *
     * @public
     * @param {Object} jsDataOb
     */
    processor.fillFromJSData = function (jsDataOb) {
        var jsData = jsDataOb();
        var mainListViewModels = jsDataOb.getCodeInputsListViewModels();
        var jsDataType = jsDataOb.getType();

        // Clear
        mainListViewModels.removeAll();

        // Render
        var toAddArr = [];
        for (var seriesIndex = 0, lenS = jsData.length; seriesIndex < lenS; seriesIndex++) {

            var stringifyParam = jsDataOb.getCodeStringifyParam();
            var codeText = stringifyParam.outputFormat === 'js'
                ? dtLib.stringifyJSObject(jsData[seriesIndex], stringifyParam)
                : jsonStringify(jsData[seriesIndex], stringifyParam);

            var codeTextOb = dtLib.ob(codeText);
            var colDesc = jsDataOb.getColDescBySeries(seriesIndex, jsDataType);
            var rangeDesc = (colDesc.single ? colDesc.start : (colDesc.start + ' - ' + colDesc.end));
            var title = dtLib.strTemplate(lang.codeInputTitle, {rangeDesc: rangeDesc});

            toAddArr.push({codeTextOb: codeTextOb, title: title});
            codeTextOb.subscribe(onCodeTextChange, processor);
        }
        toAddArr.length && mainListViewModels.pushArray(toAddArr);

        function onCodeTextChange(nextCodeText, codeTextOb) {
            if (dtLib.checkValueInfoForConfirmed(codeTextOb)) {
                jsDataOb.fillJSDataByCodeInputs();
            }
        }
    };

    function jsonStringify(target, stringifyParam) {
        return JSON.stringify( // jshint ignore:line
            target,
            null,
            stringifyParam.compress ? 0 : stringifyParam.indentBase
        );
    }

    /**
     * 此方法只可在jsDataFactory中使用。
     *
     * @public
     * @param {Object} jsDataOb
     */
    processor.fillJSData = function (jsDataOb) {
        var jsData = [];
        var vms = jsDataOb.getCodeInputsListViewModels()();
        var colCount = jsDataOb.getColCount();
        var jsDataType = jsDataOb.getType();
        var seriesInfo = jsDataOb.getSeriesInfo(jsDataType, colCount);

        // 取数据
        for (var seriesIndex = 0, lenS = vms.length; seriesIndex < lenS; seriesIndex++) {
            var oneCode = helper.parseToArray(vms[seriesIndex].codeTextOb(), true) || [];
            var oneSeries = [];

            for (var rowIndex = 0, lenR = oneCode.length; rowIndex < lenR; rowIndex++) {
                var oneCodeItem = oneCode[rowIndex];
                var line;

                if (jsDataType === constant.JSDATA_DIM_ARRAY) {
                    line = seriesInfo.seriesDim === 2
                       ? (!$.isArray(oneCodeItem) ? [] : oneCodeItem)
                       : oneCodeItem;
                }
                else { // jsDataType === constant.JSDATA_DIM_ARRAY or constant.JSDATA_GEO
                    line = $.isPlainObject(oneCodeItem) ? oneCodeItem : {};
                }
                oneSeries.push(line);
            }
            jsData.push(oneSeries);
        }

        jsDataOb(jsData, dtLib.valueInfoForConfirmed(constant.UI_CODE_INPUTS));
    };

    return processor;
});
