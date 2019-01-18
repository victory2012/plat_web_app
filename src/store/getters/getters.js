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
  getLoginData(state) {
    return state.LoginData;
  },
  getRouterIndex(state) {
    return state.routerIndex;
  }
};
