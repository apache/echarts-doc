<template>
<div class="doc-search">
    <el-autocomplete
        class="search-input"
        popper-class="search-input-popper"
        v-model="queryString"
        size="small"
        :fetch-suggestions="searchOptions"
        :debounce="200"
        :placeholder="$t('search.placeholder')"
        @select="selectPath"
        @keyup.enter.native="fuzzySearch"
    >
        <template slot-scope="{ item }">
            <div class="doc-path-suggestion-item">{{ item.path }}</div>
        </template>
        <el-button
            slot="append"
            icon="el-icon-search"
            type="primary"
            @click="fuzzySearch"
        ></el-button>
    </el-autocomplete>
</div>
</template>

<script>
import {store} from '../store';
import {searchOutlineAsync} from '../docHelper';
import {directTo} from '../route';

const MAX_SUGGESTIONS = 100;

export default {

    data() {
        return {
            queryString: store.searchQuery,

            shared: store
        }
    },

    computed: {

    },

    methods: {
        searchOptions(queryString, cb) {
            if (!queryString) {
                cb([]);
                return;
            }

            searchOutlineAsync(queryString, MAX_SUGGESTIONS).then(lists => {
                cb(lists)
            });
        },

        selectPath(item) {
            this.shared.currentPath = item.path;
        },

        fuzzySearch() {
            this.shared.searchQuery = this.queryString;
            directTo('/search/' + this.shared.searchQuery);
        }
    }
};

</script>

<style lang="scss">
.doc-search {

    padding: 5px;
    .search-input {
        width: 100%;
    }
}

.el-autocomplete-suggestion.search-input-popper {
    width: auto !important;
    min-width: 300px;
    li {
        line-height: 28px;
        padding: 0 10px;
    }
}

.doc-path-suggestion-item {
    font-family: Monaco,Consolas,Courier new,monospace;
    font-size: 12px;
}
</style>