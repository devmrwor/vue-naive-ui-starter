import type { RouteRecordRaw } from 'vue-router'

const miscRoutes: RouteRecordRaw[] = [
  {
    path: '/redirect',
    component: () => import('@/layouts/LayoutMain.vue'),
    children: [
      {
        path: '/redirect/:path(.*)*',
        component: () => import('@/pages/Misc/BlankPage.vue'),
      },
    ],
  },
]

export default miscRoutes
