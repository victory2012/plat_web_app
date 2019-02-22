const BatteryMonitor = () =>
  import(/* webpackChunkName: "BatteryMonitor" */ '@/views/Battery-Monitor/index.vue');
const MonitorHome = () =>
  import(/* webpackChunkName: "MonitorHome" */ '@/views/Battery-Monitor/home/home.vue');
const MonitorBattery = () =>
  import(/* webpackChunkName: "MonitorBattery" */ '@/views/Battery-Monitor/battery/battery.vue');
const MonitorBatteryRunning = () =>
  import(/* webpackChunkName: "MonitorBatteryRunning" */ '@/views/Battery-Monitor/battery/component/running.vue');

const MonitorBatteryAlarm = () =>
  import(/* webpackChunkName: "MonitorBatteryAlarm" */ '@/views/Battery-Monitor/battery/component/alarm.vue');
const MonitorAlarmDetail = () =>
  import(/* webpackChunkName: "MonitorAlarmDetail" */ '@/views/Battery-Monitor/battery/component/alarmList/alarmDetail.vue');
const MonitorBatteryAlarmMap = () =>
  import(/* webpackChunkName: "MonitorBatteryAlarmMap" */ '@/views/Battery-Monitor/battery/component/alarmList/alarmMap.vue');
const MonitorBatteryRealData = () =>
  import(/* webpackChunkName: "MonitorBatteryRealData" */ '@/views/Battery-Monitor/battery/component/realTime.vue');

const MonitorBatteryContrast = () =>
  import(/* webpackChunkName: "MonitorBatteryContrast" */ '@/views/Battery-Monitor/battery/component/contrast.vue');
const MonitorRegBattery = () =>
  import(/* webpackChunkName: "MonitorRegBattery" */ '@/views/Battery-Monitor/battery/component/batteryList/registerBattery.vue');
const MonitorBatteryDetail = () =>
  import(/* webpackChunkName: "MonitorBatteryDetail" */ '@/views/Battery-Monitor/battery/component/batteryList/batteryDetail.vue');
const MonitorBatteryBind = () =>
  import(/* webpackChunkName: "MonitorBatteryBind" */ '@/views/Battery-Monitor/battery/component/batteryList/batteryBind.vue');

const MonitorFence = () =>
  import(/* webpackChunkName: "MonitorFence" */ '@/views/Battery-Monitor/fence/fence.vue');
const MonitorFenceMap = () =>
  import(/* webpackChunkName: "MonitorFenceMap" */ '@/views/Battery-Monitor/fence/component/fenceMap.vue');
const MonitorThreshold = () =>
  import(/* webpackChunkName: "MonitorThreshold" */ '@/views/Battery-Monitor/fence/component/threshold.vue');
const MonitorNotice = () =>
  import(/* webpackChunkName: "MonitorThreshold" */ '@/views/Battery-Monitor/fence/component/notice.vue');

const MonitorWarn = () =>
  import(/* webpackChunkName: "MonitorWarn" */ '@/views/Battery-Monitor/operate/operate.vue');
const MonitorWarnDeployment = () =>
  import(/* webpackChunkName: "MonitorWarnDeployment" */ '@/views/Battery-Monitor/operate/component/deployment.vue');
const MonitorWarnActive = () =>
  import(/* webpackChunkName: "MonitorWarnActive" */ '@/views/Battery-Monitor/operate/component/active.vue');
const MonitorOperateBlack = () =>
  import(/* webpackChunkName: "MonitorOperateBlack" */ '@/views/Battery-Monitor/operate/component/black.vue');

const route = [
  {
    path: '/monitor',
    component: BatteryMonitor,
    children: [
      {
        path: '/',
        name: 'Monitor',
        component: MonitorHome
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
        path: '/MonitorAlarmDetail',
        name: 'MonitorAlarmDetail',
        component: MonitorAlarmDetail
      },
      {
        path: '/MonitorBatteryContrast',
        name: 'MonitorBatteryContrast',
        component: MonitorBatteryContrast
      }
    ]
  },
  {
    path: '/MonitorBatteryRealTime',
    name: 'MonitorBatteryRealTime',
    component: MonitorBatteryRealData
  },
  {
    path: '/monitor/battery-register',
    name: 'MonitorBatteryRegister',
    component: MonitorRegBattery
  },
  {
    path: '/monitor/battery-bind',
    name: 'MonitorBatteryBind',
    component: MonitorBatteryBind
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
  }
];

export default route;
