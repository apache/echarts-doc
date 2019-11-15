import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';
hljs.registerLanguage('javascript', javascript);
import 'highlight.js/styles/github-gist.css';
import Vue from 'vue';

Vue.directive('highlight', {
    update(el) {
        el.querySelectorAll('pre code').forEach((block) => {
            hljs.highlightBlock(block);
        });
    }
});