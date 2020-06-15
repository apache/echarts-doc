<template>
<div class="option-control">
    <component
        :is="uiComponent"
        v-bind="uiAttrs"
        :value="defaultValue"
         @change="onValueChange">
    </component>
</div>
</template>

<script>
import ControlColor from '../controls/ControlColor.vue';
import ControlBoolean from '../controls/ControlBoolean.vue';
import ControlNumber from '../controls/ControlNumber.vue';
import ControlVector from '../controls/ControlVector.vue';
import ControlEnum from '../controls/ControlEnum.vue';
import ControlPercent from '../controls/ControlPercent.vue';
import {store, changeOption} from '../store';

const uiComponentMap = {
    boolean: ControlBoolean,
    color: ControlColor,
    number: ControlNumber,
    vector: ControlVector,
    enum: ControlEnum,
    // Use number for angle temporary
    angle: ControlNumber,
    percent: ControlPercent
};

const uiComponentDefault = {
    boolean: () => false,
    color: () => null,
    number: () => 0,
    angle: () => 0,
    percent: () => '50',
    enum: (controlConfig) => {
        return controlConfig.options.split(',')[0].trim();
    },
    vector: (conntrolConfig) => {
        if (!conntrolConfig.dims) {
            throw new Error('Must specify dims in vector');
        }
        return conntrolConfig.dims.split(',')
            .map(dim => 0)
    }
}

function omitTypeAndDefault(obj) {
    const newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'type' && key !== 'default') {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}


export default {
    name: 'OptionControl',

    props: ['controlConfig', 'optionPath'],

    data() {
        return {
            shared: store
        };
    },

    computed: {
        uiComponent() {
            return uiComponentMap[this.controlConfig.type];
        },

        uiAttrs() {
            return omitTypeAndDefault(this.controlConfig);
        },

        defaultValue() {
            const controlConfig = this.controlConfig;
            return controlConfig.default != null
                ? controlConfig.default
                : (uiComponentDefault[controlConfig.type] && uiComponentDefault[controlConfig.type](controlConfig));
        }
    },

    methods: {
        onValueChange(value) {
            // console.log(this.optionPath, value);
            if (this.shared.currentExampleOption) {
                this.shared.currentExampleOption = Object.freeze(
                    changeOption(this.shared.currentExampleOption, this.optionPath, value)
                );
            }
        }
    }
}
</script>

<style lang="scss">

</style>