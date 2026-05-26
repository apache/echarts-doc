<template>
  <div v-loading="loading" class="doc-nav" ref="nav">
    <h3 v-if="isOption">{{ title }}</h3>
    <div class="toolbox">
      <span v-if="isOption" class="item" @click="collapseAll">
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#fold"></use>
        </svg>
        {{ $t('nav.collapseAll') }}
      </span>
    </div>
    <el-tree
      node-key="path"
      empty-text=""
      ref="tree"
      :props="props"
      lazy
      :default-expanded-keys="expandedKeys"
      :indent="10"
      :expand-on-click-node="false"
      :load="loadTreeNode"
      :data="treeData"
      :current-node-key="initialSelectedNode"
      @current-change="onSelectNode"
    >
      <template #default="{ node, data }">
        <div class="doc-nav-item" v-if="shared.docType !== 'tutorial'">
          <!-- <el-tooltip :content="data.path" placement="top"> -->
          <span>{{
            node.expanded ? data.labelExpanded || data.label : data.label
          }}</span>
          <!-- </el-tooltip> -->
          <span v-if="data.defaultValue != null" class="default-value">
            {{ data.defaultValue }}
          </span>
          <span v-else-if="node.isLeaf" class="default-value">...</span>
          <span v-if="!data.isRoot && !node.expanded">,</span>
        </div>
        <div class="doc-nav-item" v-else>
          <span>{{ data.label }}</span>
        </div>
      </template>
    </el-tree>
  </div>
</template>

<script setup>
import scrollIntoView from 'scroll-into-view'
import { computed, onMounted, reactive, ref, useTemplateRef, watch } from 'vue'
import { getOutlineAsync } from '../docHelper'
import { directTo } from '../route'
import { isOptionDoc, store } from '../store'

const props = {
  isLeaf: 'leaf',
}

const shared = reactive(store)

const title = ref('setOption({')
const treeData = ref([{ label: 'root', path: '', isRoot: true }])
const expandedKeys = ref([])
const loading = ref(true)
const tree = useTemplateRef('tree')
const nav = useTemplateRef('nav')

const initialSelectedNode = computed(() => shared.currentPath)
const isOption = computed(() => isOptionDoc())

function createChildren(currentNode, currentSource) {
  function createNode(source, parentNode) {
    let childNode = {
      // type: source.type,
      path: source.path,
    }

    childNode.path = source.path
    if (source.arrayItemType) {
      childNode.label = `{type: ${source.arrayItemType}, ...}`
      childNode.labelExpanded = '{'
    }
    // Array also may has properties.
    else if (source.default != null) {
      childNode.defaultValue = source.default
      // Leave the space to show default value.
      childNode.label = source.prop + ': '
      childNode.leaf = true
    } else if (source.isArray) {
      childNode.label = source.prop + ': [{...}]'
      childNode.labelExpanded = source.prop + ': [{'
    } else if (source.isObject) {
      childNode.label = source.prop + ': {...}'
      childNode.labelExpanded = source.prop + ': {'
    } else {
      childNode.label = source.prop
      childNode.leaf = true
    }

    // TODO. A better way to query source. Avoid `ref` and `freeze`
    childNode.$source = Object.freeze(source)

    return childNode
  }

  let children = []
  if (currentSource.children) {
    currentSource.children.forEach((childSource) => {
      children.push(createNode(childSource, currentNode))
    })
  }
  return children
}

function updateTreeSelectionAndExpand() {
  expandedKeys.value = []

  // Expand parent node of selected and ancestor nodes.
  let ancestorPath = shared.currentPath
  let idx
  while (
    (idx = ancestorPath.lastIndexOf('.')) >= 0 ||
    (idx = ancestorPath.lastIndexOf('-')) >= 0
  ) {
    ancestorPath = ancestorPath.substr(0, idx)
    expandedKeys.value.push(ancestorPath)
  }
}

function loadTreeNode(node, resolve) {
  // Root node
  if (node.level === 0) {
    loading.value = false
    getOutlineAsync().then((source) => {
      resolve(createChildren(node.data, source))

      // Scroll to current node.
      // FIXME Side effect.
      setTimeout(() => {
        scrollToCurrentTreeNode()
      }, 200)
    })
  } else if (node.data.children && node.data.children.length) {
    resolve(node.data.children)
  } else if (node.data.$source) {
    resolve(createChildren(node.data, node.data.$source))
  } else {
    resolve([])
  }
}

function onSelectNode(nodeData, node) {
  shared.currentPath = nodeData.path
}

function scrollToCurrentTreeNode() {
  const node = nav.value.querySelector('.el-tree-node.is-current')
  if (node) {
    const nodeRect = node.getBoundingClientRect()
    const rootRect = nav.value.getBoundingClientRect()
    if (nodeRect.top > rootRect.bottom || nodeRect.bottom < rootRect.top) {
      // Not visible
      // node.scrollIntoView(true, {
      //     behavior: 'smooth'
      // });
      scrollIntoView(node, {
        time: 500,
        align: {
          top: 0.1,
        },
      })
    }
  }
}

function manualSelectNode(nodePath) {
  updateTreeSelectionAndExpand()

  // Highlight after all expanded nodes loaded.
  setTimeout(() => {
    // Cancel previous selection
    tree.value.setCurrentKey('')
    tree.value.setCurrentKey(nodePath)

    setTimeout(() => {
      // Scroll to selected node after set.
      scrollToCurrentTreeNode()
    }, 200)
  }, 50)
}

function collapseAll() {
  for (let key in tree.value.store.nodesMap) {
    tree.value.store.nodesMap[key].expanded = false
  }
}

onMounted(() => {
  updateTreeSelectionAndExpand()
})

watch(
  () => shared.currentPath,
  (newVal) => {
    directTo(newVal)
    manualSelectNode(newVal)
  },
)
</script>

<style lang="scss">
.doc-nav {
  h3 {
    margin: 0;
    padding: 5px;
    font-family: Monaco, 'Source Code Pro', monospace;
    font-size: 14px;
  }

  .toolbox {
    position: absolute;
    right: 10px;
    top: 5px;

    .item {
      font-size: 14px;
      cursor: pointer;
      color: #337ab7;

      &:hover {
        text-decoration: underline;
      }

      svg {
        vertical-align: baseline;
        width: 12px;
        height: 12px;
      }
    }
  }

  .el-tree {
    padding-left: 6px;
  }

  .el-tree-node {
    color: #333;

    .el-tree-node__content {
      height: 24px;
    }

    &.is-current {
      & > .el-tree-node__content {
        background-color: #b03a5b;
        color: #fff;

        .default-value {
          color: #eee;
        }
      }
    }

    // &:focus {
    //     &>.el-tree-node__content {
    //         background-color: #B03A5B;
    //     }
    // }
  }

  .doc-nav-item {
    font-family: 'Source Code Pro', monospace;
    font-size: 13px;
    white-space: nowrap;
    display: inline-flex;
    gap: 4px;

    .default-value {
      color: #999;
    }
  }
}

// Special configuration for tutorial, option, api
.ec-doc-tutorial,
.ec-doc-api {
  .doc-nav {
    .el-tree {
      padding-left: 0;
      margin-top: 10px;
    }
  }
}

.ec-doc-tutorial {
  .doc-nav {
    .el-tree-node {
      .el-tree-node__content {
        height: 32px;
      }

      .doc-nav-item {
        margin-left: -10px;
        font-family:
          'Source Sans Pro', 'Helvetica Neue', 'Segoe UI', Arial, 'PingFang SC',
          STHeiti, 'Microsoft Yahei', sans-serif;
      }
    }
  }
}
</style>
