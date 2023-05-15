import type { RouteRecordRaw } from 'vue-router'

const mainRoutes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'main.home',
    component: () => import('@/pages/Home'),
  },
  {
    path: '/about',
    name: 'main.about',
    component: () => import('@/pages/About'),
  },

]

export default mainRoutes
