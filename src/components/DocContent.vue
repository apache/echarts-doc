<template>
    <div class="doc-main" v-loading="loading">
        <div :class="['doc-content', shared.showOptionExample ? 'option-example-actived' : '']">
            <h2 :id="pageId">{{pageTitle}}</h2>
            <div
                class="page-description"
                v-if="pageDesc"
                v-html="pageDesc"
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
        <LiveExample v-if="shared.showOptionExample"></LiveExample>
    </div>
</template>

<script>

import {
    getPageTotalDescAsync,
    getPageOutlineAsync,
    getOutlineAsync,
    convertPathToId,
    getOutlineNode,
    getDefaultPage
} from '../docHelper';
import {store, getPagePath} from '../store';
import {directTo} from '../route';
import DocContentItemCard from './DocContentItemCard.vue'
import scrollIntoView from 'scroll-into-view';
import Vue from 'vue';
import LazyLoad from 'vanilla-lazyload';
import LiveExample from './LiveExample.vue'

export default {
    components: {
        DocContentItemCard,
        LiveExample
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

        pageDesc() {
            const item = this.rootPageDescMap[this.pagePath]
                || this.pageDescMap[this.pagePath];
            return item && item.desc; // In mobile.
        },

        pageExampleCode() {
            const item = this.rootPageDescMap[this.pagePath]
                || this.pageDescMap[this.pagePath];
            return item && item.exampleBaseOptions;
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
        // Root page.
        getPageTotalDescAsync('').then(rootPageDescMap => {
            this.rootPageDescMap = Object.freeze(rootPageDescMap);
        });

        this._lazyload = new LazyLoad({
            elements_selector: 'iframe',
            load_delay: 300
        });

        this.updateCurrentPath(this.shared.currentPath, true);
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
                scrollIntoView(document.querySelector('#' + convertPathToId(path)), {
                    time: time || 400,
                    align: {
                        top: 0,
                        topOffset: -offset
                    }
                });
            }, timeDelay || 0);
        },

        updateCurrentPath(newVal, firstTime) {
            // Handling page count find issue.
            if (newVal) {
                if (!getOutlineNode(newVal)) {
                    // Redirect to default node
                    directTo(getDefaultPage(newVal));
                    return;
                }
            }
            else {
                directTo(getDefaultPage());
                return;
            }


            let newPagePath = getPagePath();
            if (newPagePath === this.pagePath) { // Use title as hash.
                this.scrollTo(newVal);
                return;
            }

            this.loading = true;

            this.pagePath = newPagePath;
            // Fetch components.
            getPageOutlineAsync(newVal).then(pageOutline => {
                if (pageOutline.isRoot) {
                    this.maxDepth = 0;  // No children
                }
                else if (this.shared.isMobile) {
                    this.maxDepth = 1;  // Only one level
                }
                else {
                    this.maxDepth = Infinity;
                }

                return getPageTotalDescAsync(newVal).then(pageDescMap => {
                    this.pageOutline = Object.freeze(Object.assign({}, pageOutline));

                    let newPageDescMap = {};
                    let outlineRootName = newVal.split('.')[0];
                    for (let key in pageDescMap) {
                        // Add key prefix
                        // For example: `series-bar.itemStyle` is `itemStyle` in the storage
                        newPageDescMap[outlineRootName + '.' + key] = pageDescMap[key];
                    }

                    this.pageDescMap = Object.freeze(newPageDescMap);
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
        },
        'pageExampleCode'(newVal) {
            // { code, title, name }
            // TODO: Code switch
            const code = newVal && newVal[0] && newVal[0].code;
            if (code) {
                const func = new Function(code + '\n return option');
                this.shared.previewOption = Object.freeze(func());
            }
        }
    }
}
</script>


<style lang="scss">

@import "../style/mixin.scss";

.doc-main {
    margin-left: 10px;
}

.doc-content {
    text-align: left;

    &.option-example-actived {
        margin-right: 45%;
    }

    h2 {
        color: #B03A5B;
        font-size: 34px;
        border-bottom: 1px solid #ccc;
        height: 45px;
        line-height: 45px;
        margin: 0;
        font-weight: normal;
        box-sizing: content-box;
    }

    h3 {
        font-weight: normal;
        color: #999;
        font-size: 30px;
        margin: 20px 20px 20px 0;
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