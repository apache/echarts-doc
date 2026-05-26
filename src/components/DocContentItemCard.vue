<template>
  <div
    :class="[
      'doc-content-item-card',
      'level-' + depth,
      isLeaf ? 'leaf' : '',
      shared.currentPath === nodeData.path ? 'current' : '',
    ]"
    :id="itemId"
  >
    <div class="hierarchy-line" v-if="expanded"></div>
    <h4>
      <span class="guider" v-if="depth > 1"></span>
      <i
        class="expand-toggle"
        v-if="supportsExpandable"
        @click="toggleExpanded"
      >
        <svg class="icon">
          <use
            :href="`/assets/sprite-doc.svg#${expanded ? 'remove-outline' : 'circle-plus-outline'}`"
          ></use>
        </svg>
      </i>
      <!-- <a v-else class="anchor" href="">#</a> -->
      <span class="path-parent" v-if="!shared.isMobile">
        <a :href="'#' + item.link" :key="item.link" v-for="item in parentPath"
          >{{ item.text }}.</a
        >
      </span>
      <span class="path-base">
        <a :href="'#' + baseName.link">{{ baseName.text }}</a>
      </span>

      <span class="current-flag" v-if="shared.currentPath === nodeData.path">
        <svg class="icon">
          <use href="/assets/sprite-doc.svg#caret-left"></use>
        </svg>
      </span>

      <span
        class="default-value"
        v-if="nodeData.default && nodeData.default !== '*'"
      >
        = {{ nodeData.default }}
      </span>

      <span
        :class="['control-toggle', enableUIControl ? 'active' : '']"
        v-if="uiControl && shared.allOptionExamples && !shared.isMobile"
        @click="toggleUIControl"
      >
        <i>
          <svg class="icon">
            <use href="/assets/sprite-doc.svg#try-it"></use>
          </svg>
        </i>
        {{ $t('example.tryDesc') }}
        <!-- <el-switch :active-text="$t('example.tryDesc')" v-model="enableUIControl"></el-switch> -->
      </span>
    </h4>

    <div class="prop-types">
      <span
        :class="['prop-type', 'prop-type-' + type.toLowerCase()]"
        :key="type"
        v-for="type in nodeData.type"
        >{{ type }}</span
      >
    </div>

    <OptionControl
      v-if="enableUIControl"
      :controlConfig="uiControl"
      :optionPath="nodeData.path"
    ></OptionControl>

    <div class="item-description" v-html="desc" v-highlight></div>

    <div class="children" v-if="supportsExpandable && expanded">
      <DocContentItemCard
        v-for="child in nodeData.children"
        :key="child.path"
        :node-data="child"
        :desc-map="descMap"
        :depth="depth + 1"
        :max-depth="maxDepth"
        @toggle-expanded="bubbleEventToggleExpandedEvent"
        @scroll-to-self="bubbleScrollToSelfEvent"
      ></DocContentItemCard>
    </div>
    <PropertiesList
      v-if="(!expanded || shared.isMobile) && !isLeaf"
      :nodeData="nodeData"
      :descMap="descMap"
    ></PropertiesList>
  </div>
</template>

<script setup>
import { computed, reactive, ref, watch } from 'vue'
import { convertPathToId } from '../docHelper'
import OptionControl from './OptionControl.vue'
import PropertiesList from './PropertiesList.vue'

import { PROPERTIES_NOT_EXPAND } from '../config'
import { changeOption, store } from '../store'

const props = defineProps({
  nodeData: Object,
  descMap: Object,
  maxDepth: [Number, String],
  depth: Number,
})

const emit = defineEmits(['toggle-expanded', 'scroll-to-self'])

const shared = reactive(store)
const manualExpanded = ref(null)
const enableUIControl = ref(false)

