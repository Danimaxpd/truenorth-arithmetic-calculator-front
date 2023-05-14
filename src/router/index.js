import { createRouter, createWebHistory } from 'vue-router'
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/:pathMatch(.*)*',
      component: () => import('@/views/pages/ErrorPage.vue')
    },
    MainRoutes,
    AuthRoutes
  ]

})

export default router
