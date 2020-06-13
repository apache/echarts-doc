<template>
<div class="option-control">
    <component :is="uiComponent" v-bind="uiAttrs"></component>
</div>
</template>

<script>
import ControlColor from '../controls/ControlColor.vue';
import ControlBoolean from '../controls/ControlBoolean.vue';
import ControlNumber from '../controls/ControlNumber.vue';
import ControlVector from '../controls/ControlVector.vue';

const uiComponentMap = {
    boolean: ControlBoolean,
    color: ControlColor,
    number: ControlNumber,
    vector: ControlVector
};

function omitType(obj) {
    const newObj = {};
    for (let key in obj) {
        if (obj.hasOwnProperty(key) && key !== 'type') {
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
        };
    },

    computed: {
        uiComponent() {
            return uiComponentMap[this.controlConfig.type];
        },

        uiAttrs() {
            return omitType(this.controlConfig);
        }
    }
}
</script>

<style lang="scss">
.option-control {
    margin-top: 10px;
}
</style>