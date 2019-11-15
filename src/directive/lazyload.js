import Vue from 'vue';

Vue.directive('lazyload', {
    update(el) {
        el.querySelectorAll('iframe').forEach($iframe => {
            let dataSrc = $iframe.getAttribute('data-src');
            if (dataSrc && !$iframe.getAttribute('src')) {
                $iframe.setAttribute('src', dataSrc);
            }
        });
    }
});