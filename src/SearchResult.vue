<template>
    <div class="doc-search-result">
        <h3>Search: {{shared.searchQuery}}, Result: {{searchResult.length}} items</h3>
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


export default {
    data() {
        return {
            searchResult: [],

            static: Object.freeze({
                searchResult: {
                    cache: null
                }
            }),

            shared: store
        }
    },

    created() {
        this.updateSearchResults(this.shared.searchQuery);
    },

    methods: {
        updateSearchResults(searchQuery) {
            this.searchResult = [];
            this.static.searchResult.cache = {};
            searchAllAsync(searchQuery, results => {
                for (let i = 0; i < results.length; i++) {
                    let groupKey = results[i].content;
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
                        this.static.searchResult.cache[obj.content] = obj;
                    }
                }
            });
        }
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
}

.doc-search-result-item {
    margin: 30px 5px;
    padding: 5px;

    border-top: 1px solid #ccc;


    h4 {
        margin: 0;
        padding: 10px 0;

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
        max-height: 200px;
        overflow-y: hidden;
    }

    mark {
        background-color: #fc0;
        border-radius: 3px;
        padding: 2px;
    }

    .other-result {
        font-size: 14px;

        padding: 0 10px 10px 10px;

        &>div {
            font-family: Montserrat, sans-serif;
        }
    }

    @include description-html-formatter;
}
</style>