<template>
    <div class="properties-list-panel">
        <h5>{{$t('content.properties')}}</h5>
        <div class="properties-list">
            {
            <span :key="child.path"
                v-for="(child, index) in displayedProperties">
                <a :href="'#' + child.path">{{child.path.split('.').pop()}}</a>
                <span v-if="index < displayedProperties.length - 1">, </span>
            </span>
            }
        </div>
    </div>
</template>

<script>
export default {
    props: ['nodeData'],

    computed: {
        displayedProperties() {
            return this.nodeData.children;
        }
    }
}
</script>

<style lang="scss">
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
</style>