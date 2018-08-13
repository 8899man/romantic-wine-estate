import Vue from 'vue'
import Router from 'vue-router'
//import HelloWorld from '@/components/HelloWorld'
import allOrders from '@/components/allOrders/allOrders'
import obliGation from '@/components/obliGation/obliGation'
import forEvaluate from '@/components/forEvaluate/forEvaluate'
import forGoods from '@/components/forGoods/forGoods'
import orderDetails from '@/components/orderDetails/orderDetails'
import orderSure from '@/components/orderSure/orderSure'
import orderFinish from '@/components/orderFinish/orderFinish'
import orderPay from '@/components/orderPay/orderPay'
import commentlist from '@/components/commentlist/commentlist'
import watchList from '@/components/watchList/watchList'
import shoppingCart from '@/components/shoppingCart/shoppingCart'
import logged from '@/components/logged/logged'
import newAddress from '@/components/newAddress/newAddress'
import addList from '@/components/addList/addList'
import comment from '@/components/comment/comment'
import goodList from '@/components/goodList/goodList'
import goodSearch from '@/components/goodSearch/goodSearch'
import goodClass from '@/components/goodClass/goodClass'
import goodMain from '@/components/goodMain/goodMain'
import goodDetail from '@/components/goodDetail/goodDetail'
import loginPage from '@/components/loginPage/loginPage'
import registerPage from '@/components/registerPage/registerPage'
import informationPage from '@/components/informationPage/informationPage'
import accountPage from '@/components/accountPage/accountPage'
import morePage from '@/components/morePage/morePage'
import feedbackPage from '@/components/feedbackPage/feedbackPage'
import forgetpasswordPage from '@/components/forgetpasswordPage/forgetpasswordPage'

import addcomment from '@/components/addcomment/addcomment'
import mytracksPage from '@/components/mytracksPage/mytracksPage'

import bottom from '@/components/bottom/bottom'
import { DatetimePicker } from 'mint-ui'
import { Actionsheet } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Picker } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui'
import Mint from 'mint-ui'
import 'mint-ui/lib/style.css'

Vue.use(Mint)
Vue.use(Router)
Vue.component(Toast.name, Toast)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(DatetimePicker.name, DatetimePicker)
import orderheader from '@/components/orderheader/orderheader'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: goodMain
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
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },
    {
      path: '/registerPage',
      name: 'registerPage',
      component: registerPage
    },
    {
      path: '/informationPage',
      name: 'informationPage',
      component: informationPage
    },
    {
      path: '/accountPage',
      name: 'accountPage',
      component: accountPage
    },
    {
      path: '/morePage',
      name: 'morePage',
      component: morePage
    },
    {
      path: '/feedbackPage',
      name: 'feedbackPage',
      component: feedbackPage
    },{
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
      path: '/forgetpasswordPage',
      name: 'forgetpasswordPage',
      component: forgetpasswordPage
    },
    {
      path: '/mytracksPage',
      name: 'mytracksPage',
      component: mytracksPage
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
