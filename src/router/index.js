import Vue from 'vue'
import VueRouter from 'vue-router'

import Layout from '@/layout'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Layout,
    children: [
      {
        path: 'home',
        component: () => import('@/views/Home')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    children: [
      {
        path: 'about',
        component: () => import('@/views/About')
      }
    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
