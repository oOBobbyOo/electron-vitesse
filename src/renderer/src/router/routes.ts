import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'hi',
    component: () => import('../views/Hi.vue')
  }
]
