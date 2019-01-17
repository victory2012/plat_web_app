import {
  mainFooterBar,
  monitorBatteryFooterBar,
  monitorFenceFooterBar,
  MoniterOperateBar
} from '@/config/footerTab';
const tabs = monitorBatteryFooterBar();
const fenceTab = monitorFenceFooterBar();
const operateTab = MoniterOperateBar();
const logindata = sessionStorage.getItem('loginData');
export default {
  mainTabBar: mainFooterBar(),
  MoniterinitIndex: 1, // 追踪系统中 电池项目中的 tab index
  BatteryFooterBar: tabs,
  MoniterFenceTab: fenceTab,
  MoniterOperateTab: operateTab,
  LoginData: logindata ? JSON.parse(logindata) : ''
};
