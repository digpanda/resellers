import axios from 'axios'
// import _ from 'lodash'
import EventBus from '@/misc/EventBus'

// initial state
const state = {
  servicesRates: [],
  brandsRates: [],
  groupInsight: [],
  childrenInsight: [],
  qrcode: null
}

// keep a copy to unset
// const initialState = _.clone(state)

// getters
const getters = {
  // we don't use the state for this specific entry so we keep the user throughout pages
  getServicesRates: (state) => state.servicesRates,
  getBrandsRates: (state) => state.brandsRates,
  getGroupInsight: (state) => state.groupInsight,
  getChildrenInsight: (state) => state.childrenInsight,
  getQrcode: (state) => state.qrcode
}

// actions
const actions = {
  async fetchQrcode (context, params) {
    try {
      let response = await axios.get(`customer/referrer/qrcode`, {params: params})
      context.commit('setQrcode', response.data.url)
      console.log('the qrcode was set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  },
  async fetchGroupInsight (context, params) {
    try {
      let response = await axios.get(`customer/referrer/group_insight`, {params: params})
      context.commit('setGroupInsight', response.data)
      console.log('the group insight was set.')
      console.log(response.data)
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  },

  async fetchChildrenInsight (context, params) {
    try {
      let response = await axios.get(`customer/referrer/children_insight`, {params: params})
      context.commit('setChildrenInsight', response.data)
      console.log('the children insight was set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  },

  async fetchServicesRates (context, params) {
    try {
      let response = await axios.get(`customer/referrer/services_rates`, {params: params})
      context.commit('setServicesRates', response.data)
      console.log('the services rates were set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  },

  async fetchBrandsRates (context, params) {
    try {
      let response = await axios.get(`customer/referrer/brands_rates`, {params: params})
      context.commit('setBrandsRates', response.data)
      console.log('the brands rates were set.')
    } catch (error) {
      EventBus.$emit('errorEvent', error.response.data)
    }
  }
}

// mutations
const mutations = {
  setQrcode (state, qrcode) {
    state.qrcode = qrcode
  },
  setGroupInsight (state, groupInsight) {
    state.groupInsight = groupInsight
  },

  setChildrenInsight (state, childrenInsight) {
    state.childrenInsight = childrenInsight
  },

  setServicesRates (state, servicesRates) {
    state.servicesRates = servicesRates
  },

  setBrandsRates (state, brandsRates) {
    state.brandsRates = brandsRates
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
