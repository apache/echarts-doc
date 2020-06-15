<template>
<div class="control-percent">
    <el-slider
        v-model="innerValue"
        :min="min == null ? 0 : +min"
        :max="max == null ? 100 : +max"
        :step="step == null ? 1 : +step"
        :format-tooltip="formatTooltip"
         @change="onValueChange"
    ></el-slider>
    <el-input-number
        controls-position="right"
        v-model="innerValue"
        size="mini"
        :min="min == null ? 0 : +min"
        :max="max == null ? 100 : +max"
        :step="step == null ? 1 : +step"
         @change="onValueChange"
    >
    </el-input-number>
</div>
</template>

<script>
export default {

    props: ['value', 'min', 'max', 'step'],

    data() {
        return {
            innerValue: +this.value.replace('%', '')
        }
    },

    watch: {
        value(val) {
            this.innerValue = +this.value.replace('%', '');
        }
    },

    methods: {
        onValueChange() {
            this.$emit('change', this.innerValue + '%');
        },
        formatTooltip(val) {
            return val + '%';
        }
    }
}
</script>

<style lang="scss">
.control-percent {
    .el-slider {
        width: 200px;
        display: inline-block;
        vertical-align: middle;
    }
    .el-input-number {
        display: inline-block;
        width: 90px;
        margin-left: 10px;
    }
}
</style>