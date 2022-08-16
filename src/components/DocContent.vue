<template>
    <div class="doc-main" v-loading="loading">
        <div ref="docContentDom"
            :class="[
            'doc-content',
            shared.showOptionExample ? 'option-example-actived' : '',
            'option-example-' + shared.computedOptionExampleLayout + '-layout'
        ]">
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
                    @scroll-to-self="scrollTo"
                    @toggle-expanded="handleCardExpandToggle"
                ></DocContentItemCard>
            </div>
        </div>
        <template v-if="showLiveExample">
            <LiveExample v-if="shared.showOptionExample" ref="liveExample"></LiveExample>
            <div v-else class="open-option-example" @click="openOptionExample">
                <i class="el-icon-data-line"></i> {{ $t('example.titleShort') }}
            </div>
        </template>
    </div>
</template>

<script>

import {
    getPageTotalDescAsync,
    getPageOutlineAsync,
    convertPathToId,
    getOutlineNode,
    getDefaultPage
} from '../docHelper';
import {store, getPagePath, isOptionDoc, updateOptionExampleLayout} from '../store';
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

        pageExamples() {
            const item = this.rootPageDescMap[this.pagePath]
                || this.pageDescMap[this.pagePath];
            // Return an empty array by default. Or may not trigger it changed.
            return (item && item.exampleBaseOptions) || [];
        },

        pageDisplayOutline() {
            if (!this.shared.isMobile) {
                return this.pageOutline;
            }
            else {
                return getOutlineNode(getPagePath());
            }
        },

        showLiveExample() {
            return !this.shared.isMobile && isOptionDoc();
        },

        needScrollOffset() {
            return this.shared.showOptionExample && !this.shared.isMobile
                && this.shared.computedOptionExampleLayout === 'top';
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

        this.resize = this.resize.bind(this);
        window.addEventListener('resize', this.resize);

        this.resize();
    },

    destroyed() {
        window.removeEventListener('resize', this.resize);
    },

    methods: {
        resize() {
            this.shared.optionExampleLayout === 'auto' && updateOptionExampleLayout('auto');
            Vue.nextTick(() => {
                this.updateDocContentMargin();
            });
        },

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
                //let container = store.isMobile ? document.body : this.$el.parentNode;
                let offset = store.isMobile ? 100 : 20;
                if (this.needScrollOffset) {
                    offset += this.$refs.liveExample.$el.offsetHeight;
                }
                // previous usage: document.querySelector('#' + convertPathToId(path))
                // Some special characters like `$` are not allowed in selector when using `document.querySelector`,
                // use `document.getElementById` instead.
                scrollIntoView(document.getElementById(convertPathToId(path)), {
                    time: time || 400,
                    align: {
                        top: 0,
                        topOffset: offset
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
        },

        openOptionExample() {
            this.shared.showOptionExample = true;
        },

        updateDocContentMargin(isClose) {
            if (!this.$refs.liveExample && !isClose) {
                return;
            }
            // update margin of doc content
            this.$refs.docContentDom.style.margin = '';
            if (!isClose) {
                const marginDir = this.shared.computedOptionExampleLayout;
                if (marginDir !== 'right') {
                    const marginStyleName = 'margin' + marginDir[0].toUpperCase() + marginDir.slice(1);
                    const marginValue = this.$refs.liveExample.$el.clientHeight;
                    this.$refs.docContentDom.style[marginStyleName] = marginValue + 'px';
                }
            }
        }
    },

    watch: {
        'shared.currentPath'(newVal) {
            this.updateCurrentPath(newVal);
            Vue.nextTick(() => {
                this.updateDocContentMargin();
            });
        },
        'pageExamples'(newVal) {
            // { code, title, name }
            // TODO: Code switch
            if (newVal && newVal.length) {
                this.shared.allOptionExamples = Object.freeze(newVal);
            }
            else {
                this.shared.allOptionExamples = null;
            }
        },
        'shared.computedOptionExampleLayout'() {
            Vue.nextTick(() => {
                this.updateDocContentMargin();
            });
        },
        'shared.showOptionExample'(newVal) {
            Vue.nextTick(() => {
                this.updateDocContentMargin(!newVal);
            });
        },
        loading(val) {
            this.$el.parentElement.style.overflow = val ? 'hidden' : '';
        }
    }
}
</script>


<style lang="scss">

@import "../style/mixin.scss";

.doc-main {
    position: static!important;
    margin-left: 10px;

    .open-option-example {
        position: fixed;
        right: 0;
        // bottom: 50px;
        top: 50%;
        padding: 10px;
        border-radius: 20px 0 0 20px;
        box-shadow: 0 0 10px rgba(0,0,0,0.2);
        background: #fff;
        cursor: pointer;

        font-size: 12px;

        &:hover {
            background: #eee;
        }

        i {
            font-size: 16px;
            vertical-align: middle;
        }
    }
}

.doc-content {
    text-align: left;
    // color: #59636f;
    color: #4d555e;

    // transition: margin-right 500ms cubic-bezier(0.215, 0.610, 0.355, 1);

    &.option-example-actived {
        &.option-example-top-layout {
           // margin-top: 42%;
        }
        &.option-example-bottom-layout {
           // margin-bottom: 42%;
        }
        &.option-example-right-layout {
            margin-right: 45%;
        }
    }



    h2 {
        color: #B03A5B;
        font-size: 34px;
        border-bottom: 1px solid #ccc;
        height: 45px;
        line-height: 45px;
        margin: 0;
        margin-left: 15px;
        font-weight: normal;
        box-sizing: content-box;
    }

    h3 {
        font-weight: normal;
        color: rgb(150, 150, 150);
        font-size: 28px;
        margin: 20px 0px 20px 15px;
    }

    .page-description {
        padding: 5px 0;
        margin-left: 15px;

        @include description-html-formatter;
    }

    .item-description {
        margin: 0;
        padding: 5px 0;

        @include description-html-formatter;
    }

    table {
        border: 1px solid #ddd;
        border-collapse: collapse;
    }

        th, td {
            padding: 10px;
            border: 1px solid #eee;
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
    .doc-main {
        margin-left: 0;
    }

    .doc-content {
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