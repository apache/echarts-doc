<template>
    <el-container :class="['ec-doc',  'ec-doc-' + shared.docType, 'ec-doc-locale-' + shared.locale]">
        <el-aside width="300px" style="height:100%">
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
                    :href="'option-gl.html'"
                    :class="{'selected': shared.docType === 'option-gl'}"
                >{{$t('nav.optionGL')}}</a>
                <!-- TODO Not use handbook link here?-->
                <a
                    :href="`https://echarts.apache.org/handbook/${shared.locale}/get-started`"
                    class="handbook-link"
                    target="blank"
                >{{$t('nav.tutorial')}}</a>
            </div>
            <Search></Search>
            <DocNav></DocNav>
        </el-aside>
        <el-main>
            <SearchResult v-if="shared.fuzzySearch"></SearchResult>
            <!-- Always create a new component if page is changed -->
            <DocContent v-else :key="pagePath"></DocContent>
            <!--  <Home v-else></Home> -->
        </el-main>
    </el-container>
</template>

<script>

import DocNav from './components/DocNav.vue';
import DocContent from './components/DocContent.vue';
import Search from './components/Search.vue';
import SearchResult from './components/SearchResult.vue';
import LiveExample from './components/LiveExample.vue'
import Home from './components/Home.vue';
import {store, getPagePath} from './store';

export default {

    props: ['docType'],

    data() {
        return {
            shared: store
        };
    },

    computed: {
        pagePath() {
            return getPagePath();
        }
    },

    components: {
        DocNav,
        DocContent,
        Search,
        SearchResult,
        LiveExample,
        Home
    }
};
</script>

<style lang="scss">

// @import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');
// @import url('https://fonts.googleapis.com/css?family=Source+Code+Pro&display=swap');

@font-face {
  font-family: 'iconfont';
  src:  url('./asset/icon.eot');
  src:  url('./asset/icon.eot#iefix') format('embedded-opentype'),
    url('./asset/icon.ttf') format('truetype'),
    url('./asset/icon.woff') format('woff'),
    url('./asset/icon.svg') format('svg');
  font-weight: normal;
  font-style: normal;
  font-display: block;
}
@font-face {
  font-family: 'Source Code Pro';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('./asset/SourceCodePro-Regular.woff') format('woff');
}

.ec-doc {
    // font-family: "Helvetica Neue", "Segoe UI", Arial, "PingFang SC", STHeiti, "Microsoft Yahei", sans-serif;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;

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

    height: 100%;

    &>.el-aside {
        border-right: 1px solid #ddd;

        position: relative;

        .doc-type-nav {
            border-bottom: 1px solid #eee;
            margin-bottom: 10px;
            margin-left: 5px;

            a {
                display: inline-block;
                line-height: 35px;
                // width: 30%;
                width: 20%;

                text-align: center;
                box-sizing: border-box;
                text-decoration: none;
                color: #000;
                cursor: pointer;
                font-size: 14px;

                &.selected {
                    border-top: 3px solid #B03A5B;
                }

                &.handbook-link {
                    color: #337ab7;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }

        .doc-nav {
            position: absolute;
            top: 90px;
            bottom: 0;
            left: 0;
            right: 0;
            overflow-y: scroll;
        }
    }

    &>.el-main {
        position: relative;
        text-align: center;

        &>div {
            // max-width: 1200px;
            margin: 0 auto;
            text-align: left;
            min-width: 100%;
        }

        // .live-example-bottom-container {
        //     position: fixed;
        //     height: ;
        // }
    }
}

.ec-doc.ec-doc-locale-zh {
    .doc-type-nav {
        a {
            width: 20%;
        }
    }
}

// For dropdown select in global
.el-select-dropdown.el-popper {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "PingFang SC", "Microsoft YaHei", "Hiragino Sans GB", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
</style>