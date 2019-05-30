/**
 * @file js 代码打印相关
 * @author sushuang(sushuang@baidu.com)
 */
define(function (require) {

    var $ = require('jquery');

    var DEFAULT_CODE_INDENT_BASE = 4;
    var DEFAULT_LINE_BREAK = '\n';
    var DEFAULT_QUOTATION_MARK = '"';
    // from json2.js
    var ESCAPABLE = {
        '"': /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, // jshint ignore:line
        '\'': /[\\\'\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g // jshint ignore:line
    };
    // from json2.js, table of character substitutions
    var ESCAPABLE_META_BASE = {
        '\b': '\\b',
        '\t': '\\t',
        '\n': '\\n',
        '\f': '\\f',
        '\r': '\\r',
        '\\': '\\\\'
    };
    var ESCAPABLE_META = {
        '"': $.extend({}, ESCAPABLE_META_BASE, {'"' : '\\"'}),
        '\'': $.extend({}, ESCAPABLE_META_BASE, {'\'' : '\\\''})
    };

    var lib = {};

    /**
     * @public
     * @type {Array}
     */
    lib.jsReservedWords = [
        'break', 'delete', 'function', 'return', 'typeof',
        'case', 'do', 'if', 'switch', 'var', 'catch', 'else',
        'in', 'this', 'void', 'continue', 'false', 'instanceof',
        'throw', 'while', 'debugger', 'finally', 'new', 'true',
        'with', 'default', 'for', 'null', 'try', 'abstract',
        'double', 'goto', 'native', 'static', 'boolean', 'enum',
        'implements', 'package', 'super', 'byte', 'export', 'import',
        'private', 'synchronized', 'char', 'extends', 'int',
        'protected', 'throws', 'class', 'final', 'interface', 'public',
        'transient', 'const', 'float', 'long', 'short', 'volatile'
    ];

    /**
     * @public
     * @type {Object}
     */
    lib.jsReservedWordsMap = (function (jsReservedWords) {
        var map = {};
        for (var i = 0, len = jsReservedWords.length; i < len; i++) {
            map[jsReservedWords[i]] = 1;
        }
        return map;
    })(lib.jsReservedWords);

    /**
     * 得到js object（如echarts option）的字符串形式。
     * 目标是打印成能eval回来的字符串。
     * ecOption并不是普通的可以json stringify的对象，里面还额外有function、regExp、Date需要处理。
     * 打印效果例如:
     * {
     *      color: '#48b',
     *      width: 2,
     *      type: 'solid'
     * }
     *
     * @public
     * @param {Object} object
     * @param {Object=} options
     * @param {number=} [options.singleLineDepth] 在此层级内，一定以单行模式渲染。
     *                                            在此层级（包含）外，一定以多行模式渲染。
     *                                            0表示最外层级。传空则表示不开启此功能。
     *                                            例如传入1，则可以构造出这种结果：
     *                                            [
     *                                                {pos: {x: 10, y: 10}, name: 'Beijing'},
     *                                                {pos: {x: 20, y: 50}, name: 'Nanjing'},
     *                                                {pos: {x: 30, y: 70}, name: 'Kaifeng'}
     *                                            ]
     * @param {string=} [options.quotationMark] defualt: '"'，只可为 '\'' 或者 '"'
     * @param {number=} [options.indentBase] 基础的缩进空格数，默认为4
     * @param {number=} [options.lineBreak] 换行符，默认为'\n'
     * @param {boolean=} [options.compress] 是否完全单行模式，默认false。
     * @param {string=} [options.errorMessage] 默认为''
     * @return {string} object的字符串
     */
    lib.stringifyJSObject = function (object, options) {
        options = options || {};

        if (options.indentBase == null) {
            options.indentBase = DEFAULT_CODE_INDENT_BASE;
        }
        if (options.lineBreak == null) {
            options.lineBreak = DEFAULT_LINE_BREAK;
        }
        if (options.quotationMark == null) {
            options.quotationMark = DEFAULT_QUOTATION_MARK;
        }
        if (options.quotationMark !== '"' && options.quotationMark !== '\'') {
            throw new Error('Illegal quotation mark: ' + options.quotationMark);
        }

        if (options.compress) {
            options.indentBase = 0;
            options.lineBreak = '';
        }
        options.inlineDelimiterSpace = options.compress ? '' : ' ';

        try {
            // 遍历object，将function、regExp、Date字符串化
            var result = travelPrintJSObject(object, null, 0, options);
            return result.str;
        }
        catch (e) {
            return options.errorMessage || '';
        }
    };

    /**
     * 解释同stringifyJSObject
     *
     * @public
     */
    lib.stringifyJSObject2HTML = function (object, errorMessage, options) {
        return '<pre>' + lib.stringifyJSObject(object, errorMessage, options) + '</pre>';
    };

    /**
     * @inner
     * @throws {Error} If illegal type
     */
    function travelPrintJSObject(obj, key, depth, options) {
        var singleLineDepth = options.singleLineDepth;
        var lineMode = singleLineDepth != null
            ? (singleLineDepth <= depth ? 'single' : 'multiple')
            : 'auto';
        var quotationMark = options.quotationMark;
        var indentBase = options.indentBase;
        var lineBreak = options.lineBreak;
        var inlineDelimiterSpace = options.inlineDelimiterSpace;

        var objType = $.type(obj);
        var codeIndent = (new Array(depth * indentBase + 1)).join(' ');
        // 因为为了代码美化，有可能不换行（如[1, 212, 44]），所以由父来添加子的第一个indent。
        var subCodeIndent = (new Array((depth + 1) * indentBase + 1)).join(' ');
        var hasLineBreak = false;

        var preStr = key != null ? (escapeJSObjectKey(key, quotationMark) + ': ' ) : '';
        var str;

        switch (objType) {
            case 'function':
                hasLineBreak = lineMode !== 'single';
                str = preStr + lib.printFunction(obj, depth, indentBase);
                break;
            case 'regexp':
                str = preStr + quotationMark + obj + quotationMark;
                break;
            case 'date':
                str = preStr + toLiteralDate(obj, quotationMark);
                break;
            case 'array':
                // array默认是单行模式，如[12, 23, 34]。
                // 但如果array中子节点有换行，则array就以多行模式渲染。
                var childBuilder = [];
                for (var i = 0, len = obj.length; i < len; i++) {
                    var subResult = travelPrintJSObject(obj[i], null, depth + 1, options);
                    childBuilder.push(subResult.str);
                    if (subResult.hasLineBreak) {
                        hasLineBreak = true;
                    }
                }
                if (lineMode === 'multiple') {
                    hasLineBreak = true;
                }
                var tail = hasLineBreak ? lineBreak : '';
                var delimiter = ',' + (hasLineBreak ? (lineBreak + subCodeIndent) : inlineDelimiterSpace);
                var subPre = hasLineBreak ? subCodeIndent : '';
                var endPre = hasLineBreak ? codeIndent : '';
                str = ''
                    + preStr + '[' + tail
                    + subPre + childBuilder.join(delimiter) + tail
                    + endPre + ']';
                break;
            case 'object':
                // object默认以多行模式渲染（object以单行模式渲染更好看的情况不多）。
                var childBuilder = [];
                for (var i in obj) {
                    if (obj.hasOwnProperty(i)) {
                        var subResult = travelPrintJSObject(obj[i], i, depth + 1, options);
                        childBuilder.push(subResult.str);
                    }
                }
                hasLineBreak = lineMode !== 'single';
                var tail = hasLineBreak ? lineBreak : '';
                var delimiter = ',' + (hasLineBreak ? (lineBreak + subCodeIndent) : inlineDelimiterSpace);
                var subPre = hasLineBreak ? subCodeIndent : '';
                var endPre = hasLineBreak ? codeIndent : '';
                str = ''
                    + preStr + '{' + tail
                    + subPre + childBuilder.join(delimiter) + tail
                    + endPre + '}';
                break;
            case 'boolean':
            case 'null':
            case 'undefined': // 这里就不写 void 0 之类的了，为了好看。
                str = preStr + String(obj);
                break;
            case 'number':
                str = preStr + (isFinite(obj) ? String(obj) : 'null');
                break;
            case 'string':
                str = preStr + toLiteralString(obj, quotationMark);
                break;
            default:
                throw new Error('Illegal type "' + objType + '" at "' + obj + '"');
        }

        return {
            str: str,
            hasLineBreak: hasLineBreak
        };
    }

    /**
     * @inner
     */
    function escapeJSObjectKey(key, quotationMark) {
        // echarts option 的key目前都是不用加引号的，所以为了编辑方便，统一不加引号，除非遇到必须加引号的情况。
        if (lib.jsReservedWordsMap[key]) {
            return quotationMark + key + quotationMark;
        }
        // @see http://www.ecma-international.org/ecma-262/5.1/#sec-7.6
        // 没有严格按标准来。
        else if (!/^[a-zA-Z_$][a-zA-Z0-9_$]*$/.test(key)) {
            return toLiteralString(key, quotationMark);
        }
        else {
            return key;
        }
    }

    /**
     * @see json2.js
     * @inner
     * @param {string} string can not be null or undefined
     */
    function toLiteralString(string, quotationMark) {
        // If the string contains no control characters, no quote characters, and no
        // backslash characters, then we can safely slap some quotes around it.
        // Otherwise we must also replace the offending characters with safe escape
        // sequences.
        var escapable = ESCAPABLE[quotationMark];
        escapable.lastIndex = 0;
        var meta = ESCAPABLE_META[quotationMark];
        var escapedstr = escapable.test(string)
            ? string.replace(escapable, function (a) {
                var c = meta[a];
                return typeof c === 'string'
                    ? c
                    : '\\u' + ('0000' + a.charCodeAt(0).toString(16)).slice(-4);
            })
            : string;

        return quotationMark + escapedstr + quotationMark;
    }

    /**
     * @see json2.js
     * @inner
     * @param {Date} date can not be null or undefined
     */
    function toLiteralDate(date, quotationMark) {
        return isFinite(date.valueOf())
            ? toLiteralString(
                date.getUTCFullYear() + '-' +
                    pad10(date.getUTCMonth() + 1) + '-' +
                    pad10(date.getUTCDate()) + 'T' +
                    pad10(date.getUTCHours()) + ':' +
                    pad10(date.getUTCMinutes()) + ':' +
                    pad10(date.getUTCSeconds()) + 'Z',
                quotationMark
            )
            : 'null';
    }

    /**
     * @inner
     */
    function pad10(n) {
        // Format integers to have at least two digits.
        return n < 10 ? '0' + n : n;
    }

    /**
     * 打印函数（这个实现不保证浏览器兼容，不保证效果完全好，只是chrome、ff能看）
     *
     * @public
     * @param {Function} fn 方法
     * @param {number} indent 缩进层级
     * @param {number} indentBase 每层级空格数
     * @return {string} 函数字符串
     */
    lib.printFunction = function (fn, indent, indentBase) {
        var indentStr = (new Array((indent + 1) * indentBase)).join(' ');
        var fnArr = (fn + '').split('\n');
        var last = '';
        // 处理最后一个“}”
        if (fnArr.length > 1 && $.trim(fnArr[fnArr.length - 1]) === '}') {
            fnArr.pop();
            last = '\n' + (new Array(indent * indentBase)).join(' ') + '}';
        }
        return fnArr.join('\n' + indentStr) + last;
    };

    return lib;
});
