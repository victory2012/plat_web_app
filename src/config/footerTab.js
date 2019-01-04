/**
 * @function mainFooterBar
 * @desc 项目主页的footerTab数据配置
 * @desc label： 显示的文字
 * @desc icon：  显示的图标
 * @desc link：  和路由配置中的 name属性一直，作为路由跳转使用
 */
export function mainFooterBar () {
  return [
    { label: '首页', icon: 'icon-aui-icon-home', link: 'Home' },
    { label: '消息', icon: 'icon-SupportNotification', link: 'HomeNews' },
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
export function monitorFooterBar () {
  return [
    { label: '首页', icon: 'icon-74', link: 'Monitor' },
    { label: '电池', icon: 'icon-battery', link: 'MonitorBattery' },
    { label: '设备', icon: 'icon-device', link: 'MonitorDevice' },
    { label: '围栏', icon: 'icon-electricfence', link: 'MonitorFence' },
    { label: '告警', icon: 'icon-alert', link: 'MonitorWarn' }
  ];
}
