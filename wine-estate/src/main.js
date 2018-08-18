// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import router from './router'
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import './rem/rem'
import axios from 'axios'
import './assets/iconfont/iconfont.js'

Vue.prototype.$http= axios
Vue.use(VueRouter)
Vue.use(MintUI)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
