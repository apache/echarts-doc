<template>
<div class="control-number">
    <el-input-number
        v-model="innerValue"
        controls-position="right"
        :min="min == null ? -1e4 : +min"
        :max="max == null ? 1e4 : +max"
        :step="step == null ? 1 : +step"
        size="mini"
         @change="onValueChange"
    ></el-input-number>
</div>
</template>

<script>
export default {

    props: ['value', 'min', 'max', 'step'],

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
.control-number {
    .el-input-number {
        width: 120px;
    }
}
</style>