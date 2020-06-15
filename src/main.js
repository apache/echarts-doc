import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import AppMobile from './AppMobile.vue';
import {
    Button,
    Container,
    Aside,
    Main,
    Tree,
    Loading,
    Autocomplete,
    Input,
    Tooltip,
    Drawer,
    Popover,
    Footer,
    Switch,
    ColorPicker,
    InputNumber,
    Select,
    Option,
    Alert,
    Slider
} from 'element-ui';
import {preload} from './docHelper';
// import 'element-ui/lib/theme-chalk/index.css';
import './directive/highlight';
import './directive/mark';

import {initRoute} from './route';
import {initResponsive} from './responsive';
import {store} from './store';
import messages from './i18n';

Vue.use(Button);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Footer);
Vue.use(Main);
Vue.use(Tree);
Vue.use(Loading);
Vue.use(Autocomplete);
Vue.use(Input);
Vue.use(Tooltip);
Vue.use(VueI18n);
Vue.use(Drawer);
Vue.use(Popover);
Vue.use(Switch);
Vue.use(ColorPicker);
Vue.use(InputNumber);
Vue.use(Select);
Vue.use(Option);
Vue.use(Alert);
Vue.use(Slider);

/**
 *
 * @param {HTMLDivElement|string} el
 * @param {Object} option
 * @param {string} option.baseUrl
 * @param {string} [option.cdnRoot] If not provided, use `option.baseUrl`.
 * @param {string} option.docType
 * @param {string} option.locale
 * @param {string} option.version
 */
export function init(el, option) {

    initResponsive();

    const cdnRoot = option.cdnRoot || option.baseUrl;

    preload(option.baseUrl, cdnRoot, option.docType, option.version).then(() => {
        initRoute();

        store.docType = option.docType;
        store.locale = option.locale;

        if (typeof el === 'string') {
            el = document.querySelector(el);
        }
        if (!el) {
            throw new Error('Can\'t find el.');
        }

        let container = document.createElement('div');

        el.appendChild(container);

        let i18n = new VueI18n({
            locale: option.locale,
            fallbackLocale: 'en',
            messages
        });

        new Vue({
            i18n,
            el: container,
            render: h => {
                console.log('iMobile: ', store.isMobile);
                return store.isMobile ? h(AppMobile) : h(App);
            }
        });
    });
}