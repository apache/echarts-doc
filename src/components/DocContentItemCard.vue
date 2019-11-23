<template>
<div
    :class="['doc-content-item-card', 'level-' + depth, isLeaf ? 'leaf' : '']"
    :id="itemId"
>
    <div class="hierarchy-line" v-if="expanded"></div>
    <h4>
        <span class="guider" v-if="depth > 1"></span>
        <el-button plain circle size="mini"
            v-if="!isLeaf"
            :icon="expanded ? 'el-icon-minus' : 'el-icon-plus'"
            @click="toggleExpanded"
        ></el-button>
        <!-- <a v-else class="anchor" href="">#</a> -->
        <span class="path-parent">
            <a :href="'#' + item.link" :key="item.link" v-for="item in parentPath">{{item.text}}.</a>
        </span>
        <span class="path-base">
            <a :href="'#' + baseName.link">{{baseName.text}}</a>
        </span>

        <span class="default-value" v-if="nodeData.default && nodeData.default !== '*'"> = {{nodeData.default}}</span>
    </h4>

    <div class="prop-types">
        <span
            :class="['prop-type', 'prop-type-' + type.toLowerCase()]"
             :key="type"
            v-for="type in nodeData.type"
        >{{type}}</span>
    </div>

    <div class="item-description"
        v-html="desc"
        v-highlight
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
            @toggle-expanded="bubbleEvent"
        ></DocContentItemCard>
    </div>
</div>
</template>

<script>

import {
    convertPathToId
} from '../docHelper';

import store from '../store';

export default {
    name: 'DocContentItemCard',

    props: ['nodeData', 'descMap', 'maxDepth', 'depth'],

    data() {
        return {
            manualExpanded: null
        }
    },

    created() {
    },

    computed: {

        itemId() {
            return convertPathToId(this.nodeData.path);
        },

        expanded() {
            // Expanded at most 2 level.
            if (this.isLeaf) {
                return false;
            }
            else if (this.manualExpanded != null) {
                return this.manualExpanded;
            }
            else {
                return this.depth < 2
                    || store.currentPath.indexOf(this.nodeData.path) >= 0;
            }
        },

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
            let items = [];
            let link = '';
            for (let i = 0; i < parts.length - 1; i++) {
                if (!link) {
                    link += parts[i];
                }
                else {
                    link += '.' + parts[i];
                }
                items.push({
                    text: parts[i],
                    link: link
                });
            }
            return items;
        },

        baseName() {
            return {
                text: this.nodeData.path.split('.').pop(),
                link: this.nodeData.path
            }
        }
    },

    methods: {
        bubbleEvent() {
            this.$emit('toggle-expanded');
        },
        toggleExpanded() {
            this.manualExpanded = !this.expanded;
            this.$emit('toggle-expanded');
        }
    }
}
</script>

<style lang="scss">

$card-margin: 15px;
$children-padding: 10px;

$hierarchy-guider-color: #C592A0;

.doc-content-item-card {

    margin-top: 30px;
    margin-left: $card-margin;
    border-top: 1px solid #ccc;

    position: relative;

    padding: 15px 0;

    .hierarchy-line {
        position: absolute;
        top: 40px;
        bottom: 0px;
        left: -14px;
        width: 50px;
        border-left: 1px solid $hierarchy-guider-color;
        // border-bottom: 1px solid $hierarchy-guider-color;
    }

    h4 {
        margin: 0;
        padding: 0;

        font-family: Montserrat, sans-serif;

        &>* {
            vertical-align: bottom;
            display: inline-block;
        }
        // opacity: 0.9;

        .el-button {
            padding: 2px;
            font-size: 12px;
            margin-left: -23px;
            color: $hierarchy-guider-color;
            border-color: $hierarchy-guider-color;
            border-radius: 4px;

            background: #fff;


            position: relative;
        }

        .anchor {
            color: #C592A0;
            font-size: 16px;
            text-decoration: none;

            &:hover {
                text-decoration: underline;
            }
        }

        .path-parent {
            font-size: 13px;
            padding-right: 20px;
            padding: 0;
            font-weight: normal;

            .separator {
                margin: 0 3px;
                color: #B03A5B;
            }

            a {
                color: #C592A0;
            }
        }
        .path-base {
            font-size: 16px;
            padding-left: 5px;
            padding: 0;
            font-weight: normal;

            a {
                color: #B03A5B;
            }
        }

        .path-parent, .path-base {
            a {
                text-decoration: none;
                &:hover {
                    text-decoration: underline;
                }
            }
        }

        .default-value {
            color: #293c55;
            font-size: 18px;
            margin-left: 15px;
            vertical-align: bottom;
            font-weight: normal;
        }
    }

    &.level-1 {
        &>h4 {
            // opacity: 1;
            .anchor {
                font-size: 24px;
            }
            .path-parent {
                font-size: 18px;
            }
            .path-base {
                font-size: 24px;
            }
        }
    }
    &.level-2 {
        &>h4 {
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
    &.level-3 {
       &>h4 {
            .anchor {
                font-size: 18px;
            }
            .path-parent {
                font-size: 14px;
            }
            .path-base {
                font-size: 18px;
            }
        }
    }


    @for $i from 1 through 10 {
        &.level-#{$i + 1} {

            border-top: none;
            margin-top: 10px;

            // .el-button {
            //     margin-left: -25px;
            // }

            .hierarchy-line {
                top: 38px;
            }
            .guider {
                vertical-align: middle;
                width: $children-padding + $card-margin + 9;
                margin-left: -$children-padding - $card-margin - 14;
                margin-right: 2px;
                // width: $i * ($children-padding + $card-padding);
                // margin-left: -$i * ($children-padding + $card-padding);
                border-top: 1px solid $hierarchy-guider-color;

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
    }
    .prop-type {
        display: inline-block;
        margin-right: 4px;
        border-radius: 4px;
        padding: 3px 5px;
        color: #fff;
        background-color: #a3a3a3;
        font-size: 12px;
    }

    .prop-type-string {
        background-color: #fd8888;
    }

    .prop-type-number {
        background-color: #8fb9e4;
    }

    .prop-type-object {
    }

    .prop-type-array {
    }

    .prop-type-function {
    }

    .prop-type-boolean {
        background-color: #e6a23c;
    }


    .children {
        padding: $children-padding;
    }
}
</style>