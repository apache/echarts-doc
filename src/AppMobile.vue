<template>
    <div :class="['ec-doc-mobile',  'ec-doc-' + shared.docType]">
        <div class="top-bar">
            <div class="doc-type-nav">
                <a
                    :href="'option.html#title'"
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
                <a
                    :href="'option-gl.html'"
                    :class="{'selected': shared.docType === 'option-gl'}"
                >{{$t('nav.optionGL')}}</a>
            </div>
            <div class="doc-mobile-toolbar">
                <el-button
                    icon="el-icon-menu" class="open-nav" size="mini"
                    @click="showNav"
                ></el-button>
                <Search></Search>
            </div>
        </div>
        <el-drawer
            direction="ltr"
            size="80%"
            :visible.sync="navShown"
            :show-close="false"
        >
            <DocNav></DocNav>
        </el-drawer>
        <transition>
            <SearchResult v-if="shared.fuzzySearch"></SearchResult>
            <!-- Always create a new component if page is changed -->
            <DocContent v-else :key="pagePath"></DocContent>
            <!-- <Home v-else></Home> -->
        </transition>
        <div class="doc-breadcrumb" v-if="pagePathParts.length > 1">
            <a :key="item.link" v-for="item in pagePathParts" :href="'#' + item.link">{{item.text}}</a>
        </div>
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
        },
        pagePathParts() {
            let parts = this.pagePath.split('.');
            let items = [];
            let link = '';
            for (let i = 0; i < parts.length; i++) {
                if (!link) {
                    link += parts[i];
                }
                else {
                    link += '.' + parts[i];
                }
                items.push({
                    text: parts[i] + (i === parts.length - 1 ? '' : '.'),
                    link: link
                });
            }
            return items;
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

    a {
        color: #337ab7;
        text-decoration: none;
        margin: 0 3px;

        &:hover {
            text-decoration: underline;
        }
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
            width: 22%;
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

    .doc-breadcrumb {
        position: fixed;
        text-align: center;
        left: 50%;
        transform: translate(-50%, 0);
        bottom: 20px;
        border-radius: 4px;
        padding: 5px;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        background: #337ab7;

        a {
            display: inline-block;
            color: #fff;
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