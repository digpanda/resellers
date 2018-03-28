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
  },

  components: {
    DefaultLayout
  }
}
</script>
