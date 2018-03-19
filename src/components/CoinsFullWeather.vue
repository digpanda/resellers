<template>
  <div v-if="marketWeather">
    <div :class="`full-weather full-weather__${currentStyle}`">

      <div @click="goCoins" class="+pointer">
        <div class="row">
          <div class="gr-12 gr-12@mobile gr-12@tablet">

            <div class="row">
              <div class="gr-8 gr-centered gr-12@mobile gr-6@tablet">

                <div class="full-weather__icon">
                  <span :class="`icon-${currentStyle} coin-weather__${currentStyle} coin-weather--static`"></span>
                </div>

                <div class="full-weather__title">
                  <span><coin-weather :variationProp="marketWeather" /></span>
                </div>


                <div class="full-weather__info">
                  <span>based on the biggest market captializations</span>
                </div>

                <div class="full-weather__percent">
                  <span :class="`coin-weather__${currentStyle}`"><animated-number :value="marketWeather" :type="`percent`" :animatedColors="true" :numberColors="false" /></span>
                </div>

              </div>

            </div>

            <div class="row">
              <div class="gr-3 gr-centered gr-12@mobile gr-12@tablet">
                <div class="full-weather__buttons">
                  <a @click="goCoins" class="+pointer">Check crypto market</a>
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import router from '@/router'

import AnimatedNumber from '@/components/AnimatedNumber'
import CoinWeather from '@/components/CoinWeather'
import Weather from '@/misc/Weather'

export default {
  data () {
    return {
    }
  },

  created () {
    this.$store.dispatch('fetchMarketWeather')
    this.$store.dispatch('subscribeMarketWeatherChannel')
  },

  destroyed () {
    this.$store.dispatch('unsubscribeMarketWeatherChannel')
  },

  computed: {
    marketWeather () {
      return this.$store.getters.getMarketWeather
    },

    currentStyle () {
      return Weather.style(this.marketWeather)
    }
  },

  methods: {
    goCoins () {
      router.push({ name: 'coins', params: { } })
    }
  },

  components: {
    AnimatedNumber,
    CoinWeather
  }
}
</script>