watch(enableUIControl, (newVal) => {
  if (!newVal) {
    shared.currentExampleOption = Object.freeze(
      changeOption(shared.currentExampleOption, props.nodeData.path, undefined),
    )
  } else {
    // Let container scroll to the path because layout may be changed
    // after control is open.
    if (!shared.showOptionExample) {
      emit('scroll-to-self', props.nodeData.path, 300, 100)
    }
    shared.showOptionExample = true
  }
})

watch(
  () => shared.currentExampleName,
  (newVal, oldVal) => {
    // Reset after example changed.
    // NOTE: it may be the first time example panel is opened. So need to check the old value.
    if (newVal && oldVal) {
      enableUIControl.value = false
    }
  },
)

const itemId = computed(() => convertPathToId(props.nodeData.path))

const expanded = computed(() => {
  // Expanded at most 2 level.
  if (isLeaf.value) {
    return false
  } else if (manualExpanded.value != null) {
    return manualExpanded.value
  } else {
    // Default expanded logic
    const parts = props.nodeData.path.split('.')
    return (
      (props.depth < 2 && PROPERTIES_NOT_EXPAND.indexOf(parts.pop()) < 0) ||
      store.currentPath.indexOf(props.nodeData.path) >= 0
    )
  }
})

const isLeaf = computed(
  () => !(props.nodeData.children && props.nodeData.children.length),
)

const supportsExpandable = computed(
  () => props.depth + 1 <= props.maxDepth && !isLeaf.value,
)

const desc = computed(() => {
  const descItem = props.descMap[props.nodeData.path]
  return descItem && descItem.desc
})

const uiControl = computed(() => {
  const descItem = props.descMap[props.nodeData.path]
  return descItem && descItem.uiControl
})

const parentPath = computed(() => {
  const parts = props.nodeData.path.split('.')
  const items = []
  let link = ''
  for (let i = 0; i < parts.length - 1; i++) {
    if (!link) {
      link += parts[i]
    } else {
      link += '.' + parts[i]
    }
    items.push({ text: parts[i], link: link })
  }
  return items
})

const baseName = computed(() => ({
  text: props.nodeData.path.split('.').pop(),
  link: props.nodeData.path,
}))

function bubbleEventToggleExpandedEvent() {
  emit('toggle-expanded')
}

function toggleExpanded() {
  manualExpanded.value = !expanded.value
  emit('toggle-expanded')
}

function toggleUIControl() {
  enableUIControl.value = !enableUIControl.value
}

function bubbleScrollToSelfEvent(path, time, delay) {
  emit('scroll-to-self', path, time, delay)
}
</script>

<style lang="scss">
$card-margin: 10px;
$children-padding: 10px;

$hierarchy-guider-color: #e0e6f1;

