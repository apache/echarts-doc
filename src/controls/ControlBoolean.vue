<template>
  <div class="control-boolean">
    <el-switch
      v-model="innerValue"
      :active-text="$t('example.booleanDesc')"
      @change="onValueChange"
    ></el-switch>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const { value } = defineProps({ value: [Boolean, String] })

const emit = defineEmits(['change'])

const innerValue = ref(value === 'true')

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
