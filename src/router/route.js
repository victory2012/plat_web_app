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
const UserManager = () =>
  import(/* webpackChunkName: "UserManager" */ '@/views/home/userComponent/user-manager.vue');
const CompanyManager = () =>
  import(/* webpackChunkName: "CompanyManager" */ '@/views/home/userComponent/company-manager.vue');
const MonitorBattery = () =>
  import(/* webpackChunkName: "MonitorBattery" */ '@/views/Battery-Monitor/battery/battery.vue');

const MonitorRegBattery = () =>
  import(/* webpackChunkName: "MonitorRegBattery" */ '@/views/Battery-Monitor/battery/component/batteryList/registerBattery.vue');

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
        path: '/news',
        name: 'HomeNews',
        component: News
      },
      {
        path: '/user',
        component: User,
        children: [
          {
            path: '/',
            name: 'HomeUser',
            component: UserManager
          },
          {
            path: '/user/companyManager',
            name: 'companyManager',
            component: CompanyManager
          }
        ]
      },
      {
        path: '/me',
        name: 'HomeMe',
        component: Me
      }
    ]
  },
  {
    path: '/monitor/battery',
    name: 'MonitorBattery',
    component: MonitorBattery
  },
  {
    path: '/monitor/battery-register',
    name: 'MonitorBatteryRegister',
    component: MonitorRegBattery
  },
  ...MonitorRoute
];

export default route;