.doc-content-item-card {
  margin-top: 30px;
  margin-left: $card-margin;
  border-top: 1px solid #ccc;

  position: relative;

  padding: 15px 0;

  &.current {
    // border-top: 1px solid #b03a5b;
  }

  .hierarchy-line {
    position: absolute;
    top: 35px;
    bottom: 0px;
    left: -14px;
    width: 10px;
    border-left: 1px solid $hierarchy-guider-color;
    border-bottom: 1px solid $hierarchy-guider-color;
  }

  h4 {
    margin: 0;
    padding: 0;

    // font-family: Montserrat, sans-serif;
    font-family: 'Source Code Pro', monospace;

    & > * {
      vertical-align: bottom;
      display: inline-block;
    }
    // opacity: 0.9;

    .expand-toggle {
      font-size: 18px;
      margin-left: -23px;
      color: darken($hierarchy-guider-color, 20%);
      cursor: pointer;
      position: relative;
      background-color: #fff;

      svg {
        vertical-align: middle;
        width: 18px;
        height: 18px;
      }
    }

    .anchor {
      color: #c592a0;
      font-size: 16px;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }

    .path-parent {
      font-size: 12px;
      // padding-right: 20px;
      padding: 0;
      font-weight: normal;
      margin-left: 10px;

      .separator {
        margin: 0 3px;
        color: #b03a5b;
      }

      a {
        color: #c592a0;
        margin: 0;
      }
    }
    .path-base {
      font-size: 14px;
      font-weight: normal;

      a {
        color: #b03a5b;
        margin: 0;
      }
    }

    .path-parent,
    .path-base {
      a {
        text-decoration: none;
        &:hover {
          text-decoration: underline;
        }
      }
    }

    .current-flag {
      color: #434343;
      margin: 0 12px;
      vertical-align: text-top;
      font-size: 12px;
    }

    .default-value {
      color: #434343;
      font-size: 16px;
      margin-left: 15px;
      vertical-align: bottom;
      font-weight: normal;
    }

    .control-toggle {
      float: right;
      font-size: 14px;
      cursor: pointer;
      user-select: none;
      color: #555;

      &:hover {
        color: #999;
      }

      &.active {
        color: #409eff;
      }
    }
  }

  &.level-1 {
    & > h4 {
      // opacity: 1;
      .anchor {
        font-size: 20px;
      }
      .path-parent {
        font-size: 16px;
      }
      .path-base {
        font-size: 20px;
      }
    }
  }
  &.level-2 {
    & > h4 {
      .anchor {
        font-size: 16px;
      }
      .path-parent {
        font-size: 14px;
      }
      .path-base {
        font-size: 16px;
      }
      .current-flag {
        font-size: 10px;
      }
    }
  }
  &.level-3 {
    & > h4 {
      .anchor {
        font-size: 16px;
      }
      .path-parent {
        font-size: 13px;
      }
      .path-base {
        font-size: 16px;
      }
      .current-flag {
        font-size: 10px;
      }
    }
  }

  @for $i from 1 through 10 {
    &.level-#{$i + 1} {
      border-top: 1px solid #eee;
      margin-top: 10px;

      // .el-button {
      //     margin-left: -25px;
      // }

      .guider {
        vertical-align: middle;
        width: $children-padding + $card-margin + 3;
        margin-left: -$children-padding - $card-margin - 14;
        margin-right: 0px;
        // width: $i * ($children-padding + $card-padding);
        // margin-left: -$i * ($children-padding + $card-padding);
        border-bottom: 1px solid $hierarchy-guider-color;
        border-left: 1px solid $hierarchy-guider-color;
        height: 15px;
        margin-top: -15px;
        border-bottom-left-radius: 10px;

        position: relative;

        // &::after {
        //     content: '';
        //     width: 5px;
        //     height: 5px;
        //     border-radius: 3px;
        //     background-color: $hierarchy-guider-color;
        //     position: absolute;
        //     display: inline-block;
        //     right: 0;
        //     top: -3px;
        // }
      }
    }
  }

  .prop-types {
    margin-top: 5px;
    display: inline-block;
  }
  .option-control {
    // display: inline-block;
    float: right;
  }

  .prop-type {
    display: inline-block;
    margin-right: 4px;
    border-radius: 4px;
    padding: 3px 5px;
    color: #333;
    background-color: #f9f2f4;
    font-size: 12px;
  }

  .prop-type-string {
    background-color: #f9f2f4;
  }

  .prop-type-number {
    background-color: #f9f2f4;
  }

  .prop-type-object {
  }

  .prop-type-array {
  }

  .prop-type-function {
  }

  .prop-type-boolean {
    background-color: #f9f2f4;
  }

  .properties-list-panel {
    max-width: 700px;
  }

  .children {
    padding: $children-padding;
  }
}

.ec-doc-mobile {
  .doc-content-item-card {
    margin-left: 0;
    margin-top: 10px;
    padding: 10px 10px;
    background: #fff;
    border-top: none;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 0.05);
    // border-top: 1px solid #eee;
    // border-bottom: 1px solid #eee;

    &.level-1 {
      & > h4 {
        // opacity: 1;
        .anchor {
          font-size: 18px;
        }
        .path-parent {
          font-size: 13px;
        }
        .path-base {
          font-size: 18px;
        }
        .default-value {
          font-size: 14px;
        }
      }
    }
  }
}
</style>
