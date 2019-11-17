<template>
    <div class="doc-content" v-loading="loading">
        <h2 :id="'#doc-content-' + pagePath.replace(/\./g, '-')">{{pagePath}}</h2>
        <div
            class="item-description"
            v-html="rootPageDescMap[pagePath]"
            v-highlight
            v-lazyload
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
    getOutlineAsync
} from './docHelper';
import DocContentItemCard from './DocContentItemCard.vue'
import store from './store';
import VueScrollTo from 'vue-scrollto';
import Vue from 'vue';


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
    },

    created() {
        getRootPageTotalDescAsync().then(rootPageDescMap => {
            this.rootPageDescMap = rootPageDescMap;
        });
    },

    methods: {
        scrollTo(path, time) {
            // Scroll to.
            Vue.nextTick(() => {
                // console.log(document.querySelector('#doc-content-' + path.replace(/\./g, '-')), '#doc-content-' + path.replace(/\./g, '-'));
                VueScrollTo.scrollTo(
                    // Hard coded ID
                    '#doc-content-' + path.replace(/\./g, '-'), time || 400, {
                        easing: 'ease-in-out',
                        container: this.$el.parentNode
                    }
                );
            });
        }
    },

    watch: {
        'shared.currentPath'(newVal) {
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

                    this.scrollTo(newVal, 1000);
                });
            }).catch(e => {
                this.pageOutline = {};
                this.loading = false;
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

    .item-description {
        margin: 0;
        padding: 5px;

        .hljs {
            background: transparent;
            padding: 0;
        }

        hr {
            border: none;
            border-bottom: 1px solid #eee;
            width: 80%;
        }

        blockquote {
            font-size: 12px;
            color: #999;

            margin: 0 10px;

            p {
                margin: 0;
            }

            pre {
                font-size: 12px;
            }
        }

        iframe {
            border: 1px solid #ccc;
        }

        p {
            line-height: 1.7em;
            margin: 12px 0 0 0;
            font-size: 14px;
        }
        pre {
            margin: 5px 10px;
            border-radius: 5px;
            background-color: #f5f7fa;
            border: none;
            padding: 10px;
            font-size: 13px;
        }

        .codespan {
            padding: 2px 4px;
            font-size: 14px;
            color: #293C55;
            background-color: #f9f2f4;
            border-radius: 4px;
        }

        code *, code {
            font-family: Monaco, Consolas, 'Courier New';
        }

        ol {
            margin-left: 20px;
        }
        ul li {
            list-style: disc;
            margin: 10px 20px;
            font-size: 14px;
        }
        ol li {
            list-style: decimal;
        }

        a {
            color: #337ab7;
            text-decoration: none;
            margin: 0 3px;

            font-family: Monaco, Consolas, STHeiti, "Microsoft Yahei", "WenQuanYi Micro Hei", sans-serif;

            &:hover {
                text-decoration: underline;
            }
        }
    }

}
</style>