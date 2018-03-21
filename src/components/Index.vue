<template>
  <div class="index">    
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import router from '@/router'

export default {
  data () {
    return {
    }
  },

  created () {
    if (this.currentUser.resellers_platform_at) {
      router.push({ name: 'dashboard', params: { } })
    } else {
      router.push({ name: 'getting-started', params: { } })
    }
  },

  watch: {
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  components: {
    DefaultLayout
  }
}
</script>
