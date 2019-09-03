import HiLib from './components/HiLib.vue'

export default function (Vue, options = {}) {
  // set default
  HiLib.defaultProperty = {
    debug: options.debug || false
  }
  // component registration
  Vue.component(HiLib.name, HiLib)
}
