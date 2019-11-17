import Vue from 'vue';

// function doLazyLoad(el) {
//     el.querySelectorAll('iframe').forEach($iframe => {
//         let dataSrc = $iframe.getAttribute('data-src');
//         if (dataSrc && !$iframe.getAttribute('src')) {
//             $iframe.setAttribute('src', dataSrc);
//         }
//     });
// }
import LazyLoad from 'vanilla-lazyload';

Vue.directive('lazyload', {
    inserted(el) {
        el._lazyload = new LazyLoad({
            container: el,
            elements_selector: 'iframe',
            load_delay: 300
        });
        // doLazyLoad(el);
    },
    update(el) {
        el._lazyload.update();
        // doLazyLoad(el);
    },
    unbind(el) {
        el._lazyload.destroy();
    }
});