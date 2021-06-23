import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Signup from '../views/Signup.vue'
import Detail from '../views/Detail.vue'
import Reservation from '../views/Reservation.vue'
import Favorite from '../views/Favorite.vue'
import Complete from '../views/Complete.vue'
import Before from '../views/Before.vue'
import store from '../store/index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'login',
    component: Login
  },
  {
    path: '/signup',
    name: 'signup',
    component:Signup,
  },
  {
    path: '/home',
    name: "home",
    component: Home,
    meta: {
      requiresAuth:true,
    }, 
  },
  {
    path: '/detail/:id',
    name: "detail",
    component: Detail,
    props: true,
    meta:{
      requiresAuth:true,
    },
  },
  {
    path: '/reservation',
    name: "reservation",
    component: Reservation,
    meta:{
      requiresAuth:true,
    },
  },
  {
    path: '/favorite',
    name: "favorite",
    component: Favorite,
    meta:{
      requiresAuth:true,
    },
  },
  {
    path:'/complete',
    name: "complete",
    component: Complete,
    meta:{
      requiresAuth:true,
    },
  },
  {
    path: '/before',
    name: "before",
    component: Before,
    meta:{
      requiresAuth:true,
    },
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  if (
    to.matched.some((record)=>record.meta.requiresAuth)&&!store.state.id
  ) {
    next({
      path: "/",
      query: {
        redirect:to.fullPath,
      },
    })
  } else {
    next();
  }
})
export default router
