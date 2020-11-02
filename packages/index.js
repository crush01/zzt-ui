import TextOverflow from './TextOverflow'
const components = {
  TextOverflow
}
const install = function(Vue) {
  Object.values(components).forEach(com => {
    Vue.component(com.name, com)
  })
}
if (typeof window !== 'undefined' && window.Vue) {
  install(window.vue)
}
export default {
  install,
  TextOverflow
}