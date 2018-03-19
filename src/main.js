// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

import _ from 'lodash'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueCookie from 'vue-cookie'
import VueMeta from 'vue-meta'
import VueNoty from 'vuejs-noty'
// import VueAnalytics from 'vue-analytics'

import Idle from '@/misc/Idle'

// NOTE : to reset users or memory
// just uncomment this line
// localStorage.clear()

// Global configuration
Vue.config.productionTip = false

// const isProd = process.env.NODE_ENV === 'production'

// ActionCable configuration
// Configuration is made on connection
// Because for this project we don't
// any connection out of token

// Axios configuration
Vue.prototype.$axios = axios
Vue.use(VueAxios, axios)

console.log('Environment : ' + process.env.NODE_ENV)
console.log('Api : ' + process.env.API)

// Api end point
Vue.axios.defaults.baseURL = process.env.API

// VueCookie configuration
Vue.use(VueCookie)

// VueMeta
Vue.use(VueMeta)

// NotyJS
Vue.use(VueNoty, {
  theme: 'mint',
  timeout: 1000,
  progressBar: true,
  layout: 'topRight'
})

// Vue.use(VueAnalytics, {
//   id: 'UA-XXX',
//   router,
//   debug: {
//     enabled: !isProd,
//     sendHitTask: isProd
//   }
// })

// Idle management
Idle.start()

// VueRouter
// Vue.use(Router)

// VueMeta
// Vue.use(Meta)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  created () {
    axios.interceptors.request.use((config) => {
      /**
       * if the token isn't already present we add it up to the system
       * we also keep the other data by merging the objects
       */
      config.params = _.merge({token: this.$store.getters.getUserToken}, config.params)
      return config
    })

    // axios.interceptors.response.use((response) => {
    //   return response
    // })
  }
})
