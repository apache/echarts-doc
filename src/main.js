import Vue from 'vue';
import App from './App.vue';
import {
    Button,
    Container,
    Aside,
    Main,
    Tree,
    Loading
} from 'element-ui';
import {preload} from './docJson';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);
Vue.use(Tree);
Vue.use(Loading);

export function init(el, option) {
    preload(option.jsonUrl);

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