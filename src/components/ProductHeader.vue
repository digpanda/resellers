<template>
  <div class="row row-full product-header" ref="header" style="background-image:url('https://www.germanyinbox.com/uploads/package_set/cover/5a184e9c7302fc7d3f4d7802/2005__.jpg?e=1522157276&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:dX6ibq1jzYP6vh8QZ8mCEU1xmO8=');">
    <div class="product-header__shadow"></div>
    <div class="gr-4">
      <div class="product-header__left">
        <span class="icon-back +clickable" @click="goBack()"></span>
      </div>
    </div>
    <div class="gr-4">
      <div class="product-header__center">
      </div>
    </div>
    <div class="gr-4">
      <div class="product-header__right">
        <span class="icon-checkout +clickable" @click="goCheckout()"></span>
      </div>
    </div>

    <div class="gr-12">
      <div class="product-header__title">
        This is the title of the product
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: [],

  computed: {
  },

  methods: {
    goBack () {
      this.$router.go(-1)
    },

    goCheckout () {
      this.$router.push({ name: 'checkout' })
    }
  }
}
</script>
