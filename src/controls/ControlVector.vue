<template>
  <div class="control-vector">
    <el-switch
      v-model="innerSeparate"
      :active-text="$t('example.vectorSetSeparate')"
    ></el-switch>
    <div v-if="innerSeparate" class="control-vector-group">
      <div v-for="(dim, index) in dimsArr" :key="index">
        <label>{{ dim }}</label>
        <el-input-number
          v-model="innerValueArr[index]"
          controls-position="right"
          :min="min == null ? -1e4 : +min"
          :max="max == null ? 1e4 : +max"
          :step="step == null ? 1 : +step"
          size="small"
          @change="onValueChange"
        ></el-input-number>
      </div>
    </div>
    <el-input-number
      v-else
      v-model="innerValueArr[0]"
      controls-position="right"
      size="small"
      :min="min == null ? -1e4 : +min"
      :max="max == null ? 1e4 : +max"
      :step="step == null ? 1 : +step"
      @change="onValueChange"
    ></el-input-number>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

const props = defineProps({
  value: String,
  separate: [Boolean, String],
  min: [Number, String],
  max: [Number, String],
  step: [Number, String],
  dims: String,
})

const emit = defineEmits(['change'])

const innerSeparate = ref(props.separate === 'true' || props.separate === true)
const innerValueArr = ref(props.value.split(',').map((val) => +val.trim()))

const dimsArr = computed(() =>
  props.dims
    ? props.dims.split(',').map((dim) => dim.trim())
    : props.value.split(',').map((_) => ''),
)

watch(
  () => props.value,
  (newVal) => {
    innerValueArr.value = newVal.split(',').map((val) => +val.trim())
  },
)

function onValueChange() {
  if (!innerSeparate.value) {
    for (let i = 1; i < innerValueArr.value.length; i++) {
      innerValueArr.value[i] = innerValueArr.value[0]
    }
  }
  emit('change', innerValueArr.value.slice())
}
</script>

<style lang="scss">
.control-vector {
  & > div {
    display: inline-block;
    margin-left: 8px;
    font-size: 12px;
    font-weight: bold;
  }

  .control-vector-group {
    & > div {
      display: inline-block;
      margin-left: 5px;
    }
  }
  .el-input-number {
    width: 90px;
  }

  label {
    text-transform: uppercase;
    margin-right: 5px;
  }
}
</style>
