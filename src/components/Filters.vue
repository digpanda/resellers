<template>
  <div class="filter__content">
    <div class="row">
      <div class="gr-6">
        <div class="filter__button +clickable" @click="selectCategory()">
          <span>Category</span> <span class="icon icon-dropdown"></span>
        </div>
      </div>
      <div class="gr-6">
        <div class="filter__button">
          <span>Brand</span> <span class="icon icon-dropdown"></span>
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
    selectCategory () {
      this.$router.push({ name: 'select-category' })
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
