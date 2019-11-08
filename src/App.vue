<template>
    <el-container class="doc-main">
        <el-aside width="300px" style="height:100%">
            <OptionNav></OptionNav>
        </el-aside>
        <el-main>Hello World</el-main>
    </el-container>
</template>

<script>

import OptionNav from './OptionNav.vue';

export default {
    components: {
        OptionNav
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