import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/api-style',
      name: 'api-style',
      component: () => import('../views/ApiStyleView.vue')
    },
    {
      path: '/template-syntax',
      name: 'template-syntax',
      component: () => import('../views/TemplateSyntaxView.vue')
    },
    {
      path: '/reactivity-fundamentals',
      name: 'reactivity-fundamentals',
      component: () => import('../views/ReactivityFundamentalsView.vue')
    },
    {
      path: '/computed',
      name: 'computed',
      component: () => import('../views/Computed.vue')
    },
    {
      path: '/class-and-style',
      name: 'class-and-style',
      component: () => import('../views/ClassAndStyle.vue')
    },
    {
      path: '/conditional',
      name: 'conditional',
      component: () => import('../views/Conditional.vue')
    },
    {
      path: '/list',
      name: 'list',
      component: () => import('../views/List.vue')
    },
    {
      path: '/event-handling',
      name: 'event-handling',
      component: () => import('../views/EventHandling.vue')
    }
  ]
})

export default router
