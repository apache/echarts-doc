<template>
<div :class="{'doc-search-result-item-card': true, 'needs-show-more' : needsShowMoreDesc}">
    <h4 v-mark="searchQuery">
        <a class="path" :href="'#' + itemData.path">{{itemData.path}}</a>
    </h4>
    <div v-if="itemData.similarPaths.length > 0" class="other-result">
        <div :key="path" v-for="path in itemData.similarPaths">
            <a :href="'#' + path">{{path}}</a>
        </div>
    </div>
    <div class="item-description">
        <div v-html="itemData.content" v-mark="searchQuery"></div>
    </div>

    <div class="show-more-button">
        <el-button icon="el-icon-more" size="mini" @click="showMore">{{$t('search.showMore')}}</el-button>
    </div>
</div>
</template>

<script>
import Vue from 'vue';

export default {
    props: ['itemData', 'searchQuery'],

    data() {
        return {
            needsShowMoreDesc: true
        }
    },

    methods: {
        showMore() {
            this.needsShowMoreDesc = false;
        }
    },

    mounted() {
        Vue.nextTick(() => {
            let descNode = this.$el.querySelector('.item-description');
            this.needsShowMoreDesc = (descNode.scrollHeight !== descNode.clientHeight);
        });
    }
}
</script>

<style lang="scss">
@import "../style/mixin.scss";

.doc-search-result-item-card {
    margin: 30px 10px;
    border-top: 1px solid #ccc;

    // margin: 20px 5px;
    // padding: 15px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    // border-radius: 10px;


    h4 {
        margin: 10px 0;

        &>* {
            vertical-align: middle;
            display: inline-block;
        }
        a.path {
            font-family: Montserrat, sans-serif;
            font-size: 18px;
            padding-left: 5px;
            padding: 0;
            font-weight: normal;
            color: #B03A5B;
        }

    }

    .item-description, h4 {
        mark {
            background-color: #fc0;
            border-radius: 3px;
            padding: 2px;
        }

    }

    .other-result {
        font-size: 12px;

        padding: 0 0 10px 0;

        &>div {
            font-family: Montserrat, sans-serif;
        }
    }

    &.needs-show-more {

        .item-description {
            // -webkit-line-clamp: 10;
            // display: -webkit-box;
            // -webkit-box-orient: vertical;
            max-height: 200px;
            overflow-y: hidden;
        }

        .show-more-button {
            display: block;
        }
    }
    .show-more-button {
        display: none;
        // margin-top: -30px;
        // line-height: 30px;
        text-align: center;
        // background: linear-gradient(rgba(255, 255, 255, 0), rgba(255, 255, 255, 1.0));
        cursor: pointer;
        // position: relative;
    }

    @include description-html-formatter;

    // Not dispay iframe, code, image
    iframe, pre, image {
        display: none;
    }
}

.ec-doc-mobile {
    .doc-search-result-item-card {
        margin: 30px 0;
    }
}
</style>