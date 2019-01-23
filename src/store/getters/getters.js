export default {
  getMainTabBar(state) {
    return state.mainTabBar;
  },
  getMonitorMainTabBar(state) {
    return state.MoniterMainTabBar;
  },
  getMonitorBatteryIndex(state) {
    return state.MoniterinitIndex;
  },
  getMonitorBatteryFooter(state) {
    return state.BatteryFooterBar;
  },
  getMonitorFenceFooter(state) {
    return state.MoniterFenceTab;
  },
  getMonitorOperateFooter(state) {
    return state.MoniterOperateTab;
  },
  /* 获取登录 的信息 */
  getLoginData(state) {
    return state.LoginData;
  },
  /* 获取 tab 索引 */
  getRouterIndex(state) {
    return state.routerIndex;
  },
  /* 获取公司 详情 */
  getCompanyDetail(state) {
    return state.CompanyDetail;
  },
  /* 获取用户列表中的 保存的用户详情 */
  getUserDetail(state) {
    return state.UserDetail;
  },
  /* 获取监测项目中年 首页 统计数据 */
  getCardData(state) {
    return state.OverviewAccount;
  }
};
