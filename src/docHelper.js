// Global doc schema manager.
// Not in the vue observer.
const {fetch} = require('whatwg-fetch');

let baseUrl;
let rootName;


// Cached data.
let outlineFetcher;

let descStorage = {};

/**
 * Get doc json async
 */
export function getOutlineAsync() {
    if (!outlineFetcher) {
        throw new Error('Preload json with url first');
    }
    return outlineFetcher;
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
            .then(response => response.json());
    }


    return outlineFetcher;
}

export function extractComponentLevelPath(schemaPath) {
    let parts = schemaPath.split('.');
    let divider = parts.length > 2 ? 2 : 1;
    let componentLevelPath = parts.slice(0, divider).join('.');
    // let subKey = parts.slice(divider).join('.');

    return componentLevelPath;
}
/**
 * Get description from
 */
export function getComponentDescAsync(schemaPath) {
    let partionKey = extractComponentLevelPath(schemaPath);

    if (!descStorage[partionKey]) {
        let url = `${baseUrl}/${partionKey}.json`;
        descStorage[partionKey] = {
            fetcher: fetch(url).then(response => response.json())
        };
    }

    return descStorage[partionKey].fetcher;
}

