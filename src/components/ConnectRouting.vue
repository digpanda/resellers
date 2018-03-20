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

    this.connectWechat()
  },

  methods: {
    connectWechat () {
      let code = this.$route.query.code
      // NOTE : while in development we auto-set the code so it's faster to get into things
      code = 'guide@guide.com'
      this.$store.dispatch('authenticateWechatUser', { code: code })
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
