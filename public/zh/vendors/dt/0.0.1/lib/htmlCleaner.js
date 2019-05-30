/**
 * @file 简单的前端xss过滤。
 *       只是为了简单的过滤而避免影响前端逻辑或展现。
 *       真正全面的过滤应该在后端进行。
 * @author sushuang(sushuang@baidu.com) (from https://github.com/phith0n/Jsdxss)
 */
define(function (require) {

    var UNDEFINED;

    /**
     * @public
     */
    var HTMLCleanAllow = {

        BASE: {
            a: ['title', 'alt', 'href', 'class', 'style'],
            b: ['class', 'style'],
            em: ['class', 'style'],
            strong: ['class', 'style'],
            i: ['class', 'style'],
            img: ['src', 'class', 'style'],
            div: ['class', 'style'],
            p: ['class', 'style'],
            br: []
        },

        EC_FORMATTER: {
            a: ['title', 'alt', 'href', 'class', 'style'],
            b: ['class', 'style'],
            em: ['class', 'style'],
            strong: ['class', 'style'],
            i: ['class', 'style'],
            img: ['src', 'class', 'style'],
            div: ['class', 'style'],
            p: ['class', 'style'],
            br: []
        }
    };

    /**
     * @inner
     */
    function buildNodes(node, htmlAllow) {

        switch (node.nodeType) {

            case 1: // ELEMENT_NODE
                var nodeTagName = node.tagName;
                var nodeAttrs = node.attributes;
                var allowAttrs = htmlAllow[nodeTagName.toLowerCase()];

                if (!allowAttrs) {
                    return UNDEFINED;
                }

                var newNode = document.createElement(nodeTagName);

                for (var i = 0, len = nodeAttrs.length; i < len; i++) {
                    if (~allowAttrs.indexOf(nodeAttrs[i].name)) {

                        // href和style的逻辑，没有测过，所以注释掉。
                        // var attrName = nodeAttrs[i].name.toLowerCase();
                        // var attrValue;
                        // if (attrName === 'href') {
                        //     attrValue = dealHref(nodeAttrs[i]);
                        // }
                        // else if (attrName === 'style') {
                        //     attrValue = dealStyle(nodeAttrs[i]);
                        // }

                        newNode.setAttribute(nodeAttrs[i].name, nodeAttrs[i].value);
                    }
                }

                var children = node.childNodes;
                for (var i = 0, len = children.length; i < len; i++) {
                    var child = buildNodes(children[i], htmlAllow);
                    if (child !== UNDEFINED) {
                        newNode.appendChild(child);
                    }
                }

                return newNode;

            case 3: // TEXT_NODE
                return document.createTextNode(node.nodeValue);

            default:
                return UNDEFINED;
        }
    }

    // FIXME
    // 没测过所以注释掉，但是暂时保留
    /**
     * @inner
     */
    // function dealHref(attr){
    //     var href = attr.value;
    //     if (href.indexOf('http://') === 0 || href.indexOf('https://') === 0) {
    //         attr.value = href;
    //     }
    //     else {
    //         attr.value = 'http://' + href;
    //     }
    //     return attr;
    // }

    // FIXME
    // 没测过所以注释掉，但是暂时保留
    /**
     * @inner
     */
    // function dealStyle(attr){
    //     var style = attr.value;
    //     var re = /expression/gim
    //     style = style
    //         .replace(/\\/g, ' ')
    //         .replace(/&#/g, ' ')
    //         .replace(/\/\*/g, ' ')
    //         .replace(/\*\//g, ' ');
    //     attr.value = style.replace(re, ' ');
    //     return attr;
    // }

    /**
     * @inner
     */
    function parseHTML(html) {
        try {
            return (new DOMParser()).parseFromString(html, 'text/html');
        }
        catch (e) {
            // TODO
            // IE下没有测过（parse html半tag等），但是图说的ie下限是9，支持DOMParser。
            var doc = new ActiveXObject('MSXML2.DOMDocument');
            return doc.loadXML(html);
        }
    }

    /**
     * @public
     * @param {string} html 要过滤的html
     * @param {Object} options
     * @param {HTMLElement=} options.targetEl 要写入内容的目标节点，可缺省。
     * @param {Object=} options.htmlAllow allow规则，从HTMLCleanAllow中取。默认是HTMLCleanAllow.BASE
     * @return {string} 过滤后的结果
     */
    function htmlClean(html, options) {
        options = options || {};
        var newDoc = parseHTML(html);
        var htmlAllow = options.htmlAllow || HTMLCleanAllow.BASE;
        var targetEl = options.targetEl || document.createElement('div');
        var children = newDoc.body.childNodes;

        targetEl.innerHTML = '';

        for (var i = 0, len = children.length; i < len; i++) {
            var childNode = buildNodes(children[i], htmlAllow);

            if (childNode !== UNDEFINED) {
                targetEl.appendChild(childNode);
            }
        }

        return targetEl.innerHTML;
    }

    return {
        htmlClean: htmlClean,
        HTMLCleanAllow: HTMLCleanAllow
    };

});
