const BatteryMonitor = () =>
  import(/* webpackChunkName: "BatteryMonitor" */ '../../views/Battery-Monitor/index.vue');

const route = [
  {
    path: '/monitor',
    name: 'monitor',
    component: BatteryMonitor
  }
];

export default route;
