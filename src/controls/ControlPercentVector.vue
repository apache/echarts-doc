<template>
  <div class="control-percent-vector">
    <div v-for="(dim, index) in dimsArr" :key="index">
      <label>{{ dim }}</label>
      <ControlPercent
        :value="innerValueArr[index]"
        controls-position="right"
        :min="min == null ? -1e4 : +min"
        :max="max == null ? 1e4 : +max"
        :step="step == null ? 1 : +step"
        @change="(value) => onValueChange(index, value)"
      ></ControlPercent>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import ControlPercent from './ControlPercent.vue'

const props = defineProps({
  value: String,
  min: [Number, String],
  max: [Number, String],
  step: [Number, String],
  dims: String,
})

const emit = defineEmits(['change'])
const innerValueArr = ref(props.value.split(',').map((val) => val.trim()))

const dimsArr = computed(() =>
  props.dims
    ? props.dims.split(',').map((dim) => dim.trim())
    : props.value.split(',').map((_) => ''),
)

watch(
  () => props.value,
  (newVal) => {
    innerValueArr.value = newVal.split(',').map((val) => val.trim())
  },
)

function onValueChange(index, value) {
  innerValueArr.value[index] = value
  emit('change', innerValueArr.value.slice())
}
</script>

<style lang="scss">
.control-percent-vector {
  & > div {
    margin-top: 3px;
    font-size: 12px;
    font-weight: bold;

    & > label {
      text-transform: uppercase;
      margin-right: 5px;
    }
  }

  .control-percent,
  label {
    display: inline-block;
  }

  .control-percent .el-slider {
    width: 100px;
  }
}
</style>
