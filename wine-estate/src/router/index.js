import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import allOrders from '@/components/allOrders/allOrders'
import obliGation from '@/components/obliGation/obliGation'
import forEvaluate from '@/components/forEvaluate/forEvaluate'
import forGoods from '@/components/forGoods/forGoods'
import orderDetails from '@/components/orderDetails/orderDetails'
import orderSure from '@/components/orderSure/orderSure'
import orderFinish from '@/components/orderFinish/orderFinish'
import orderPay from '@/components/orderPay/orderPay'
import commentlist from '@/components/commentlist/commentlist'
import bottom from '@/components/bottom/bottom'
import addcomment from '@/components/addcomment/addcomment'
import orderheader from '@/components/orderheader/orderheader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/allOrders',
      name: 'allOrders',
      component: allOrders
    },
    {
      path: '/obliGation',
      name: 'obliGation',
      component: obliGation
    },
    {
      path: '/forEvaluate',
      name: 'forEvaluate',
      component: forEvaluate
    },
    {
      path: '/forGoods',
      name: 'forGoods',
      component: forGoods
    },
    {
      path: '/orderDetails',
      name: 'orderDetails',
      component: orderDetails
    },
    {
      path: '/orderSure',
      name: 'orderSure',
      component: orderSure
    },
    {
      path: '/orderFinish',
      name: 'orderFinish',
      component: orderFinish
    },
    {
      path: '/orderPay',
      name: 'orderPay',
      component: orderPay
    },
    {
      path: '/commentlist',
      name: 'commentlist',
      component: commentlist
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/addcomment',
      name: 'addcomment',
      component: addcomment
    },
    {
      path: '/orderheader',
      name: 'orderheader',
      component: orderheader
    }

  ]
})
