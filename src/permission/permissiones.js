import defaultPermion from './default_permission_list';

export default function permissionFun(userData) {
  let role = JSON.parse(sessionStorage.getItem('UserPermissions'));
  // let permissions = {
  //   type: "",
  //   AddBatteries: true, // 电池登记
  //   info: true, // 基础信息
  //   runState: true, // 运行状况
  //   monitoring: true, // 主动监测
  //   historyData: true, // 历史数据
  //   alarmDatas: true, // 告警数据 （单个电池的告警）
  //   alarm: true, // 告警事件（全部的电池告警）
  //   deleteBattery: true, // 删除电池
  //   addblack: true, // 添加黑名单
  //   recovery: true, // 回复拉黑电池,
  //   sameAnalysis: true, // 同一电池单元的数据分析
  //   sameBatch: true, // 同批次不同电池单元的数据分析
  //   personalInfo: true, // 个人信息维护
  //   threshold: true, // 告警阈值
  //   notice: true, // 告警通知,
  //   addCompany: true, // 创建企业用户
  //   deleteCompany: true, // 删除企业用户
  //   modifyPermissions: true, // 修改权限，
  //   addAdmin: true, // 添加管理员
  //   deleteAdmin: true, // 删除管理员
  //   allocation: false // 电池调配
  // };
  let permissions = {};
  if (userData.layerName === '平台') {
    permissions = role == null ? {} : {};
  }
  if (userData.type === 2 && userData.layerName === '生产企业') {
    permissions = role == null ? { allocation: true } : { allocation: true };
  }
  if (userData.type === 2 && userData.layerName === '采购企业') {
    let defaultper = defaultPermion.custormAdmin();
    permissions =
      role == null
        ? {
          sameAnalysis: defaultper.sameAnalysis,
          historyData: defaultper.historyData,
          alarm: defaultper.alarm,
          personalInfo: defaultper.personalInfo,
          addblack: defaultper.addblack
        }
        : {
          sameAnalysis: role.sameAnalysis,
          historyData: role.historyData,
          alarm: role.alarm,
          personalInfo: role.personalInfo,
          addblack: role.addblack
        };
  }
  if (userData.type === 3 && userData.layerName === '生产企业') {
    let defaultper = defaultPermion.productPer();
    permissions =
      role == null
        ? {
          addBatteries: defaultper.addBatteries,
          historyData: defaultper.historyData,
          alarm: defaultper.alarm,
          allocation: defaultper.allocation,
          sameAnalysis: defaultper.sameAnalysis,
          personalInfo: defaultper.personalInfo
        }
        : {
          addBatteries: role.addBatteries,
          historyData: role.historyData,
          alarm: role.alarm,
          allocation: role.allocation,
          sameAnalysis: role.sameAnalysis,
          personalInfo: role.personalInfo
        };
  }
  if (userData.type === 3 && userData.layerName === '采购企业') {
    let defaultper = defaultPermion.custormPer();
    permissions =
      role == null
        ? {
          historyData: defaultper.historyData,
          alarm: defaultper.alarm,
          sameAnalysis: defaultper.sameAnalysis,
          personalInfo: defaultper.personalInfo
        }
        : {
          historyData: role.historyData,
          alarm: role.alarm,
          sameAnalysis: role.sameAnalysis,
          personalInfo: role.personalInfo
        };
  }
  return permissions;
}
