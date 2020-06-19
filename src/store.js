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
    // Clear before setOption
    cleanMode: false,
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

const componentCanHost = ['markPoint', 'markLine', 'markArea', 'tooltip', 'axisPointer'];

function makeDefaultOption(key) {
    if (key === 'markPoint') {
        return {
            data: [{
                type: 'max'
            }]
        };
    }
    else if (key === 'markLine') {
        return {
            data: [{
                type: 'average'
            }]
        };
    }
    else if (key === 'markArea') {
        return {
            data: [ [{
                type: 'min'
            }, {
                type: 'max'
            }] ]
        };
    }
}

export function changeOption(option, path, value) {

    function changeOptionRecursive(obj, pathParts, objKey, nodePath) {
        const itemStr = pathParts.shift();
        nodePath = (nodePath ? (nodePath + '.') : '') + itemStr;

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
        if (obj[key] == null) {
            const outlineNode = getOutlineNode(nodePath);
            obj[key] = makeDefaultOption(key) ||
                ((outlineNode && outlineNode.isArray) ? [] : {});
        }
        const prop = obj[key];
        if (Array.isArray(prop)) {
            if (key === 'series') { // Only set all on series.
                obj[key] = prop.map(function (childObj, idx) {
                    if (subtype && childObj.type !== subtype) {
                        return childObj;
                    }
                    return changeOptionRecursive(childObj, pathParts.slice(), key, nodePath);
                });
            }
            else {
                // Only change the first one.
                // TODO: Should be able to choose the index.
                obj[key] = prop.slice();
                obj[key][0] = changeOptionRecursive(obj[key][0] || {}, pathParts.slice(), key, nodePath);
            }
        }
        else {
            if (subtype && prop.type !== subtype) {
                obj[key] = prop;
            }
            obj[key] = changeOptionRecursive(prop, pathParts.slice(), key, nodePath);
        }

        return obj;
    }
    // For the components can be hosted on other components, like axisPointer, markers.
    function findAndSetHostComponentRecursively(root, componentKey) {
        if (root[componentKey]) {
            return changeOptionRecursive(root, path.split('.'), '', '');
        }

        if (Array.isArray(root)) {
            const newArr = [];
            for (let i = 0; i < root.length; i++) {
                newArr.push(findAndSetHostComponentRecursively(root[i], componentKey));
            }
            return newArr;
        }
        else if (typeof root === 'object') {
            const newObj = {};
            for (let key in root) {
                if (root.hasOwnProperty(key)) {
                    newObj[key] = findAndSetHostComponentRecursively(root[key], componentKey);
                }
            }
            return newObj;
        }

        return root;
    }

    const componentKey = path.split('.')[0];
    if (componentKey === 'timeline' && option.baseOption) {
        return Object.assign({}, option, {
            baseOption: changeOptionRecursive(option.baseOption, path.split('.'), '', '')
        });
    }
    else if (componentCanHost.indexOf(componentKey) >= 0) {
        return findAndSetHostComponentRecursively(option, componentKey);
    }

    return changeOptionRecursive(option, path.split('.'), '', '');
}