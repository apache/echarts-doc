<template>
    <el-container class="doc-main">
        <el-aside width="300px" style="height:100%">
            <DocNav></DocNav>
        </el-aside>
        <el-main>
            <DocContent></DocContent>
        </el-main>
    </el-container>
</template>

<script>

import DocNav from './DocNav.vue';
import DocContent from './DocContent.vue';

export default {
    components: {
        DocNav,
        DocContent
    }
};
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Montserrat&display=swap');

.doc-main {
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
}
</style>