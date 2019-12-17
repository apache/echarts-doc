<template>
    <div class="doc-content" v-loading="loading">
        <h2 :id="pageId">{{pageTitle}}</h2>
        <div
            class="page-description"
            v-if="rootPageDescMap[pagePath]"
            v-html="rootPageDescMap[pagePath]"
            v-highlight
        ></div>

        <div v-if="pageDisplayOutline.children && pageDisplayOutline.children && 1 <= maxDepth">
            <h3>{{$t('content.properties')}}</h3>
            <DocContentItemCard
                v-for="child in pageDisplayOutline.children"
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
    convertPathToId,
    getOutlineNode,
    getDefaultPage
} from '../docHelper';
import {store, getPagePath} from '../store';
import {directTo} from '../route';
import DocContentItemCard from './DocContentItemCard.vue'
import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';
import LazyLoad from 'vanilla-lazyload';

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
        pageTitle() {
            return this.pagePath;
        },

        pageId() {
            return convertPathToId(this.pagePath);
        },

        pageDisplayOutline() {
            if (!this.shared.isMobile) {
                return this.pageOutline;
            }
            else {
                return getOutlineNode(getPagePath());
            }
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
            if (!getOutlineNode(this.shared.currentPath)) {
                // Redirect to default node
                directTo(getDefaultPage(this.shared.currentPath));
                return;
            }
            this.updateCurrentPath(this.shared.currentPath, true);
        }
        else {
            directTo(getDefaultPage());
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
                let container = store.isMobile ? document.body : this.$el.parentNode;
                let offset = store.isMobile ? -100 : -20;
                // console.log(document.querySelector('#' + convertPathToId(path)), convertPathToId(path));
                VueScrollTo.scrollTo(
                    '#' + convertPathToId(path), time || 400, {
                        offset,
                        easing: 'ease-in-out',
                        container
                    }
                );
            }, timeDelay || 0);
        },

        updateCurrentPath(newVal, firstTime) {
            let newPagePath = getPagePath();
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
                    if (this.pageOutline.isRoot) {
                        this.maxDepth = 0;  // No children
                    }
                    else if (this.shared.isMobile) {
                        this.maxDepth = 1;  // Only one level
                    }
                    else {
                        this.maxDepth = Infinity;
                    }
                    this.loading = false;

                    this.scrollTo(newVal, 600, firstTime ? 300: 50);
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
    margin-left: 10px;
    h2 {
        color: #B03A5B;
        font-size: 34px;
        border-bottom: 1px solid #ccc;
        height: 45px;
        line-height: 45px;
        margin: 0;

    }

    h3 {
        font-weight: normal;
        color: #999;
        font-size: 30px;
    }

    .page-description {
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

.ec-doc-mobile {
    .doc-content {
        margin-left: 0;
        background: #f2f2f2;
        margin-bottom: 100px;
    }
    .page-description {
        padding: 5px 10px;
        background: #fff;
        // box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
    }
    h2 {
        font-size: 22px;
        font-weight: normal;
        padding: 20px 10px;
        border-bottom: none;
    }
    h3 {
        font-size: 20px;
        padding-left: 10px;
    }
}
</style>