import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import AppMobile from './AppMobile.vue'
import highlight from './directive/highlight'
import lazyload from './directive/lazyload'
import mark from './directive/mark'
import { preload } from './docHelper'
import messages from './i18n'
import { initResponsive } from './responsive'
import { initRoute } from './route'
import { store } from './store'

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
  initResponsive()

  const cdnRoot = option.cdnRoot || option.baseUrl

  preload(option.baseUrl, cdnRoot, option.docType, option.version).then(() => {
    initRoute()

    store.docType = option.docType
    store.locale = option.locale

    if (typeof el === 'string') {
      el = document.querySelector(el)
    }
    if (!el) {
      throw new Error("Can't find el.")
    }

    const i18n = createI18n({
      legacy: false,
      locale: option.locale,
      fallbackLocale: 'en',
      messages,
    })

    const rootComponent = store.isMobile ? AppMobile : App
    const app = createApp(rootComponent)

    app.use(i18n)
    app.use(ElementPlus)

    app.directive('highlight', highlight)
    app.directive('mark', mark)
    app.directive('lazyload', lazyload)

    app.mount(el)
  })
}
