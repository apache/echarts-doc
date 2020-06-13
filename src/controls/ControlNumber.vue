<template>
<div class="control-number">
    <el-input-number
        v-model="value"
        controls-position="right"
        :min="+min"
        :max="max == null ? Infinity : +max"
        :step="step == null ? 1 : +step"
        size="small"
    ></el-input-number>
</div>
</template>

<script>
export default {

    props: ['min', 'max', "step"],

    data() {
        return {
            value: 0
        }
    }
}
</script>

<style lang="scss">
.control-number {
    .el-input-number {
        width: 90px;
    }
}
</style>