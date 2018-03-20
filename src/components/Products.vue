<template>
  <div class="index">
    <default-layout>
    PRODUCTS PAGE
    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },

  created () {
    console.log('in products')
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
