const BatteryMonitor = () =>
  import(/* webpackChunkName: "BatteryMonitor" */ '@/views/Battery-Monitor/index.vue');
const MonitorHome = () =>
  import(/* webpackChunkName: "MonitorHome" */ '@/views/Battery-Monitor/home/home.vue');
const MonitorDevice = () =>
  import(/* webpackChunkName: "MonitorDevice" */ '@/views/Battery-Monitor/device/device.vue');

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
      {
        path: '/monitor/device',
        name: 'MonitorDevice',
        component: MonitorDevice
      }
      // {
      //   path: '/monitor/warn',
      //   component: BatteryMonitor,
      //   children: [
      //     {
      //       path: '/',
      //       name: 'Monitor',
      //       component: MonitorHome
      //     },
      //     {
      //       path: '/monitor/device',
      //       name: 'MonitorDevice',
      //       component: MonitorDevice
      //     }
      //   ]
      // },
      // {
      //   path: '/home/HomeMe/personalData',
      //   name: 'personalData',
      //   component: personalData
      // },
      // {
      //   path: '/home/HomeMe/changePassword',
      //   name: 'changePassword',
      //   component: changePassword
      // }
    ]
  }
];

export default route;
