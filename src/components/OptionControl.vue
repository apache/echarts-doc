<template>
<div class="option-control">
    <component
        :is="uiComponent"
        v-bind="uiAttrs"
        value="default">
    </component>
</div>
</template>

<script>
import ControlColor from '../controls/ControlColor.vue';
import ControlBoolean from '../controls/ControlBoolean.vue';
import ControlNumber from '../controls/ControlNumber.vue';
import ControlVector from '../controls/ControlVector.vue';
import {store} from '../store';

const uiComponentMap = {
    boolean: ControlBoolean,
    color: ControlColor,
    number: ControlNumber,
    vector: ControlVector
};

const uiComponentDefault = {
    boolean: () => false,
    color: () => null,
    number: () => 0,
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

        default() {
            const controlConfig = this.controlConfig;
            return controlConfig.default != null
                ? controlConfig.default
                : (uiComponentDefault[controlConfig.type] && uiComponentDefault[controlConfig.type](controlConfig));
        }
    }
}
</script>

<style lang="scss">
.option-control {
    margin-top: 10px;
}
</style>