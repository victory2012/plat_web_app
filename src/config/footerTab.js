/**
 * @function mainFooterBar
 * @desc 项目主页的footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function mainFooterBar() {
  return [
    { label: '首页', icon: 'icon-aui-icon-home', link: 'Home' },
    // { label: '消息', icon: 'icon-SupportNotification', link: 'HomeNews' },
    { label: '用户', icon: 'icon-iconset0203', link: 'HomeUser' },
    { label: '我的', icon: 'icon-me', link: 'HomeMe' }
  ];
}

/**
 * @function monitorFooterBar
 * @desc 电池检测 子项目的footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function monitorFooterBar() {
  return [
    { label: '首页', icon: 'icon-74', link: 'Monitor' },
    { label: '电池', icon: 'icon-battery', link: 'MonitorBattery' },
    { label: '设备', icon: 'icon-device', link: 'MonitorDevice' },
    { label: '围栏', icon: 'icon-electricfence', link: 'MonitorFence' },
    { label: '操作', icon: 'icon-alert', link: 'MonitorOperateDeployment' }
  ];
}
/**
 * @function monitorBatteryFooterBar
 * @desc 电池检测 子项目的电池项目的 footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function monitorBatteryFooterBar() {
  return [
    { link: 'MonitorBattery', label: '运行' },
    { link: 'MonitorBatteryAlarm', label: '告警' },
    { link: 'MonitorBatteryContrast', label: '对比' }
  ];
}
/**
 * @function monitorFenceFooterBar
 * @desc 电池检测 子项目的围栏 footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function monitorFenceFooterBar() {
  return [
    { link: 'MonitorFence', label: '围栏' },
    { link: 'MonitorThreshold', label: '阈值' },
    { link: 'MonitorNotice', label: '通知' }
  ];
}
/**
 * @function MoniterOperateBar
 * @desc 电池检测 子项目的操作 footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function MoniterOperateBar() {
  return [
    { link: 'MonitorOperateDeployment', label: '调配' },
    { link: 'MonitorOperateActive', label: '激活' },
    { link: 'MonitorOperateBlack', label: '拉黑' }
  ];
}
