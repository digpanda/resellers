import Vue from 'vue'
import Router from 'vue-router'

import GettingStarted from '@/components/GettingStarted'
import Index from '@/components/Index'
import Dashboard from '@/components/Dashboard'
import SelectCategory from '@/components/SelectCategory'
import Product from '@/components/Product'
import ProductItemFull from '@/components/ProductItemFull'
import Checkout from '@/components/Checkout'
import CheckoutAddress from '@/components/CheckoutAddress'
import CheckoutPayment from '@/components/CheckoutPayment'

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
    },

    {
      name: 'product-item-full',
      path: '/product-item-full',
      component: ProductItemFull
    },

    {
      name: 'checkout',
      path: '/checkout',
      component: Checkout
    },

    {
      name: 'checkout-address',
      path: '/checkout-address',
      component: CheckoutAddress
    },

    {
      name: 'checkout-payment',
      path: '/checkout-payment',
      component: CheckoutPayment
    }

  ]
})

export default Vue.router
