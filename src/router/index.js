import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import {List, HelloWorld, Form} from '@/components'

export const constantRoutes = [
  {
    path: '/',
    component: HelloWorld
    //redirect: '/a/crm/dashboard'
  },
  {
    path: '/list',
    component: List
    //redirect: '/a/crm/dashboard'
  },
  {
    path: '/form',
    component: Form
    //redirect: '/a/crm/dashboard'
  },
//   {
//     path: '/a/crm/404',
//     component: () => import('@/views/404'),
//     // hidden: true,
//   },
  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/a/crm/404', hidden: true },
]

export const asyncRoutes = [
  // 404 page must be placed at the end !!!
  // { path: '*', redirect: '/404', hidden: true },
]

const createRouter = () =>
  new VueRouter({
    mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes,
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
