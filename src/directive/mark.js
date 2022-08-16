import Mark from 'mark.js';
import Vue from 'vue';
import {debounce} from 'lodash-es';

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
        doMark();
    }
    else {
        el.__markInstance.unmark({
            done() {
                doMark();
            }
        });
    }
}

Vue.directive('mark', {
    inserted(el, binding) {
        el.__doMarkDebounced = debounce(doMark, 500, {
            trailing: true,
            leading: false
        });
        el.__doMarkDebounced(el, binding.value);
    },
    update(el, binding) {
        el.__doMarkDebounced(el, binding.value);
    }
});