<template>
  <div class="product-item +clickable" @click="goProductItemFull()">
    <div class="row">
      <div class="gr-2">
        <div class="product-item__image" style="background-image:url('https://www.germanyinbox.com/uploads/image/file/5a17fd417302fc21430139b0/8008001.jpg?e=1522162088&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:SkEhLFkoOQdvQeYjr15tfoCYGWk=')">
        </div>
      </div>
      <div class="gr-10">
        <div class="row">
          <div class="gr-8">
            <div class="product-item__title">Item One <span>Brand</span></div>
          </div>
          <div class="gr-4">
            <div class="product-item__details">2 x 200g</div>
          </div>
        </div>
        <div class="row">
          <div class="gr-12">
            <div class="product-item__description">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductLayout from '@/components/ProductLayout'

export default {
  data () {
    return {
    }
  },

  watch: {
  },

  methods: {
    goProductItemFull () {
      this.$router.push({ name: 'product-item-full' })
    }
  },

  created () {
  },

  destroyed () {
  },

  computed: {
  },

  components: {
    ProductLayout
  }
}
</script>
