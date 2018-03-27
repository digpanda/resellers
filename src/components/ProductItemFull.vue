<template>
  <div class="product-item-full">
    <div class="row">
      <div class="gr-12">
        <div class="product-item-full__close +clickable" @click="goBack()">
          <span class="icon-close"></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="gr-12">
        <div class="product-item-full__item">

          <img src="https://www.germanyinbox.com/uploads/image/file/5a17fd417302fc21430139b0/8008001.jpg?e=1522162088&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:SkEhLFkoOQdvQeYjr15tfoCYGWk=" />

          <div class="product-item-full__title">Product Item</div>

          <div class="product-item-full__description">
            Description of the current category and stuff
          </div>

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
    goBack () {
      this.$router.go(-1)
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
