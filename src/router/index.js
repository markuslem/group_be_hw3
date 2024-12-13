import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: () => import('../views/SignUpView.vue')
  },
  {
    path: '/log-in',
    name: 'logIn',
    component: () => import('../views/LogInView.vue')
 
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
