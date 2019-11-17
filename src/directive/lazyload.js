import Vue from 'vue';


function doLazyLoad(el) {
    el.querySelectorAll('iframe').forEach($iframe => {
        let dataSrc = $iframe.getAttribute('data-src');
        if (dataSrc && !$iframe.getAttribute('src')) {
            $iframe.setAttribute('src', dataSrc);
        }
    });
}

Vue.directive('lazyload', {
    inserted(el) {
        doLazyLoad(el);
    },
    update(el) {
        doLazyLoad(el);
    }
});