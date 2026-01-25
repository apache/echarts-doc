import hljs from 'highlight.js/lib/highlight'
import javascript from 'highlight.js/lib/languages/javascript'
import typescript from 'highlight.js/lib/languages/typescript'
import xml from 'highlight.js/lib/languages/xml'
import 'highlight.js/styles/github.css'

hljs.registerLanguage('javascript', javascript)
hljs.registerLanguage('typescript', typescript)
hljs.registerLanguage('xml', xml)

function doHighlight(el) {
  el.querySelectorAll('pre code').forEach((block) => {
    if (!block.classList.contains('hljs')) {
      hljs.highlightBlock(block)
    }
  })
}

export default {
  beforeMount(el) {
    doHighlight(el)
  },
  updated(el) {
    doHighlight(el)
  },
}
