<template>
  <div class="control-color">
    <el-color-picker
      v-model="innerValue"
      :show-alpha="true"
      @change="onValueChange"
      @active-change="onActiveChange"
    ></el-color-picker>
    <span :style="{ color: innerValue || '#aaa' }">
      {{ innerValue || $t('example.defaultColor') }}
    </span>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const { value } = defineProps({ value: String })

const innerValue = ref(value)

const emit = defineEmits(['change'])

watch(
  () => value,
  (newVal) => (innerValue.value = newVal),
)

function onValueChange() {
  emit('change', innerValue.value)
}

function onActiveChange(val) {
  // this.innerValue = val;
  // this.$emit('change', val);
}
</script>

<style lang="scss">
.control-color {
  & > * {
    display: inline-block;
    vertical-align: middle;
  }

  span {
    font-size: 12px;
    font-weight: bold;
  }
}
</style>
