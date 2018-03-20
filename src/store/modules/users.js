import axios from 'axios'
// import _ from 'lodash'
import EventBus from '@/misc/EventBus'

// initial state
const state = {
  userToken: null,
  currentUser: {
    email: null
  }
}

// keep a copy to unset
// const initialState = _.clone(state)

// getters
const getters = {
  // we don't use the state for this specific entry so we keep the user throughout pages
  getUserToken: (state) => state.userToken,
  getCurrentUser: (state) => state.currentUser
}

// actions
const actions = {
  async authenticateWechatUser (context, authenticateData) {
    try {
      let response = await axios.post(`connect/wechat`, authenticateData)
      let user = response.data
      let token = response.data.token

      if (!user || !token) {
        EventBus.$emit('crashEvent', 'Impossible to log-in to Wechat.')
        return
      }

      context.commit('setUserToken', token)
      context.commit('setCurrentUser', user)
      console.log('current user was set')
      console.log(context.state.currentUser)
      // window.location.href = '/'
    } catch (error) {
      EventBus.$emit('crashEvent', 'Impossible to log-in to Wechat')
    }
  },

  async updateUser (context, { params, callback }) {
    let response = await axios.patch(`customer/account`, { user: params.changeset })
    context.commit('setCurrentUser', response.data)
    callback(response.data)
  }
}

// mutations
const mutations = {
  setCurrentUser (state, user) {
    state.currentUser = user
  },

  // unsetCurrentUser (state) {
  //   localStorage.clear()
  //   state.currentUser = initialState.currentUser
  //   state.userToken = null // we have to manually set it to null because we play with localStorage
  // },

  setUserToken (state, token) {
    state.userToken = token
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
