<template>
  <div
    id="example-panel"
    ref="example-panel"
    :class="shared.computedOptionExampleLayout + '-layout'"
  >
    <h2>{{ $t('example.title') }}</h2>
    <p class="intro">
      {{
        shared.allOptionExamples ? $t('example.intro') : $t('example.noExample')
      }}
    </p>
    <div class="preview-and-code" v-if="shared.currentExampleOption">
      <div class="preview-main" v-loading="isLoading"></div>
      <div class="example-code">
        <div class="codemirror-main">
          <el-link
            class="btn-to-editor"
            :title="$t('example.toEditor')"
            @click="toEditor"
          >
            <svg role="img" class="icon">
              <use href="/assets/sprite-doc.svg#edit-outline"></use>
            </svg>
          </el-link>
        </div>
      </div>
      <el-alert
        :title="$t('example.setOptionError')"
        v-if="hasError"
        type="error"
      >
      </el-alert>
    </div>
    <div class="toolbar">
      <el-select
        size="small"
        v-if="shared.allOptionExamples"
        class="example-list"
        v-model="shared.currentExampleName"
        :popper-append-to-body="false"
      >
        <el-option
          v-for="item in shared.allOptionExamples"
          :key="item.name"
          :value="item.name"
          :label="shared.locale === 'en' ? item['title-en'] : item.title"
        ></el-option>
      </el-select>
      <el-button
        v-if="shared.currentExampleOption"
        type="primary"
        size="small"
        :title="$t('example.refresh')"
        @click="refreshForce"
      >
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#refresh"></use>
        </svg>
      </el-button>
      <el-button
        ref="change-layout"
        style="margin-left: 0"
        type="primary"
        size="small"
        :title="$t('example.changeLayout')"
        @click="showChangeLayoutPopover = !showChangeLayoutPopover"
      >
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#operation"></use>
        </svg>
      </el-button>
      <el-button size="small" circle @click="closeExamplePanel">
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#close"></use>
        </svg>
      </el-button>
    </div>
    <el-popover
      :visible="showChangeLayoutPopover"
      :virtual-ref="changeLayoutButton"
      placement="bottom"
      trigger="click"
    >
      <div class="example-change-layout">
        <div class="layout-title">
          <svg role="img" class="icon">
            <use href="/assets/sprite-doc.svg#operation"></use>
          </svg>
          {{ $t('example.changeLayout') }}
        </div>
        <div class="layout-mode">
          <el-radio-group
            v-model="shared.optionExampleLayout"
            @change="changeLayout"
            size="small"
            class="flex-wrap-none"
          >
            <el-radio-button
              v-for="layout in optionExampleLayouts"
              :key="layout"
              :label="layout"
              >{{ $t('example.layout.' + layout) }}</el-radio-button
            >
          </el-radio-group>
        </div>
      </div>
    </el-popover>
  </div>
</template>

<script setup>
// Remarks:
// 代码不能编辑，可以跳转到 examples 带上 base64，在 examples 页面编辑

import CodeMirror from 'codemirror'
import 'codemirror/lib/codemirror.css'
import {
  computed,
  nextTick,
  onMounted,
  onUnmounted,
  reactive,
  ref,
  useTemplateRef,
  watch,
} from 'vue'
import {
  optionExampleLayouts,
  store,
  updateOptionExampleLayout,
} from '../store'
// import 'codemirror/theme/paraiso-dark.css';
import 'codemirror/theme/dracula.css'
// import 'codemirror/mode/javascript/javascript.js'
import beautifier from 'js-beautify'
import { throttle } from 'lodash-es'
import { compressToBase64 } from 'lz-string'
import arrayDiff from 'zrender/lib/core/arrayDiff'

const shared = reactive(store)

const chartInstance = ref(null)
const cmInstance = ref(null)
const examplePanelElement = useTemplateRef('example-panel')
const changeLayoutButton = useTemplateRef('change-layout')

