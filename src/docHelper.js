// Global doc schema manager.
// Not in the vue observer.
const {fetch} = require('whatwg-fetch');

let baseUrl;
let rootName;


// Cached data.
let outlineFetcher;

let descStorage = {};

let pageOutlines;

/**
 * Get doc json async
 */
export function getOutlineAsync() {
    if (!outlineFetcher) {
        throw new Error('Preload json with url first');
    }
    return outlineFetcher;
}

function processOutlines(json) {
    pageOutlines = {};

    function joinPath(a, b, connector) {
        return a ? (a + connector + b) : b;
    }
    function processNode(node, parentNode) {
        if (!node.type) {
            node.type = typeof node.default;
        }
        if (!(node.type instanceof Array)) {
            node.type = [node.type];
        }


        if (node.arrayItemType) {
            node.path = joinPath(parentNode.path, node.arrayItemType, '-');
        }
        else {
            node.path = joinPath(parentNode.path, node.prop, '.');
        }
        if (node.children) {
            if (node.path.indexOf('.') < 0) {
                pageOutlines[node.path] = node;
            }

            for (let i = 0; i < node.children.length; i++) {
                processNode(node.children[i], node);
            }
        }
    }

    for (let i = 0; i < json.children.length; i++) {
        processNode(json.children[i], {});
    }

    json.isRoot = true;

    return json;
}
/**
 * Preload doc json
 */
export function preload(_baseUrl, _rootName) {
    baseUrl = _baseUrl;
    rootName = _rootName;

    let outlineUrl = `${baseUrl}/${rootName}-outline.json`;

    if (!outlineFetcher) {
        outlineFetcher = fetch(outlineUrl)
            .then(response => response.json())
            .then(_json => processOutlines(_json));
    }


    return outlineFetcher;
}

/**
 * Get outline of page
 */
export function getPageOutlineAsync(targetPath) {
    let pagePath = targetPath.split('.')[0];
    return getOutlineAsync().then(() => {
        return pageOutlines[pagePath]
            // Use top outline for `option.color`, etc.
            || getOutlineAsync();
    });
}

export function getRootPageTotalDescAsync() {
    let partionKey = rootName;
    if (!descStorage[partionKey]) {
        let url = `${baseUrl}/${partionKey}.json`;
        descStorage[partionKey] = {
            fetcher: fetch(url).then(response => response.json())
        };
    }
    return descStorage[partionKey].fetcher;
}

/**
 * Get all description of page.
 */
export function getPageTotalDescAsync(targetPath) {
    if (!pageOutlines) {
        throw new Error('Outline data is not loaded.');
    }
    let pagePath = targetPath.split('.')[0];

    // Configuration like `option.color`, `option.backgroundColor` is in the `option` page.
    // Configuration like `option.series-bar` is in the `option.series-bar` page.
    let partionKey = pageOutlines[pagePath]
        ? rootName + '.' + pagePath
        : rootName;

    if (!descStorage[partionKey]) {
        let url = `${baseUrl}/${partionKey}.json`;
        descStorage[partionKey] = {
            fetcher: fetch(url).then(response => response.json())
        };
    }

    return descStorage[partionKey].fetcher;
}

