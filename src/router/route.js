// import TrackRoute from './track-route'
import MonitorRoute from './monitor-route';
const Login = () => import(/* webpackChunkName: "Login" */ '@/login/login.vue');
const loading = () =>
  import(/* webpackChunkName: "loading" */ '@/login/loading.vue');
const Index = () => import(/* webpackChunkName: "Index" */ '@/views/index.vue');
const Me = () => import(/* webpackChunkName: "Me" */ '@/views/home/me.vue');
const Home = () =>
  import(/* webpackChunkName: "Home" */ '@/views/home/home.vue');
const News = () =>
  import(/* webpackChunkName: "News" */ '@/views/home/news.vue');
const User = () =>
  import(/* webpackChunkName: "User" */ '@/views/home/user.vue');
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

const MonitorBattery = () =>
  import(/* webpackChunkName: "MonitorBattery" */ '@/views/Battery-Monitor/battery/battery.vue');
const MonitorBatteryRunning = () =>
  import(/* webpackChunkName: "MonitorBatteryRunning" */ '@/views/Battery-Monitor/battery/component/running.vue');
const MonitorBatteryAlarm = () =>
  import(/* webpackChunkName: "MonitorBatteryAlarm" */ '@/views/Battery-Monitor/battery/component/alarm.vue');

const MonitorBatteryAlarmMap = () =>
  import(/* webpackChunkName: "MonitorBatteryAlarmMap" */ '@/views/Battery-Monitor/battery/component/alarmList/alarmMap.vue');

const MonitorBatteryContrast = () =>
  import(/* webpackChunkName: "MonitorBatteryAlarm" */ '@/views/Battery-Monitor/battery/component/contrast.vue');
const MonitorRegBattery = () =>
  import(/* webpackChunkName: "MonitorRegBattery" */ '@/views/Battery-Monitor/battery/component/batteryList/registerBattery.vue');
const MonitorBatteryDetail = () =>
  import(/* webpackChunkName: "MonitorBatteryDetail" */ '@/views/Battery-Monitor/battery/component/batteryList/batteryDetail.vue');

const MonitorFence = () =>
  import(/* webpackChunkName: "MonitorFence" */ '@/views/Battery-Monitor/fence/fence.vue');
const MonitorFenceMap = () =>
  import(/* webpackChunkName: "MonitorFenceMap" */ '@/views/Battery-Monitor/fence/component/fenceMap.vue');
const MonitorThreshold = () =>
  import(/* webpackChunkName: "MonitorThreshold" */ '@/views/Battery-Monitor/fence/component/threshold.vue');
const MonitorNotice = () =>
  import(/* webpackChunkName: "MonitorThreshold" */ '@/views/Battery-Monitor/fence/component/notice.vue');

const realData = () =>
  import(/* webpackChunkName: "realData" */ '../views/Battery-Monitor/device/realData.vue');
const register = () =>
  import(/* webpackChunkName: "register" */ '../views/Battery-Monitor/device/register.vue');
const MonitorWarn = () =>
  import(/* webpackChunkName: "MonitorWarn" */ '../views/Battery-Monitor/operate/operate.vue');
const MonitorWarnDeployment = () =>
  import(/* webpackChunkName: "MonitorWarnDeployment" */ '../views/Battery-Monitor/operate/component/deployment.vue');
const MonitorWarnActive = () =>
  import(/* webpackChunkName: "MonitorWarnActive" */ '../views/Battery-Monitor/operate/component/active.vue');

const MonitorOperateBlack = () =>
  import(/* webpackChunkName: "MonitorOperateBlack" */ '../views/Battery-Monitor/operate/component/black.vue');

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
        path: '/home/news',
        name: 'HomeNews',
        component: News
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
    path: '/monitor/battery',
    component: MonitorBattery,
    children: [
      { path: '/', name: 'MonitorBattery', component: MonitorBatteryRunning },
      {
        path: '/MonitorBatteryAlarm',
        name: 'MonitorBatteryAlarm',
        component: MonitorBatteryAlarm
      },
      {
        path: '/MonitorBatteryAlarmMap',
        name: 'MonitorBatteryAlarmMap',
        component: MonitorBatteryAlarmMap
      },
      {
        path: '/MonitorBatteryContrast',
        name: 'MonitorBatteryContrast',
        component: MonitorBatteryContrast
      }
    ]
  },
  {
    path: '/monitor/battery-register',
    name: 'MonitorBatteryRegister',
    component: MonitorRegBattery
  },
  {
    path: '/monitor/battery-detail',
    name: 'MonitorBatteryDetail',
    component: MonitorBatteryDetail
  },
  {
    path: '/monitor/fence',
    component: MonitorFence,
    children: [
      {
        path: '/',
        name: 'MonitorFence',
        component: MonitorFenceMap
      },
      {
        path: '/monitor/threshold',
        name: 'MonitorThreshold',
        component: MonitorThreshold
      },
      {
        path: '/monitor/notice',
        name: 'MonitorNotice',
        component: MonitorNotice
      }
    ]
  },
  {
    path: '/Battery-Monitor/device/realData',
    name: 'realData',
    component: realData
  },
  {
    path: '/Battery-Monitor/device/register',
    name: 'register',
    component: register
  },
  {
    path: '/monitor/warn',
    component: MonitorWarn,
    children: [
      {
        path: '/',
        name: 'MonitorOperateDeployment',
        component: MonitorWarnDeployment
      },
      {
        path: '/monitor/active',
        name: 'MonitorOperateActive',
        component: MonitorWarnActive
      },
      {
        path: '/monitor/black',
        name: 'MonitorOperateBlack',
        component: MonitorOperateBlack
      }
    ]
  },
  ...MonitorRoute
];

export default route;
