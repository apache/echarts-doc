<template>
    <div v-loading="loading" class="doc-nav">
        <h3>{{title}}</h3>
        <el-tree
            node-key="path"
            empty-text=""
            :props="props"
            lazy
            :default-expanded-keys="expandedKeys"
            :indent="10"
            :expand-on-click-node="false"
            :load="loadTreeNode"
            :data="treeData"

            @current-change="selectNode"
            >

            <div class="doc-nav-item" slot-scope="{ node, data }">
                <span>{{ node.expanded ? (data.labelExpanded || data.label) : data.label }}</span>
                <span v-if="data.defaultValue != null" class="default-value">{{data.defaultValue}}</span>
                <span v-else-if="node.isLeaf" class="default-value">...</span>
                <span v-if="!data.isRoot && !node.expanded">,</span>
            </div>

        </el-tree>
    </div>
</template>

<script>

import {getOutlineAsync} from './docHelper';
import store from './store';

function joinPath(a, b, connector) {
    return a ? (a + connector + b) : b;
}

export function createChildren(currentNode, currentSource) {

    function createNode(source, parentNode) {
        let childNode = {
            type: source.type || typeof source.default,
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

            shared: store
        }
    },
    created() {
    },
    methods: {
        loadTreeNode(node, resolve) {
            // Root node
            if (node.level === 0) {
                this.loading = false;
                getOutlineAsync().then(source => {
                    resolve(createChildren(node.data, source))
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

        selectNode(nodeData, node) {
            this.shared.currentPath = nodeData.path;
        }
    }
}
</script>

<style lang="scss">

.doc-nav {
    min-height: 100%;

    h3 {
        margin: 0;
        padding: 5px;
        font-family: Monaco,Consolas,Courier new,monospace;
        font-size:14px;
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
        font-family: Monaco,Consolas,Courier new,monospace;
        font-size: 13px;
        white-space: nowrap;

        .default-value {
            color: #999;
        }
    }
}

</style>