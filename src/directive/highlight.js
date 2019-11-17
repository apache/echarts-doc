import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github-gist.css';
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