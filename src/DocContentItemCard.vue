<template>
<div class="doc-content-item-card">
    <h4>
        <a class="anchor" href="">#</a>
        <span class="path-parent" v-if="parentPath">{{parentPath}}.</span>
        <span class="path-base">{{baseName}}</span>
    </h4>

    <div class="item-description"
        v-html="desc"
        v-highlight
        v-lazyload
    ></div>

    <div class="children" v-if="!isLeaf">
        <DocContentItemCard
            v-if="(depth + 1) <= maxDepth && expanded"
            v-for="child in nodeData.children"
            :key="child.path"
            :node-data="child"
            :desc-map="descMap"
            :depth="depth + 1"
            :max-depth="maxDepth"
        ></DocContentItemCard>
    </div>
</div>
</template>

<script>
export default {
    name: 'DocContentItemCard',

    props: ['nodeData', 'descMap', 'maxDepth', 'depth'],

    data() {
        return {
            expanded: false
        }
    },

    created() {
        this.$el
    },

    computed: {
        isLeaf() {
            return !(this.nodeData.children && this.nodeData.children.length);
        },

        desc() {
            let parts = this.nodeData.path.split('.');
            if (parts.length > 1) {
                // Remove the top page path.
                // For example: `series-bar.itemStyle` will be `itemStyle`
                parts = parts.slice(1);
            }
            return this.descMap[parts.join('.')];
        },

        parentPath() {
            let parts = this.nodeData.path.split('.');
            parts.pop();
            return parts.join('.');
        },

        baseName() {
            return this.nodeData.path.split('.').pop();
        }
    }
}
</script>

<style lang="scss">

.doc-content-item-card {

    margin-top: 30px;
    border-top: 1px solid #ccc;

    padding: 15px;

    h4 {
        margin: 0;
        padding: 0;

        font-family: Montserrat, sans-serif;

        .anchor {
            color: #C592A0;
            font-size: 24px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        .path-parent {
            color: #C592A0;
            font-size: 16px;
            padding-right: 20px;
            padding: 0;
            font-style: italic;
            font-weight: normal;
        }
        .path-base {
            color: #B03A5B;
            font-size: 24px;
            padding-left: 5px;
            padding: 0;
            font-weight: normal;
        }
    }

    .children {
        padding: 10px;
    }
}
</style>