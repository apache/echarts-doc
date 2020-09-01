<template>
<div class="block">
    <component :is="BlockComponentsMap[block.type]" :block="block"></component>
</div>
</template>

<script>

import BlockContent from './BlockContent';
import BlockHeader from './BlockHeader';
import BlockUse from './BlockUse';

export default {
    props: ['block'],

    data() {
        return {
            BlockComponentsMap: {
                content: BlockContent,
                header: BlockHeader,
                use: BlockUse,
                import: BlockUse
            }
        };
    }
};
</script>

<style lang="scss">
</style>
