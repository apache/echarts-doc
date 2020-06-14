import {getOutlineNode} from './docHelper';

export const store = {
    docType: '',

    // Current selected option
    currentPath: '',

    // Search content
    fuzzySearch: false,
    searchQuery: '',

    isMobile: false,

    locale: 'zh',

    previewOption: ''
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

export function changeOption(option, path, value) {

    function changeOptionRecursive(obj, pathParts) {
        const item = pathParts.shift();
        // Clone a new object because the original one is freezed and cant be changed.
        obj = Object.assign({}, obj);
        if (!pathParts.length) {
            if (value === undefined) {
                delete obj[item];
                return obj;
            }
            else {
                obj[item] = value;
                return obj;
            }
        }

        const subtypeItems = item.split('-');
        const key = subtypeItems[0];
        const subtype = subtypeItems[1];
        const prop = obj[key] || {};
        if (Array.isArray(prop)) {
            obj[key] = prop.map(function (childObj, idx) {
                if (subtype && childObj.type !== subtype) {
                    return childObj;
                }
                return changeOptionRecursive(childObj, pathParts.slice());
            });
        }
        else {
            if (subtype && prop.type !== subtype) {
                obj[key] = prop;
            }
            obj[key] = changeOptionRecursive(prop, pathParts.slice());
        }

        return obj;
    }

    return changeOptionRecursive(option, path.split('.'));
}