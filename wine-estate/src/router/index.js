import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import watchList from '@/components/watchList/watchList'
import shoppingCart from '@/components/shoppingCart/shoppingCart'
import logged from '@/components/logged/logged'
import bottom from '@/components/bottom/bottom'
import newAddress from '@/components/newAddress/newAddress'
import addList from '@/components/addList/addList'
import comment from '@/components/comment/comment'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    },
    {
      path: '/watchList',
      name: 'watchList',
      component: watchList
    },
    {
      path: '/shoppingCart',
      name: 'shoppingCart',
      component: shoppingCart
    },
    {
      path: '/logged',
      name: 'logged',
      component: logged
    },
    {
      path: '/newAddress',
      name: newAddress,
      component: newAddress
    },
    {
      path: '/addList',
      name: addList,
      component: addList
    },
    {
      path: '/comment',
      name: comment,
      component: comment
    }
  ]
})
