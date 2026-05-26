<template>
  <div class="option-control">
    <component
      :is="uiComponent"
      v-bind="uiAttrs"
      :value="defaultValue"
      @change="onValueChange"
    >
    </component>
  </div>
</template>

<script setup>
import { computed, reactive } from 'vue'
import ControlBoolean from '../controls/ControlBoolean.vue'
import ControlColor from '../controls/ControlColor.vue'
import ControlEnum from '../controls/ControlEnum.vue'
import ControlIcon from '../controls/ControlIcon.vue'
import ControlNumber from '../controls/ControlNumber.vue'
import ControlPercent from '../controls/ControlPercent.vue'
import ControlPercentVector from '../controls/ControlPercentVector.vue'
import ControlText from '../controls/ControlText.vue'
import ControlVector from '../controls/ControlVector.vue'
import { changeOption, store } from '../store'

const { controlConfig, optionPath } = defineProps({
  controlConfig: Object,
  optionPath: String,
})

const shared = reactive(store)

const uiComponentMap = {
  boolean: ControlBoolean,
  color: ControlColor,
  number: ControlNumber,
  vector: ControlVector,
  enum: ControlEnum,
  // Use number for angle temporary
  angle: ControlNumber,
  percent: ControlPercent,
  percentvector: ControlPercentVector,
  text: ControlText,
  icon: ControlIcon,
}

const uiComponentDefault = {
  boolean: () => false,
  color: () => null,
  number: () => 0,
  angle: () => 0,
  percent: () => '50',
  enum: (controlConfig) => controlConfig.options.split(',')[0].trim(),
  vector: (conntrolConfig) => {
    if (!conntrolConfig.dims) {
      throw new Error('Must specify dims in vector')
    }
    return conntrolConfig.dims
      .split(',')
      .map((dim) => 0)
      .join(',')
  },
  percentvector: (conntrolConfig) => {
    if (!conntrolConfig.dims) {
      throw new Error('Must specify dims in vector')
    }
    return conntrolConfig.dims
      .split(',')
      .map((dim) => '50%')
      .join(',')
  },
}

function omitTypeAndDefault(obj) {
  const newObj = {}
  for (let key in obj) {
    if (
      Object.prototype.hasOwnProperty.call(obj, key) &&
      key !== 'type' &&
      key !== 'default'
    ) {
      newObj[key] = obj[key]
    }
  }
  return newObj
}

const uiComponent = computed(() => {
  return uiComponentMap[controlConfig.type]
})

const uiAttrs = computed(() => {
  return omitTypeAndDefault(controlConfig)
})

const defaultValue = computed(() => {
  return controlConfig.default != null
    ? controlConfig.default
    : uiComponentDefault[controlConfig.type] &&
        uiComponentDefault[controlConfig.type](controlConfig)
})

function onValueChange(value) {
  // If clean before setOption.
  shared.cleanMode = controlConfig.clean

  if (shared.currentExampleOption) {
    shared.currentExampleOption = Object.freeze(
      changeOption(shared.currentExampleOption, optionPath, value),
    )
  }
}
</script>

<style lang="scss">
.option-control {
  margin-top: 10px;
}
</style>
