import Vue from 'vue'
import './plugins/cube-ui'
import App from './App.vue'
import './plugins/element.js'
import router from "./router"
import store from './store'
import filters from "./filters"
import 'amfe-flexible'

Vue.config.productionTip = false

// 全局注册过滤器
Object.keys(filters).forEach(filterName => {
  Vue.filter(filterName, filters[filterName])
})

new Vue({
  render: h => h(App),
  store,
  router
}).$mount('#app')