<template>
  <div class="control-number">
    <el-input-number
      v-model="innerValue"
      controls-position="right"
      :min="min == null ? -1e4 : +min"
      :max="max == null ? 1e4 : +max"
      :step="step == null ? 1 : +step"
      size="small"
      @change="onValueChange"
    ></el-input-number>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  value: [Number, String],
  min: [Number, String],
  max: [Number, String],
  step: [Number, String],
})

const emit = defineEmits(['change'])

const innerValue = ref(props.value)

watch(
  () => props.value,
  (newVal) => {
    innerValue.value = newVal
  },
)

function onValueChange() {
  emit('change', innerValue.value)
}
</script>

<style lang="scss">
.control-number {
  .el-input-number {
    width: 120px;
  }
}
</style>
