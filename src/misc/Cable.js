import Vue from 'vue'
import ActionCable from 'actioncable'

var cable = {
  cable: null,

  config: {
    cableDomain: process.env.CABLE
  },

  connect (token) {
    if (this.config.cableDomain) {
      console.log('connect to action cable ...')

      this.cable = ActionCable.createConsumer(`${this.config.cableDomain}/cable?token=${token}`)
      Vue.prototype.$cable = this.cable

      console.log('action cable connected.')
    } else {
      console.log('no cable domain')
    }
  }
}

console.log('Cable : ' + cable.config.cableDomain)

export default cable
