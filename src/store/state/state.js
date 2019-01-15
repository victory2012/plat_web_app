import { mainFooterBar, monitorBatteryFooterBar } from '@/config/footerTab';

export default {
  mainTabBar: mainFooterBar(),
  MoniterinitIndex: 1, // 追踪系统中 电池项目中的 tab index
  MoniterTabDefaultValue: '', // 追踪系统中 电池项目中的 tab 默认高亮的tab
  BatteryFooterBar: monitorBatteryFooterBar()
};
