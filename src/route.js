
import {store, isOptionDoc} from './store';

function handleHashUpdate() {
    let hash = decodeURIComponent(window.location.hash.slice(1));
    if (hash.startsWith('/search/')) {
        let searchQuery = hash.substr('/search/'.length);
        store.fuzzySearch = true;
        store.searchQuery = searchQuery;
    }
    else if(hash) { // Else consider it as path.
        store.currentPath = hash;
        // Reset search status
        store.fuzzySearch = false;
    }
}

export function initRoute() {
    window.addEventListener('hashchange', e => {
        handleHashUpdate();
    });
    handleHashUpdate();
}

export function directTo(hash) {
    window.location.hash = '#' + encodeURIComponent(hash);
}