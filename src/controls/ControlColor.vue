<template>
<div class="control-color">
<el-color-picker v-model="innerValue" :show-alpha="true"
    @change="onValueChange"
    @active-change="onActiveChange"
    ></el-color-picker>
<span :style="{color: innerValue || '#aaa'}">
    {{innerValue || $t('example.defaultColor')}}
</span>
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
        },
        onActiveChange(val) {
            // this.innerValue = val;
            // this.$emit('change', val);
        }
    }
}
</script>

<style lang="scss">
.control-color {
    &>* {
        display: inline-block;
        vertical-align: middle;
    }

    span {
        font-size: 12px;
        font-weight: bold;
    }
}
</style>