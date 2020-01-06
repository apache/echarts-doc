import {getOutlineNode} from './docHelper';

export const store = {
    docType: '',

    // Current selected option
    currentPath: '',

    // Search content
    fuzzySearch: false,
    searchQuery: '',

    isMobile: false,

    locale: 'zh'
};

export function getPagePath() {
    if (store.isMobile) {
        // No hierarchy
        let parts = store.currentPath.split('.');
        let node = getOutlineNode(store.currentPath);
        let isLeaf = node && (!node.children || !node.children.length);
        if (isLeaf && parts.length > 1) {  // Is leaf
            parts.pop();
        }
        return parts.join('.');
    }
    else {
        return store.currentPath.split('.')[0];
    }
}

export function isOptionDoc() {
    return store.docType === 'option'
        || store.docType === 'option-gl';
}