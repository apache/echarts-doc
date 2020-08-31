import _ from 'lodash';
import { socket } from './socket';
import { Notify } from 'quasar';

export const store = {
    blocks: {},
    originalBlocks: null,

    targets: [],

    editorExists: false
};

function updateTargets() {
    const targets = [];
    for (const fileName in store.blocks) {
        for (const target of store.blocks[fileName]) {
            targets.push(target);
        }
    }
    store.targets = targets;
}

socket.on('initial-blocks', function (blocks) {
    store.blocks = blocks;
    store.originalBlocks = Object.freeze(_.cloneDeep(blocks));

    // Try restore from local storage.
    restoreFromLocalStorage();

    updateTargets();
});

socket.on('editor-exists', function () {
    store.editorExists = true;
});

socket.on('saved', function () {
    // Reset the base
    store.originalBlocks = Object.freeze(_.cloneDeep(store.blocks));
    clearLocalStorage();
});

export function saveToServer() {
    socket.emit('save', store.blocks);
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
        unchanged();
    }
}, 1000);
