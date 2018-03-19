import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'

Vue.use(Router)

Vue.router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    }
  ]
})

export default Vue.router
