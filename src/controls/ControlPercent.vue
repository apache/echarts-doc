<template>
<div class="control-percent">
    <el-radio-group v-model="mode" size="mini">
        <el-radio-button label="absolute">{{$t('example.absoluteMode')}}</el-radio-button>
        <el-radio-button label="percent">{{$t('example.percentMode')}}</el-radio-button>
    </el-radio-group>
    <!-- <el-switch v-model="absoluteMode" :active-text="$t('example.absoluteMode')"></el-switch> -->
    <el-input-number
        v-if="mode === 'absolute'"
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

    props: ['value', 'min', 'max', 'step'],

    data() {
        const isAbsolute = this.value.indexOf('%') < 0;
        return {
            percentValue: isAbsolute ? 50 : +this.value.replace('%', ''),
            absoluteValue: isAbsolute ? +this.value : 0,
            mode: isAbsolute ? 'absolute' : 'percent'
        }
    },

    watch: {
        value(val) {
            if (this.mode === 'absolute') {
                this.absoluteValue = + val;
            }
            else {
                this.percentValue = +val.replace('%', '');
            }
        },
        mode() {
            // Emit after mode changed.
            this.onValueChange();
        }
    },

    methods: {
        onValueChange() {
            this.$emit('change', this.mode === 'absolute' ? this.absoluteValue : this.percentValue + '%');
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
    .el-radio-group {
        margin-right: 10px;
    }
    .el-radio-button--mini .el-radio-button__inner {
        padding: 5px 4px;
        font-size: 10px;
    }
}
</style>