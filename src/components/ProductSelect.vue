<template>
  <div class="product-select +clickable" @click="goProduct()">

    <div class="row">
      <div class="gr-12">
        <div class="product-select__image">
          <img src="https://www.germanyinbox.com/uploads/package_set/cover/5a980f9a7302fc598477f996/Untitled-1.jpg?e=1522065838&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:SGCgJKTCVjxs3y0s5g3CQJyktfg=" />
        </div>
      </div>
      <div class="gr-12">
        <div class="product-select__content">
          <div class="product-select__title">
            Long title of the product here and some lorem ipsum
          </div>
          <span class="product-select__regular-price">100,00$</span> <span class="product-select__reseller-price">100,00$</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },

  watch: {
  },

  methods: {
    goProduct () {
      this.$router.push({ name: 'product' })
    }
  },

  created () {
  },

  destroyed () {
  },

  computed: {
  },

  components: {
  }
}
</script>
