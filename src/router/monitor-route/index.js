const BatteryMonitor = () =>
  import(/* webpackChunkName: "BatteryMonitor" */ '@/views/Battery-Monitor/index.vue');
const MonitorHome = () =>
  import(/* webpackChunkName: "MonitorHome" */ '@/views/Battery-Monitor/home/home.vue');
// const MonitorBattery = () =>
//   import(/* webpackChunkName: "MonitorBattery" */ '@/views/Battery-Monitor/battery/battery.vue');
const MonitorDevice = () =>
  import(/* webpackChunkName: "MonitorDevice" */ '@/views/Battery-Monitor/device/device.vue');

const MonitorAlarm = () =>
  import(/* webpackChunkName: "MonitorAlarm" */ '@/views/Battery-Monitor/alarm/alarm.vue');

const route = [
  {
    path: '/monitor',
    component: BatteryMonitor,
    children: [
      {
        path: '/',
        name: 'Monitor',
        component: MonitorHome
      },
      // {
      //   path: '/monitor/battery',
      //   name: 'MonitorBattery',
      //   component: MonitorBattery
      // },
      {
        path: '/monitor/device',
        name: 'MonitorDevice',
        component: MonitorDevice
      },
      {
        path: '/monitor/warn',
        name: 'MonitorWarn',
        component: MonitorAlarm
      }
    ]
  }
];

export default route;
