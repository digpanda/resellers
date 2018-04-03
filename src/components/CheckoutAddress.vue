<template>
  <div class="checkout-address">
    <default-layout>


      <div class="row">
        <div class="gr-12">
          <div class="checkout-address__title">
            <h2>Choose from existing address</h2>
          </div>
        </div>
      </div>

      <div class="row">

        <div class="gr-4 gr-6@tablet gr-12@mobile">
          <div class="checkout-address__block +clickable" @click="chooseAddress()">
            <div class="checkout-address__block--remove" @click="removeAddress()">
              <span class="icon-close" />
            </div>
            <div class="checkout-address__block--name">
              Laurent Schaffner
            </div>
            <div class="checkout-address__block--address">
              18 allée pierre corneille, Gujan-Mestras
            </div>
            <div class="checkout-address__block--country">
              Europe
            </div>
            <div class="checkout-address__block--phone">
              +49 05 38 27 59
            </div>

          </div>
        </div>

      </div>

      <div class="row">
        <div class="gr-12">
          <div class="checkout-address__title">
            <h2>New delivery address</h2>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <h3>收件人信息</h3>
        </div>
      </div>

      <div class="row">
        <div class="gr-6">
          <input type="text" placeholder="Last Name" />
        </div>
        <div class="gr-6">
          <input type="text" placeholder="First name" />
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <input type="text" placeholder="Phone number" />
          <div class="checkout-address__help">
            请确认手机号码填写正确，该号码用于您的包裹发货，通关状态短信通知和送货联络
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <input type="text" placeholder="Identity number" />
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <h3>地址</h3>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <div class="checkout-address__country">
            <input type="radio" value="china" name="address_country" id="address_country_china" checked="checked" />
            <label for="address_country_china">China</label>

            <input type="radio" value="europe" name="address_country" id="address_country_europe" />
            <label for="address_country_europe">Europe</label>
          </div>

        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <input type="text" placeholder="Full address" />
        </div>
      </div>

      <div class="row">
        <div class="gr-12">
          <div class="checkout__confirm +clickable" @click="">
            Save address
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
    removeAddress () {
    },

    chooseAddress () {
      this.$router.push({ name: 'checkout-payment' })
    }
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
