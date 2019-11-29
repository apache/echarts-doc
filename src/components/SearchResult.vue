<template>
    <div class="doc-search-result">
        <h3>{{$t('search.resultTitle')}}</h3>
        <el-input
            v-model="shared.searchQuery"

            prefix-icon="el-icon-search"
        ></el-input>
        <div class="result-summary">
            {{ $t('search.foundCountBrief').replace('${searchResultCount}', searchResultCount) }},
            <span v-if="searching" class="searching">
                搜索中<i class="el-icon-loading"></i>
            </span>
            <span v-else>
                {{ $t('search.displayCountBrief').replace('${displayResultCount}', displayResultCount) }}
            </span>
        </div>

        <SearchResultItemCard
            :key="result.path"
            :item-data="result"
            :search-query="shared.searchQuery"
            v-for="result in searchResult"
        ></SearchResultItemCard>
    </div>
</template>

<script>
import {
    searchAllAsync
} from '../docHelper';
import {store} from '../store';
import SearchResultItemCard from './SearchResultItemCard.vue';

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

    components: {
        SearchResultItemCard
    },

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

.doc-search-result {
    h3 {
        font-weight: normal;
        font-size: 24px;
    }

    .result-summary {
        padding: 10px 0;
        color: #999;

        .searching {
            color: #B03A5B;
        }
    }
}

</style>