const hasError = ref(false)
const lastUpdateExampleName = ref('')
const oldHighlightedLines = ref([])
const showChangeLayoutPopover = ref(false)
const isLoading = ref(true)

let echartsLoadPromise

function fetchECharts() {
  return (
    echartsLoadPromise ||
    (echartsLoadPromise = new Promise(function (resolve, reject) {
      const script = document.createElement('script')
      script.src = INJECTED_CONFIG.EMBEDDED_ECHARTS_SCRIPT_URL
        ? INJECTED_CONFIG.EMBEDDED_ECHARTS_SCRIPT_URL
        : (window.ECHARTS_WWW_VENDORS_CDN_ROOT ||
            'https://fastly.jsdelivr.net/npm/') + 'echarts/dist/echarts.min.js'
      script.async = true
      script.onload = function () {
        echartsLoadPromise = null
        resolve()
      }
      script.onerror = function () {
        echartsLoadPromise = null
        reject('Failed to load echarts')
      }
      document.body.appendChild(script)
    }))
  )
}

function diffUpdateCode(oldCode, newCode, cmInstance) {
  const oldLines = oldCode.split(/\n/)
  const newLines = newCode.split(/\n/)
  const diff = arrayDiff(oldLines, newLines)

  const changedLines = []

  // Remove lines from bottom to top so the line number won't be changed.
  for (let i = diff.length - 1; i >= 0; i--) {
    const item = diff[i]
    if (item.removed) {
      for (let k = item.count - 1; k >= 0; k--) {
        const idx = item.indices[k]
        cmInstance.replaceRange(
          '',
          { line: idx, ch: 0 },
          { line: idx + 1, ch: 0 },
        )
      }
    }
  }
  for (let i = 0; i < diff.length; i++) {
    const item = diff[i]
    if (item.added) {
      for (let k = 0; k < item.count; k++) {
        const idx = item.indices[k]
        cmInstance.replaceRange(newLines[idx] + '\n', { line: idx, ch: 0 })
        changedLines.push(idx)
      }
    }
  }

  changedLines.forEach(function (idx) {
    cmInstance.addLineClass(idx, 'wrap', 'option-changed')
  })

  if (diff.length) {
    setTimeout(() => {
      cmInstance.scrollIntoView(
        {
          line: changedLines[0],
          ch: 0,
        },
        cmInstance.getWrapperElement().clientHeight - 50,
      )
    }, 20)
  }

  return changedLines
}

function updateOption(option, isRefreshForce) {
  if (shared.currentExampleName !== lastUpdateExampleName.value) {
    lastUpdateExampleName.value = shared.currentExampleName
    // Refresh all if example base option is changed.
    refreshForce()
    return
  }

  const viewport = examplePanelElement.value?.querySelector('.preview-main')
  if (!viewport) {
    return
  }

  // Clear error msg.
  hasError.value = false
  if (typeof echarts === 'undefined') {
    // TODO Put fetch charts when component is initialized.
    isLoading.value = true
    fetchECharts()
      .then(() => {
        if (!chartInstance.value) {
          chartInstance.value = echarts.init(viewport)
        }
        if (shared.cleanMode) {
          chartInstance.value.clear()
        }
        chartInstance.value.setOption(option, true)
      })
      .finally(() => {
        isLoading.value = false
      })
  } else {
    if (!chartInstance.value) {
      chartInstance.value = echarts.init(viewport)
    }
    try {
      if (shared.cleanMode) {
        chartInstance.value.clear()
      }
      chartInstance.value.setOption(option, true)
    } catch (e) {
      // 一些属性切换的时候可能会出现一些位置的错误
      console.error(e)
      hasError.value = true
    }
  }

  if (!cmInstance.value) {
    cmInstance.value = CodeMirror(
      examplePanelElement.value.querySelector('.codemirror-main'),
      {
        value: formattedOptionCodeStr.value,
        mode: 'javascript',
        // theme: 'paraiso-dark',
        theme: 'dracula',
        readOnly: true,
      },
    )
  } else {
    // TODO: Highlight the diff lines.
    // TODO: Only change the changed line. optimize
    const oldCode = cmInstance.value.getValue()
    const newCode = formattedOptionCodeStr.value

    if (oldHighlightedLines.value) {
      oldHighlightedLines.value.forEach((idx) => {
        cmInstance.value.removeLineClass(idx, 'wrap', 'option-changed')
      })
    }

    if (!isRefreshForce) {
      oldHighlightedLines.value = diffUpdateCode(
        oldCode,
        newCode,
        cmInstance.value,
      )
    } else {
      cmInstance.value.setValue(newCode)
      oldHighlightedLines.value = []
    }
  }

  lastUpdateExampleName.value = shared.currentExampleName
}

