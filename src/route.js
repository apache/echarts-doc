import { reactive } from 'vue'
import { store } from './store'

const shared = reactive(store)

function handleHashUpdate() {
  let hash = decodeURIComponent(window.location.hash.slice(1))
  if (hash.startsWith('/search/')) {
    let searchQuery = hash.substr('/search/'.length)
    shared.fuzzySearch = true
    shared.searchQuery = searchQuery
    // Else consider it as path.
  } else if (hash) {
    shared.currentPath = hash
    // Reset search status
    shared.fuzzySearch = false
  }
}

export function initRoute() {
  window.addEventListener('hashchange', (e) => {
    handleHashUpdate()
  })
  handleHashUpdate()
}

export function directTo(hash) {
  window.location.hash = '#' + encodeURIComponent(hash)
}
