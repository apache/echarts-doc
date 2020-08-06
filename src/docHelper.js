// Global doc schema manager.
// Not in the vue observer.
// import {fetch} from 'whatwg-fetch';
// import levenshtein from 'js-levenshtein';
// stringSimilarity has better result than levenshtein when handling typo
import { stringSimilarity } from 'string-similarity-js';
import {getDocJSONPVarNname} from './shared';
// import stripHtml from 'string-strip-html';
// import Fuse from 'fuse.js';


let baseUrl;
let cdnRoot;
let rootName;
let docVersion;

// Cached data.
let outlineFetcher;
let outline;

let descStorage = {};
let pageOutlines;

let outlineNodesMap = {};
let allNodesPaths = [];

function fetchDocContentJS(basename) {
    return new Promise(function (resolve, reject) {
        const varname = getDocJSONPVarNname(basename);
        const url = `${cdnRoot}/${basename}?${docVersion}`;
        const script = document.createElement('script');
        script.async = true;
        script.onload = function () {
            if (window[varname]) {
                resolve(window[varname]);
            }
            else {
                reject(`Load failed. ${varname}`);
            }
        };
        script.src = url;
        document.body.appendChild(script);
    });
}

function stripHtml(str) {
    // Simple and fast regexp html replacer
    // string-strip-html is toooo slow.
    return str.replace(/<[^>]*>?/gm, '');
}
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
    outline = json;

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
            // Ignore option.series, option.dataZoom, option.visualMap
            if (node.path.indexOf('.') < 0 && !node.children[0].arrayItemType) {
                pageOutlines[node.path] = node;
            }

            for (let i = 0; i < node.children.length; i++) {
                processNode(node.children[i], node);
            }
        }
        outlineNodesMap[node.path] = node;
    }

    for (let i = 0; i < json.children.length; i++) {
        processNode(json.children[i], {});
    }

    json.isRoot = true;

    allNodesPaths = Object.keys(outlineNodesMap);

    return json;
}
/**
 * Preload doc json
 */
