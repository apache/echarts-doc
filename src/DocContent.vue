<template>
    <div class="doc-content">
        <h2>{{pagePath}}</h2>
        <div class="page-description" v-html="descMap[pagePath]"></div>

        <h3>Properties</h3>
        <DocContentItemCard
            v-if="1 <= maxDepth"
            v-for="child in pageOutline.children"
            :key="child.path"
            :node-data="child"
            :desc-map="descMap"
            :max-depth="maxDepth"
            :depth="1"
        ></DocContentItemCard>
    </div>
    </div>
</template>

<script>
import {getPageTotalDescAsync, getPageOutlineAsync, getOutlineAsync} from './docHelper';
import DocContentItemCard from './DocContentItemCard.vue'
import store from './store';

function getPagePathFromPath(val) {
    return val.split('.')[0];
}
export default {
    components: {
        DocContentItemCard
    },

    data() {
        return {
            pagePath: '',

            shared: store,

            maxDepth: Infinity,

            // Outline of this page
            pageOutline: {},

            descMap: Object.freeze({})
        }
    },

    computed: {
    },

    watch: {
        'shared.currentPath'(newVal) {
            let newPagePath = getPagePathFromPath(newVal);
            if (newPagePath === this.pagePath) { // Use title as hash.
                return;
            }
            this.pagePath = newPagePath;

            // Fetch components.
            Promise.all([
                getPageOutlineAsync(newVal),
                getPageTotalDescAsync(newVal)
            ]).then(([pageOutline, descMap]) => {
                this.pageOutline = Object.freeze(Object.assign({}, pageOutline));
                this.descMap = Object.freeze(descMap);
                this.maxDepth = this.pageOutline.isRoot  // Root page
                    ? 0 : Infinity
            });
        }
    }
}
</script>


<style lang="scss">
.doc-content {
    h2 {
        color: #B03A5B;
        font-size: 34px;
        border-bottom: 1px solid #ccc;
        height: 40px;
        line-height: 40px;
        margin: 0;
    }

    h3 {
        font-weight: normal;
        color: #999;
        font-size: 30px;
    }
}
</style>