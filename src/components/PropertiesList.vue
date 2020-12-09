<template>
    <div class="properties-list-panel">
        <h5>{{$t('content.properties')}}</h5>
        <div class="properties-list">
            {
            <span :key="child.path"
                v-for="(child, index) in displayedProperties">
                <el-popover
                    :title="getName(child.path)"
                    :close-delay="400"
                    :open-delay="200"
                    placement="top"
                    trigger="hover"
                    v-if="!shared.isMobile"
                >
                    <div class="property-popup-desc" v-html="getDesc(child.path)" v-highlight></div>
                    <a :href="'#' + child.path" slot="reference">{{getName(child.path)}}</a>
                </el-popover>
                <span v-else>
                    <a :href="'#' + child.path" slot="reference">{{getName(child.path)}}</a>
                </span>
                <span v-if="index < displayedProperties.length - 1">, </span>
            </span>
            }
        </div>
    </div>
</template>

<script>
import {store} from '../store';
export default {
    props: ['nodeData', 'descMap'],

    data() {
        return {
            shared: store
        }
    },

    computed: {
        displayedProperties() {
            return this.nodeData.children;
        }
    },

    methods: {
        getDesc(path) {
            return this.descMap[path] && this.descMap[path].desc;
        },

        getName(path) {
            return path.split('.').pop()
        }
    }
}
</script>

<style lang="scss">

@import "../style/mixin.scss";

.properties-list-panel {
    h5 {
        font-weight: normal;
        color: #999;
        font-size: 30px;
        margin: 5px 0;
        font-size: 14px;
    }

    .properties-list {

        a {
            font-family: Monaco,'Source Code Pro', STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;
            font-size: 12px;
            margin-right: 2px;
        }
    }
}
.property-popup-desc {
    max-height: 300px;
    max-width: 500px;
    overflow-y: auto;
    overflow-x: auto;

    @include description-html-formatter;

    pre {
        font-size: 12px
    }
    p {
        font-size: 12px;
    }
    ul {
        margin: 0;
        padding: 0;
    }
    ul li {
        font-size: 12px;
        margin: 5px 20px;
        list-style: disc;
    }
    pre {
        padding: 5px;
    }
    .codespan {
        font-size: 12px
    }
}

</style>