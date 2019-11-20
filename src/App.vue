<template>
    <el-container class="ec-doc">
        <el-aside width="300px" style="height:100%">
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

import DocNav from './DocNav.vue';
import DocContent from './DocContent.vue';
import Search from './Search.vue';
import SearchResult from './SearchResult.vue';
import Home from './Home.vue';
import store from './store';

export default {

    data() {
        return {
            shared: store
        };
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

.ec-doc {
    // Reset
    font-family: "Helvetica Neue", "Segoe UI", Tahoma, Arial, "Hiragino Sans GB", STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;

    ul, ol {
        margin: 0;
        padding: 0;
    }

    height: 100%;

    .el-aside {
        border-right: 1px solid #ddd;
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