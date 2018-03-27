<template>
  <div class="default-layout">
      <default-header />
      <div class="main-content">
        <slot></slot>
      </div>
      <default-footer />
  </div>
</template>

<script>
import DefaultHeader from '@/components/DefaultHeader'
import DefaultFooter from '@/components/DefaultFooter'

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
  },

  components: {
    DefaultHeader,
    DefaultFooter
  }
}
</script>
