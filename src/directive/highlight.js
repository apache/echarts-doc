import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
import xml from 'highlight.js/lib/languages/xml';
hljs.registerLanguage('javascript', javascript);
hljs.registerLanguage('xml', xml);
import 'highlight.js/styles/github-gist.css';
import Vue from 'vue';

hljs.configure()

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