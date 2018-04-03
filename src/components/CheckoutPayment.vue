<template>
  <div class="checkout-payment">
    <default-layout>

      <div class="row">
        <div class="gr-12">
          <div class="checkout__title">
            <h2>Choose payment method</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-3 gr-6@tablet gr-12@mobile">
          <div class="checkout-payment__choice">
            <img src="/static/images/logo/raw-wechatpay-logo.png" />
          </div>
        </div>
        <div class="gr-3 gr-6@tablet gr-12@mobile">
          <div class="checkout-payment__choice">
            <img src="/static/images/logo/raw-alipay-logo.png" />
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
