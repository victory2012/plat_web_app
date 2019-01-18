export default {
  setMainTabBar(state, data) {
    state.mainTabBar = data;
  },
  setMainMoniterTabBar(state, data) {
    state.MoniterMainTabBar = data;
  },
  setMinitorBatteryIndex(state, data) {
    state.MoniterinitIndex = data;
  },
  setMinitorBatteryTabDefaultValue(state, data) {
    state.MoniterTabDefaultValue = data;
  },
  setUserLoginData(state, data) {
    state.LoginData = data;
  },
  setRouterIndex(state, data) {
    sessionStorage.routerIndex = data;
    state.routerIndex = data;
  }
};
