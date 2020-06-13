<template>
<div class="control-boolean">
<el-switch v-model="value" :active-text="$t('example.booleanDesc')"></el-switch>
</div>
</template>

<script>
export default {
    data() {
        return {
            value: null
        }
    }
}
</script>

<style lang="scss">
</style>