import { createRouter, createWebHistory } from 'vue-router'
import IndexVue from '@/views/IndexVue.vue'
import TheBody from '@/views/TheBody.vue'
import TheDetailFont from '@/views/TheDetailFont.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: IndexVue,
      children: [
        {
          path: '',
          name: 'body',
          component: TheBody
        },
        {
          path: '/font/:fname',
          name: 'detail',
          component: TheDetailFont
        }
      ]
    }
  ]
})

export default router
