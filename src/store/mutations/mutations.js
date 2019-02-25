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
  },
  /* 电池组单体型号 */
  SETsingleBatteryOpts(state, data) {
    state.batterySingleModelList = data;
  },
  /* 电池组规格列表 */
  SETbatteryGroupSpecifOpts(state, data) {
    state.batterySpecifList = data;
  },
  /* 电池型号列表 */
  SETGroupModelOpts(state, data) {
    state.batteryModelList = data;
  },
  /* 客户企业列表 */
  SETCustomOpts(state, data) {
    state.customCompanyList = data;
  },
  /* 未绑定的设备列表 */
  SETunbindDeviceList(state, data) {
    state.unbindDeviceList = data;
  },
  /* 保存选中的告警列表中某一项 的数据 */
  SETalarmItemDetail(state, data) {
    state.alarmItemDetail = data;
  },
  SetBatteryGroupInfo(state, data) {
    state.batteryGroupInfo = data;
  }
};
