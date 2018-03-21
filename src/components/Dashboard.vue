<template>
  <div class="index">
    <default-layout>

      <div class="row">
        <div class="gr-12">

          <div class="module">
            <div class="module__title">
              Find products
            </div>
            <div class="module__inner">

              <div class="row">
                <div class="module__inner-title">
                  By category
                </div>
              </div>

              <div class="row">
                <div class="gr-6">

                  <div class="module__window">
                    <div class="row">
                      <div class="gr-5">
                        <div class="module__window-image">
                          <img src="https://o9fh2muer.qnssl.com/uploads/category/cover/577639f87302fc7cc3b14f20/___-1.jpg?e=1521647097&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:yj661ZeuVlLP9eTOl1V9l3Kaf4o=" />
                        </div>
                      </div>
                      <div class="gr-6">
                        <div class="module__window-title">
                          Wine
                        </div>
                        <div class="module__window-description">
                          Description about wine
                        </div>
                      </div>
                    </div>
                  </div>


                </div>
                <div class="gr-6">

                  <div class="module__window">
                    <div class="row">
                      <div class="gr-5">
                        <div class="module__window-image">
                          <img src="https://o9fh2muer.qnssl.com/uploads/category/cover/577639f87302fc7cc3b14f20/___-1.jpg?e=1521647097&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:yj661ZeuVlLP9eTOl1V9l3Kaf4o=" />
                        </div>
                      </div>
                      <div class="gr-6">
                        <div class="module__window-title">
                          Wine
                        </div>
                        <div class="module__window-description">
                          Description about wine
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="gr-6">

                  <div class="module__window">
                    <div class="row">
                      <div class="gr-5">
                        <div class="module__window-image">
                          <img src="https://o9fh2muer.qnssl.com/uploads/category/cover/577639f87302fc7cc3b14f20/___-1.jpg?e=1521647097&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:yj661ZeuVlLP9eTOl1V9l3Kaf4o=" />
                        </div>
                      </div>
                      <div class="gr-6">
                        <div class="module__window-title">
                          Wine
                        </div>
                        <div class="module__window-description">
                          Description about wine
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
                <div class="gr-6">

                  <div class="module__window">
                    <div class="row">
                      <div class="gr-5">
                        <div class="module__window-image">
                          <img src="https://o9fh2muer.qnssl.com/uploads/category/cover/577639f87302fc7cc3b14f20/___-1.jpg?e=1521647097&token=sjmi6rq8r6Z7oO84m9WQ3grXZJNaDmBlHC5eDWsu:yj661ZeuVlLP9eTOl1V9l3Kaf4o=" />
                        </div>
                      </div>
                      <div class="gr-6">
                        <div class="module__window-title">
                          Wine
                        </div>
                        <div class="module__window-description">
                          Description about wine
                        </div>
                      </div>
                    </div>
                  </div>

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
