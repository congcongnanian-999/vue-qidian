import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import good from '@/components/good'
import find from '@/components/find'
import mine from '@/components/mine'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        title: '',
        isCommTitle: false,
        isShowFoot:true,
        bottom:1,
      },
    },
   {
      path: '/good',
      name: 'good',
      component: good,
      meta: {
        title: '',
        isCommTitle: false,
        isShowFoot:true,
        bottom:2,
      },
   },
 {
      path: '/find',
      name: 'find',
      component: find,
      meta: {
        title: '',
        isCommTitle: false,
        isShowFoot:true,
        bottom:3,
      },
   },
 {
      path: '/mine',
      name: 'mine',
      component: mine,
      meta: {
        title: '',
        isCommTitle: false,
        isShowFoot:true,
        bottom:4,
      },
   },
  ]
})