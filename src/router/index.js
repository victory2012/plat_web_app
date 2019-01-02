import Vue from 'vue';
import Router from 'vue-router';
// import TrackRoute from './track-route'
// import MonitorRoute from './monitor-route'
const Login = () => import(/* webpackChunkName: "Login" */ '@/login/login.vue');
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index.vue');
const Me = () => import(/* webpackChunkName: "Me" */ '@/views/home/me.vue');
const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/views/home/home.vue');
const News = () =>
  import(/* webpackChunkName: "News" */ '@/views/home/news.vue');
const User = () =>
  import(/* webpackChunkName: "User" */ '@/views/home/user.vue');
const BatteryMonitor = () =>
  import(/* webpackChunkName: "User" */ '@/views/Battery-Monitor/index.vue');

Vue.use(Router);

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
      component: Index,
      children: [
        {
          path: '/',
          name: 'Home',
          component: Home
        },
        {
          path: '/news',
          name: 'news',
          component: News
        },
        {
          path: '/user',
          name: 'user',
          component: User
        },
        {
          path: '/me',
          name: 'me',
          component: Me
        }
      ]
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: BatteryMonitor
    }
  ]
});
