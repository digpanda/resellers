<template>
  <div class="default-layout">
      <product-header />
      <div class="main-content">
        <slot></slot>
      </div>
      <default-footer />
  </div>
</template>

<script>
import ProductHeader from '@/components/ProductHeader'
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
    ProductHeader,
    DefaultFooter
  }
}
</script>
