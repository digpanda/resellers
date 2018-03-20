import Vue from 'vue'
import Router from 'vue-router'

import GettingStarted from '@/components/GettingStarted'
import Index from '@/components/Index'
import Products from '@/components/Products'

Vue.use(Router)

Vue.router = new Router({
  routes: [
    {
      path: '/',
      component: Index
    },

    {
      name: 'getting-started',
      path: '/getting-started',
      component: GettingStarted
    },

    {
      name: 'products',
      path: '/products',
      component: Products
    }

  ]
})

export default Vue.router
