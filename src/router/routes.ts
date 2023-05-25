import type { RouteRecordRaw } from 'vue-router'
import mainRoutes from './main'

const routes: RouteRecordRaw[] = [
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
]

export default routes
