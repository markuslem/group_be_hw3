import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import SignUp from "../views/SignUpView.vue";
import LogIn from "../views/LogInView.vue";
import Contacts from "../views/Contacts.vue";
import auth from "../auth";
import AddPost from "@/views/AddPost.vue";
const routes = [
  
  {
    path: '/',
    name: 'home',
    component: HomeView,
    beforeEnter: async(to, from, next) => {
      let authResult = await auth.authenticated();
      if (!authResult) {
          next('/log-in')
      } else {
          next();
      }
  }
  },
  {
    path: '/sign-up',
    name: 'signUp',
    component: SignUp,
  },
  {
    path: '/log-in',
    name: 'logIn',
    component: LogIn,
 
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: Contacts,
  },
  {
    path: "/add-post",
    name: "AddPost",
    component: AddPost,
    meta: { requiresAuth: true } //require authentication
  },
  {
    path: "/post/:id", //dynamic route with 'id'
    name: "PostView",
    component: () => import("@/views/PostView.vue"),
    props: true,
    meta: { requiresAuth: true } //require authentication
  },
  
  
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
