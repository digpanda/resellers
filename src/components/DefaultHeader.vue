<template>
  <div class="row row-full header" ref="header">
    <div class="gr-4">
      <div class="header__left">
        <span class="icon-back +clickable" @click="goBack()"></span>
      </div>
    </div>
    <div class="gr-4">
      <div class="header__center">
      </div>
    </div>
    <div class="gr-4">
      <div class="header__right">
        <span class="icon-checkout +clickable" @click="goCheckout()"></span>
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
