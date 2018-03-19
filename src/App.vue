<template>
  <div id="app">
    <connect-routing />
  </div>
</template>

<script>
import ConnectRouting from '@/components/ConnectRouting'

export default {
  name: 'app',
  data () {
    return {}
  },

  created () {
  },

  metaInfo: {
    title: 'DigPanda Resellers',
    link: [
      { rel: 'stylesheet', href: 'https://file.myfontastic.com/o94vf7QHHyp7pzGyLgpxaa/icons.css' },
      { rel: 'icon', href: '/static/images/icons/favicon.png', type: 'image/png' } // type: 'image/png'
    ]
  },

  components: {
    ConnectRouting
  }
}
</script>

<style lang="scss">
   @import 'assets/scss/main.scss'
</style>
