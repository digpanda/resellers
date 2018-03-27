import Vue from 'vue'
import Router from 'vue-router'

import GettingStarted from '@/components/GettingStarted'
import Index from '@/components/Index'
import Dashboard from '@/components/Dashboard'
import SelectCategory from '@/components/SelectCategory'
import Product from '@/components/Product'

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
      name: 'dashboard',
      path: '/dashboard',
      component: Dashboard
    },

    {
      name: 'select-category',
      path: '/select-category',
      component: SelectCategory
    },

    {
      name: 'product',
      path: '/product',
      component: Product
    }

  ]
})

export default Vue.router
