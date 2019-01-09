// import TrackRoute from './track-route'
import MonitorRoute from './monitor-route';
const Login = () => import(/* webpackChunkName: "Login" */ '@/login/login.vue');
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index.vue');
const Me = () => import(/* webpackChunkName: "Me" */ '@/views/home/me.vue');
const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/views/home/home.vue');
const News = () =>
  import(/* webpackChunkName: "News" */ '@/views/home/news.vue');
const User = () =>
  import(/* webpackChunkName: "User" */ '@/views/home/user.vue');

const route = [
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
        path: '/home/news',
        name: 'HomeNews',
        component: News
      },
      {
        path: '/home/user',
        name: 'HomeUser',
        component: User
      },
      {
        path: '/home/me',
        name: 'HomeMe',
        component: Me
      }
    ]
  },
  ...MonitorRoute
];

export default route;