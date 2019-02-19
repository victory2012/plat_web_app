// import TrackRoute from './track-route'
import MonitorRoute from './monitor-route';
const Login = () => import(/* webpackChunkName: "Login" */ '@/login/login.vue');
const loading = () =>
  import(/* webpackChunkName: "loading" */ '@/login/loading.vue');
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index.vue');
const Me = () => import(/* webpackChunkName: "Me" */ '@/views/home/me.vue');
const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/views/home/home.vue');
const User = () =>
  import(/* webpackChunkName: "User" */ '@/views/home/user.vue');
const HomeDevice = () =>
  import(/* webpackChunkName: "HomeDevice" */ '@/views/home/device/device.vue');
const UserList = () =>
  import(/* webpackChunkName: "UserList" */ '@/views/home/userComponent/user-manager.vue');
const createAdmin = () =>
  import(/* webpackChunkName: "createAdmin" */ '@/views/home/userComponent/user/createAdmin.vue');
const createUser = () =>
  import(/* webpackChunkName: "createUser" */ '@/views/home/userComponent/user/createUser.vue');
const Permissions = () =>
  import(/* webpackChunkName: "Permissions" */ '@/views/home/userComponent/user/permission.vue');
const CompanyDetail = () =>
  import(/* webpackChunkName: "CompanyDetail" */ '@/views/home/userComponent/company/companyDetail.vue');
const UserDetail = () =>
  import(/* webpackChunkName: "UserDetail" */ '@/views/home/userComponent/user/userDetail.vue');

const personalData = () =>
  import(/* webpackChunkName: "personalData" */ '@/views/home/MeInfo/personalData.vue');
const changePassword = () =>
  import(/* webpackChunkName: "changePassword" */ '@/views/home/MeInfo/changePassword.vue');

const realData = () =>
  import(/* webpackChunkName: "realData" */ '../views/home/device/realData.vue');
const registerDevice = () =>
  import(/* webpackChunkName: "registerDevice" */ '../views/home/device/register.vue');
const route = [
  {
    path: '/',
    redirect: 'loading'
  },
  {
    path: '/loading',
    name: 'loading',
    component: loading
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
        path: '/home/device',
        name: 'HomeDevice',
        component: HomeDevice
      },
      {
        path: '/home/user',
        component: User,
        children: [
          {
            path: '/',
            name: 'HomeUser',
            component: UserList
          },
          {
            path: '/home/create-admin',
            name: 'CreateAdmin',
            component: createAdmin
          },
          {
            path: '/home/create-user',
            name: 'CreateUser',
            component: createUser
          },
          {
            path: '/home/user-permission',
            name: 'Permission',
            component: Permissions
          },
          {
            path: '/home/company-detail',
            name: 'CompanyDetail',
            component: CompanyDetail
          },
          {
            path: '/home/user-detail',
            name: 'UserDetail',
            component: UserDetail
          }
        ]
      },
      {
        path: '/home/device/register',
        name: 'registerDevice',
        component: registerDevice
      },
      {
        path: '/home/me',
        name: 'HomeMe',
        component: Me,
        children: []
      },
      {
        path: '/personalData',
        name: 'personalData',
        component: personalData
      },
      {
        path: '/changePassword',
        name: 'changePassword',
        component: changePassword
      }
    ]
  },
  {
    path: '/home/device/realData',
    name: 'realData',
    component: realData
  },
  ...MonitorRoute
];

export default route;
