<script>
import _ from 'lodash'
import EventBus from '@/misc/EventBus'

export default {
  props: {
  },

  mounted () {
  },

  methods: {
    throwError (error) {
      if (_.isEmpty(error.response)) {
        console.warn(error)
        EventBus.$emit('crashEvent', error)
      } else {
        console.warn(error.response.data)
      }
      return false
    }
  }
}
</script>
