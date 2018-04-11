/**
 * API doc language.
 */
define(function (require) {

    var $ = require('jquery');
    var globalArgs = require('globalArgs');

    /**
     * Chinese
     * @type {Object}
     */
    var cn = {
        langCode: 'cn',
        quickLinkTutorial: '教程',
        quickLinkAPI: 'API',
        quickLinkOption: '配置项',
        quickLinkOptionGL: 'GL',
        queryBoxPlaceholderFuzzyPath: '配置项模糊搜索（快捷键\'/\'）',
        queryBoxPlaceholderAnyText: '全文搜索（快捷键\'/\'）',
        queryBoxTextFuzzyPath: '配置项搜索',
        queryBoxTextAnyText: '全文搜索',
        descAreaLabelType: '类型',
        descAreaLabelDefaultValue: '默认值',
        showProperties: '展开详情 ...',
        hideProperties: '折叠详情',
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
        quickLinkTutorial: 'Tutorial',
        quickLinkAPI: 'API',
        quickLinkOption: 'Option',
        quickLinkOptionGL: 'GL',
        queryBoxPlaceholderFuzzyPath: 'Search (Short cut:\'/\'). Try input: ser(line).border',
        queryBoxPlaceholderAnyText: 'Search (Short cut:\'/\'). Try input: style',
        queryBoxTextFuzzyPath: 'In properties',
        queryBoxTextAnyText: 'Full-text',
        descAreaLabelType: 'Type',
        descAreaLabelDefaultValue: 'Default Value',
        showProperties: 'Show Properties ...',
        hideProperties: 'Hide Properties',
        collapseAll: 'Collapse',
        queryResultInfo: 'Got #{count} results.',
        queryBoxNoResult: 'No result',
        exampleCategory: 'Category',
        apiMainTitle: 'ECharts API Tool',
        apiChartDesc: 'Tip: Mouse hover on <strong>arrows</strong> to get <strong>option details</strong>.'
    };

    var globalLang = globalArgs.lang || {};
    $.extend(cn, globalLang.cn || {});
    $.extend(en, globalLang.en || {});

    // Setting in html.
    // FIXME
    return ($('html').attr('lang') + '').toLowerCase() === 'en' ? en : cn;
});
