<template>
    <div v-loading="loading" class="doc-nav">
        <h3 v-if="isOption">{{title}}</h3>
        <div class="toolbox">
            <span v-if="isOption" class="item" @click="collapseAll"><i class="el-icon-s-fold"></i>{{$t('nav.collapseAll')}}</span>
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

            <div class="doc-nav-item" slot-scope="{ node, data }" v-if="shared.docType !== 'tutorial'">
                <!-- <el-tooltip :content="data.path" placement="top"> -->
                <span>{{ node.expanded ? (data.labelExpanded || data.label) : data.label }}</span>
                <!-- </el-tooltip> -->
                <span v-if="data.defaultValue != null" class="default-value">{{data.defaultValue}}</span>
                <span v-else-if="node.isLeaf" class="default-value">...</span>
                <span v-if="!data.isRoot && !node.expanded">,</span>
            </div>
            <div class="doc-nav-item" slot-scope="{ node, data }"  v-else>
                <span>{{ data.label }}</span>
            </div>
        </el-tree>
    </div>
</template>

<script>

import {getOutlineAsync} from '../docHelper';
import {store, isOptionDoc} from '../store';
import Vue from 'vue';
import {directTo} from '../route';
import scrollIntoView from 'scroll-into-view';


function joinPath(a, b, connector) {
    return a ? (a + connector + b) : b;
}

export function createChildren(currentNode, currentSource) {

    function createNode(source, parentNode) {
        let childNode = {
            // type: source.type,
            path: source.path
        };

        childNode.path = source.path;
        if (source.arrayItemType) {
            childNode.label = `{type: ${source.arrayItemType}, ...}`;
            childNode.labelExpanded = '{';
        }
        // Array also may has properties.
        else if (source.default != null) {
            childNode.defaultValue = source.default;
            // Leave the space to show default value.
            childNode.label = source.prop + ': ';
            childNode.leaf = true;
        }
        else if (source.isArray) {
            childNode.label = source.prop + ': [{...}]';
            childNode.labelExpanded = source.prop + ': [{';
        }
        else if (source.isObject) {
            childNode.label = source.prop + ': {...}';
            childNode.labelExpanded = source.prop + ': {';
        }
        else {
            childNode.label = source.prop;
            childNode.leaf = true;
        }

        // TODO. A better way to query source. Avoid `ref` and `freeze`
        childNode.$source = Object.freeze(source);

        return childNode;
    }

    let children = [];
    if (currentSource.children) {
        currentSource.children.forEach(childSource => {
            children.push(createNode(childSource, currentNode));
        });
    }
    return children;
};

export default {
    data() {
        return {
            props: {
                isLeaf: 'leaf'
            },

            title: 'setOption({',

            treeData: [],

            expandedKeys: [],

            loading: true,

            shared: store,

            initialSelectedNode: store.currentPath
        }
    },
    created() {
        this.updateTreeSelectionAndExpand();
    },

    computed: {
        isOption() {
            return isOptionDoc();
        }
    },

    methods: {
        updateTreeSelectionAndExpand() {
            this.expandedKeys = [];

            // Expand parent node of selected and ancestor nodes.
            let ancestorPath = this.shared.currentPath;
            let idx;
            while ((idx = ancestorPath.lastIndexOf('.')) >= 0
                || (idx = ancestorPath.lastIndexOf('-')) >= 0
            ) {
                ancestorPath = ancestorPath.substr(0, idx);
                this.expandedKeys.push(ancestorPath)
            }
        },

        loadTreeNode(node, resolve) {
            // Root node
            if (node.level === 0) {
                this.loading = false;
                getOutlineAsync().then(source => {
                    resolve(createChildren(node.data, source));

                    // Scroll to current node.
                    // FIXME Side effect.
                    setTimeout(() => {
                        this.scrollToCurrentTreeNode();
                    }, 200);
                });
            }
            else if (node.data.children && node.data.children.length) {
                resolve(node.data.children);
            }
            else if (node.data.$source) {
                resolve(createChildren(node.data, node.data.$source));
            }
            else {
                resolve([]);
            }
        },

        onSelectNode(nodeData, node) {
            this.shared.currentPath = nodeData.path;
        },

        scrollToCurrentTreeNode() {
            let node = this.$el.querySelector('.el-tree-node.is-current');
            if (node) {
                let nodeRect = node.getBoundingClientRect();
                let rootRect = this.$el.getBoundingClientRect();
                if (nodeRect.top > rootRect.bottom || nodeRect.bottom < rootRect.top) {   // Not visible
                    // node.scrollIntoView(true, {
                    //     behavior: 'smooth'
                    // });
                    scrollIntoView(node, {
                        time: 500,
                        align: {
                            top: 0.1
                        }
                    });
                }
            }
        },

        manualSelectNode(nodePath) {
            this.updateTreeSelectionAndExpand();

            // Highlight after all expanded nodes loaded.
            setTimeout(() => {
                // Cancel previous selection
                this.$refs.tree.setCurrentKey(null);
                this.$refs.tree.setCurrentKey(nodePath);

                setTimeout(() => {  // Scroll to selected node after set.
                    this.scrollToCurrentTreeNode();
                }, 200);
            }, 50);
        },

        collapseAll() {
            for (let key in this.$refs.tree.store.nodesMap) {
                this.$refs.tree.store.nodesMap[key].expanded = false;
            }
        }
    },

    watch: {
        'shared.currentPath'(newVal) {
            directTo(newVal);
            this.manualSelectNode(newVal);
        }
    }
}
</script>

<style lang="scss">

.doc-nav {

    h3 {
        margin: 0;
        padding: 5px;
        font-family: Monaco, 'Source Code Pro', monospace;
        font-size:14px;
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
            &>.el-tree-node__content {
                background-color: #B03A5B;
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

        .default-value {
            color: #999;
        }
    }
}


// Special configuration for tutorial, option, api
.ec-doc-tutorial, .ec-doc-api {
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
                font-family: "Source Sans Pro", "Helvetica Neue", "Segoe UI", Arial, "PingFang SC", STHeiti, "Microsoft Yahei", sans-serif;
            }
        }
    }

}

</style>