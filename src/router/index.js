import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Impressum from '../views/Impressum.vue'
import Datenschutz from '../views/Datenschutz.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/impressum',
      name: 'impressum',
      component: Impressum,
    },
    {
      path: '/datenschutz',
      name: 'datenschutz',
      component: Datenschutz,
    },
  ],
})

export default router
