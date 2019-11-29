export const store = {
    docType: '',

    // Current selected option
    currentPath: '',

    // Search content
    fuzzySearch: false,
    searchQuery: '',

    isMobile: false,
};

export function getPagePath() {
    if (store.isMobile) {
        // No hierarchy
        let parts = store.currentPath.split('.');
        if (parts.length > 1) {
            parts.pop();
        }
        return parts.join('.');
    }
    else {
        return store.currentPath.split('.')[0];
    }
}