<template>
  <div class="control-icon">
    <el-select size="small" v-model="innerValue" @change="onValueChange">
      <el-option v-for="item in optionsArr" :key="item" :value="item">
        {{ item }}
      </el-option>
    </el-select>
    <el-button size="small" type="primary" @click="chooseFile">
      {{ $t('example.upload') }}
    </el-button>
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import { flatten } from '../dep/flatten'

function parseXML(svgStr) {
  const parser = new DOMParser()
  const svg = parser.parseFromString(svgStr, 'text/xml')
  let svgNode = svg
  // Document node. If using $.get, doc node may be input.
  if (svgNode.nodeType === 9) {
    svgNode = svgNode.firstChild
  }
  // nodeName of <!DOCTYPE svg> is also 'svg'.
  while (svgNode.nodeName.toLowerCase() !== 'svg' || svgNode.nodeType !== 1) {
    svgNode = svgNode.nextSibling
  }
  return svgNode
}

const { value } = defineProps({ value: String })

const innerValue = ref(value)

const emit = defineEmits(['change'])

const optionsArr = computed(() => [
  'circle',
  'rect',
  'roundRect',
  'triangle',
  'diamond',
  'pin',
  'arrow',
  'none',
])

watch(
  () => value,
  (newVal) => {
    innerValue.value = newVal
  },
)

function onValueChange() {
  emit('change', innerValue.value)
}

function chooseFile() {
  const input = document.createElement('input')
  input.type = 'file'
  input.accept = '.jpg, .jpeg, .png, .svg'
  input.addEventListener('change', (e) => {
    const file = e.target.files[0]
    if (!file) return
    if (file.name.endsWith('.svg')) {
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        const svgStr = fileReader.result
        const svg = parseXML(svgStr)
        try {
          flatten(svg)
        } catch (e) {
          console.error('Unexpected error happens when handling the SVG.')
          console.error(e.toString())
        }
        const paths = svg.querySelectorAll('path')
        let defs = []
        for (let i = 0; i < paths.length; i++) {
          defs.push(paths[i].getAttribute('d'))
        }
        emit('change', 'path://' + defs.join(' '))
      })
      fileReader.readAsText(file)
    } else {
      const fileReader = new FileReader()
      fileReader.addEventListener('load', () => {
        emit('change', 'image://' + fileReader.result)
      })
      fileReader.readAsDataURL(file)
    }
  })
  input.click()
}
</script>

<style lang="scss"></style>
