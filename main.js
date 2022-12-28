import App from './App'

// #ifndef VUE3
import Vue from 'vue'

import uView from '@/uni_modules/uview-ui'

// 如此配置即可
// uni.$u.config.unit = 'rpx'

import ld from 'unitls/locationdata.js'

Vue.config.productionTip = false
Vue.prototype.$ld = ld

Vue.use(uView)

App.mpType = 'app'
const app = new Vue({
    ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif