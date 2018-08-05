import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import loginPage from '@/components/loginPage/loginPage'
import registerPage from '@/components/registerPage/registerPage'
import informationPage from '@/components/informationPage/informationPage'
import accountPage from '@/components/accountPage/accountPage'
import morePage from '@/components/morePage/morePage'
import feedbackPage from '@/components/feedbackPage/feedbackPage'
import { DatetimePicker } from 'mint-ui'
import { Actionsheet } from 'mint-ui'
import { Popup } from 'mint-ui'
import { Picker } from 'mint-ui'
import { MessageBox } from 'mint-ui'
import { Toast } from 'mint-ui';

Vue.component(Toast.name, Toast)
Vue.component(MessageBox.name, MessageBox)
Vue.component(Picker.name, Picker)
Vue.component(Popup.name, Popup)
Vue.component(Actionsheet.name, Actionsheet)
Vue.component(DatetimePicker.name, DatetimePicker)
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
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
    }
  ]
})