onMounted(() => {
  // TODO use css?
  window.addEventListener('resize', resize)
  resize()

  if (shared.currentExampleOption) {
    updateOptionThrottled(shared.currentExampleOption)
  }

  if (shared.allOptionExamples) {
    shared.currentExampleName = shared.allOptionExamples[0].name
  } else {
    shared.currentExampleName = ''
  }
})

onUnmounted(() => {
  if (chartInstance.value) {
    chartInstance.value.dispose()
    chartInstance.value = null
  }
  window.removeEventListener('resize', resize)
})

watch(
  () => shared.currentExampleOption,
  (newVal) => {
    if (newVal) {
      updateOptionThrottled(newVal)
    }
  },
)

watch(
  () => shared.allOptionExamples,
  (newVal) => {
    // Use the first example as default.
    if (newVal) {
      shared.currentExampleName = newVal[0].name
    } else {
      shared.currentExampleName = ''
    }
  },
)

watch(
  () => shared.currentExampleName,
  (newVal) => changeExample(newVal),
)

const updateOptionThrottled = throttle(updateOption, 300, {
  leading: false,
})

const resize = () => {
  const examplePanel = examplePanelElement.value
  if (shared.computedOptionExampleLayout !== 'right') {
    examplePanel.style.height = window.innerHeight * 0.5 - 60 + 'px'
    examplePanel.style.width = 'auto'
  } else {
    examplePanel.style.width = examplePanel.parentNode.clientWidth * 0.45 + 'px'
    examplePanel.style.height = 'auto'
  }
  if (chartInstance.value) {
    chartInstance.value.resize()
  }
}

const refreshForce = () => {
  // Dispose first
  if (shared.currentExampleOption) {
    if (chartInstance.value) {
      chartInstance.value.dispose()
      chartInstance.value = null
    }
    updateOption(shared.currentExampleOption, true)
  }
}

const closeExamplePanel = () => {
  shared.showOptionExample = false
}

const changeExample = (exampleName) => {
  const example =
    shared.allOptionExamples &&
    shared.allOptionExamples.find((item) => item.name === exampleName)
  if (!example) {
    shared.currentExampleOption = null
    return false
  }
  const code = example.code

  try {
    const func = new Function(code + '\n return option')
    shared.currentExampleOption = Object.freeze(func())
  } catch (e) {
    console.error(e)
    console.log(code)
  }
}

const changeLayout = (layout) => {
  showChangeLayoutPopover.value = false
  updateOptionExampleLayout(layout)
  nextTick(() => {
    resize()
  })
}

const toEditor = () => {
  // PENDING: use pure base64 rather than lz-string to encode the code?
  const code = compressToBase64(formattedOptionCodeStr.value)
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
    .replace(/=+$/, '')
  window.open(
    `https://echarts.apache.org/examples/editor.html?code=${code}&_source=echarts-doc-preview`,
    '_blank',
  )
}

const optionCodeStr = computed(() => {
  const optStr = JSON.stringify(
    shared.currentExampleOption,
    function (key, value) {
      if (typeof value === 'function') {
        return (
          '__functionstart__' +
          value.toString().replace(/\n/g, '__newline__') + // avoid \n being escaped by JSON.stringify
          '__functionend__'
        )
      }
      return value
    },
  )
  return `option = ${optStr}`
})

