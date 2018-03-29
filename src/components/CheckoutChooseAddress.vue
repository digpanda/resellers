<template>
  <div class="checkout-choose-address">
    <default-layout>

      <div class="row">
        <div class="gr-12">
          <div class="checkout__title">
            <h2>Your order</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <div class="checkout__confirm +clickable" @click="">
            Checkout
          </div>
        </div>
      </div>

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
  },

  methods: {
  },

  watch: {
  },

  computed: {
  },

  components: {
    DefaultLayout
  }
}
</script>
