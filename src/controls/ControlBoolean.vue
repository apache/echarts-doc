<template>
<div class="control-boolean">
<el-switch v-model="innerValue" :active-text="$t('example.booleanDesc')" @change="onValueChange"></el-switch>
</div>
</template>

<script>
export default {
    props: ['value'],
    data() {
        return {
            innerValue: this.value === 'true'
        }
    },

    watch: {
        value(val) {
            this.innerValue = val;
        }
    },

    methods: {
        onValueChange() {
            this.$emit('change', this.innerValue);
        }
    }
}
</script>

<style lang="scss">
</style>