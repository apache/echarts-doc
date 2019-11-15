<template>
<div class="doc-content-item-card">
    <h4>
        <span class="path-parent" v-if="parentPath">{{parentPath}}.</span>
        <span class="path-base">{{baseName}}</span>
    </h4>

    <div class="item-description" v-html="desc" v-highlight></div>

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
import './directive/highlight';

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
    border-bottom: 1px solid #ddd;

    padding: 15px;

    h4 {
        margin: 0;
        padding: 0;

        font-family: Montserrat, sans-serif;

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

    .item-description {
        margin: 0;
        padding: 5px;

        blockquote {
            font-size: 12px;
            color: #999;

            p {
                margin: 0;
            }

            pre {
                font-size: 12px;
            }
        }

        iframe {
            border: 1px solid #ccc;
        }

        p {
            line-height: 1.7em;
            margin: 18px 0 0 0;
            font-size: 14px;
        }
        pre {
            margin: 5px 10px;
            border-radius: 5px;
            background-color: #f5f5f5;
            border: none;
            padding: 15px;
            font-size: 13px;
        }

        .codespan {
            padding: 2px 4px;
            font-size: 14px;
            color: #293C55;
            background-color: #f9f2f4;
            border-radius: 4px;
        }

        code *, code {
            font-family: Monaco, Consolas, 'Courier New';
        }

        ul li {
            list-style: disc;
            margin: 10px 20px;
        }
        ol li {
            list-style: decimal;
        }

        a {
            color: #337ab7;
            text-decoration: none;
            margin: 0 3px;

            &:hover {
                text-decoration: underline;
            }
        }
    }

    .children {
        padding: 10px;
    }
}
</style>