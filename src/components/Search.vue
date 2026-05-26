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
      @keyup.enter="fuzzySearch"
    >
      <template #default="{ item }">
        <div class="doc-path-suggestion-item">{{ item.path }}</div>
      </template>
      <template #append>
        <el-button type="primary" @click="fuzzySearch">
          <svg role="img" class="icon">
            <use href="/assets/sprite-doc.svg#search"></use>
          </svg>
        </el-button>
      </template>
    </el-autocomplete>
  </div>
</template>

<script setup>
import { reactive, ref } from 'vue'
import { searchOutlineAsync } from '../docHelper'
import { directTo } from '../route'
import { store } from '../store'

const MAX_SUGGESTIONS = 100

const shared = reactive(store)

const queryString = ref('')

function searchOptions(queryString, cb) {
  if (!queryString) {
    cb([])
    return
  }

  searchOutlineAsync(queryString, MAX_SUGGESTIONS).then((lists) => {
    cb(lists)
  })
}

function selectPath(item) {
  shared.currentPath = item.path
}

function fuzzySearch() {
  shared.searchQuery = queryString.value
  directTo('/search/' + shared.searchQuery)
}
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
  font-family:
    Monaco,
    Consolas,
    Courier new,
    monospace;
  font-size: 12px;
}
</style>
