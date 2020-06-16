<template>
<div class="control-percent">
    <el-switch v-model="absoluteMode" :active-text="$t('example.absoluteMode')"></el-switch>
    <el-input-number
        v-if="absoluteMode"
        controls-position="right"
        v-model="absoluteValue"
        size="mini"
        :min="min == null ? -1e4 : +min"
        :max="max == null ? 1e4 : +max"
        :step="step == null ? 1 : +step"
         @change="onValueChange"
    >
    </el-input-number>
    <div v-else>
        <el-slider
            v-model="percentValue"
            :min="0"
            :max="100"
            :step="1"
            :format-tooltip="formatTooltip"
            @change="onValueChange"
        ></el-slider>
        <el-input-number
            controls-position="right"
            v-model="percentValue"
            size="mini"
            :min="0"
            :max="100"
            :step="1"
            @change="onValueChange"
        >
        </el-input-number>
    </div>
</div>
</template>

<script>
export default {

    props: ['value', 'min', 'max', 'absolute', 'step'],

    data() {
        return {
            percentValue: +this.value.replace('%', ''),
            absoluteValue: 0,
            absoluteMode: this.value.indexOf('%') >= 0
        }
    },

    watch: {
        value(val) {
            this.percentValue = +this.value.replace('%', '');
        }
    },

    methods: {
        onValueChange() {
            this.$emit('change', this.absoluteMode ? this.absoluteValue : this.percentValue + '%');
        },
        formatTooltip(val) {
            return val + '%';
        }
    }
}
</script>

<style lang="scss">
.control-percent {
    &>div {
        display: inline-block;
    }
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