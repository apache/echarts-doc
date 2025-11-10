import { debounce } from 'lodash-es'
import Mark from 'mark.js'

function doMark(el, keywords) {
  let instance = el.__markInstance

  function doMark() {
    el.__markInstance.mark(keywords, {
      diacritics: true,
      separateWordSearch: true,
    })
  }

  if (!instance) {
    el.__markInstance = new Mark(el)
    doMark()
  } else {
    el.__markInstance.unmark({
      done() {
        doMark()
      },
    })
  }
}

export default {
  beforeMount(el, binding) {
    el.__doMarkDebounced = debounce(doMark, 500, {
      trailing: true,
      leading: false,
    })
    el.__doMarkDebounced(el, binding.value)
  },
  updated(el, binding) {
    el.__doMarkDebounced(el, binding.value)
  },
  beforeUnmount(el) {
    el.__markInstance.unmark()
  },
}
