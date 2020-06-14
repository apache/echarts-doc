<template>
<div class="control-color">
<el-color-picker v-model="value" show-alpha="true"></el-color-picker>
<span :style="{color: value || '#aaa'}">
    {{value || $t('example.defaultColor')}}
</span>
</div>
</template>

<script>
export default {

    props: ['value'],

    data() {
        return {
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
        font-size: 14px;
    }
}
</style>