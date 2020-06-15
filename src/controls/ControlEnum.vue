<template>
<div class="control-enum">
<el-select size="mini" v-model="innerValue" @change="onValueChange">
    <el-option v-for="item in optionsArr"
        :key="item"
        :value="item"
        :label="item"
    ></el-option>
</el-select>
</div>
</template>

<script>
export default {

    props: ['value', 'options'],

    computed: {
        optionsArr() {
            return this.options.split(',').map(item => item.trim());
        }
    },

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