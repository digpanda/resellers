<template>
  <div class="index">
    <default-layout>

      <div class="row">
        <div class="gr-12">
          <div class="filter">

            <div class="filter__title">
              <div class="row">
                <div class="gr-12">
                  <h2>Filter products</h2>
                </div>
              </div>
            </div>

            <filters />

          </div>
        </div>
      </div>

      <div class="row">
        <div class="gr-12">

          <div class="list">
            <div class="list__title">
              <div class="row">
                <div class="gr-12">
                  <h2>Available products</h2>
                </div>
              </div>
            </div>

            <div class="list__items">
              <div class="row">

                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>
                <div class="gr-2 gr-4@tablet gr-6@mobile">
                  <product-select />
                </div>

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
import Filters from '@/components/Filters'
import ProductSelect from '@/components/ProductSelect'
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
    DefaultLayout,
    Filters,
    ProductSelect
  }
}
</script>
