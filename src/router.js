import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/views/index'
import User from '@/views/user'
import Integral from '@/views/integral'
import Collect from '@/views/collect'
import Order from '@/views/order'
import Admin from '@/views/admin'
import Assortment from '@/views/assortment'
import Exchange from '@/views/exchange'
import Sale from '@/views/sale'
import SecKill from '@/views/secKill'
import Swap from '@/views/swap'
import DetailGood from '@/views/detailGood'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'index'
    },
    {
      path: '/index',
      name: 'index',
      component: Index,
      children:[
        {
          path: '/index/',
          redirect:'assort'
        },
        {
          path:'/index/assort',
          name:'assort',
          component:Assortment
        },
        {
          path:'/index/exchange',
          component:Exchange
        },
        {
          path:'/index/sale',
          component:Sale
        },
        {
          path:'/index/secKill',
          component:SecKill
        },
        {
          path:'/index/swap',
          component:Swap
        },
        {
          path:'/index/detailGood',
          component:DetailGood
        }
      ]
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/integral',
      name: 'integral',
      component: Integral
    },
    {
      path: '/collect',
      name: 'collect',
      component: Collect
    },
    {
      path: '/order',
      name: 'order',
      component: Order
    },
    {
      path: '/admin',
      name: 'admin',
      component: Admin
    },
  ]
})
