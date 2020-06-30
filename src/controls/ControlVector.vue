<template>
<div class="control-vector">
    <el-switch v-model="innerSeparate" :active-text="$t('example.vectorSetSeparate')"></el-switch>
    <div v-if="innerSeparate" class="control-vector-group">
        <div v-for="(dim, index) in dimsArr"
            :key="index">
            <label>{{dim}}</label>
            <el-input-number
                v-model="innerValueArr[index]"
                controls-position="right"
                :min="min == null ? -1e4 : +min"
                :max="max == null ? 1e4 : +max"
                :step="step == null ? 1 : +step"
                size="mini"
                @change="onValueChange"
            ></el-input-number>
        </div>
    </div>
    <el-input-number v-else
        v-model="innerValueArr[0]"
        controls-position="right"
        size="mini"
        :min="min == null ? -1e4 : +min"
        :max="max == null ? 1e4 : +max"
        :step="step == null ? 1 : +step"
        @change="onValueChange"
    ></el-input-number>
</div>
</template>

<script>
export default {

    props: ['value', 'separate', 'min', 'max', "step", 'dims'],

    data() {
        return {
            innerSeparate: this.separate === 'true',
            innerValueArr: this.value.split(',').map(val => +val.trim())
        };
    },

    computed: {
        dimsArr() {
            return this.dims.split(',').map(dim => dim.trim());
        }
    },

    watch:  {
        value(newVal) {
            this.innerValueArr = this.value.split(',').map(val => +val.trim());
        }
    },

    methods: {
        onValueChange() {
            if (!this.innerSeparate) {
                for (let i = 1; i < this.innerValueArr.length; i++) {
                    this.innerValueArr[i] = this.innerValueArr[0];
                }
            }
            this.$emit('change', this.innerValueArr.slice());
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

    .control-vector-group {
        &>div {
            display: inline-block;
            margin-left: 5px;
        }
    }
    .el-input-number {
        width: 90px;
    }

    label {
        text-transform: uppercase;
        margin-right: 5px;
    }
}
</style>