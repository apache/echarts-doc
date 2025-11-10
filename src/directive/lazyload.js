import LazyLoad from 'vanilla-lazyload'

export default {
  beforeMount(el) {
    el._lazyload = new LazyLoad({
      container: el,
      elements_selector: 'iframe',
      load_delay: 300,
    })
  },
  updated(el) {
    el._lazyload.update()
  },
  unmounted(el) {
    el._lazyload.destroy()
  },
}
