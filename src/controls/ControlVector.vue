<template>
<div class="control-vector">
    <div v-for="(dim, index) in dimsArr"
        :key="index">
        <label>{{dim}}:</label>
        <el-input-number
            v-model="value[index]"
            controls-position="right"
            :min="+min"
            :max="max == null ? 1e4 : +max"
            :step="step == null ? 1 : +step"
            size="mini"
             @change="onValueChange"
        ></el-input-number>
    </div>
</div>
</template>

<script>
export default {

    props: ['value', 'min', 'max', "step", 'dims'],

    data() {
        return {
            innerValue: this.value
        };
    },

    computed: {
        dimsArr() {
            return this.dims.split(',').map(dim => dim.trim());
        }
    },

    watch:  {
        value(newVal) {
            this.innerValue = newVal;
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
.control-vector {
    &>div {
        display: inline-block;
        margin-left: 8px;
        font-size: 12px;
        font-weight: bold;
    }
    .el-input-number {
        width: 90px;
    }
}
</style>