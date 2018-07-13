define(function (require) {

    /**
     * [optionPath reserved characters]:
     * a-z、A-Z、0-9、[、]、-、All of non-ascii
     */

    /**
     * [Schema Format]：
     * {
     *     type: 'Array', 'Object', 'string', 'Function', or ['Array', 'string'],
     *     description: 'description text',
     *     default: string, default value,
     *     properties: If type is `'Object'`,
     *         {
     *             type: 'Object',
     *             properties: {
     *                 objAttr1: {... objAttr1 definition ...},
     *                 objAttr2: {... objAttr2 definition ...}
     *             }
     *         }
     *     items: If type is `'Array'`
     *         {
     *             type: 'Array',
     *             items: {... item definition ...}
     *         }
     *         or
     *         {
     *             type: 'Array',
     *             items: {
     *                 anyOf: [
     *                    {
     *                        type: 'Object',
     *                        properties: {
     *                            type: {... A property named `type` (that is, typeEnum) should exists ...},
     *                            attr2: {... attr2 definition ...}
     *                        }
     *                    },
     *                    ...
     *                 ]
     *             }
     *         }
     * }
     */

    /**
     * Doc tree structure:
     * (1)
     * {
     *     propertyName: 'option',
     *     children: [{
     *         propertyName: 'xAxis' // Use data[i] instead of data level.
     *         children: [...]
     *     }, {
     *         propertyName: 'color'
     *     }, ...]
     * }
     * (2)
     * {
     *     propertyName: 'legend',
     *     children: [{
     *         propertyName: 'data', // Use `'data[i]'` instead of data level.
     *         arrayDepth: 1,  // `1` means `data[i]`, `2` means `data[i][i]`.
     *         children: [{
     *             propertyName: 'id'
     *         }, ...]
     *     }, ...]
     * }
     * (3)
     * {
     *     propertyName: 'option',
     *     children: [{
     *         propertyName: 'series',
     *         arrayDepth: 1,
     *         isEnumParent: true,
     *         children: [{
     *             // No `propertyName` in type enum node.
     *             typeEnum: 'line',
     *             children: [{
     *                 propertyName: 'id'
     *             }, ...]
     *         }, {
     *             typeEnum: 'bar',
     *             children: [{
     *                 propertyName: 'id'
     *             }, ...]
     *         }, ...]
     *     }, ...]
     * }
     */

    // References
    var $ = require('jquery');
    var dtLib = require('dt/lib');
    var docUtil = require('./docUtil');
    var encodeHTML = dtLib.encodeHTML;

    // Inner constants
    var DEFAULT_VALUE_BRIEF_LENGTH = 20;
    var QUOTATION_REG_SINGLE = /^\s*'(.*)'\s*$/; // 中间也含有引号，因为贪婪，所以可以不管。
    var QUOTATION_REG_DOUBLE = /^\s*"(.*)"\s*$/; // 中间也含有引号，因为贪婪，所以可以不管。
    // var PATH_ITEM_REG = /^(\w+|i\])(\-([a-zA-Z_ \/,]*))?$/; // Only ascii.
    var PATH_ITEM_REG = /^([^\[\]\-]+|i\])(\-([0-9a-zA-Z_ \/,]*))?$/; // Also 中文.

    /**
     * @public
     */
    var schemaHelper = {};

    // Relation info:
    var IS_OBJECT_ITEM = 'isPropertyItem';
    var IS_ARRAY_ITEM = 'isArrayItem';

    // Enum info:
    var IS_ENUM_ITEM = 'isEnumItem';
    var IS_ENUM_PARENT = 'isEnumParent';

    /**
     * option path:
     *
     * `'tooltip.formatter'`
     * `'axis[i].symbol'` (the same as `'axis.symbol'` in query)
     * `'series[i]-line.symbol'` (the same as `'series-line.symbol'` in query)
     * where `'line'` is `typeEnum`, and `'[i]'` will be removed.
     *
     * @public
     * @param {string} optionPath
     * @param {Object=} options
     * @param {boolean=} [options.noTypeEnum=false] If false, in 'Responsive%20Mobile-End',
     *        '-End' will be recognized as ctxVar.
     * @return {Array.<Object>} An array of:
     *         {
     *             // either arrayName (for array) or propertyName (for object)
     *             propertyName: 'xxx',
     *             // A string indicates the type enum.
     *             typeEnum: 'line'
     *         }
     */
    schemaHelper.parseOptionPath = function (optionPath, options) {
        options = options || {};

        var errorInfo = 'Path is illegal: \'' + optionPath + '\'';
        dtLib.assert(
            optionPath && (optionPath = $.trim(optionPath)), errorInfo
        );

        var pathArr = optionPath.replace(/\[i\]/g, '').split(/\./);
        var retArr = [];

        for (var i = 0, len = pathArr.length; i < len; i++) {
            var itemStr = $.trim(pathArr[i]);
            // if (options.ignoreEmptyItem && itemStr === '') {
            if (itemStr === '') {
                continue;
            }
            // match: 'asdf-bb' 'asdf-' 'i]-bb' 'i]-' 'asdf' 'i]'
            var regResult = itemStr.match(PATH_ITEM_REG) || [];

            var propertyName = regResult[1];
            var typeEnumSegment = regResult[2]; // '-line'
            var typeEnum = regResult[3]; // 'line'

            if (options.noTypeEnum) {
                propertyName += typeEnumSegment || '';
                typeEnum = null;
            }

            retArr.push({
                propertyName: propertyName,
                typeEnum: typeEnum ? typeEnum : null
            });
        }

        return retArr;
    };

    /**
     * @public
     * @param {Object} docTree
     * @param {Object} args
     * @param {string=} [args.fuzzyPath] Like 'bbb(line,pie).ccc',
     *        using fuzzy mode, case insensitive.
     *        i.e. The query string above matches the result 'mm.zbbbx.yyy.cccl'.
     * @param {string=} [args.optionPath] Like 'aaa(line,pie).bbb.cc',
     *        must be matched accurately, case sensitive.
     * @param {string=} [args.anyText] Like 'somesomesome',
     *        using fuzzy mode, case insensitive..
     *        full text query (include descriptoin)
     * @param {boolean} [args.noTypeEnum=false] If false, in 'Responsive%20Mobile-End',
     *        '-End' will be recognized as ctxVar.
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
                    {noTypeEnum: args.noTypeEnum}
                )
                : null,
            fuzzyPath: args.fuzzyPath
                ? schemaHelper.parseOptionPath(
                    args.fuzzyPath,
                    {noTypeEnum: args.noTypeEnum}
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

            if (context.anyText && (
                pathFuzzyMatch(docTree, context.anyText)
                || (docTree.description && docTree.description.indexOf(context.anyText) >= 0)
            )) {
                context.result.push(docTree);
                return;
            }

            for (var i = 0, len = (docTree.children || []).length; i < len; i++) {
                queryRecursivelyByContent(docTree.children[i], context);
            }
        }

        function pathAccurateMatch(child, propertyName, arrayName) {
            return child.propertyName != null && child.propertyName === propertyName;
        }

        function pathFuzzyMatch(child, propertyName, arrayName) {
            if (propertyName != null) {
                propertyName = propertyName.toLowerCase();
            }
            if (arrayName != null) {
                arrayName = arrayName.replace(/\[i\]/g, '').toLowerCase();
            }
            return child.propertyName != null
                && child.propertyName.toLowerCase().indexOf(propertyName) >= 0;
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
     */
    schemaHelper.buildDoc = function (schema, renderBase) {

        buildRecursively(renderBase, schema.option);

        return renderBase;

        // To reduce GC cost, pass context parameters directly.
        function buildRecursively(renderBase, schemaItem, optionPathItemName, relationInfo, enumInfo, arrayFrom) {

            if (!dtLib.isObject(schemaItem)) {
                return;
            }

            if (schemaItem.anyOf) {
                var subRenderBase = renderDocItem(
                    'isEnumParent', renderBase, schemaItem,
                    optionPathItemName, relationInfo, IS_ENUM_PARENT, arrayFrom
                );
                for (var j = 0; j < schemaItem.anyOf.length; j++) {
                    buildRecursively(
                        subRenderBase,
                        schemaItem.anyOf[j],
                        optionPathItemName,
                        null,
                        IS_ENUM_ITEM,
                        arrayFrom ? arrayFrom.slice() : null
                    );
                }
            }
            else if (schemaItem.items) {
                var subRenderBase = renderDocItem(
                    'hasArrayItems', renderBase, schemaItem,
                    optionPathItemName, relationInfo, enumInfo, arrayFrom
                );
                buildRecursively(
                    subRenderBase,
                    schemaItem.items,
                    optionPathItemName, // Actually this is array base item name.
                    IS_ARRAY_ITEM,
                    null,
                    arrayFrom
                        ? (arrayFrom.push(schemaItem), arrayFrom)
                        : [schemaItem]
                );
            }
            else if (schemaItem.properties) {
                var subRenderBase = renderDocItem(
                    'hasObjectProperties', renderBase, schemaItem,
                    optionPathItemName, relationInfo, enumInfo, arrayFrom
                );
                var properties = schemaItem.properties;

                for (var propertyName in schemaItem.properties) {
                    if (properties.hasOwnProperty(propertyName)) {
                        buildRecursively(
                            subRenderBase,
                            schemaItem.properties[propertyName],
                            propertyName,
                            IS_OBJECT_ITEM,
                            null,
                            null
                        );
                    }
                }
            }
            // SchemaItem with type of neither 'object' or 'array', and schemaItem with type of 'object'
            // but do not has properties defined.
            else {
                renderDocItem(
                    'isAtom', renderBase, schemaItem,
                    optionPathItemName, relationInfo, enumInfo, arrayFrom
                );
            }
        }
    };

    function renderDocItem(
        handlerName, renderBase, schemaItem, optionPathItemName, relationInfo, enumInfo, arrayFrom
    ) {
        var subRenderBase = renderBase;
        var typeEnum = enumInfo === IS_ENUM_ITEM ? getTypeEnum(schemaItem) : null;

        // makeSubRenderBase
        if (handlerName !== 'hasArrayItems') {
            var descInfo = retrieveDescFromSchemaItem(schemaItem, relationInfo, enumInfo, arrayFrom);
            subRenderBase = {
                value: 'id-' + dtLib.localUID(),
                parent: renderBase,
                hasObjectProperties: handlerName === 'hasObjectProperties',
                isEnumParent: enumInfo === IS_ENUM_PARENT,
                type: schemaItem.type,
                typeEnum: typeEnum,
                description: descInfo.description,
                defau: descInfo.defau,
                // optionPath: context.optionPath.slice(),
                defaultValueText: schemaHelper.getDefaultValueText(descInfo.defau),
                itemEncodeHTML: false,
                tooltipEncodeHTML: false
            };

            if (enumInfo !== IS_ENUM_ITEM) {
                subRenderBase.propertyName = optionPathItemName;
            }
            if (relationInfo === IS_ARRAY_ITEM) {
                subRenderBase.arrayDepth = arrayFrom.length;
            }

            (renderBase.children = renderBase.children || []).push(subRenderBase);
        }

        // Make prefix, suffix and childrenBrief.
        var prefix = '';
        var suffix = '';
        var childrenBrief = '...';
        if (enumInfo === IS_ENUM_ITEM) {
            childrenBrief = 'type: \'' + encodeHTML(typeEnum) + '\', ...';
        }
        else {
            if (optionPathItemName) {
                prefix = '<span class="ecdoc-api-tree-text-prop">' + encodeHTML(optionPathItemName) + '</span>';
                if (!docUtil.getGlobalArg('pureTitle')) {
                    prefix += ': ';
                }
            }
            if (arrayFrom && arrayFrom.length) {
                // Simple optimize.
                if (arrayFrom.length === 1) {
                    prefix += '[';
                    suffix += ']';
                }
                else {
                    var tmpArr = new Array(arrayFrom.length + 1);
                    prefix += tmpArr.join('[');
                    suffix += tmpArr.join(']');
                }
            }
        }

        // Make tree item text and children.
        if (handlerName === 'hasObjectProperties') {
            subRenderBase.childrenPre = prefix + '{';
            subRenderBase.childrenPost = '}' + suffix + ',';
            subRenderBase.childrenBrief = childrenBrief;
        }
        else if (handlerName === 'isAtom') {
            var defaultValueText = schemaHelper.getDefaultValueText(
                subRenderBase.defau, {getBrief: true}
            );
            subRenderBase.text = prefix;
            if (!docUtil.getGlobalArg('pureTitle')) {
                subRenderBase.text += ''
                + '<span class="ecdoc-api-tree-text-default">' + encodeHTML(defaultValueText) + '</span>'
                + suffix + ',';
            }
        }
        else if (handlerName === 'isEnumParent') {
            subRenderBase.childrenPre = prefix;
            subRenderBase.childrenPost = suffix + ',';
            subRenderBase.childrenBrief = childrenBrief;
        }

        return subRenderBase;
    }

    function retrieveDescFromSchemaItem(schemaItem, relationInfo, enumInfo, arrayFrom) {
        // Array parent has no renderBase, so consider these cases:
        //
        // Case 1:
        //      {
        //          name: 'visualMap',
        //          type: 'Array',
        //          description: 'visualMap introduce',
        //          items: {
        //              anyOf: [
        //                  {
        //                      type: 'continuous',
        //                      description: 'visualMapContinuous introduce'
        //                  },
        //                  {
        //                      type: 'piecewise',
        //                      description: 'visualMapPiecewise introduce'
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
        //          description: 'description of data',
        //          items: {
        //              properties: {
        //                  ...
        //              }
        //          }
        //      }
        //      The real renderBase is on "items",
        //      where we need show description of 'data'.

        var arrayFrom = (arrayFrom || []).slice();
        var item = (
            arrayFrom && arrayFrom.length && (
                enumInfo === IS_ENUM_PARENT
                || (relationInfo === IS_ARRAY_ITEM
                    && enumInfo !== IS_ENUM_ITEM
                )
            )
        ) ? arrayFrom[0] : schemaItem;

        var result = {
            description: item.description,
            defau: {type: item.type}
        };

        if (item.hasOwnProperty('default')) {
            result.defau['default'] = item['default'];
        }

        return result;
    }

    /**
     * 得到默认值的简写，在一行之内显示。
     * defau中，设置了default但值是undefined，和没有设置default，是不一样的。
     *
     * @public
     * @param {Object} defau
     * @param {Object} [defau.default]
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

    // /**
    //  * @param {Object} schema Where schema Will be filled.
    //  * @param {Object} descSchema
    //  */
    // schemaHelper.fillSchemaWithDescription = function (schema, descSchema) {

    //     buildRecursively(descSchema.option, schema.option);

    //     function buildRecursively(descSchemaItem, schemaItem) {
    //         if (!dtLib.isObject(schemaItem)) {
    //             return;
    //         }

    //         if (schemaItem.anyOf) {
    //             schemaItem.anyOf.forEach(function (item, j) {
    //                 buildRecursively(descSchemaItem.anyOf[j], item);
    //             });
    //         }
    //         else if (schemaItem.items) {
    //             buildRecursively(descSchemaItem.items, schemaItem.items);
    //         }
    //         else if (schemaItem.properties) {
    //             Object.keys(schemaItem.properties).forEach(function (propertyName) {
    //                 buildRecursively(
    //                     descSchemaItem.properties[propertyName],
    //                     schemaItem.properties[propertyName]
    //                 );
    //             });
    //         }
    //         else {
    //             schemaItem.description = descSchemaItem.description;
    //         }
    //     }
    // };

    schemaHelper.getOptionPathForHash = function (treeItem) {
        return buildOptionPathFromTreeItem(treeItem);
    };

    schemaHelper.getOptionPathForHTML = function (treeItem) {
        return buildOptionPathFromTreeItem(treeItem, true, true);
    };

    function buildOptionPathFromTreeItem(treeItem, useSquareBrackets, html) {
        var optionPath = [];
        var notLeaf;

        // Exclude the root.
        while (treeItem && treeItem.parent && treeItem.parent.parent) {
            var typeEnum = treeItem.typeEnum;
            var itemStr = typeEnum
                ? getPropertyName(treeItem.parent, useSquareBrackets) + '-' + typeEnum
                : getPropertyName(treeItem, useSquareBrackets);

            if (html) {
                itemStr = dtLib.encodeHTML(itemStr || '');
                if (!notLeaf) {
                    itemStr = '<strong>' + itemStr + '</strong>';
                }
            }

            optionPath.push(itemStr);

            treeItem = treeItem.parent;
            if (typeEnum) {
                treeItem = treeItem.parent;
            }
            notLeaf = true;
        }

        return optionPath.reverse().join('.');
    }

    function getPropertyName(treeItem, useSquareBrackets) {
        var propertyName = treeItem.propertyName;
        var arrayDepth = treeItem.arrayDepth;
        if (useSquareBrackets && arrayDepth) {
            if (arrayDepth === 1) {
                propertyName += '[i]';
            }
            else {
                propertyName += new Array(arrayDepth + 1).join('[i]');
            }
        }
        return propertyName;
    }

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
