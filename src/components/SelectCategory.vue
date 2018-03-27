<template>
  <div class="select">
    <div class="row">
      <div class="gr-12">
        <div class="select__close +clickable" @click="goBack()">
          <span class="icon-close"></span>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
          <div class="select__item-description">
            Description of the current category and stuff
          </div>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
        </div>
      </div>
      <div class="gr-12">
        <div class="select__item">
          <span>Random Category</span>
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
