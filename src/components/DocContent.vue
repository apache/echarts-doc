<template>
  <div class="doc-main" v-loading="loading" ref="root">
    <div
      ref="docContentDom"
      :class="[
        'doc-content',
        shared.showOptionExample ? 'option-example-actived' : '',
        'option-example-' + shared.computedOptionExampleLayout + '-layout',
      ]"
    >
      <h2 :id="pageId">{{ pageTitle }}</h2>
      <div
        class="page-description"
        v-if="pageDesc"
        v-html="pageDesc"
        v-highlight
      ></div>

      <div
        v-if="
          pageDisplayOutline.children &&
          pageDisplayOutline.children &&
          1 <= maxDepth
        "
      >
        <h3>{{ $t('content.properties') }}</h3>
        <DocContentItemCard
          v-for="child in pageDisplayOutline.children"
          :key="child.path"
          :node-data="child"
          :desc-map="pageDescMap"
          :max-depth="maxDepth"
          :depth="1"
          @scroll-to-self="scrollTo"
          @toggle-expanded="handleCardExpandToggle"
        ></DocContentItemCard>
      </div>
    </div>
    <template v-if="showLiveExample">
      <LiveExample v-if="shared.showOptionExample" ref="liveExample" />
      <div v-else class="open-option-example" @click="openOptionExample">
        <svg class="icon stroke-current">
          <use href="/assets/sprite-doc.svg#data-line"></use>
        </svg>
        {{ $t('example.titleShort') }}
      </div>
    </template>
  </div>
</template>

<script setup>
import scrollIntoView from 'scroll-into-view'
import LazyLoad from 'vanilla-lazyload'
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
  convertPathToId,
  getDefaultPage,
  getOutlineNode,
  getPageOutlineAsync,
  getPageTotalDescAsync,
} from '../docHelper'
import { directTo } from '../route'
import {
  getPagePath,
  isOptionDoc,
  store,
  updateOptionExampleLayout,
} from '../store'
import DocContentItemCard from './DocContentItemCard.vue'
import LiveExample from './LiveExample.vue'

const shared = reactive(store)

const root = useTemplateRef('root')
const docContentDom = useTemplateRef('docContentDom')
const liveExample = useTemplateRef('liveExample')

const loading = ref(false)
const pagePath = ref('')
const maxDepth = ref(Infinity)
const rootPageDescMap = ref({})
// Outline of this page
const pageOutline = ref({})
const pageDescMap = ref({})

const pageTitle = computed(() => pagePath.value)

const pageId = computed(() => convertPathToId(pagePath.value))

const pageDesc = computed(() => {
  const item =
    rootPageDescMap.value[pagePath.value] || pageDescMap.value[pagePath.value]
  return item && item.desc // In mobile.
})

const pageExamples = computed(() => {
  const item =
    rootPageDescMap.value[pagePath.value] || pageDescMap.value[pagePath.value]
  // Return an empty array by default. Or may not trigger it changed.
  return (item && item.exampleBaseOptions) || []
})

const pageDisplayOutline = computed(() => {
  if (!shared.isMobile) {
    return pageOutline.value
  } else {
    return getOutlineNode(getPagePath())
  }
})

const showLiveExample = computed(() => !shared.isMobile && isOptionDoc())

const needScrollOffset = computed(() => {
  return (
    shared.showOptionExample &&
    !shared.isMobile &&
    shared.computedOptionExampleLayout === 'top'
  )
})

onMounted(() => {
  // Root page.
  getPageTotalDescAsync('').then((rootMap) => {
    rootPageDescMap.value = Object.freeze(rootMap)
  })

  _lazyload = new LazyLoad({ elements_selector: 'iframe', load_delay: 300 })

  updateCurrentPath(shared.currentPath, true)

  window.addEventListener('resize', resize)

  resize()
})

onUnmounted(() => {
  window.removeEventListener('resize', resize)
  _lazyload = null
})

let _lazyload = null

function resize() {
  shared.optionExampleLayout === 'auto' && updateOptionExampleLayout('auto')
  nextTick(() => {
    updateDocContentMargin()
  })
}

function updateLazyload() {
  nextTick(() => {
    _lazyload.update()
  })
}

function handleCardExpandToggle() {
  updateLazyload()
}

function scrollTo(path, time, timeDelay) {
  setTimeout(() => {
    let offset = shared.isMobile ? 100 : 20
    if (needScrollOffset.value) {
      offset += liveExample.value.$el.offsetHeight
    }

    // previous usage: document.querySelector('#' + convertPathToId(path))
    // Some special characters like `$` are not allowed in selector when using `document.querySelector`,
    // use `document.getElementById` instead.
    scrollIntoView(document.getElementById(convertPathToId(path)), {
      time: time || 400,
      align: {
        top: 0,
        topOffset: offset,
      },
    })
  }, timeDelay || 0)
}

