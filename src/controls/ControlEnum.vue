<template>
<div class="control-enum">
<el-select size="mini" v-model="innerValue" @change="onValueChange">
    <el-option v-for="item in optionsArr"
        :key="item"
        :value="item"
        :class="{'control-enum-special': specialValues[item] != null}"
    >{{item}}</el-option>
</el-select>
</div>
</template>

<script>

// Convert to special value.
const specialValues = {
    'true': true,
    'false': false
}

export default {

    props: ['value', 'options'],

    computed: {
        optionsArr() {
            return this.options.split(',').map(item => item.trim());
        },
        specialValues() {
            return specialValues;
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
            this.$emit('change', specialValues.hasOwnProperty(this.innerValue) ? specialValues[this.innerValue] : this.innerValue);
        }
    }
}
</script>

<style lang="scss">
.control-enum-special {
    font-style: italic;
}
</style>