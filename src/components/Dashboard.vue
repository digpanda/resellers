<template>
  <div class="index">
    <default-layout>

      <div class="row">
        <div class="gr-12">
          <div class="filter">
            <div class="filter__title">
              <h2>Filter products</h2>
            </div>
            <div class="filter__content">
              <div class="row">
                <div class="gr-6">
                  <div class="filter__button">
                    By category
                  </div>
                </div>
                <div class="gr-6">
                  <div class="filter__button">
                    By category
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">

          <div class="list">
            <div class="list__title">
              <h2>Available products</h2>
            </div>

            <div class="gr-12">
              <div class="list__item">

              </div>
            </div>

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

  watch: {
  },

  computed: {
    currentUser () {
      return this.$store.getters.getCurrentUser
    }
  },

  components: {
    DefaultLayout
  }
}
</script>
