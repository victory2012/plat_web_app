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
  BatteryFooterBar: tabs, // 监测 电池 栏中 底部footer 数据
  MoniterMainTabBar: monitorFooterBar(), // 监测 底部footer 数据
  MoniterFenceTab: fenceTab, // 监测 围栏 栏中 底部footer 数据
  MoniterOperateTab: operateTab, // 监测 电池栏中 底部footer 数据
  CompanyDetail: {}, // 监测 公司详情
  UserDetail: {}, // 监测 用户详情
  OverviewAccount: '', // 监测 概览统计数字
  LoginData: logindata ? JSON.parse(logindata) : '', // 登录的信息
  MoniterBatterySearch: {}, // 监测项目 电池列表 搜索的条件
  batterySingleModelList: [], // 监测项目 电池组单体型号列表
  batterySpecifList: [], // 监测项目 电池组规格列表
  batteryModelList: [] // 监测项目 电池型号列表
};
