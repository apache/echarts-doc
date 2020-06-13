<template>
<div class="control-vector">
    <div v-for="(dim, index) in dimsArr"
        :key="index">
        {{dim}}:
        <el-input-number
            v-model="value[index]"
            controls-position="right"
            :min="+min"
            :max="max == null ? Infinity : +max"
            :step="step == null ? 1 : +step"
            size="mini"
        ></el-input-number>
    </div>
</div>
</template>

<script>
export default {

    props: ['min', 'max', "step", 'default', 'dims'],

    data() {
        if (!this.dims) {
            throw new Error('Must specify dims in vector');
        }
        const arr = this.default
            ? this.default.split(',').map(num => +num.trim())
            : this.dims.split(',').map(dim => 0);

        return {
            value: arr,
        };
    },

    computed: {
        dimsArr() {
            return this.dims.split(',').map(dim => dim.trim());
        }
    }
}
</script>

<style lang="scss">
.control-vector {
    &>div {
        display: inline-block;
        margin-left: 8px;
        font-size: 14px;
    }
    .el-input-number {
        width: 90px;
    }
}
</style>