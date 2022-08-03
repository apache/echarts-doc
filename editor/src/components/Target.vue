<template>
<div class="target">
    <q-expansion-item v-model="expanded" :expand-icon-toggle="true">
        <template v-slot:header>
            <h5>{{target.name}}</h5>
            <q-popup-edit v-model="editingLabel" content-class="bg-dark text-white" buttons
                @before-show="startEdit" @save="saveEdit"
            >
                <q-input dark color="white" v-model="editingLabel" autofocus counter></q-input>
            </q-popup-edit>
        </template>
        <div v-for="(block, index) in target.blocks" :key="block.key || index" :class="[
            'block-container', 'block-level-' + block.level || 0, 'block-container-' + block.type
        ]">
            <Block :block="block"></Block>

            <div class="block-ops row">
                <q-btn icon="more_vert" color="grey-6" flat round size="xs">
                    <q-menu
                        transition-show="flip-right"
                        transition-hide="flip-left"
                    >
                        <q-list>
                            <template v-if="block.type === 'use'">
                                <q-item clickable v-close-popup @click="goToTarget(block)">
                                    <q-item-section avatar><q-icon name="forward" /></q-item-section>
                                    <q-item-section>Jump To</q-item-section>
                                </q-item>
                                <q-separator spaced />
                            </template>
                            <template v-if="block.type === 'content'">
                                <q-item clickable v-close-popup @click="translateContentBlock(block)">
                                    <q-item-section avatar><q-icon name="translate" /></q-item-section>
                                    <q-item-section>Translate to English</q-item-section>
                                </q-item>
                                <q-separator spaced />
                            </template>
                            <q-item clickable v-close-popup @click="removeBlock(block)">
                                <q-item-section avatar><q-icon name="delete" /></q-item-section>
                                <q-item-section>Delete</q-item-section>
                            </q-item>
                            <q-separator spaced />
                            <q-item clickable v-close-popup @click="copyBlock(block)">
                                <q-item-section avatar><q-icon name="content_copy" /></q-item-section>
                                <q-item-section>Copy</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup @click="copyBlock(block, true)">
                                <q-item-section avatar><q-icon name="content_copy" /></q-item-section>
                                <q-item-section>Copy Selected</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
                <q-checkbox size="xs" v-model="selected" :val="block" />
            </div>
            <!-- Add block toolbar -->
            <div class="add-block">
                <q-btn class="add-btn" color="grey-6" flat round icon="add" size="xs">
                    <q-menu
                        transition-show="flip-right"
                        transition-hide="flip-left"
                    >
                        <q-list>
                            <q-item clickable v-close-popup @click="addBlock(block, 'header')">
                                <q-item-section avatar><q-icon name="view_headline" /></q-item-section>
                                <q-item-section>Header Block</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup @click="addBlock(block, 'content')">
                                <q-item-section avatar><q-icon name="text_fields" /></q-item-section>
                                <q-item-section>Content Block</q-item-section>
                            </q-item>
                            <q-item clickable v-close-popup @click="addBlock(block, 'use')">
                                <q-item-section avatar><q-icon name="link" /></q-item-section>
                                <q-item-section>Use Block</q-item-section>
                            </q-item>
                            <q-separator spaced />
                            <q-item clickable v-close-popup @click="pasteBlock(block)">
                                <q-item-section avatar><q-icon name="content_paste" /></q-item-section>
                                <q-item-section>Paste</q-item-section>
                            </q-item>
                        </q-list>
                    </q-menu>
                </q-btn>
            </div>
        </div>
    </q-expansion-item>
</div>
</template>

<script>

import Block from './Block.vue';
import _ from 'lodash';
import { store } from '../store/store';
import { setCORS } from 'google-translate-api-browser';
import { Notify } from 'quasar';
// setting up cors-anywhere server address
const translate = setCORS('http://cors-anywhere.herokuapp.com/');

// import Selection from '@simonwep/selection-js';

