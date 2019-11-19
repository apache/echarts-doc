<template>
    <div class="doc-search-result">
        <div class="doc-search-result-item" :key="result.path" v-for="result in searchResult">
            <h4>
                <a class="path" :href="'#' + result.path">{{result.path}}</a>
            </h4>
            <div v-mark="shared.searchQuery">
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

            shared: store
        }
    },

    created() {
        this.updateSearchResults(this.shared.searchQuery);
    },

    methods: {
        updateSearchResults(searchQuery) {
            searchAllAsync(searchQuery).then(result => {
                this.searchResult = Object.freeze(result);
            })
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


.doc-search-result-item {
    margin: 30px 5px;
    padding: 5px;

    border-top: 1px solid #ccc;


    h4 {
        margin: 0;
        padding: 0;

        font-family: Montserrat, sans-serif;

        &>* {
            vertical-align: middle;
            display: inline-block;
        }
        .path {
            font-size: 16px;
            padding-left: 5px;
            padding: 0;
            font-weight: normal;

            a {
                color: #B03A5B;
            }
        }

    }

    mark {
        background-color: #fc0;
        border-radius: 3px;
        padding: 2px;
    }

    @include description-html-formatter;
}
</style>