const formattedOptionCodeStr = computed(() => {
  return beautifier.js(
    optionCodeStr.value
      .replace(/"(\w+)"\s*:/g, '$1:')
      .replace(/"__functionstart__/g, '')
      .replace(/__functionend__"/g, '')
      // newline from function
      .replace(/__newline__/g, '\n'),
    {
      indent_size: 2,
    },
  )
})
</script>

<style lang="scss">
#example-panel {
  position: fixed;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
  padding: 10px 0px;
  text-align: left;
  background: #fff;

  // transition: width 500ms cubic-bezier(0.215, 0.610, 0.355, 1);

  // background: #162436;
  // border-left: 1px solid #ddd;

  h2 {
    font-weight: normal;
    font-size: 20px;
    color: #333;
    padding-left: 20px;
    font-weight: bold;
    margin: 5px 0;
  }

  p.intro {
    color: #aaa;
    padding-left: 20px;
    margin: 5px 0;
    font-size: 12px;
  }

  .preview-and-code {
    position: absolute;
    top: 75px;
    bottom: 0;
    left: 0;
    right: 0;
  }

  .el-alert {
    position: absolute;
    top: 0;
  }
  .preview-main {
    position: relative;
    padding: 0 10px;
    background: #fefefe;
    box-sizing: border-box;
  }

  .example-code {
    position: relative;

    .codemirror-main {
      position: absolute;
      left: 10px;
      top: 10px;
      right: 10px;
      bottom: 15px;
      box-shadow: -5px -5px 15px rgba(0, 0, 0, 0.1);
      .CodeMirror {
        height: 100%;
        overflow-y: scroll;
        border-radius: 6px;
        .CodeMirror-scroll {
          padding: 15px;
        }
        font-family: 'Source Code Pro', monospace;
        font-size: 13px;

        ::-webkit-scrollbar-thumb {
          width: 8px;
          min-height: 15px;
          background: rgba(255, 255, 255, 0.3) !important;
          -webkit-transition: all 0.3s ease-in-out;
          transition: all 0.3s ease-in-out;
          border-radius: 2px;
        }

        .option-changed {
          background: rgba(255, 255, 255, 0.1);
          // border-left: 3px solid #32dde6;
        }

        .CodeMirror-cursor {
          display: none;
        }
      }
    }

    .btn-to-editor {
      position: absolute;
      right: 5px;
      top: 8px;
      z-index: 10;
      font-size: 16px;

      &:not(:hover) {
        color: #fff;
      }
    }
  }

  .toolbar {
    display: flex;
    gap: 4px;
    position: absolute;
    top: 20px;
    right: 10px;

    .example-list {
      width: 180px;
    }
  }

  &.right-layout {
    bottom: 0;
    top: 40px;
    right: 10px;

    .preview-main {
      width: 100%;
      height: 50%;
    }
    .example-code {
      width: 100%;
      height: 50%;
    }
  }

  &.bottom-layout {
    left: 300px;
    bottom: 0;
    right: 10px;

    .preview-main {
      width: 50%;
      height: 100%;
      float: left;
    }
    .example-code {
      width: 50%;
      height: 100%;
      float: left;
    }
  }

  &.top-layout {
    left: 300px;
    // dev
    // top: 40px;
    top: 50px;
    right: 10px;

    .preview-main {
      width: 50%;
      height: 100%;
      float: left;
    }
    .example-code {
      width: 50%;
      height: 100%;
      float: left;
    }
  }
}

.example-change-layout {
  .layout-title > i {
    font-size: 14px;
    margin-right: 5px;
  }
  .layout-mode {
    margin-top: 10px;
  }
}

.el-popover {
  width: auto !important;
}

.flex-wrap-none {
  flex-wrap: unset;
}
</style>
