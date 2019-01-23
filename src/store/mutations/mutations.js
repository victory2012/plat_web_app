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
  /* 保存登录的用户信息 */
  setUserLoginData(state, data) {
    state.LoginData = data;
  },
  /* tab 索引 */
  setRouterIndex(state, data) {
    sessionStorage.routerIndex = data;
    state.routerIndex = data;
  },
  /* 保存公司 详情 */
  setCompanyDetail(state, data) {
    state.CompanyDetail = data;
  },
  /* 保存用户列表中的 某个用户 详情 */
  setUserDetail(state, data) {
    state.UserDetail = data;
  },
  setCardData(state, data) {
    state.OverviewAccount = data;
  }
};
