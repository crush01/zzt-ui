import Reversal from './Reversal'

const components = {
  Reversal
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
  Reversal
}