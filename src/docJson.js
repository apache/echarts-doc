// Global doc data manager.
// Not in the vue observer.
let {fetch} = require('whatwg-fetch');
let data;
let dataFetcher;

/**
 * Get doc json async
 */
export function getAsync() {
    if (!dataFetcher) {
        throw new Error('Preload json with url first');
    }
    return dataFetcher;
}

/**
 * Get doc json sync
 */
export function get() {
    return data;
}

/**
 * Preload doc json
 */
export function preload(url) {
    if (dataFetcher) {
        return dataFetcher;
    }
    dataFetcher = fetch(url)
        .then(response => response.json())
        .then(_json => data = _json);

    return dataFetcher;
}