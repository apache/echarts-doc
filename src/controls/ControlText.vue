<template>
  <div class="control-text">
    <el-input
      v-model="innerValue"
      size="small"
      :placeholder="$t('example.inputPlaceholder')"
      @change="onValueChange"
    ></el-input>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const { value } = defineProps({ value: String })

const emit = defineEmits(['change'])

const innerValue = ref(value)

watch(
  () => value,
  (newVal) => {
    innerValue.value = newVal
  },
)

function onValueChange() {
  emit('change', innerValue.value)
}
</script>

<style lang="scss"></style>
