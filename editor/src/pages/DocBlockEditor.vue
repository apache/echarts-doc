<template>
    <q-page class="flex row justify-center">
        <div class="editor-main">
            <Target v-for="target in targets" :key="target.name" :target="target"></Target>
        </div>
        <!-- <q-drawer :persistent="true" v-model="hierarchyOpen" side="right" overlay behavior="desktop" bordered>
            <Hierarchy :targets="targets"></Hierarchy>
        </q-drawer> -->
    </q-page>
</template>

<script>

import { store } from '../store/store';
import Target from '../components/Target';
// import Hierarchy from '../components/Hierarchy';

export default {
    name: 'Editor',

    components: {
        Target
        // Hierarchy
    },

    props: ['docPath'],

    data() {
        return {
            hierarchyOpen: true,
            shared: store
        };
    },

    computed: {
        targets() {
            return store.blocks[this.docPath];
        }
    },

    watch: {
        'shared.editorExists'(newVal) {
            if (newVal) {
                this.$router.push({
                    path: '/conflicts'
                });
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.editor-main {
    width: 1000px;
}
.q-page {
    background: #fafafa;
}
</style>
