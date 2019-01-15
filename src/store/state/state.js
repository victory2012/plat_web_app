import {
  mainFooterBar,
  monitorBatteryFooterBar,
  monitorFenceFooterBar
} from '@/config/footerTab';
const tabs = monitorBatteryFooterBar();
const fenceTab = monitorFenceFooterBar();

export default {
  mainTabBar: mainFooterBar(),
  MoniterinitIndex: 1, // 追踪系统中 电池项目中的 tab index
  BatteryFooterBar: tabs,
  MoniterFenceTab: fenceTab
};
