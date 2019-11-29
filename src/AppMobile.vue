<template>
    <div :class="['ec-doc-mobile',  'ec-doc-' + shared.docType]">
        <div class="top-bar">
            <div class="doc-type-nav">
                <a
                    :href="'option.html'"
                    :class="{'selected': shared.docType === 'option'}"
                >{{$t('nav.option')}}</a>
                <a
                    :href="'api.html#echarts'"
                    :class="{'selected': shared.docType === 'api'}"
                >{{$t('nav.API')}}</a>
                <a
                    :href="'tutorial.html'"
                    :class="{'selected': shared.docType === 'tutorial'}"
                >{{$t('nav.tutorial')}}</a>
            </div>
            <div class="doc-mobile-toolbar">
                <el-button
                    icon="el-icon-menu" class="open-nav" size="mini"
                    @click="showNav"
                ></el-button>
                <Search></Search>
            </div>
            <el-drawer
                direction="ltr"
                size="80%"
                :visible.sync="navShown"
                :show-close="false"
            >
                <DocNav></DocNav>
            </el-drawer>
        </div>
        <transition>
            <SearchResult v-if="shared.fuzzySearch"></SearchResult>
            <!-- Always create a new component if page is changed -->
            <DocContent v-else-if="shared.currentPath" :key="pagePath"></DocContent>
            <Home v-else></Home>
        </transition>
    </div>
</template>

<script>

import DocNav from './components/DocNav.vue';
import DocContent from './components/DocContent.vue';
import Search from './components/Search.vue';
import SearchResult from './components/SearchResult.vue';
import Home from './components/Home.vue';
import {store, getPagePath} from './store';

export default {

    props: ['docType'],

    data() {
        return {
            navShown: false,
            shared: store
        };
    },

    computed: {
        pagePath() {
            return getPagePath();
        }
    },

    methods: {
        showNav() {
            this.navShown = true;
        }
    },

    watch: {
        'shared.currentPath'(newVal) {
            this.navShown = false;
        }
    },

    components: {
        DocNav,
        DocContent,
        Search,
        SearchResult,
        Home
    }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.ec-doc-mobile {
    // font-family: "Helvetica Neue", "Segoe UI", Arial, "PingFang SC", STHeiti, "Microsoft Yahei", sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;

    position: relative;

    ul, ol {
        margin: 0;
        padding: 0;
    }

    .top-bar {
        position: sticky;
        top: 0;
        height: 90px;
        left: 0;
        right: 0;
        background: #fff;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        border-bottom: 1px solid #ddd;
        z-index: 10;
    }
    .doc-type-nav {
        border-bottom: 1px solid #eee;
        margin-bottom: 10px;
        margin-left: 5px;

        a {
            display: inline-block;
            line-height: 30px;
            width: 30%;
            text-align: center;
            box-sizing: border-box;
            text-decoration: none;
            color: #000;
            cursor: pointer;
            font-size: 14px;

            &.selected {
                border-top: 3px solid #B03A5B;
            }
        }
    }

    .doc-mobile-toolbar {
        display: flex;
        flex-direction: row;

        .open-nav {
            margin: 6px 5px;
        }

        .doc-search {
            flex: 1;
        }
    }
}

.el-drawer {
    .doc-nav {
        position: absolute;
        top: 10px;
        bottom: 0;
        left: 0;
        right: 0;
        overflow-y: scroll;
    }
}
</style>