<template>
<q-expansion-item v-model="expanded" :expand-icon-toggle="true">
    <template v-slot:header>
        <q-input label="Target" v-model="target.name"></q-input>
    </template>
    <div v-for="block in target.blocks" :key="block.key" :class="['block', 'block-level-' + block.level || 0]">
        <component :is="BlockComponentsMap[block.type]" :block="block"></component>
    </div>
</q-expansion-item>
</template>

<script>

import BlockContent from '../components/BlockContent';
import BlockHeader from '../components/BlockHeader';
import BlockUse from '../components/BlockUse';

export default {
    props: ['target'],

    data() {
        return {
            BlockComponentsMap: {
                content: BlockContent,
                header: BlockHeader,
                use: BlockUse,
                import: BlockUse
            },

            expanded: true
        };
    }
}
</script>

<style lang="scss" scoped>
.q-expansion-item {
    margin-top: 10px;
    margin-bottom: 50px;

    @for $level from 1 through 7 {
        .block-level-#{$level} {
            margin-left: 15px * ($level - 1);
        }
    }

    .q-input {
        font-size: 30px;
        width: 100%;
    }
}
</style>
