<template>
    <div v-loading="loading" class="doc-nav">
        <el-tree
            node-key="path"
            :default-expanded-keys="expandedKeys"
            :indent="10"
            :data="treeData">

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

import {getAsync} from './docJson';

function processData(data, rootNode) {

    function getSchemaFirstType(schema) {
        return schema.type instanceof Array ? schema.type[0] : schema.type
    }

    function createNodeBase(schema, parentNode) {
        return {
            isRoot: false,
            type: schema.type,
            defaultValue: schema.default
        }
    }

    function createArrayItemNode(schema, parentNode) {
        let childNode = createNodeBase(schema, parentNode);
        childNode.isArrayItem = true;
        if (schema.properties && schema.properties.type && schema.properties.type.default) {
            childNode.label = `{type: ${schema.properties.type.default}, ...}`
            childNode.labelExpanded = '{';
        }
        else {
            // Fallback solution.
            if (getSchemaFirstType(schema) === 'Array') {
                childNode.label = '[...]';
                childNode.labelExpanded = '[';
            }
            else {
                childNode.label = '{...}';
                childNode.labelExpanded = '{';
            }
        }
        return childNode;
    }
    function createPropertyNode(propName, schema, parentNode) {
        let childNode = createNodeBase(schema, parentNode);
        childNode.path = parentNode.path + '.' + propName;

        if (schema.default != null) {
            // Leave the space to show default value.
            childNode.label = propName + ': ';
        }
        else {
            // Array also may has properties.
            if (schema.items) {
                childNode.label = propName + ': [{...}]';
                childNode.labelExpanded = propName + ': [{';
            }
            else if (schema.properties) {
                childNode.label = propName + ': {...}';
                childNode.labelExpanded = propName + ': {';
            }
            else {
                childNode.label = propName;
            }
        }
        childNode.propName = propName;
        return childNode;
    }
    function processObjectType(currentSchema, currentNode) {
        if (!currentSchema.properties) {
            return;
        }
        let children = [];
        for (let propName in currentSchema.properties) {
            let childSchema = currentSchema.properties[propName];
            let childNode = createPropertyNode(propName, childSchema, currentNode);
            processRecursively(childSchema, childNode);
            children.push(childNode);
        }
        currentNode.children = children;
    }

    function processArrayType(currentSchema, currentNode) {
        if (!currentSchema.items) {
            return
        }
        let subTypes;
        // Each item of array may have different type of object.
        // Like series, visualMap, legend
        if (currentSchema.items.anyOf) {
            let children = [];
            currentSchema.items.anyOf.forEach(itemSchema => {
                let childNode = createArrayItemNode(itemSchema, currentNode);
                processRecursively(itemSchema, childNode);
                children.push(childNode);
            });
            currentNode.children = children;
        }
        // Each item of array only have one type of object.
        // Like data and most of the compoents.
        else {
            processObjectType(
                currentSchema.items, currentNode
            );
        }
    }

    function processRecursively(currentSchema, currentNode) {
        // Array also may has properties.
        if (currentSchema.items) {
            processArrayType(currentSchema, currentNode);
        }
        else if (currentSchema.properties) {
            processObjectType(currentSchema, currentNode);
        }
        return currentNode;
    }

    processRecursively(
        data.option, rootNode
    );
}

export default {
    data() {
        return {
            treeData: [{
                path: 'option',
                label: 'setOption({',
                isRoot: true,
                children: []
            }],
            expandedKeys: ['option'],
            loading: true
        }
    },
    created() {
        getAsync().then(data => {
            this.loading = false;
            processData(data, this.treeData[0]);
        });
    }
}
</script>

<style lang="scss">

.doc-nav {
    .el-tree-node {
        color: #333;

        .el-tree-node__content {
            height: 24px;
        }

        &.is-current, &:focus {
            &>.el-tree-node__content {
                background-color: #B03A5B;
                color: #fff;

                .default-value {
                    color: #eee;
                }
            }
        }
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