export function preload(_baseUrl, _cdnRoot, _rootName, _docVersion) {
    baseUrl = _baseUrl;
    cdnRoot = _cdnRoot;
    rootName = _rootName;
    docVersion = _docVersion || '1';

    if (!outlineFetcher) {
        outlineFetcher = fetchDocContentJS(`${rootName}-outline.js`)
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

function createIndexer(map, pagePath) {
    let list = [];
    for (let path in map) {
        list.push({
            path: pagePath ? (pagePath + '.' + path) : path,
            content: map[path].desc,
            text: stripHtml(map[path].desc)
        });
    }

    return {
        search(query) {
            let results = [];
            // TODO 常用词汇联想
            let tokens = query.split(/[ +,]/).filter(t => !!t).map(token => {
                // Case insensitive
                return new RegExp(token, 'i');
            });
            if (!tokens.length) {
                return results;
            }
            for (let k = 0; k < list.length; k++) {
                let searched = true;
                for (let i = 0; i < tokens.length; i++) {
                    if (!tokens[i].test(list[k].text) && !tokens[i].test(list[k].path)) {
                        searched = false;
                        break;
                    }
                }
                if (searched) {
                    results.push(list[k]);
                }
            }
            return results;
        }
    };
}

function ensurePageDescStorage(targetPath) {
    if (!pageOutlines) {
        throw new Error('Outline data is not loaded.');
    }
    let pagePath = targetPath.split('.')[0];

    // Configuration like `option.color`, `option.backgroundColor` is in the `option` page.
    // Configuration like `option.series-bar` is in the `option.series-bar` page.
    let partionKey = !pageOutlines[pagePath] || !targetPath
        ? rootName
        : rootName + '.' + pagePath;

    if (!descStorage[partionKey]) {
        let fetcher = fetchDocContentJS(`${partionKey}.js`);
        descStorage[partionKey] = {
            fetcher
        };

        fetcher.then(map => {
            descStorage[partionKey].indexer = createIndexer(map, pagePath);
        });
    }

    return descStorage[partionKey];
}
/**
 * Get all description of page.
 */
export function getPageTotalDescAsync(targetPath) {
    return ensurePageDescStorage(targetPath).fetcher;
}

// TODO Cancel
/**
 * Do loading page desc files and searching progressively
 */
export function searchAllAsync(queryString, onAdd) {
    return getOutlineAsync().then(() => {
        return new Promise(resolve => {
            let asyncCount = 0;

            function decreaseAsyncCount() {
                asyncCount--;
                if (!asyncCount) {
                    resolve();
                }
            }
            function searchInPage(pagePath) {
                let obj = ensurePageDescStorage(pagePath);

                if (obj.indexer) {
                    onAdd(obj.indexer.search(queryString));
                }
                else {
                    asyncCount++;
                    obj.fetcher.then(() => {
                        onAdd(obj.indexer.search(queryString));
                        decreaseAsyncCount();
                    }).catch(e => {
                        decreaseAsyncCount();
                    });
                }
            }
            // Search in root page.
            searchInPage('');
            for (let pagePath in pageOutlines) {
                searchInPage(pagePath);
            }

            if (!asyncCount) {
                resolve();
            }
        });
    });
}

let querySearchScores;
/**
 * Search outline with given query. Return list of nodes
 */
export function searchOutlineAsync(queryString, numberLimit = 50) {
    return getOutlineAsync().then(() => {
        let lists = [];

        for (let i = 0; i < allNodesPaths.length; i++) {
            if (lists.length >= numberLimit) {
                return lists;
            }
            let p = allNodesPaths[i];
            if (p.indexOf(queryString) >= 0) {
                lists.push(getOutlineNode(p));
            }
        }

        if (lists.length < numberLimit) {
            if (!querySearchScores) {
                querySearchScores = new Uint8Array(allNodesPaths.length);
            }
            let matchScoreCount = 0;
            for (let i = 0; i < allNodesPaths.length; i++) {
                querySearchScores[i] = stringSimilarity(allNodesPaths[i], queryString) * 255;
                if (querySearchScores[i] > 50) {
                    matchScoreCount++;
                }
            }

            let picked = {};
            let safeCount = 0;
            let safeProtect = 200;
            while (lists.length < numberLimit && matchScoreCount > 0) {
                let maxScore = 0;
                let maxIndex;
                for (let i = 0; i < querySearchScores.length; i++) {
                    if (querySearchScores[i] > maxScore && !picked[i]) {
                        maxIndex = i;
                        maxScore = querySearchScores[i];
                    }
                }
                if (maxScore > 50) {   // Threshold
                    picked[maxIndex] = true;
                    lists.push(getOutlineNode(allNodesPaths[maxIndex]));
                    matchScoreCount--;
                }
                safeCount++;
                if (safeCount > safeProtect) {
                    break;
                }
            }
        }

        return lists;
    });
}

export function getOutlineNode(path) {
    return outlineNodesMap[path];
}

export function getDefaultPage(wrongPath) {
    if (!wrongPath) {
        return Object.keys(pageOutlines)[0];
    }
    // Compatitable with series-line.data[i]
    if (getOutlineNode(wrongPath.replace('[i]', ''))) {
        return wrongPath.replace('[i]', '');
    }
    // Compatitable with series.data. Convert to series-line.data
    let wrongPathParts = wrongPath.split('.');
    let correctedPath = wrongPathParts.map(pathItem => {
        let itemNode = getOutlineNode(pathItem);
        let firstChild = itemNode && itemNode.children && itemNode && itemNode.children[0];
        if (firstChild && firstChild.arrayItemType) {
            return pathItem + '-' + firstChild.arrayItemType;
        }
        return pathItem;
    });
    if (getOutlineNode(correctedPath.join('.'))) {
        return correctedPath.join('.');
    }

    // Else find the nearest
    let mostLikeKey;
    let maxSimilarity = -Infinity;
    for (let i = 0; i < allNodesPaths.length; i++) {
        let p = allNodesPaths[i];
        let similarity = stringSimilarity(wrongPath, p);
        if (similarity > maxSimilarity) {
            maxSimilarity = similarity;
            mostLikeKey = p;
        }
    }
    return mostLikeKey;
}