// Global doc schema manager.
// Not in the vue observer.
import {fetch} from 'whatwg-fetch';
import stripHtml from 'string-strip-html';
import FlexSearch from 'flexsearch/flexsearch';


let baseUrl;
let rootName;

// Cached data.
let outlineFetcher;

let descStorage = {};
let pageOutlines;

FlexSearch.registerEncoder('strip-html', (str) => {
    return stripHtml(str);
});
let searchIndex = new FlexSearch({
    worker: false,
    async: false,
    profile: 'match',
    encode: 'strip-html',
    // doc: {
    //     id: 'id',
    //     field: ['path', 'content']
    // }
    doc: {
        id: 'id',
        field: {
            path: {
                tokenize(val) {
                    return val.split(/[.-]/);
                }
            },
            content: {
                profile: 'match',
                // Simple CJK tokenizer
                tokenize: function(str){
                    return str.replace(/[\x00-\x7F]/g, '').split('');
                }
            }
        }
    }
});

/**
 * Convert path to element id.
 */
export function convertPathToId(path) {
    return 'doc-content-' + path
        .replace(/[\. <>]/g, '-');
}
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
        // Normalize to any
        for (let i = 0; i < node.type.length; i++) {
            if (node.type[i] === '*') {
                node.type[i] = 'any';
            }
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

let _id = 0;
function addPageDescMapToIndex(map, pagePath) {
    let list = [];
    for (let path in map) {
        list.push({
            id: _id++,
            path: pagePath + '.' + path,
            content: map[path]
        });
    }
    searchIndex.add(list);
    console.log(searchIndex.info());
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
        let fetcher = fetch(url).then(response => response.json());
        descStorage[partionKey] = {
            fetcher
        };

        fetcher.then(map => {
            addPageDescMapToIndex(map, pagePath);
        });
    }

    return descStorage[partionKey].fetcher;
}

/**
 * Do loading page desc files and searching progressively
 */
export function searchAllAsync(queryString, onUpdate) {
    return new Promise(resolve => {
        searchIndex.search(queryString, (list) => {
            resolve(list);
        });
    });
}
/**
 * Search outline with given query. Return list of nodes
 */
export function searchOutlineAsync(queryString, numberLimit = Infinity) {
    return getOutlineAsync().then(outline => {
        let lists = [];
        function search(node) {
            if (lists.length >= numberLimit) {
                return;
            }
            if (node.path && node.path.indexOf(queryString) >= 0) {
                lists.push(node);
            }
            if (node.children) {
                for (let i = 0; i < node.children.length; i++) {
                    search(node.children[i]);
                }
            }
        }
        search(outline);

        return lists;
    });
}