<template>
<div class="control-text">
<el-input v-model="innerValue" size="mini" :placeholder="$t('example.inputPlaceholder')" @change="onValueChange"></el-input>
</div>
</template>

<script>
export default {

    props: ['value'],
    data() {
        return {
            innerValue: this.value
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