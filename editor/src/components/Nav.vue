<template>
<div class="nav">
    <q-input
        type="text"
        size="sm"
        v-model="query"
        label="Filter"
    >
        <template v-slot:prepend>
            <q-icon name="search" style="margin-left:10px;" />
        </template>
    </q-input>
    <q-tree v-if="filesHierarchy.length"
        :nodes="filesHierarchy"
        :filter="query"
        node-key="path"
        selected-color="primary"
        :selected.sync="selected"
        default-expand-all
    >
    </q-tree>
</div>
</template>

<script>

import { store } from '../store/store';

export default {

    props: ['language'],

    data() {
        return {
            shared: store,

            selected: '',

            query: ''
        };
    },

    watch: {
        selected(newVal) {
            if (newVal) {
                const newPath = `/edit/${this.language}/${newVal}`;
                if (this.$route.path !== newPath) {
                    this.$router.push({
                        path: newPath
                    });
                }
            }
        }
    },

    computed: {

        filesHierarchy() {
            const hierarchy = [];

            function findAndAdd(pathArr, parts, list) {
                const part = parts.shift();
                pathArr.push(part);
                const isLeaf = parts.length === 0;
                let item = list.find(item => item.name === part);
                if (!item) {
                    item = {
                        name: part,
                        label: part,
                        icon: 'article',
                        path: pathArr.join('.')
                    };
                    list.push(item);
                }
                if (!isLeaf) {
                    item.children = item.children || [];
                    item.icon = 'folder';
                    item.selectable = false;
                    findAndAdd(pathArr, parts, item.children);
                }
            }
            for (const key in this.shared.blocks) {
                const parts = key.split('.');
                findAndAdd([], parts, hierarchy);
            }

            return hierarchy;
        }
    }
};
</script>

<style lang="scss" scoped>
.q-input {
}
</style>
