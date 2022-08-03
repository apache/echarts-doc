import { cloneDeep, debounce, isEqual }  from 'lodash-es';
import { socket, socketRequest } from './socket';
import { Notify } from 'quasar';

export const store = {
    blocks: {},
    originalBlocks: null,

    blocksToCopy: [],

    targets: [],
    targetsMap: {},

    editorExists: false
};

function updateTargets() {
    const targets = [];
    const targetsMap = {};
    for (const fileName in store.blocks) {
        for (const target of store.blocks[fileName]) {
            targets.push(target);
            targetsMap[target.name] = target;
        }
    }
    store.targets = Object.freeze(targets);
    store.targetsMap = Object.freeze(targetsMap);
}

socket.on('editor-exists', function () {
    store.editorExists = true;
});

export function fetchFromServer(lang, extraProcess) {
    return socketRequest('fetch', {
        lang
    }).then((blocks) => {
        store.blocks = blocks;
        store.originalBlocks = Object.freeze(_.cloneDeep(blocks));

        extraProcess && extraProcess(blocks);

        updateTargets();
    });
}

export function saveToServer(lang) {
    return socketRequest('save', {
        blocks: store.blocks,
        lang
    }).then(() => {
        // Reset the base
        store.originalBlocks = Object.freeze(_.cloneDeep(store.blocks));
        clearLocalStorage();
    });
}

export function restore() {
    if (store.originalBlocks) {
        store.blocks = _.cloneDeep(store.originalBlocks);
        updateTargets();
    }
}

export function restoreFromLocalStorage() {
    try {
        const content = JSON.parse(localStorage.getItem('blocks'));
        if (content && Object.keys(content).length) {
            store.blocks = content;

            Notify.create({
                message: 'Restored from previous editing.'
            })
        }
    }
    catch (e) {
    }
}

export function clearLocalStorage() {
    localStorage.removeItem('blocks');
}

export function saveLocalStorage() {
    localStorage.setItem('blocks', JSON.stringify(store.blocks));
    console.log('Saved to local');
};

export const detectChangeAndSaveToLocal = _.debounce((changed, unchanged) => {
    if (!_.isEqual(store.blocks, store.originalBlocks)) {
        saveLocalStorage();
        changed();
    }
    else {
        clearLocalStorage();
        unchanged();
    }
}, 1000);
