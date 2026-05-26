<template>
  <div class="control-percent">
    <el-radio-group v-model="mode" size="small">
      <el-radio-button label="absolute">{{
        $t('example.absoluteMode')
      }}</el-radio-button>
      <el-radio-button label="percent">{{
        $t('example.percentMode')
      }}</el-radio-button>
    </el-radio-group>
    <!-- <el-switch v-model="absoluteMode" :active-text="$t('example.absoluteMode')"></el-switch> -->
    <el-input-number
      v-if="mode === 'absolute'"
      controls-position="right"
      v-model="absoluteValue"
      size="small"
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
        size="small"
        :min="0"
        :max="100"
        :step="1"
        @change="onValueChange"
      >
      </el-input-number>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  value: String,
  min: [Number, String],
  max: [Number, String],
  step: [Number, String],
})

const emit = defineEmits(['change'])
const isAbsolute = ref(props.value.indexOf('%') < 0)
const percentValue = ref(isAbsolute.value ? 50 : +props.value.replace('%', ''))
const absoluteValue = ref(isAbsolute.value ? +props.value : 0)
const mode = ref(isAbsolute.value ? 'absolute' : 'percent')

watch(
  () => props.value,
  (newVal) => {
    if (mode.value === 'absolute') {
      absoluteValue.value = +newVal
    } else {
      percentValue.value = +newVal.replace('%', '')
    }
  },
)

watch(mode, () => {
  // Emit after mode changed.
  onValueChange()
})

function onValueChange() {
  emit(
    'change',
    mode.value === 'absolute' ? absoluteValue.value : percentValue.value + '%',
  )
}

function formatTooltip(val) {
  return val + '%'
}
</script>

<style lang="scss">
.control-percent {
  & > div {
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
