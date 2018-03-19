import Vue from 'vue'
import Vuex from 'vuex'

import users from './modules/users'
import referrers from './modules/referrers'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    referrers,
    users
  }
})