function updateCurrentPath(newVal, firstTime) {
  // Handling page count find issue.
  if (newVal) {
    if (!getOutlineNode(newVal)) {
      // Redirect to default node
      directTo(getDefaultPage(newVal))
      return
    }
  } else {
    directTo(getDefaultPage())
    return
  }

  const newPagePath = getPagePath()
  if (newPagePath === pagePath.value) {
    // Use title as hash.
    scrollTo(newVal)
    return
  }

  loading.value = true
  pagePath.value = newPagePath

  // Fetch components.
  getPageOutlineAsync(newVal)
    .then((outline) => {
      if (outline.isRoot) {
        maxDepth.value = 0 // No children
      } else if (shared.isMobile) {
        maxDepth.value = 1 // Only one level
      } else {
        maxDepth.value = Infinity
      }

      return getPageTotalDescAsync(newVal).then((descMap) => {
        pageOutline.value = Object.freeze(Object.assign({}, outline))

        const newPageDescMap = {}
        const outlineRootName = newVal.split('.')[0]
        for (const key in descMap) {
          // Add key prefix
          // For example: `series-bar.itemStyle` is `itemStyle` in the storage
          newPageDescMap[outlineRootName + '.' + key] = descMap[key]
        }

        pageDescMap.value = Object.freeze(newPageDescMap)
        loading.value = false

        scrollTo(newVal, 600, firstTime ? 300 : 50)
        updateLazyload()
      })
    })
    .catch(() => {
      pageOutline.value = {}
      loading.value = false
    })
}

function openOptionExample() {
  shared.showOptionExample = true
}

function updateDocContentMargin(isClose) {
  if (!liveExample.value && !isClose) return

  if (docContentDom.value) {
    // update margin of doc content
    docContentDom.value.style.margin = ''
    if (!isClose) {
      const marginDir = shared.computedOptionExampleLayout
      if (marginDir !== 'right' && liveExample.value && liveExample.value.$el) {
        const marginStyleName =
          'margin' + marginDir[0].toUpperCase() + marginDir.slice(1)
        const marginValue = liveExample.value.$el.clientHeight
        docContentDom.value.style[marginStyleName] = marginValue + 'px'
      }
    }
  }
}

watch(
  () => shared.currentPath,
  (newVal) => {
    updateCurrentPath(newVal)
    nextTick(() => updateDocContentMargin())
  },
)

watch(pageExamples, (newVal) => {
  // { code, title, name }
  // TODO: Code switch
  if (newVal && newVal.length) {
    shared.allOptionExamples = Object.freeze(newVal)
  } else {
    shared.allOptionExamples = null
  }
})

watch(
  () => shared.computedOptionExampleLayout,
  () => {
    nextTick(() => updateDocContentMargin())
  },
)

watch(
  () => shared.showOptionExample,
  (newVal) => {
    nextTick(() => updateDocContentMargin(!newVal))
  },
)

watch(
  loading,
  (newVal) =>
    (root.value.parentElement.style.overflow = newVal ? 'hidden' : ''),
)
</script>

<style lang="scss">
@import '../style/mixin.scss';

.doc-main {
  position: static !important;
  margin-left: 10px;

  .open-option-example {
    position: fixed;
    right: 0;
    // bottom: 50px;
    top: 50%;
    padding: 10px;
    border-radius: 20px 0 0 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    background: #fff;
    cursor: pointer;

    font-size: 12px;

    &:hover {
      background: #eee;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }
}

.doc-content {
  text-align: left;
  // color: #59636f;
  color: #4d555e;

  // transition: margin-right 500ms cubic-bezier(0.215, 0.610, 0.355, 1);

  &.option-example-actived {
    &.option-example-top-layout {
      // margin-top: 42%;
    }
    &.option-example-bottom-layout {
      // margin-bottom: 42%;
    }
    &.option-example-right-layout {
      margin-right: 45%;
    }
  }

  h2 {
    color: #b03a5b;
    font-size: 34px;
    border-bottom: 1px solid #ccc;
    height: 45px;
    line-height: 45px;
    margin: 0;
    margin-left: 15px;
    font-weight: normal;
    box-sizing: content-box;
  }

  h3 {
    font-weight: normal;
    color: rgb(150, 150, 150);
    font-size: 28px;
    margin: 20px 0px 20px 15px;
  }

  .page-description {
    padding: 5px 0;
    margin-left: 15px;

    @include description-html-formatter;
  }

  .item-description {
    margin: 0;
    padding: 5px 0;

    thead th {
      position: sticky;
      top: 0;
      background: #fffbea;
    }
    th,
    td {
      font-size: 14px;
    }

    @include description-html-formatter;
  }

  table {
    border: 1px solid #ddd;
    border-collapse: collapse;
  }

  th,
  td {
    padding: 10px;
    border: 1px solid #eee;
  }
}

.ec-doc-tutorial {
  .page-description {
    h2 {
      font-weight: normal;
      font-size: 22px;
      margin-left: 0;
      margin-top: 40px;
    }
  }
}

.ec-doc-mobile {
  .doc-main {
    margin-left: 0;
  }

  .doc-content {
    background: #f2f2f2;
    margin-bottom: 100px;
  }
  .page-description {
    padding: 5px 10px;
    background: #fff;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
  }
  h2 {
    font-size: 22px;
    font-weight: normal;
    padding: 20px 10px;
    border-bottom: none;
  }
  h3 {
    font-size: 20px;
    padding-left: 10px;
  }
}
</style>
