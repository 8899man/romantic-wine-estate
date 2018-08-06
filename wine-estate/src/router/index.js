import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import goodList from '@/components/goodList/goodList'
import goodSearch from '@/components/goodSearch/goodSearch'
import goodClass from '@/components/goodClass/goodClass'
import goodMain from '@/components/goodMain/goodMain'
import goodDetail from '@/components/goodDetail/goodDetail'
import bottom from '@/components/bottom/bottom'
import Mint from 'mint-ui'

import 'mint-ui/lib/style.css'
Vue.use(Mint);
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/goodList',
      name: 'goodList',
      component: goodList
    },
    {
      path: '/goodSearch',
      name: 'goodSearch',
      component: goodSearch
    },
    {
      path: '/goodClass',
      name: 'goodClass',
      component: goodClass
    },
    {
      path: '/goodMain',
      name: 'goodMain',
      component: goodMain
    },
    {
      path: '/goodDetail',
      name: 'goodDetail',
      component: goodDetail
    },
    {
      path: '/bottom',
      name: 'bottom',
      component: bottom
    }
  ]
})
