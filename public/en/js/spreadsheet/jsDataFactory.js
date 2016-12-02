/**
 * @file js data 是一个封装了数据和行为的model，并作为各方的接口。
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var helper = require('./helper');
    var constant = require('./constant');
    var dataTableProcessor = require('./dataTableProcessor');
    var codeInputsProcessor = require('./codeInputsProcessor');

    /**
     * [Usage]
     *
     * Create:
     * var jsDataOb = jsDataFactory.create();
     *
     * Get and set data:
     * var data = jsDataOb();
     * jsDataOb(someNewData);
     *
     * Get and set dimColStep:
     * jsDataOb.dimColStep(4);
     * var dimColStep = jsDataOb.getDimColStep();
     *
     * Subscribe:
     * jsDataOb.subscribe(function(newValue, jsDataOb) {
     *     // ...
     * });
     */

    /**
     * [Types]
     *
     * constant.JSDATA_DIM_ARRAY:
     * [
     *     [[12, 32], [54, 64], [1212, 22]], // Each row coresponds to an text input。
     *     [[434, 'sdfa'], [2, 23]], // two-dimension. Inner item must be Array (must not be null or undefined).
     *     [12, 442, 'asdf', '-']    // one-dimension
     * ]
     *
     * constant.JSDATA_ARRAY_OBJECT:
     * [
     *     [
     *         {name: 'aa', value: 1212}, // Each item must be Object (must not be null or undefined).
     *         {name: 'aa', value: 1212},
     *         {name: 'aa', value: 1212},
     *         {name: 'aa', value: 1212}
     *     ]
     * ]
     *
     * constant.JSDATA_GEO:
     * [
     *     [['China', 122.23, 100.22], ...],
     * ]
     */

    /**
     * [Empty Value Representation]
     *
     * Empty value in jsDataOb is specified by jsDataOb.getEmptyValue.
     * Empty value in dataTable (handsontable) is null.
     */

    var jsDataFactory = {};

    jsDataFactory.create = function () {
        var ob = dtLib.ob([]);
        dtLib.assign(ob, methods);

        ob.setType(constant.JSDATA_DIM_ARRAY); // init

        ob.fillJSDataByDataTable = makeThrottle(dataTableProcessor.fillJSData, ob);
        ob.fillJSDataByCodeInputs = makeThrottle(codeInputsProcessor.fillJSData, ob);

        return ob;
    };

    var methods = []; // jshint ignore:line

    /**
     * @public
     * @return {string} type
     */
    methods.getType = function (type) {
        return this._type;
    };

    /**
     * @public
     * @param {string} type 值可为：
     *                      constant.JSDATA_DIM_ARRAY,
     *                      constant.JSDATA_ARRAY_OBJECT,
     *                      constant.JSDATA_GEO
     * @return {Object} jsDataOb
     */
    methods.setType = function (type) {
        this._type = type;

        initDataMeta.call(this);

        return this;
    };

    /**
     * @inner
     */
    function initDataMeta() {
        var dataMeta = this._dataMeta || (this._dataMeta = {});

        // Some default settings.
        if (!dataMeta.propertyMetas) {
            dataMeta.propertyMetas = [];
        }
        if (!dataMeta.itemDataType) {
            dataMeta.itemDataType = 'auto';
        }
        if (!dataMeta.hasOwnProperty('emptyValue')) {
            dataMeta.emptyValue = constant.EC_EMPTY_VALUE;
        }

        // Default code info.
        if (!dataMeta.codeInfo) {
            dataMeta.codeInfo = {
                outputFormat: 'js',
                quotationMark: '\'',
                indentBase: 4,
                compress: false
            };
        }
    }

    /**
     * Available after bindDataTable called.
     *
     * @public
     */
    methods.fillJSDataByDataTable = $.noop;

    /**
     * Available after bindCodeInputs called.
     *
     * @public
     */
    methods.fillJSDataByCodeInputs = $.noop;

    /**
     * @public
     */
    methods.bindDataTable = function (htIns) {
        this._htIns = htIns;
        this.subscribe(onJSDataChanged, this);

        function onJSDataChanged(jsData, jsDataOb) {
            // 自己更新导致的jsData变化，不刷新自己。
            if (!dtLib.checkValueInfoForConfirmed(jsDataOb, constant.UI_TABLE_DATA)) {
                dataTableProcessor.fillFromJSData(jsDataOb);
                htIns.render();
            }
        }
    };

    /**
     * @public
     */
    methods.bindCodeInputs = function (codeInputsListViewModels) {
        this._codeInputsListViewModels = codeInputsListViewModels;
        this.subscribe(onJSDataChanged, this);

        function onJSDataChanged(jsData, jsDataOb) {
            // 自己引发的改变，不更新自己
            if (!dtLib.checkValueInfoForConfirmed(jsDataOb, constant.UI_CODE_INPUTS)) {
                codeInputsProcessor.fillFromJSData(jsDataOb);
            }
        }
    };

    /**
     * @pubilc
     */
    methods.clear = function () {
        this([[]]);
    };

    /**
     * @public
     */
    methods.getHTIns = function () {
        return this._htIns;
    };

    /**
     * @public
     */
    methods.getCodeInputsListViewModels = function () {
        return this._codeInputsListViewModels;
    };

    /**
     * @public
     */
    methods.getEmptyValue = function (value) {
        return this._dataMeta.emptyValue;
    };

    /**
     * @public
     * @param {number=} [dataMeta.emptyValue] 什么东西表示数据项的“空”。默认是'-'，还可以设成null。
     */
    methods.setEmptyValue = function (value) {
        this._dataMeta.emptyValue = value;
    };

    /**
     * @public
     */
    methods.setCodeInfo = function (options) {
        dtLib.assign(
            this._dataMeta.codeInfo,
            options || {},
            ['outputFormat', 'quotationMark', 'indentBase', 'compress']
        );
    };

    /**
     * @public
     */
    methods.getCodeStringifyParam = function (value) {
        return dtLib.assign(
            {
                errorMessage: 'Error: illegal data!',
                singleLineDepth: this.getSeriesDim() === 2 ? 1 : null
            },
            this._dataMeta.codeInfo
        );
    };

    /**
     * 设置或得到二维数组的内层宽度定义。
     * 这种设计是为了方便“多系列”的一起处理。
     * （多系列一起贴进excel，直接输出结果）
     *
     * dimColStep的意义是，假设excel中有数据:
     * 6  5  4  3  2
     * 16 15 14 13 12
     *
     * 如果dimColStep是3，
     * 则从excel得到的jsData结构为：
     * [
     *     [[6, 5, 4], [16, 15, 14]],
     *     [[3, 2], [13, 12]]
     * ]
     *
     * 如果dimColStep是null或undefined，
     * 则从excel得到的jsData结构为（降一维）：
     * [
     *     [6, 16],
     *     [5, 15],
     *     [4, 14],
     *     [3, 13],
     *     [2, 12]
     * ]
     *
     * 如果dimColStep是'max'，表示无限大，
     * 则从excel得到的jsData结构为：
     * [
     *     [[6, 5, 4, 3, 2], [16, 15, 14, 13, 12]]
     * ]
     *
     * 以上是type为constant.JSDATA_DIM_ARRAY的例子，type为constant.JSDATA_ARRAY_OBJECT时同理。
     *
     * @public
     * @return {number} value
     */
    methods.getDimColStep = function () {
        return this.getType() === constant.JSDATA_GEO
            ? 'max'
            : this._dataMeta.dimColStep;
    };

    /**
     * @public
     * @param {(number|string)=} value 传值则表示设置。
     * @return {Object} jsDataOb
     */
    methods.setDimColStep = function (value) {
        this._dataMeta.dimColStep = value;
        return this;
    };

    /**
     * itemDataType: 'string', 'number', 'auto'（默认。能转成number则为number，否则为string）
     *
     * @public
     */
    methods.getItemDataType = function () {
        return this._dataMeta.itemDataType;
    };

    /**
     * @public
     * @param {string=} [dataMeta.itemDataType] 值为：'string', 'number', 'auto'
     *                                          （默认，即尽量为number，否则为string）
     */
    methods.setItemDataType = function (value) {
        this._dataMeta.itemDataType = value;
    };

    /**
     * @public
     * @param {string} jsDataType
     * @param  {number=} dataTableColCount Auto calculate when ignore.
     * @return {Object} {
     *                      count: ..., >= 0
     *                      colStep: ..., >= 1
     *                      seriesDim: ... the same as getSeriesDim()
     *                  }
     */
    methods.getSeriesInfo = function (jsDataType, dataTableColCount) {
        if (dataTableColCount == null) {
            dataTableColCount = this.getColCount();
        }

        var dimColStep = this.getDimColStep();
        var count;
        var colStep;

        if (jsDataType === constant.JSDATA_DIM_ARRAY) {
            if (dimColStep === 'max') {
                colStep = dataTableColCount;
                count = dataTableColCount ? 1 : 0;
            }
            else if (dimColStep) {
                colStep = dimColStep;
                count = Math.ceil(dataTableColCount / colStep);
            }
            else {
                count = dataTableColCount;
                colStep = 1;
            }
        }
        else if (jsDataType === constant.JSDATA_ARRAY_OBJECT) {
            var propertyMetas = this.getPropertyMetas();
            colStep = propertyMetas.length;
            count = Math.ceil(dataTableColCount / colStep);
        }
        else if (jsDataType === constant.JSDATA_GEO) {
            colStep = dataTableColCount;
            count = dataTableColCount ? 1 : 0;
        }
        else {
            dtLib.assert(false, 'Invalid jsDataType!');
        }

        return {
            count: count,
            colStep: colStep,
            seriesDim: this.getSeriesDim()
        };
    };

    /**
     * @pubilc
     */
    methods.getSeriesDim = function () {
        return this.getType() === constant.JSDATA_ARRAY_OBJECT
            ? 2
            : (this.getDimColStep() ? 2 : 1);
    };

    /**
     * @public
     */
    methods.getPropertyMetas = function () {
        return dtLib.clone(this._dataMeta.propertyMetas);
    };

    /**
     * @public
     * @param {Array.<Object>} [dataMeta.propertyMetas] constant.JSDATA_ARRAY_OBJECT 时有效
     *                         Array每项值为 {
     *                             itemDataType: 取值值同上,
     *                             propertyName: string
     *                         }
     */
    methods.setPropertyMetas = function (inputPropertyMetas) {
        var propertyMetas = this._dataMeta.propertyMetas;
        var i = 0;
        for (var len = inputPropertyMetas.length; i < len; i++) {
            var meta = propertyMetas[i] || (
                propertyMetas[i] = {propertyName: '', itemDataType: 'auto'}
            );
            dtLib.assign(meta, inputPropertyMetas[i]);
        }

        // Remove remains.
        propertyMetas.splice(i, propertyMetas.length - i);
    };

    /**
     * @pubilc
     */
    methods.getRowCount = function (rowBuffer) {
        var rowMax = 0;
        var jsData = this();

        // Get rowMax
        for (var k = 0, lenk = jsData.length; k < lenk; k++) {
            var oneSeriesData = jsData[k] || [];
            if (rowMax < oneSeriesData.length) {
                rowMax = oneSeriesData.length;
            }
        }

        if (rowBuffer == null) {
            rowBuffer = 2;
        }
        return rowMax + rowBuffer;
    };

    /**
     * @pubilc
     */
    methods.getColCount = function (colBuffer) {
        var colMax = 0;
        var seriesDim = this.getSeriesDim();
        var jsData = this();

        // Get colMax
        if (seriesDim === 1) {
            colMax = jsData.length;
        }
        else {
            var dimColStep = this.getDimColStep();
            // Find max length.
            colMax = dimColStep === 'max'
                ? getColMax[this.getType()](jsData)
                : jsData.length * dimColStep;
        }

        if (colBuffer == null) {
            colBuffer = 2;
        }
        return colMax + colBuffer;
    };

    /**
     * @public
     */
    methods.getColDescBySeries = function (seriesIndex, jsDataType) {
        var seriesInfo = this.getSeriesInfo(jsDataType);
        var colStart = seriesIndex * seriesInfo.colStep;
        var colEnd = colStart + seriesInfo.colStep - 1;

        return {
            start: this.getColDesc(colStart),
            end: this.getColDesc(colEnd),
            single: colStart === colEnd
        };
    };

    /**
     * @public
     */
    methods.getColDescInSeries = function (seriesIndexList, offset, jsDataType) {
        var seriesInfo = this.getSeriesInfo(jsDataType);
        offset = offset % seriesInfo.colStep;
        var ret = [];

        for (var i = 0, len = seriesIndexList.length; i < len; i++) {
            var colStart = seriesIndexList[i] * seriesInfo.colStep;
            ret.push(this.getColDesc(colStart + offset));
        }

        return ret;
    };

    /**
     * @public
     */
    methods.getColDesc = function (colIndex) {
        // colIndex 可以超出边界
        return this._htIns.getColHeader(colIndex);
    };

    /**
     * @inner
     * @type {Object} Contains functions
     */
    var getColMax = {}; // jshint ignore:line

    function arrayGetColMax(jsData) {
        // Find max length.
        var colMax = 0;
        var oneSeriesData = jsData[0] || [];
        for (var j = 0, lenj = oneSeriesData.length; j < lenj; j++) {
            var line = oneSeriesData[j] || [];
            if (colMax < line.length) {
                colMax = line.length;
            }
        }
        return colMax;
    };

    getColMax[constant.JSDATA_DIM_ARRAY] = arrayGetColMax;

    getColMax[constant.JSDATA_ARRAY_OBJECT] = function (jsData) {
        // Find max length.
        var colMax = 0;
        var arrayObject = jsData[0] || [];
        for (var j = 0, lenj = arrayObject.length; j < lenj; j++) {
            var obj = arrayObject[j] || {};
            var propertyCount = helper.objectPropertyCount(obj);
            if (colMax < propertyCount) {
                colMax = propertyCount;
            }
        }
        return colMax;
    };

    getColMax[constant.JSDATA_GEO] = arrayGetColMax;

    /**
     * 统一throttle而非在调用点throttle，是为了让所有此方法的调用有一致的时序。
     *
     * @inner
     */
    function makeThrottle(fillJSData, jsDataOb) {
        return dtLib.throttle(
            dtLib.curry(fillJSData, jsDataOb),
            constant.JSDATA_UPDATE_DELAY,
            true, true
        );
    }

    return jsDataFactory;
});
