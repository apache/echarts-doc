// FIXME
// 清理无用的代码以及注释

/**
 * @file Schema related operations.
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    /**
     * [optionPath总共占用的字符总结]（中文顿号不算）：
     * a-z、A-Z、0-9、[、]、-、所有非ascii。
     */

    /**
     * [schema格式]：
     * {
     *     type: 类型，如'Array', 'Object', 'string', 'Function'，或者['Array', 'string']
     *     descriptionCN: '中文解释文字'
     *     descriptionEN: '英文解释文字'
     *     default:
     *         default value字段
     *     defaultExplanation:
     *         默认值的补充说明片段，有些默认值可能描述为“各异”“自适应”。如果不存在default字段，则会寻找defaultExplanation。
     *     items: 如果type为Array，items描述节点。同json-schema中的定义。
     *     properties: 如果type为Object，properties描述属性。同json-schema中的定义。
     *     definitions: { ... } 同json-schema中的定义。
     *     applicable: {string|Array.<string>}，详见下面applicable说明。
     *     oneOf: { ... } 同json-schema中的定义。暂时不支持 anyOf 和 allOf
     *     enumerateBy: ['line', 'pie'] 在文档中，此项下，按照所给出的值设置applicable并列表显示。
     *     setApplicable: ['markPoint', 'markLine'] 在此子树中遍历时，用给定的值设置applicable。
     *     defaultByApplicable: {'line': 'default1', 'pie': 'default2'} doc展示中，根据applicable得到default。
     * }
     */

    /**
     * [applicable说明]：
     *
     * applicable是特殊添加的字段，表示axis和series的适用类型，
     * 参见EC_AXIS_APPLICABLE和EC_SERIES_APPLICABLE。
     * 其值可以是string（表示只有一个aplicable），或Array.<string>
     * 如果其值为'all'，表示所有。
     * 在oneOf的各个子项中，如果子项a有applicable: 'all'，子项b有applicable: 'someValue'，则b优先级高。
     * （不过理论上这是业务层面的处理，不是schame该管的范畴，放在这里说明是为了方便。）
     *
     * 在oneOf中，applicable能决定路径的选取，例如：
     * some: {
     *    oneOf: [
     *        {applicable: 'line'},
     *        {applicable: 'pie'}
     *    ]
     * }
     * 如果当前上下文是'pie'，则some取pie作为定义。
     *
     * 在properties中，applicable能决定属性的出现与否，例如：
     * some: {
     *     properties: {
     *         a: {appliable: 'line'},
     *         b: {appliable: 'pie'}
     *     }
     * }
     * 如果当前上下文是'pie'，则some.b出现而some.a不出现。
     */

    // References
    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var docUtil = require('./docUtil');
    var encodeHTML = dtLib.encodeHTML;

    // Inner constants
    var UNDEFINED;
    var DEFAULT_VALUE_BRIEF_LENGTH = 20;
    var QUOTATION_REG_SINGLE = /^\s*'(.*)'\s*$/; // 中间也含有引号，因为贪婪，所以可以不管。
    var QUOTATION_REG_DOUBLE = /^\s*"(.*)"\s*$/; // 中间也含有引号，因为贪婪，所以可以不管。
    // var PATH_ITEM_REG = /^(\w+|i\])(\-([a-zA-Z_ \/,]*))?$/; // Only ascii.
    var PATH_ITEM_REG = /^([^\[\]\-]+|i\])(\-([0-9a-zA-Z_ \/,]*))?$/; // Also 中文.

    /**
     * @public
     * @type {Object}
     */
    var schemaHelper = {};

    /**
     * ec option中的type枚举
     *
     * @public
     */
    schemaHelper.EC_OPTION_TYPE = [
        'Array', 'Object', 'string', 'number', 'boolean', 'color', 'Function', 'Date'
    ];

    /**
     * ec option axis的适用类型枚举
     *
     * @public
     */
    schemaHelper.EC_AXIS_APPLICABLE = ['category', 'value', 'time', 'log'];

    /**
     * ec option series的适用类型枚举
     *
     * @public
     */
    schemaHelper.EC_SERIES_APPLICABLE = [
        'line', 'bar', 'scatter', 'k', 'pie', 'radar', 'chord', 'force', 'map', 'gauge',
        'funnel', 'eventRiver', 'venn', 'treemap', 'tree', 'wordCloud', 'heatmap'
    ];

    /**
     * ec option itemStyle的适用类型枚举
     *
     * @public
     */
    schemaHelper.EC_ITEM_STYLE_APPLICABLE = schemaHelper.EC_SERIES_APPLICABLE.concat(
        ['markPoint', 'markLine']
    );

    /**
     * option path 是类似于这样的东西：
     *
     * 'tooltip.formatter'
     * 'axis[i].symbol' 或 'axis-i.symbol'
     *     当路途中有数组时，[i]表示直接进入数组元素定义继续检索。
     *     为什么兼容两种方式？因为url上[]是unsafe character，须encode，不好看。所以url上使用'-'。
     * 'series[i](pie,line).itemStyle.normal.borderColor'
     *     表示，解析到series[i]将当前context中applicable设置成pie和line。
     *     context中的applicable用于oneOf的选取和properties限定。
     * 'series[i](!pie,!line).itemStyle.normal.borderColor'
     *     表示，解析到series[i]将当前context中applicable设置成!pie和!line，即不能是pie也不能是line。
     *
     * Input: 'asdf(bb,cc)[i](dd,ee).zzz[i][i]. ee() .ff',
     * Output:
     * When arrayOnlyAtom is false: [
     *     {propertyName: 'asdf', applicable: new Set('bb,cc')},
     *     {arrayName: 'asdf[i]', applicable: new Set('dd,ee')},
     *     {propertyName: 'zzz'},
     *     {arrayName: 'zzz[i]'},
     *     {arrayName: 'zzz[i][i]'},
     *     {propertyName: 'ee', applicable: new Set()},
     *     {propertyName: 'ff'}
     * ]
     * When arrayOnlyAtom is true: [
     *     {arrayName: 'asdf[i]', applicable: new Set().reset('bb,cc').reset('dd,ee')},
     *     {arrayName: 'zzz[i][i]'},
     *     {propertyName: 'ee', applicable: new Set()},
     *     {propertyName: 'ff'}
     * ]
     *
     * @public
     * @param {string} optionPath
     * @param {Object=} options
     * @param {boolean=} [options.arrayOnlyAtom] default false
     * @param {boolean=} [options.ignoreEmptyItem] default false
     * @param {boolean=} [options.noCtxVar=false] If false, in 'Responsive%20Mobile-End',
     *                                            '-End' will be recognized as ctxVar.
     */
    schemaHelper.parseOptionPath = function (optionPath, options) {
        options = options || {};
        var errorInfo = 'Path is illegal: \'' + optionPath + '\'';
        dtLib.assert(
            optionPath && (optionPath = $.trim(optionPath)), errorInfo
        );
        // 因为mark down的url中不支持小括号（marked实现太简单了），所以小括号改用减号，数组不再用减号。
        // URL中的数组，不写[i]。
        // optionPath = optionPath.replace(/\-i/g, '-i]'); // 兼容 series-i表示数组的情况。
        var pathArr = optionPath.split(/\.|\[/);
        var retArr = [];

        for (var i = 0, len = pathArr.length; i < len; i++) {
            var itemStr = $.trim(pathArr[i]);
            if (options.ignoreEmptyItem && itemStr === '') {
                continue;
            }
            // 因为mark down的url中不支持小括号（marked实现太简单了），所以不用小括号，改用减号表示type。
            // match: 'asdf-bb' 'asdf-' 'i]-bb' 'i]-' 'asdf' 'i]'
            var regResult = itemStr.match(PATH_ITEM_REG) || [];

            var propertyName = regResult[1];
            var ctxVar = regResult[2];
            var ctxVarValue = regResult[3];

            if (options.noCtxVar) {
                propertyName += ctxVar || '';
                ctxVarValue = null;
            }

            var pa = {};
            var lastPa = retArr[retArr.length - 1];

            if (propertyName === 'i]') {
                pa.arrayName = (lastPa.arrayName || lastPa.propertyName) + '[i]';
            }
            else {
                pa.propertyName = propertyName;
            }

            if (ctxVar) {
                // FIXME
                // 暂时只支持  series(line),  不支持 series(line,bar,pie)，好像没啥用？
                // pa.applicable = new dtLib.Set(ctxVarValue);
                pa.typeEnum = ctxVarValue;
            }
            retArr.push(pa);
        }

        if (options.arrayOnlyAtom) {
            for (var i = 0, len = retArr.length; i < len;) {
                var thisItem = retArr[i];
                var nextItem = retArr[i + 1];
                if (nextItem && nextItem.arrayName) {
                    if (thisItem.applicable && !nextItem.applicable) {
                        nextItem.applicable = new dtLib.Set(thisItem.applicable);
                    }
                    retArr.splice(i, 1);
                }
                else {
                    i++;
                }
            }
        }

        return retArr;
    };

    /**
     * @see schemaHelper.parseOptionPath
     * @public
     * @param {Array.<Object>} optionsPathArr
     * @param {Object} options
     * @param {boolean} [options.useSquareBrackets] default false,
     *                                              ignore square brackets for array item.
     * @param {boolean} [options.html=false]
     */
    schemaHelper.stringifyOptionPath = function (optionPathArr, options) {
        options = options || {};
        var strArr = [];

        for (var i = 0, len = optionPathArr.length; i < len; i++) {
            var item = optionPathArr[i];
            var arrayName = item.arrayName;
            if (arrayName != null && !options.useSquareBrackets) {
                arrayName = arrayName.replace(/\[i\]/g, '');
            }
            var itemStr = item.propertyName || arrayName;

            if (item.typeEnum) {
                itemStr += '-' + item.typeEnum;
            }

            if (options.html) {
                itemStr = dtLib.encodeHTML(itemStr || '');
                if (i === optionPathArr.length - 1) {
                    itemStr = '<strong>' + itemStr + '</strong>';
                }
            }
            strArr.push(itemStr);
        }

        return strArr.join('.');
    };

    /**
     * 用于在 docJsonRenderer 绘制出的doctree中检索定义内容。
     * 可以返回多个检索结果。
     * optionPath和fuzzyPath的解释，参见 parseOptionPath。
     *
     * @public
     * @param {Object} docTree
     * @param {Object} args
     * @param {string=} [args.fuzzyPath] Like 'bbb(line,pie).ccc',
     *                                   using fuzzy mode, case insensitive.
     *                                   i.e. The query string above matches the result 'mm.zbbbx.yyy.cccl'.
     * @param {string=} [args.optionPath] Like 'aaa(line,pie).bbb.cc',
     *                                    must be matched accurately, case sensitive.
     * @param {string=} [args.anyText] Like 'somesomesome',
     *                                 using fuzzy mode, case insensitive..
     *                                 full text query (include descriptoin)
     * @param {boolean} [args.noCtxVar=false] If false, in 'Responsive%20Mobile-End',
     *                                   '-End' will be recognized as ctxVar.
     * @return {Array.<Object>} result
     * @throws {Error}
     */
    schemaHelper.queryDocTree = function (docTree, args) {
        args = args || {};
        var context = {
            originalDocTree: docTree,
            result: [],
            optionPath: args.optionPath
                ? schemaHelper.parseOptionPath(
                    args.optionPath,
                    {arrayOnlyAtom: true, noCtxVar: args.noCtxVar}
                )
                : null,
            fuzzyPath: args.fuzzyPath
                ? schemaHelper.parseOptionPath(
                    args.fuzzyPath,
                    {arrayOnlyAtom: true, ignoreEmptyItem: true, noCtxVar: args.noCtxVar}
                )
                : null,
            anyText: args.anyText && $.trim(args.anyText) || null
        };

        dtLib.assert(
            (context.optionPath || context.fuzzyPath || context.anyText)
            && (!!context.optionPath && !!context.fuzzyPath) === false,
            'invalid query string!'
        );

        if (context.optionPath || context.fuzzyPath) {
            queryRecursivelyByPath(docTree, context, 0);
        }
        else {
            queryRecursivelyByContent(docTree, context);
        }

        return context.result;

        function queryRecursivelyByPath(docTree, context, pathIndex) {
            if (!dtLib.isObject(docTree)) {
                return;
            }

            var pathItem = (context.optionPath || context.fuzzyPath)[pathIndex];
            var lastPathItem = (context.optionPath || context.fuzzyPath)[pathIndex - 1];

            if (!pathItem) {

                // Consider: query 'series-line', whether match 'series'?
                if (!docTree.isEnumParent
                    || context.fuzzyPath
                    || !lastPathItem
                    || !lastPathItem.typeEnum
                ) {
                    context.result.push(docTree);
                }

                if (!docTree.isEnumParent) {
                    // Enum children can be matched togather with their parent.
                    return;
                }
            }

            for (var i = 0, len = (docTree.children || []).length; i < len; i++) {
                var child = docTree.children[i];
                var nextPathIndex = null;

                if (docTree.isEnumParent) {
                    // if (isApplicableLoosely(child.applicable, subApplicable)) {
                    if (!lastPathItem
                        || !lastPathItem.typeEnum
                        || child.typeEnum === lastPathItem.typeEnum
                    ) {
                        nextPathIndex = pathIndex;
                    }
                    // else do nothing.
                }
                else if (context.optionPath
                    && pathAccurateMatch(child, pathItem.propertyName, pathItem.arrayName)
                ) {
                    nextPathIndex = pathIndex + 1;
                }
                else if (context.fuzzyPath) {
                    if (pathFuzzyMatch(child, pathItem.propertyName, pathItem.arrayName)) {
                        nextPathIndex = pathIndex + 1;
                    }
                    else {
                        nextPathIndex = pathIndex;
                    }
                }

                if (nextPathIndex != null) {
                    queryRecursivelyByPath(child, context, nextPathIndex);
                }
            }
        }

        function queryRecursivelyByContent(docTree, context) {
            if (!dtLib.isObject(docTree)) {
                return;
            }

            if (context.anyText
                && (
                    pathFuzzyMatch(docTree, context.anyText)
                    || (docTree.descriptionCN && docTree.descriptionCN.indexOf(context.anyText) >= 0)
                    || (docTree.descriptionEN && docTree.descriptionEN.indexOf(context.anyText) >= 0)
                )
            ) {
                context.result.push(docTree);
                return;
            }

            for (var i = 0, len = (docTree.children || []).length; i < len; i++) {
                queryRecursivelyByContent(docTree.children[i], context);
            }
        }

        function pathAccurateMatch(child, propertyName, arrayName) {
            return (child.propertyName != null && child.propertyName === propertyName)
                || (
                    child.arrayName != null && isMatchArrayName(
                        arrayName != null ? arrayName : propertyName,
                        child.arrayName
                    )
                );
        }

        function pathFuzzyMatch(child, propertyName, arrayName) {
            if (propertyName != null) {
                propertyName = propertyName.toLowerCase();
            }
            if (arrayName != null) {
                arrayName = arrayName.replace(/\[i\]/g, '').toLowerCase();
            }
            return (child.propertyName != null
                    && child.propertyName.toLowerCase().indexOf(propertyName) >= 0
                )
                || (child.arrayName != null
                    && child.arrayName.toLowerCase().indexOf(
                        arrayName != null ? arrayName : propertyName
                    ) >= 0
                );
        }

        function isMatchArrayName(nameShort, nameFull) {
            return nameShort && nameFull
                && nameFull.indexOf(nameShort) === 0
                && /^(\[i\])*$/.test(nameFull.slice(nameShort.length));
        }
    };

    /**
     * Build doc by schema.
     * A doc json will be generated, which is different from schema json.
     * Some business rules will be applied when doc being built.
     * For example, the doc of 'series' will be organized by chart type.
     *
     * @public
     * @param {Object} schema
     * @param {Object} renderBase
     * @param {Function} docRenderer params: renderBase, schemaItem, context
     *                               return: subRenderBase (MUST return the object for continue building)
     *                               See schemaHelper.buildDoc.docJsonRenderer.
     *                               The context object contains: {
     *                                   itemName {string},
     *                                   relationInfo {BuildDocInfo},
     *                                   selfInfo {BuildDocInfo},
     *                                   enumInfo: {BuildDocInfo},
     *                                   oneOfInfo: {BuildDocInfo},
     *                                   arrayFrom {Array.<Object>},
     *                                   applicable: {string|Array.<string>},
     *                                   optionPath: {Array.<Object>} Available only in 'doc' mode.
     *                                                                @see parseOptionPath method,
     *                                                                in arrayOnlyAtom mode
     *                                   schemaPath: {Array.<string>} Available only in 'schema' mode
     *                               }
     */
    schemaHelper.buildDoc = function (schema, renderBase, docRenderer) {

        docRenderer = docRenderer || schemaHelper.buildDoc.docJsonRenderer;

        buildRecursively(renderBase, schema.option, makeContext({optionPath: []}));

        // option count.
        // (function (renderBase) {
        //     result = 0;
        //     count(renderBase);
        //     function count(item) {
        //         if (!item) {
        //             return;
        //         }
        //         if (item.children && item.children.length) {
        //             for (var i = 0; i < item.children.length; i++) {
        //                 count(item.children[i]);
        //             }
        //         }
        //         else {
        //             result++;
        //         }
        //     }
        //     console.log('option item count: ' + result);
        // })(renderBase);

        return renderBase;

        function makeContext(props) {
            return $.extend(
                {
                    originalSchema: schema,
                    docRenderer: docRenderer
                },
                props
            );
        }

        function buildRecursively(renderBase, schemaItem, context) {
            if (!dtLib.isObject(schemaItem)) {
                return;
            }

            else if (schemaItem.anyOf
                && context.enumInfo !== BuildDocInfo.IS_ENUM_ITEM
            ) {
                handleEnumerate(renderBase, schemaItem, context);
            }
            else if (schemaItem.items) { // Array
                handleArray(renderBase, schemaItem, context);
            }
            else if (schemaItem.properties) { // Object and simple type
                handleObject(renderBase, schemaItem, context);
            }
            else {
                handleAtom(renderBase, schemaItem, context);
            }
        }

        function handleEnumerate(renderBase, schemaItem, context) {
            context.enumInfo = BuildDocInfo.IS_ENUM_PARENT;
            var subRenderBase = context.docRenderer(renderBase, schemaItem, context);
            var anyOf = schemaItem.anyOf;

            for (var j = 0, lj = anyOf.length; j < lj; j++) {
                // Make subOptionPath
                var subOptionPath;
                if (context.optionPath) {
                    subOptionPath = dtLib.clone(context.optionPath);
                    var optionPathItem = getLastOptionPathItem(subOptionPath);
                    optionPathItem.typeEnum = getTypeEnum(anyOf[j]);
                }

                buildRecursively(
                    subRenderBase,
                    anyOf[j],
                    makeContext({
                        itemName: context.itemName,
                        relationInfo: context.relationInfo,
                        enumInfo: BuildDocInfo.IS_ENUM_ITEM,
                        arrayFrom: context.arrayFrom ? context.arrayFrom.slice() : UNDEFINED,
                        optionPath: subOptionPath
                    })
                );
            }
        }

        function handleArray(renderBase, schemaItem, context) {
            context.selfInfo = BuildDocInfo.HAS_ARRAY_ITEMS;
            var subRenderBase = context.docRenderer(renderBase, schemaItem, context);
            var arrayFrom = context.arrayFrom;

            // Make subOptionPath
            var subOptionPath;
            if (context.optionPath) {
                subOptionPath = dtLib.clone(context.optionPath);
                var lastOptionPathItem = getLastOptionPathItem(subOptionPath);
                if (lastOptionPathItem.hasOwnProperty('propertyName')) {
                    lastOptionPathItem.arrayName = lastOptionPathItem.propertyName;
                    delete lastOptionPathItem.propertyName;
                }
                lastOptionPathItem.arrayName += '[i]';
            }

            // Make subSchemaPath
            var subSchemaPath;
            if (context.schemaPath) {
                subSchemaPath = context.schemaPath.slice();
                subSchemaPath.push('items');
            }

            buildRecursively(
                subRenderBase,
                schemaItem.items,
                makeContext({
                    itemName: context.itemName, // Actually this is array base item name.
                    relationInfo: BuildDocInfo.IS_ARRAY_ITEM,
                    arrayFrom: arrayFrom
                        ? (arrayFrom.push(schemaItem), arrayFrom)
                        : [schemaItem],
                    optionPath: subOptionPath,
                    schemaPath: subSchemaPath
                })
            );
        }

        function handleObject(renderBase, schemaItem, context) {
            context.selfInfo = BuildDocInfo.HAS_OBJECT_PROPERTIES;
            var subRenderBase = context.docRenderer(renderBase, schemaItem, context);
            var properties = schemaItem.properties;

            for (var propertyName in properties) {
                if (properties.hasOwnProperty(propertyName)) {

                    // Make subOptionPath
                    var subOptionPath;
                    if (context.optionPath) {
                        subOptionPath = dtLib.clone(context.optionPath);
                        subOptionPath.push({propertyName: propertyName});
                    }

                    // Make subSchemaPath
                    var subSchemaPath;
                    if (context.schemaPath) {
                        subSchemaPath = context.schemaPath.slice();
                        subSchemaPath.push('properties', propertyName);
                    }

                    buildRecursively(
                        subRenderBase,
                        properties[propertyName],
                        makeContext({
                            itemName: propertyName,
                            relationInfo: BuildDocInfo.IS_OBJECT_ITEM,
                            arrayFrom: UNDEFINED,
                            optionPath: subOptionPath,
                            schemaPath: subSchemaPath
                        })
                    );
                }
            }
        }

        function handleAtom(renderBase, schemaItem, context) {
            context.selfInfo = BuildDocInfo.IS_ATOM;
            context.docRenderer(renderBase, schemaItem, context);
        }

        function getLastOptionPathItem(optionPath) {
            return optionPath.length > 0 ? optionPath[optionPath.length - 1] : null;
        }
    };

    /**
     * @public
     * @type {Enum}
     */
    var BuildDocInfo = schemaHelper.buildDoc.BuildDocInfo = {

        // relation info
        IS_OBJECT_ITEM: 'isPropertyItem',
        IS_ARRAY_ITEM: 'isArrayItem',
        IS_DEFINITION_ITEM: 'isDefinitionItem',

        // self info
        HAS_OBJECT_PROPERTIES: 'hasObjectProperties', // An schemaItem with type of object and no properties defined
                                          // belongs to atom.
        HAS_ARRAY_ITEMS: 'hasArrayItems',
        IS_ATOM: 'isAtom', // SchemaItem with type of neither 'object' or 'array',
                           // and schemaItem with type of 'object' but do not has properties defined.

        // enum info
        IS_ENUM_ITEM: 'isEnumItem',
        IS_ENUM_PARENT: 'isEnumParent'
    };

    /**
     * @public
     */
    schemaHelper.buildDoc.docJsonRenderer = function (renderBase, schemaItem, context) {
        var selfInfo = context.selfInfo;
        var enumInfo = context.enumInfo;

        // Make subRenderBase.
        var subRenderBase = selfInfo === BuildDocInfo.HAS_ARRAY_ITEMS
            ? renderBase
            : makeSubRenderBase(schemaItem, context);

        // Make prefix, suffix and childrenBrief.
        var prefix = '';
        var suffix = '';
        var childrenBrief = '...';
        if (context.enumInfo !== BuildDocInfo.IS_ENUM_ITEM) {
            var itemName = context.itemName;
            if (itemName) {
                prefix = '<span class="ecdoc-api-tree-text-prop">' + encodeHTML(itemName) + '</span>';
                if (!docUtil.getGlobalArg('pureTitle')) {
                    prefix += ': ';
                }
            }
            var arrayFrom = context.arrayFrom;
            if (arrayFrom) {
                var tmpArr = new Array(arrayFrom.length + 1);
                prefix += tmpArr.join('[');
                suffix += tmpArr.join(']');
            }
        }
        else {
            childrenBrief = 'type: \'' + encodeHTML(getTypeEnum(schemaItem)) + '\', ...';
        }

        // Make tree item text and children.
        var children = [];
        if (selfInfo === BuildDocInfo.HAS_OBJECT_PROPERTIES) {
            subRenderBase.childrenPre = prefix + '{';
            subRenderBase.childrenPost = '}' + suffix + ',';
            subRenderBase.childrenBrief = childrenBrief;
            children.push(subRenderBase);
        }
        else if (selfInfo === BuildDocInfo.IS_ATOM) {
            var defaultValueText = schemaHelper.getDefaultValueText(
                subRenderBase.defau, {getBrief: true}
            );
            subRenderBase.text = prefix;
            if (!docUtil.getGlobalArg('pureTitle')) {
                subRenderBase.text += ''
                + '<span class="ecdoc-api-tree-text-default">' + encodeHTML(defaultValueText) + '</span>'
                + suffix + ',';
            }
            children.push(subRenderBase);
        }
        else if (enumInfo === BuildDocInfo.IS_ENUM_PARENT) { // selfInfo == undefined
            subRenderBase.childrenPre = prefix;
            subRenderBase.childrenPost = suffix + ',';
            subRenderBase.childrenBrief = childrenBrief;
            children.push(subRenderBase);
        }

        // Assign children.
        if (children.length) {
            renderBase.children = (renderBase.children || []).concat(children);
        }

        return subRenderBase;

        function makeSubRenderBase(schemaItem, context) {
            var result = retrieveInfo(schemaItem, context);
            var hasObjectProperties = context.selfInfo === BuildDocInfo.HAS_OBJECT_PROPERTIES;
            var isEnumParent = context.enumInfo === BuildDocInfo.IS_ENUM_PARENT;
            var isEnumItem = context.enumInfo === BuildDocInfo.IS_ENUM_ITEM;
            var sub = {
                value: 'ecapidocid-' + dtLib.localUID(),
                hasObjectProperties: hasObjectProperties,
                isEnumParent: isEnumParent,
                // enumerateBy: isEnumParent ? schemaItem.enumerateBy.slice() : UNDEFINED,
                type: schemaItem.type,
                typeEnum: isEnumItem ? getTypeEnum(schemaItem) : null,
                parent: renderBase,
                descriptionCN: result.descriptionCN,
                descriptionEN: result.descriptionEN,
                defau: result.defau,
                optionPathForHash: schemaHelper.stringifyOptionPath(
                    context.optionPath, {useSquareBrackets: false}
                ),
                optionPathHTML: schemaHelper.stringifyOptionPath(
                    context.optionPath, {useSquareBrackets: true, html: true}
                ),
                defaultValueText: schemaHelper.getDefaultValueText(result.defau),
                itemEncodeHTML: false,
                tooltipEncodeHTML: false
            };

            if (context.relationInfo === BuildDocInfo.IS_ARRAY_ITEM) {
                sub.arrayName = context.itemName + (new Array(context.arrayFrom.length + 1)).join('[i]');
            }
            else { // IS_OBJECT_ITEM
                sub.propertyName = context.itemName; // For query.
            }

            return sub;
        }

        function retrieveInfo(schemaItem, context) {
            // Array parent has no renderBase, so consider these cases:
            //
            // Case 1:
            //      {
            //          name: 'visualMap',
            //          type: 'Array',
            //          descriptionCN: 'visualMap introduce',
            //          items: {
            //              anyOf: [
            //                  {
            //                      type: 'continuous',
            //                      descriptionCN: 'visualMapContinuous introduce'
            //                  },
            //                  {
            //                      type: 'piecewise',
            //                      descriptionCN: 'visualMapPiecewise introduce'
            //                  }
            //              ]
            //          }
            //      }
            //      The real renderBase is on "items",
            //      where we need show description of 'visualMap'.
            //
            // Case 2:
            //      {
            //          name: 'data',
            //          type: 'Array',
            //          descriptionCN: 'description of data',
            //          items: {
            //              properties: {
            //                  ...
            //              }
            //          }
            //      }
            //      The real renderBase is on "items",
            //      where we need show description of 'data'.

            var arrayFrom = (context.arrayFrom || []).slice();
            var item = (
                arrayFrom.length && (
                    context.enumInfo === BuildDocInfo.IS_ENUM_PARENT
                    || (context.relationInfo === BuildDocInfo.IS_ARRAY_ITEM
                        && context.enumInfo !== BuildDocInfo.IS_ENUM_ITEM
                    )
                )
            ) ? arrayFrom[0] : schemaItem;

            var result = {
                descriptionCN: item.descriptionCN,
                descriptionEN: item.descriptionEN,
                defau: {type: item.type}
            };

            if (item.hasOwnProperty('default')) {
                result.defau['default'] = item['default'];
            }

            return result;
        }
    };

    /**
     * 是否合法的type
     */
    schemaHelper.isValidEcOptionType = function (type) {
        return dtLib.arrayIndexOf(schemaHelper.EC_OPTION_TYPE, type) !== -1;
    };

    /**
     * @return {Array}
     */
    schemaHelper.getEcOptionTypes = function () {
        return dtLib.clone(schemaHelper.EC_OPTION_TYPE);
    };

    /**
     * 得到默认值的简写，在一行之内显示。
     * defau中，设置了default但值是undefined，和没有设置default，是不一样的。
     *
     * @public
     * @param {Object} defau
     * @param {Object} [defau.default]
     * @param {Object} [defau.defaultExplanation]
     * @param {Object} options
     * @param {boolean} [options.getBrief] default false, otherwise return full text.
     * @param {Object} [options.briefMapping]
     * @return {strting} default value text
     */
    schemaHelper.getDefaultValueText = function (defau, options) {
        options = options || {};
        var briefMapping = $.extend(
            {
                'object': '{...}',
                'array': '[...]',
                'regexp': '/.../',
                'function': 'Function',
                '?': '...'
            },
            options.briefMapping
        );

        if (defau.hasOwnProperty('default')) {
            var defaultValue = defau['default'];
            var type = $.type(defaultValue);

            if ('null,undefined,number,boolean'.indexOf(type) >= 0) {
                return defaultValue + '';
            }
            else if (type === 'string') {
                return (
                    options.getBrief
                        ? cutString(defaultValue, DEFAULT_VALUE_BRIEF_LENGTH)
                        : defaultValue
                );
            }
            else {
                if (options.getBrief) {
                    return briefMapping[type] || briefMapping['?'];
                }
                else {
                    try {
                        // FIXME
                        // json2?
                        return JSON.stringify(defaultValue, null, 4);
                    }
                    catch (e) {
                        return defaultValue + '';
                    }
                }
            }
        }
        else {
            if (options.getBrief) {
                var type = docUtil.normalizeToArray(defau.type);
                return type.length === 1 // Only one type, can be sure what the brief looks like.
                    && briefMapping[type[0].toLowerCase()]
                    || briefMapping['?'];
            }
            else {
                return '';
            }
        }
    };

    /**
     * @inner
     */
    function getTypeEnum(schemaItem) {
        // 这里是硬编码：anyOf的子节点必须有properties，必须有type属性。
        var typeEnum = schemaItem.properties.type['default'];
        return removeQuotation(typeEnum);
    }

    /**
     * @inner
     */
    function removeQuotation(value, noQuotationReturnNull) {
        var matchResult = value.match(QUOTATION_REG_SINGLE)
            || value.match(QUOTATION_REG_DOUBLE);
        if (matchResult) {
            return matchResult[1];
        }
        return noQuotationReturnNull ? null : value;
    }

    /**
     * @inner
     * @param {string} value 包含引号
     * @param {number} length
     */
    function cutString(value, length) {
        var removed = removeQuotation(value, true);

        return removed != null
            ? '\'' + cut(removed) + '\''
            : cut(value);

        function cut(str) {
            return str.length > length ? (str.slice(0, length) + '...') : str;
        }
    }

    return schemaHelper;
});