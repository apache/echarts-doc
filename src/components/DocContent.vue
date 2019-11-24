<template>
    <div class="doc-content" v-loading="loading">
        <h2 :id="pageId">{{pagePath}}</h2>
        <div
            class="page-description"
            v-html="rootPageDescMap[pagePath]"
            v-highlight
        ></div>

        <div v-if="pageOutline.children && pageOutline.children && 1 <= maxDepth">
            <h3>Properties</h3>
            <DocContentItemCard
                v-for="child in pageOutline.children"
                :key="child.path"
                :node-data="child"
                :desc-map="pageDescMap"
                :max-depth="maxDepth"
                :depth="1"
                @toggle-expanded="handleCardExpandToggle"
            ></DocContentItemCard>
        </div>

    </div>
    </div>
</template>

<script>

import {
    getPageTotalDescAsync,
    getRootPageTotalDescAsync,
    getPageOutlineAsync,
    getOutlineAsync,
    convertPathToId
} from '../docHelper';
import DocContentItemCard from './DocContentItemCard.vue'
import store from '../store';
import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';
import LazyLoad from 'vanilla-lazyload';


function getPagePathFromPath(val) {
    return val.split('.')[0];
}
export default {
    components: {
        DocContentItemCard
    },

    data() {
        return {
            loading: false,

            pagePath: '',

            shared: store,

            maxDepth: Infinity,

            rootPageDescMap: {},

            // Outline of this page
            pageOutline: {},

            pageDescMap: {}
        }
    },

    computed: {
        pageId() {
            return convertPathToId(this.pagePath);
        }
    },

    created() {
        getRootPageTotalDescAsync().then(rootPageDescMap => {
            this.rootPageDescMap = rootPageDescMap;
        });

        this._lazyload = new LazyLoad({
            elements_selector: 'iframe',
            load_delay: 300
        });

        if (this.shared.currentPath) {
            this.updateCurrentPath(this.shared.currentPath, true);
        }
    },

    methods: {
        updateLazyload() {
            // console.log('Update lazy load');
            Vue.nextTick(() => {
                this._lazyload.update();
            });
        },

        handleCardExpandToggle() {
            this.updateLazyload();
        },

        scrollTo(path, time, timeDelay) {
            // Scroll to.
            setTimeout(() => {
                // console.log(document.querySelector('#' + convertPathToId(path)), convertPathToId(path));
                VueScrollTo.scrollTo(
                    '#' + convertPathToId(path), time || 400, {
                        offset: -20,
                        easing: 'ease-in-out',
                        container: this.$el.parentNode
                    }
                );
            }, timeDelay || 0);
        },

        updateCurrentPath(newVal, firstTime) {
            let newPagePath = getPagePathFromPath(newVal);
            if (newPagePath === this.pagePath) { // Use title as hash.
                this.scrollTo(newVal);
                return;
            }

            this.loading = true;

            this.pagePath = newPagePath;

            // Fetch components.
            getPageOutlineAsync(newVal).then(pageOutline => {
                return getPageTotalDescAsync(newVal).then(pageDescMap => {
                    this.pageOutline = Object.freeze(Object.assign({}, pageOutline));
                    this.pageDescMap = Object.freeze(pageDescMap);
                    this.maxDepth = this.pageOutline.isRoot  // Root page
                        ? 0 : Infinity
                    this.loading = false;

                    this.scrollTo(newVal, 1000, firstTime ? 300: 50);
                    this.updateLazyload();
                });
            }).catch(e => {
                this.pageOutline = {};
                this.loading = false;
            });
        }
    },

    watch: {
        'shared.currentPath'(newVal) {
            this.updateCurrentPath(newVal);
        }
    }
}
</script>


<style lang="scss">

@import "../style/mixin.scss";

.doc-content {
    h2 {
        color: #B03A5B;
        font-size: 34px;
        border-bottom: 1px solid #ccc;
        height: 45px;
        line-height: 45px;
        margin: 0;

        margin-left: 15px;
    }

    h3 {
        font-weight: normal;
        color: #999;
        font-size: 30px;
        margin-left: 15px;
    }

    .page-description {
        margin-left: 15px;
        padding: 5px 0;

        @include description-html-formatter;
    }

    .item-description {
        margin: 0;
        padding: 5px 0;

        @include description-html-formatter;
    }

}

.ec-doc-tutorial {
    .page-description {
        h2 {
            font-weight: normal;
            font-size: 22px;
            margin-left: 0;
            margin-top: 40px;
        }
    }
}
</style>