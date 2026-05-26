<template>
  <div class="control-enum">
    <el-select size="small" v-model="innerValue" @change="onValueChange">
      <el-option
        v-for="item in optionsArr"
        :key="item"
        :value="item"
        :class="{ 'control-enum-special': specialValues[item] != null }"
        >{{ item }}</el-option
      >
    </el-select>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

const { value, options } = defineProps({
  value: [String, Boolean],
  options: String,
})

const innerValue = ref(value)

const emit = defineEmits(['change'])

// Convert to special value.
const specialValues = { true: true, false: false }

const optionsArr = computed(() => options.split(',').map((item) => item.trim()))

watch(
  () => value,
  (newVal) => {
    innerValue.value = newVal
  },
)

function onValueChange() {
  emit(
    'change',
    Object.prototype.hasOwnProperty.call(specialValues, innerValue.value)
      ? specialValues[innerValue.value]
      : innerValue.value,
  )
}
</script>

<style lang="scss">
.control-enum-special {
  font-style: italic;
}
</style>
