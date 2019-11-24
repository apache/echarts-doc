<template>
    <el-container :class="['ec-doc',  'ec-doc-' + shared.docType]">
        <el-aside width="300px" style="height:100%">
            <div class="doc-type-nav">
                <a :href="'option.html'" :class="{'selected': shared.docType === 'option'}">配置项</a>
                <a :href="'api.html'" :class="{'selected': shared.docType === 'api'}">API</a>
                <a :href="'tutorial.html'" :class="{'selected': shared.docType === 'tutorial'}">教程</a>
            </div>
            <Search></Search>
            <DocNav></DocNav>
        </el-aside>
        <el-main>
            <SearchResult v-if="shared.fuzzySearch"></SearchResult>
            <DocContent v-else-if="shared.currentPath"></DocContent>
            <Home v-else></Home>
        </el-main>
    </el-container>
</template>

<script>

import DocNav from './components/DocNav.vue';
import DocContent from './components/DocContent.vue';
import Search from './components/Search.vue';
import SearchResult from './components/SearchResult.vue';
import Home from './components/Home.vue';
import store from './store';

export default {

    props: ['docType'],

    data() {
        return {
            shared: store
        };
    },

    // computed: {
    //     hash() {
    //         return location.hash;
    //     }
    // },

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

.ec-doc {
    // Reset
    font-family: "Source Sans Pro", "Helvetica Neue", "Segoe UI", Arial, "PingFang SC", STHeiti, "Microsoft Yahei", sans-serif;

    ul, ol {
        margin: 0;
        padding: 0;
    }

    height: 100%;

    .el-aside {
        border-right: 1px solid #ddd;

        position: relative;

        .doc-type-nav {
            border-bottom: 1px solid #eee;
            margin-bottom: 10px;
            margin-left: 5px;

            a {
                display: inline-block;
                line-height: 35px;
                width: 30%;
                text-align: center;
                box-sizing: border-box;
                text-decoration: none;
                color: #000;
                cursor: pointer;

                &.selected {
                    border-top: 3px solid #B03A5B;
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

    .el-main {
        text-align: center;

        &>div {
            max-width: 1200px;
            margin: 0 auto;
            text-align: left;
            min-width: 100%;
        }
    }
}
</style>