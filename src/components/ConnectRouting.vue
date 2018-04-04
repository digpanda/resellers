<template>
  <div v-if="error">
    <div class="crash-error">
      <span class="icon-warning"></span> {{error}}
    </div>
  </div>
  <div v-else>
    <div v-if="currentUser.token">
      <router-view />
    </div>
  </div>
</template>

<script>
import EventBus from '@/misc/EventBus'

export default {
  data () {
    return {
      error: null
    }
  },

  created () {
    /**
    * We put a listener to the rebootEvent
    * when a crash needs a reboot and clear cache / session
    * we use this command
    */
    EventBus.$on('rebootEvent', error => {
      if (error) {
        console.log(error)
        localStorage.clear()
      }
      window.location.href = '/'
    })

    /**
    * We put a listener to the crashEvent
    * This kind of error is major and lock the application itself
    * until the person refreshes the page entirely
    */
    EventBus.$on('crashEvent', error => {
      this.error = error
    })

    /**
    * We put a listener to the errorEvent
    * This kind of errors is minor and dispatch an error message
    */
    EventBus.$on('errorEvent', error => {
      this.$noty.error(error)
    })

    /**
     * We try to connect via URL token if we have one
     */
    let token = this.$route.query.token
    if (token) {
      this.connectViaToken(token)
      return
    }

    /**
    * We try to force redirect to Wechat connect system of the API
    */
    this.connectWechat()
  },

  methods: {
    /**
     * When any endpoint is resolved it should give a token in return
     * We can then log-in
     */
    connectViaToken (token) {
      this.$store.dispatch('authenticateTokenUser', { token: token })
    },

    /**
     * We redirect the user to the endpoint so he can logs in
     * It will provide us with a token which we can use later on
     */
    connectWechat () {
      let currentUrl = window.location.href
      let endpoint = process.env.API
      window.location.replace(`${endpoint}/connect/wechat?callback=${currentUrl}`)
    }
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  components: {
  }

}
</script>
