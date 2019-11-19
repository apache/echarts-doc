import Mark from 'mark.js';
import Vue from 'vue';

function doMark(el, keywords) {
    let instance = el.__markInstance;

    function doMark() {
        el.__markInstance.mark(keywords, {
            diacritics: true,
            separateWordSearch: true
        });
    }
    if (!instance) {
        el.__markInstance = new Mark(el);
        el.__markInstance.unmark({
            done() {
                doMark();
            }
        });
    }
    else {
        doMark();
    }
}

Vue.directive('mark', {
    inserted(el, binding) {
        doMark(el, binding.value);
    },
    update(el, binding) {
        doMark(el, binding.value);
    }
});