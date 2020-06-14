<template>
<div class="control-boolean">
<el-switch v-model="value" :active-text="$t('example.booleanDesc')"></el-switch>
</div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
        }
    }
}
</script>

<style lang="scss">
</style>