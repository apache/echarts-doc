<template>
<div class="control-percent-vector">
    <div v-for="(dim, index) in dimsArr"
        :key="index">
        <label>{{dim}}</label>
        <ControlPercent
            :value="innerValueArr[index]"
            controls-position="right"
            :min="min == null ? -1e4 : +min"
            :max="max == null ? 1e4 : +max"
            :step="step == null ? 1 : +step"
            @change="(value) => onValueChange(index, value)"
        ></ControlPercent>
    </div>
</div>
</template>

<script>

import ControlPercent from './ControlPercent.vue';

export default {

    components: {
        ControlPercent
    },

    props: ['value', 'min', 'max', "step", 'dims'],

    data() {
        return {
            innerValueArr: this.value.split(',').map(val => val.trim())
        };
    },

    computed: {
        dimsArr() {
            return this.dims.split(',').map(dim => dim.trim());
        }
    },

    watch:  {
        value(newVal) {
            this.innerValueArr = this.value.split(',').map(val => val.trim())
        }
    },

    methods: {
        onValueChange(index, value) {
            this.innerValueArr[index] = value;
            this.$emit('change', this.innerValueArr.slice());
        }
    }
}
</script>

<style lang="scss">
.control-percent-vector {
    &>div {
        margin-top: 3px;
        font-size: 12px;
        font-weight: bold;

        &>label {
            text-transform: uppercase;
            margin-right: 5px;
        }
    }

    .control-percent, label {
        display: inline-block;
    }


    .control-percent .el-slider {
        width: 100px;
    }
}
</style>