export default {
    props: ['target'],

    components: {
        Block
    },

    mounted() {
        // setTimeout(() => {
        // this._selection = Selection.create({
        //     class: 'selection',
        //     // startThreshold: 20,
        //     // singleClick: true,
        //     selectables: ['.block-container'],
        //     selectionAreaContainer: this.$el
        // }).on('start', ({ inst, selected, oe }) => {
        //     // Remove class if the user isn't pressing the control key or ⌘ key
        //     if (!oe.ctrlKey && !oe.metaKey) {
        //         // Unselect all elements
        //         for (const el of selected) {
        //             el.classList.remove('selected');
        //             inst.removeFromSelection(el);
        //         }
        //         // Clear previous selection
        //         inst.clearSelection();
        //     }
        // }).on('move', ({ changed: { removed, added } }) => {
        //     // Add a custom class to the elements that where selected.
        //     for (const el of added) {
        //         el.classList.add('selected');
        //     }

        //     // Remove the class from elements that where removed
        //     // since the last selection
        //     for (const el of removed) {
        //         el.classList.remove('selected');
        //     }
        // }).on('stop', ({ inst }) => {
        //     // Remember selection in case the user wants to add smth in the next one
        //     inst.keepSelection();
        // });
        // }, 3000);
    },

    data() {
        return {
            selected: [],

            editingLabel: '',
            expanded: true
        };
    },

    methods: {
        startEdit() {
            this.editingLabel = this.target.name;
        },
        saveEdit() {
            this.target.name = this.editingLabel;
        },

        goToTarget() {

        },

        translateContentBlock(block) {
            block.value = translate(block.value, {
                to: 'en'
            }).then(res => {
                block.value = res.text;

                Notify({
                    message: 'Translation Success'
                });
            }).catch(err => {
                Notify({
                    message: 'Translation Failed ' + err
                });
            })
        },

        removeBlock(block) {
            const idx = this.target.blocks.indexOf(block);
            if (idx >= 0) {
                this.target.blocks.splice(idx, 1);
            }
        },

        copyBlock(block, copySelected) {
            if (copySelected) {
                store.blocksToCopy = [];
                for (let i = 0; i < this.selected.length; i++) {
                    store.blocksToCopy.push(Object.freeze(_.cloneDeep(this.selected[i])));
                }
            }
            else {
                store.blocksToCopy = [Object.freeze(_.cloneDeep(block))];
            }
        },

        pasteBlock(blockBefore) {
            if (store.blocksToCopy) {
                let idx = this.target.blocks.indexOf(blockBefore);
                for (let i = 0; i < store.blocksToCopy.length; i++) {
                    const blockToCopy = store.blocksToCopy[i];
                    if (idx >= 0) {
                        const newBlock = _.cloneDeep(blockToCopy);
                        // Avoid duplicate key
                        newBlock.key = null;
                        this.target.blocks.splice(++idx, 0, newBlock);
                    }
                }
            }
        },

        addBlock(blockBefore, blockType) {
            const idx = this.target.blocks.indexOf(blockBefore);
            if (idx >= 0) {
                const block = {
                    type: blockType,
                    // Default has same level of previous block
                    level: blockBefore.level
                };
                switch (blockType) {
                case 'header':
                    block.propertyName = '';
                    break;
                case 'use':
                    block.target = '';
                    block.args = [];
                    break;
                case 'content':
                    block.value = 'Enter the description.';
                    break;
                }
                this.target.blocks.splice(idx + 1, 0, block);
            }
        }
    }
};
</script>

<style lang="scss">

.selection {
    background: rgba(46, 115, 252, 0.11);
    border-radius: 0.1em;
    border: 2px solid rgba(98, 155, 255, 0.81);
}

.target {
    margin-top: 50px;

    @for $level from 1 through 7 {
        .block-level-#{$level} {
            margin-left: 15px * ($level - 1);
        }
    }

    h5 {
        font-size: 30px;
        width: 100%;
        margin: 0;
    }

    .block-container {
        position: relative;

        .block-ops {
            position: absolute;
            right: -60px;
            top: 0px;

            // opacity: 0;
            // transition: opacity 0.5s linear;
        }

        // &:hover {
        //     .block-ops {
        //         opacity: 1;
        //     }
        // }
    }

    // .block-container-header {
    //     .block-ops {
    //         top: 15px;
    //     }
    // }

    .add-block {
        height: 1px;
        position: relative;
        margin: 15px 0;

        &:hover {
            border-bottom: 2px solid $grey-4;
            cursor: pointer;
        }

        .add-btn {
            position: absolute;
            right: -30px;
            margin-top: -12px;
            top: 0;
        }
    }
}
</style>
