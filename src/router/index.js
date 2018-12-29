import Vue from 'vue'
import Router from 'vue-router'
// import TrackRoute from './track-route'
// import MonitorRoute from './monitor-route'
const Login = () => import(/* webpackChunkName: "Login" */ '@/login/login.vue')
const Home = () => import(/* webpackChunkName: "Home" */ '@/views/home.vue')

Vue.use(Router)

export default new Router({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: 'login'
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        // ...TrackRoute,
        // ...MonitorRoute
      ]
    }
  ]
})
