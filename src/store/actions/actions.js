import api from '@/api';

export default {
  carData({ commit }) {
    api.overviewCount().then(res => {
      if (res.data && res.data.code === 0) {
        commit('setCardData', res.data.data);
      }
    });
  },
  // 获取客户企业表
  getCompanyList({ commit }) {
    api.purchaseNames().then(res => {
      console.log('获取电池组客户企业表', res);
      if (res.data && res.data.code === 0) {
        commit('SETCustomOpts', res.data.data);
      }
    });
  },
  // 获取电池型号列表
  getBatteryModelList({ commit }) {
    api.batteryModelList().then(res => {
      console.log('获取电池型号列表', res);
      if (res.data && res.data.code === 0) {
        const result = res.data.data;
        commit('SETGroupModelOpts', result);
      }
    });
  },
  // 获取生产企业列表
  getManufacturer({ commit }) {
    api.manufacturerNames().then(res => {
      console.log('companyArr', res);
      if (res.data && res.data.code === 0) {
        commit('SETManufacturer', res.data.data);
      }
    });
  },
  // 获取电池组规格列表
  getBatterySpecif({ commit }) {
    api.batteryGroupSpecif().then(res => {
      console.log('电池组规格', res);
      if (res.data && res.data.code === 0) {
        const result = res.data.data;
        commit('SETbatteryGroupSpecifOpts', result);
      }
    });
  },
  // 获取电池单体型号列表
  getBatterySingleModel({ commit }) {
    api.batterySingleModel().then(res => {
      console.log('电池单体型号列表', res);
      if (res.data && res.data.code === 0) {
        const result = res.data.data;
        commit('SETsingleBatteryOpts', result);
      }
    });
  }
};
