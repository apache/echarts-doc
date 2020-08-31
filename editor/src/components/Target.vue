<template>
<q-expansion-item v-model="expanded" :expand-icon-toggle="true">
    <template v-slot:header>
        <h5>{{target.name}}</h5>
        <q-popup-edit v-model="editingLabel" content-class="bg-dark text-white" buttons
            @before-show="startEdit" @save="saveEdit"
        >
            <q-input dark color="white" v-model="editingLabel" autofocus counter></q-input>
        </q-popup-edit>
    </template>
    <div v-for="block in target.blocks" :key="block.key" :class="['block', 'block-level-' + block.level || 0]">
        <Block :block="block"></Block>
    </div>
</q-expansion-item>
</template>

<script>

import Block from './Block.vue';

export default {
    props: ['target'],

    components: {
        Block
    },

    data() {
        return {
            editingLabel: '',
            expanded: true
        };
    },

    methods: {
        startEdit() {
            this.editingLabel = this.target.name
        },
        saveEdit() {
            this.target.name = this.editingLabel;
        }
    }
}
</script>

<style lang="scss" scoped>
.q-expansion-item {
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
}
</style>
