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

    showOptionExample: false,
    allOptionExamples: null,
    currentExampleName: '',
    currentExampleOption: ''
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

    function changeOptionRecursive(obj, pathParts, objKey) {
        const itemStr = pathParts.shift();
        if (typeof obj !== 'object' && objKey === 'data') {
            // Convert number to object
            obj = {
                value: obj
            };
        }

        // Clone a new object because the original one is freezed and cant be changed.
        obj = Object.assign({}, obj);
        if (!pathParts.length) {
            if (value === undefined) {
                delete obj[itemStr];
                return obj;
            }
            else {
                obj[itemStr] = value;
                return obj;
            }
        }

        const subtypeItems = itemStr.split('-');
        const key = subtypeItems[0];
        const subtype = subtypeItems[1];
        // TODO: If prop not exists and it should be an array.
        const prop = obj[key] == null ? {} : obj[key];
        if (Array.isArray(prop)) {
            if (key === 'series') { // Only set all on series.
                obj[key] = prop.map(function (childObj, idx) {
                    if (subtype && childObj.type !== subtype) {
                        return childObj;
                    }
                    return changeOptionRecursive(childObj, pathParts.slice(), key);
                });
            }
            // Only change the first one.
            // TODO: Should be able to choose the index.
            prop[0] && (prop[0] = changeOptionRecursive(prop[0], pathParts.slice(), key));
        }
        else {
            if (subtype && prop.type !== subtype) {
                obj[key] = prop;
            }
            obj[key] = changeOptionRecursive(prop, pathParts.slice(), key);
        }

        return obj;
    }

    return changeOptionRecursive(option, path.split('.'), '');
}