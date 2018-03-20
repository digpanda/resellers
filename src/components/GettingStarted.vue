<template>
  <div class="getting-started">

      <div @click="getStarted" class="+pointer">
        <div class="row">
          <div class="gr-12 gr-12@mobile gr-12@tablet">

            <div class="row">
              <div class="gr-8 gr-centered gr-12@mobile gr-6@tablet">

                <div class="getting-started__icon">
                  <span class="icon-getting-started"></span>
                </div>

                <div class="getting-started__title">
                  <span>Getting Started</span>
                </div>


                <div class="getting-started__info">
                  <span>Welcome to DigPanda Resellers</span>
                </div>

                <div class="getting-started__disclaimer">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </div>

              </div>

            </div>

            <div class="row">
              <div class="gr-3 gr-centered gr-12@mobile gr-12@tablet">
                <div class="getting-started__buttons">
                  <a @click="getStarted" class="+pointer">Let's go</a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
  </div>
</template>

<script>
// import router from '@/router'
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },

  created () {
  },

  watch: {
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  methods: {
    getStarted () {
      // we update the user as he clicked to getting started
      this.$store.dispatch('updateUser', { changeset: { resellers_platform_at: true } })
      // we also redirect him to start buying for resells
      console.log('here we redirect')
    }
  },

  components: {
  }
}
</script>
