<template>
  <div class="product">
    <product-layout>

      <!-- Subtitle and description -->
      <div class="row">
        <div class="gr-12">
          <div class="product__description">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <!-- Items -->
      <div class="row">

        <div class="gr-4 gr-12@mobile">
          <product-item />
        </div>
        <div class="gr-4 gr-12@mobile">
          <product-item />
        </div>
        <div class="gr-4 gr-12@mobile">
          <product-item />
        </div>

      </div>

      <!-- Buy button -->
      <div class="row">
        <div class="gr-12">
          <div class="product__buy">Add to cart</div>
        </div>
      </div>

      <!-- Footer -->
      <div class="row">
        <div class="gr-12">
        </div>
      </div>

    </product-layout>
  </div>
</template>

<script>
import ProductLayout from '@/components/ProductLayout'
import ProductItem from '@/components/ProductItem'

export default {
  data () {
    return {
    }
  },

  watch: {
  },

  methods: {
  },

  created () {
  },

  destroyed () {
  },

  computed: {
  },

  components: {
    ProductLayout,
    ProductItem
  }
}
</script>
