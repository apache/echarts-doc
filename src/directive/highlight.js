import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import typescript from 'highlight.js/lib/languages/typescript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('typescript', typescript);
hljs.registerLanguage('xml', xml);
import 'highlight.js/styles/github.css';
// import 'highlight.js/styles/monokai.css';
import Vue from 'vue';

function doHighlight(el) {
    el.querySelectorAll('pre code').forEach((block) => {
        if (!block.classList.contains('hljs')) {
            hljs.highlightBlock(block);
        }
    });
}

Vue.directive('highlight', {
    inserted(el) {
        doHighlight(el);
    },
    update(el) {
        doHighlight(el);
    }
});