import Vue from 'vue';
import App from './App.vue';
import {
    Button,
    Container,
    Aside,
    Main,
    Tree,
    Loading,
    Divider
} from 'element-ui';
import {preload} from './docHelper';
import 'element-ui/lib/theme-chalk/index.css';

import './directive/highlight';
import './directive/lazyload';


Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Tree);
Vue.use(Loading);
Vue.use(Divider);

/**
 *
 * @param {HTMLDivElement|string} el
 * @param {Object} option
 * @param {string} option.baseUrl
 * @param {string} option.rootName
 */
export function init(el, option) {
    preload(option.baseUrl, option.rootName);

    if (typeof el === 'string') {
        el = document.querySelector(el);
    }
    if (!el) {
        throw new Error('Can\'t find el.');
    }
    let container = document.createElement('div');

    el.appendChild(container);

    new Vue({
        el: container,
        render: h => h(App)
    });
}