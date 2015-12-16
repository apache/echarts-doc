/**
 * API doc language.
 */
define(function (require) {

    var $ = require('jquery');

    /**
     * Chinese
     * @type {Object}
     */
    var cn = {
        langCode: 'cn',
        queryBoxPlaceholderFuzzyPath: '模糊搜索（快捷键\'/\'）例如输入 ser(line).border 并按回车',
        queryBoxPlaceholderAnyText: '全文搜索（快捷键\'/\'） 例如输入：样式',
        queryBoxTextFuzzyPath: '搜索配置项',
        queryBoxTextAnyText: '全文搜索',
        descAreaLabelType: '类型',
        descAreaLabelDefaultValue: '默认值',
        collapseAll: '折叠',
        queryResultInfo: '共 #{count} 条结果',
        queryBoxNoResult: '没有搜索到信息',
        exampleCategory: '示例类型',
        apiMainTitle: 'ECharts API检索工具',
        apiChartDesc: '使用说明：鼠标移动到<strong>箭头</strong>上，可以查看并定位到对应的<strong>ECharts配置项</strong>。'
    };

    /**
     * English
     * @type {Object}
     */
    var en = {
        langCode: 'en',
        queryBoxPlaceholderFuzzyPath: 'Search (Short cut:\'/\'). Try input: ser(line).border',
        queryBoxPlaceholderAnyText: 'Search (Short cut:\'/\'). Try input: style',
        queryBoxTextFuzzyPath: 'In properties',
        queryBoxTextAnyText: 'Full-text',
        descAreaLabelType: 'Type',
        descAreaLabelDefaultValue: 'Default Value',
        collapseAll: 'Collapse',
        queryResultInfo: 'Got #{count} results.',
        queryBoxNoResult: 'No result',
        exampleCategory: 'Category',
        apiMainTitle: 'ECharts API Tool',
        apiChartDesc: 'Tip: Mouse hover on <strong>arrows</strong> to get <strong>option details</strong>.'
    };

    // Setting in html.
    return $('html').attr('lang').toLowerCase() === 'en' ? en : cn;
});
