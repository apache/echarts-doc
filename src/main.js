import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App.vue';
import AppMobile from './AppMobile.vue';
import {preload} from './docHelper';
import './directive/highlight';
import './directive/mark';

import {initRoute} from './route';
import {initResponsive} from './responsive';
import {store} from './store';
import messages from './i18n';

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

        const container = document.createElement('div');

        el.appendChild(container);

        const i18n = new VueI18n({
            locale: option.locale,
            fallbackLocale: 'en',
            messages
        });

        new Vue({
            i18n,
            el: container,
            render: h => {
                return store.isMobile ? h(AppMobile) : h(App);
            }
        });
    });
}