<template>
  <div class="doc-search-result">
    <h3>{{ $t('search.resultTitle') }}</h3>
    <el-input v-model="shared.searchQuery">
      <template #prefix>
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#search"></use>
        </svg>
      </template>
    </el-input>
    <div class="result-summary">
      {{
        $t('search.foundCountBrief').replace(
          '${searchResultCount}',
          searchResultCount,
        )
      }},
      <span v-if="!!searchToken" class="searching">
        搜索中
        <svg role="img" class="icon">
          <use href="/assets/sprite-doc.svg#loading"></use>
        </svg>
      </span>
      <span v-else>
        {{
          $t('search.displayCountBrief').replace(
            '${displayResultCount}',
            displayResultCount,
          )
        }}
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

<script setup>
import { throttle } from 'lodash-es'
import { onMounted, reactive, ref, watch } from 'vue'
import { searchAllAsync } from '../docHelper'
import { directTo } from '../route'
import { store } from '../store'
import SearchResultItemCard from './SearchResultItemCard.vue'

const searchResult = ref([])
const searchResultCount = ref(0)
const displayResultCount = ref(0)

const noLimit = ref(false)
const limitedResultCount = ref(200)

const searchToken = ref('')

const staticData = reactive({
  searchResult: {
    cache: {},
  },
})

const shared = reactive(store)

function updateSearchResultsImmediate(query) {
  searchResult.value = []
  searchResultCount.value = 0
  displayResultCount.value = 0

  // reset cache
  staticData.searchResult.cache = {}

  searchToken.value = Date.now() + ''
  const token = searchToken.value

  return searchAllAsync(query, (results) => {
    // Query changed.
    if (token !== searchToken.value) {
      return
    }
    if (
      !noLimit.value &&
      displayResultCount.value <= limitedResultCount.value
    ) {
      for (let i = 0; i < results.length; i++) {
        const groupKey = results[i].text
        // Group results.
        const similarResult = staticData.searchResult.cache[groupKey]
        if (similarResult) {
          similarResult.similarPaths.push(results[i].path)
        } else {
          const obj = Object.freeze({
            path: results[i].path,
            content: results[i].content,
            similarPaths: [],
          })
          searchResult.value.push(obj)
          staticData.searchResult.cache[groupKey] = obj
        }
      }
      displayResultCount.value += results.length
    }
    searchResultCount.value += results.length
  })
    .then(() => {
      searchToken.value = ''
    })
    .catch(() => {
      searchToken.value = ''
    })
}

onMounted(() => {
  // run initial search
  updateSearchResultsImmediate(shared.searchQuery)
})

const updateSearchResults = throttle(updateSearchResultsImmediate, 500, {
  leading: false,
})

watch(
  () => shared.searchQuery,
  (newVal) => {
    updateSearchResults(newVal)
    directTo('/search/' + shared.searchQuery)
  },
)
</script>

<style lang="scss">
.doc-search-result {
  h3 {
    font-weight: normal;
    font-size: 24px;
    margin: 20px 20px 20px 0;
  }

  .result-summary {
    padding: 10px 0;
    color: #999;

    .searching {
      color: #b03a5b;
    }
  }
}

.ec-doc-mobile {
  .doc-search-result {
    padding: 0 10px;
  }
}
</style>
