<template>
    <el-container class="doc-main">
        <el-aside width="300px" style="height:100%">
            <DocNav></DocNav>
        </el-aside>
        <el-main>
            <DocMain></DocMain>
        </el-main>
    </el-container>
</template>

<script>

import DocNav from './DocNav.vue';
import DocMain from './DocMain.vue';

export default {
    components: {
        DocNav,
        DocMain
    }
};
</script>

<style lang="scss">

.doc-main {
    height: 100%;

    .el-aside {
        border-right: 1px solid #ddd;
    }
}
</style>