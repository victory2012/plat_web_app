import {
  mainFooterBar,
  monitorBatteryFooterBar,
  monitorFenceFooterBar,
  MoniterOperateBar,
  monitorFooterBar
} from '@/config/footerTab';
const tabs = monitorBatteryFooterBar();
const fenceTab = monitorFenceFooterBar();
const operateTab = MoniterOperateBar();
const logindata = sessionStorage.getItem('loginData');
export default {
  mainTabBar: mainFooterBar(),
  routerIndex: sessionStorage.getItem('routerIndex') || 0, // 追踪系统中 电池项目中的 tab index
  BatteryFooterBar: tabs,
  MoniterMainTabBar: monitorFooterBar(),
  MoniterFenceTab: fenceTab,
  MoniterOperateTab: operateTab,
  LoginData: logindata ? JSON.parse(logindata) : ''
};
