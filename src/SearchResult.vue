<template>
    <div class="doc-search-result">
        <h3>文档搜索</h3>
        <el-input
            v-model="shared.searchQuery"

            prefix-icon="el-icon-search"
        ></el-input>
        <div class="result-summary">
            找到 {{searchResultCount}} 条配置项,
            <span v-if="searching" class="searching">
                搜索中<i class="el-icon-loading"></i>
            </span>
            <span v-else>
                显示 {{displayResultCount}} 条
            </span>
        </div>
        <div class="doc-search-result-item" :key="result.path" v-for="result in searchResult">
            <h4>
                <a class="path" :href="'#' + result.path">{{result.path}}</a>
            </h4>
            <div v-if="result.similarPaths.length > 0" class="other-result">
                <div :key="path" v-for="path in result.similarPaths">
                    <a :href="'#' + path">{{path}}</a>
                </div>
            </div>
            <div v-mark="shared.searchQuery" class="item-description">
                <div v-html="result.content"></div>
            </div>
        </div>
    </div>
</template>

<script>
import {
    searchAllAsync
} from './docHelper';

import store from './store';
import './directive/mark';

import throttle from 'lodash.throttle';

function updateSearchResultsImmediate(searchQuery) {
    this.searchResult = [];
    this.searchResultCount = 0;
    this.displayResultCount = 0;

    this.static.searchResult.cache = {};

    this.searching = true;
    searchAllAsync(searchQuery, results => {
        if (!this.noLimit && this.displayResultCount <= this.limitedResultCount) {
            for (let i = 0; i < results.length; i++) {
                let groupKey = results[i].text;
                // Group results.
                let similarResult = this.static.searchResult.cache[groupKey];
                if (similarResult) {
                    similarResult.similarPaths.push(results[i].path);
                }
                else {
                    let obj = Object.freeze({
                        path: results[i].path,
                        content: results[i].content,
                        similarPaths: []
                    });
                    this.searchResult.push(obj);
                    this.static.searchResult.cache[groupKey] = obj;
                }
            }
            this.displayResultCount += results.length;
        }
        this.searchResultCount += results.length;
    }).then(() => {
        this.searching = false;
    });
}
export default {
    data() {
        return {
            searchResult: [],
            searchResultCount: 0,
            displayResultCount: 0,

            noLimit: false,
            limitedResultCount: 200,

            searching: false,

            static: Object.freeze({
                searchResult: {
                    cache: null
                }
            }),

            shared: store
        }
    },

    created() {
        this.updateSearchResultsImmediate(this.shared.searchQuery);
    },

    methods: {
        updateSearchResultsImmediate,
        updateSearchResults: throttle(updateSearchResultsImmediate, 500, {
            leading: false
        })
    },

    watch: {
        'shared.searchQuery'(newVal) {
            this.updateSearchResults(newVal);
        }
    }
}
</script>


<style lang="scss">
@import "./style/mixin.scss";

.doc-search-result {
    h3 {
        font-weight: normal;
        font-size: 24px;
    }

    .result-summary {
        padding: 10px;
        color: #999;

        .searching {
            color: #B03A5B;
        }
    }
}

.doc-search-result-item {
    margin: 30px 5px;
    padding: 5px;
    border-top: 1px solid #ccc;

    // margin: 20px 5px;
    // padding: 15px;
    // box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    // border-radius: 10px;


    h4 {
        margin: 0;
        padding: 5px 0;

        &>* {
            vertical-align: middle;
            display: inline-block;
        }
        a.path {
            font-family: Montserrat, sans-serif;
            font-size: 18px;
            padding-left: 5px;
            padding: 0;
            font-weight: normal;
            color: #B03A5B;
        }

    }

    .item-description {
        -webkit-line-clamp: 10;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        // max-height: 200px;
        overflow-y: hidden;
    }

    mark {
        background-color: #fc0;
        border-radius: 3px;
        padding: 2px;
    }

    .other-result {
        font-size: 12px;

        padding: 0 10px 10px 10px;

        &>div {
            font-family: Montserrat, sans-serif;
        }
    }

    @include description-html-formatter;

    // Not dispay iframe, code, image
    iframe, pre, image {
        display: none;
    }
}
</style>