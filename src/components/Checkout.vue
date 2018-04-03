<template>
  <div class="checkout">
    <default-layout>

      <div class="row">
        <div class="gr-12">
          <div class="checkout__title">
            <h2>Your order</h2>
          </div>
        </div>
      </div>

      <!-- Checkout Products -->
      <checkout-product />
      <checkout-product />

      <!-- Global brief -->
      <checkout-brief />

      <div class="row">
        <div class="gr-12">
          <div class="checkout__confirm +clickable" @click="goCheckoutAddress()">
            Place Order
          </div>
        </div>
      </div>

    </default-layout>
  </div>
</template>

<script>
import DefaultLayout from '@/components/DefaultLayout'
import CheckoutProduct from '@/components/CheckoutProduct'
import CheckoutBrief from '@/components/CheckoutBrief'
// import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },

  created () {
  },

  methods: {
    goCheckoutAddress () {
      this.$router.push({ name: 'checkout-address' })
    }
  },

  watch: {
  },

  computed: {
  },

  components: {
    DefaultLayout,
    CheckoutProduct,
    CheckoutBrief
  }
}
</script>
