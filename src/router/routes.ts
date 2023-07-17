import type { RouteRecordRaw } from 'vue-router'
import mainRoutes from './main'
import misc from './misc'

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'auth.login',
    component: () => import('@/pages/Auth/Login.vue'),
  },
  {
    name: 'main',
    path: '/',
    component: () => import('@/layouts/LayoutMain.vue'),
    children: [
      {
        path: '/',
        redirect: { name: 'main.home' },
      },
      ...mainRoutes,
    ],
  },
  ...misc,
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: () => import('@/layouts/LayoutMain.vue'),
    children: [
      {
        path: '/:pathMatch(.*)*',
        component: () => import('@/pages/Misc/NotFound.vue'),
      },
    ],
  },
]

export default routes
