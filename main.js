import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

// 注册vuex
import store from './store'
Vue.prototype.$store = store


import http from './utils/http'
Vue.prototype.$http = http

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
