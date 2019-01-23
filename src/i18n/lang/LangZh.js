export default {
  platform: '平台管理员',
  manufacturer: '生产商',
  administrator: '管理员',
  customer: '客户',
  adminIden: '用户',
  internetErr: '服务器请求超时，请稍后重试',
  mapError: '地图加载失败，请检查网络连接',
  connectErr: '服务器繁忙，请稍后重试。',
  responseCode: {
    timeOut: '登录超时，请重新登录',
    sessionOut: '会话过期', // 1
    parameterErr: '参数错误', // 10
    permissions: '权限不足', // 20
    dataExists: '数据已存在', // 30
    sendCode: '发送短信失败', // 40
    smscodeErr: '验证码错误或已过期', // 41
    accountExists: '账号已存在', // 101001
    phoneExists: '手机号已存在', // 101002
    emailExists: '邮箱已存在', // 101003
    oldPassword: '旧密码不正确', // 101008
    accountOrPwdErr: '账号名密码错误', // 104001
    userNotExist: '用户不存在', // `104002`: 用户不存在
    companyExists: '公司已存在', // 201001
    hasInvalidDevice: '存在有效设备(请先删除设备)', // 202001
    hasInvalidHost: '存在有效宿主(请先删除电池)', // 202002
    notFindCompany: '公司未找到', // 204001
    deviceExists: '设备已存在', // 301001
    notFindDevice: '设备未找到', // 301002
    gpsDeviceExists: '设备已存在', // 301101 --电池gps设备已存在--
    MonitorDeviceExists: '设备已存在', // 301201 --电池检测设备已存在--
    deviceRunning: '设备运行中', // 302001
    deviceBind: '设备已绑定', // 303001
    hasHost: '宿主已存在', // 401001
    hostBind: '宿主已绑定', // 403002
    batteryGroupExists: '电池组已存在', // 401201
    batteryModelExists: '电池组型号已存在', // 401211
    batteryModelNotFind: '电池组型号未找到', // 401212
    batterySpecExists: '电池组规格已存在', // 401213
    batterySpecNotFind: '电池组规格未找到', // 401214
    batterySingleModelExists: '电池组单体规格已存在', // 401215
    batterySingleModelNotFind: '电池组单体规格未找到', // 401216
    innerNoticeExists: '电池组通知规则已存在', // 501211
    InnerNoticeUserExists: '电池组内部通知用户已存在', // 501221
    InnerNoticeOverrun: '电池组内部通知用户数量超限', // 501222
    outerNoticeUserExists: '电池组外部通知用户已存在', // 501231
    outerNoticeOverrun: '电池组外部通知用户数量超限' // 501232
  },
  loginMsg: {
    userNameMsg: '请输入用户名',
    password: '请输入密码',
    projectName: '电池定位追踪管理系统',
    subProjectName: '电池定位追踪管理系统',
    RMaccount: '记住账户',
    RMpassword: '记住密码',
    accountPlace: '账号',
    passwordPlace: '密码',
    tips: '提示',
    sortage: '请关闭无痕模式后，再访问',
    loginBtn: '登录',
    RememberPassword: '记住账户密码',
    errorMsg: {
      account: '请输入账号',
      password: '请输入密码',
      phoneNub: '请输入手机号',
      checkPhone: '手机号格式错误',
      smsCodeErr: '请输入短信验证码',
      checkAccount: '用户名长度为4~20',
      checkFormat: '用户名格式有误',
      checkPassWord: '密码长度为6~20',
      checkPasswordFormat: '密码格式有误'
    },
    labelAccPass: '账户密码登录',
    labelSmsCode: '验证码登录',
    phone: '手机号',
    smsCode: '验证码',
    getSmsCode: '获取验证码',
    smsSuccess: '发送成功'
  },
  userInfo: {
    userMsg: '个人信息',
    pasword: '修改密码',
    logOut: '退出登录'
  },
  successTips: {
    addSuccess: '添加成功',
    delSuccess: '删除成功',
    unbindSuccess: '解绑成功',
    bindSuccess: '绑定成功',
    batchSuccess: '批量添加成功',
    recoverySuccess: '恢复拉黑成功',
    changeSuccess: '修改成功',
    addBlackSucc: '添加黑名单成功',
    regDevice: '设备注册成功',
    recoverySuc: '收回成功',
    distributionSuc: '分配成功',
    regBattery: '电池注册成功'
  },
  batch: {
    formatErr: '请导入xls格式或者xlsx格式',
    volumeErr: '导入的表格文件不能大于1M',
    nodata: '上传的文件内容为空，请检查文件',
    complete: '请文件填写完整',
    betteryCodeRepeat: '电池编号不能重复，请检查文件',
    timeFormatErr: '时间格式不支持，请选择文本形式'
  },
  menu: {
    // 菜单列表
    overview: '概览',
    realposition: '实时位置',
    history: '历史轨迹',
    fence: '地理围栏',
    batteryManage: '电池管理',
    batteryList: '电池列表',
    alarm: '告警数据',
    userManage: '用户管理',
    device: '设备管理',
    deviceList: '设备列表',
    // deviceDefriend: '恢复拉黑设备',
    batteryInfo: '电池信息',
    defriend: '恢复拉黑设备',
    runStatus: '运行状况',
    compare: '数据对比',
    setting: '配置管理',
    threshold: '报警阈值',
    sortByModel: '按电池型号分类',
    sortByCompany: '按企业全局分类',
    WarningNotice: '告警通知',
    receiveList: '告警接收人',
    addReceive: '已添加接收人',
    OuterReceive: '外部告警接收人',
    Allocation: '电池调配',
    alarmData: '告警数据',
    system: '系统管理',
    repairGps: 'gps修正'
  },
  overview: {
    total: '电池总数',
    newAdd: '本月新增电池数',
    valid: '有效监控数',
    alarmed: '运行异常数',
    effectiveRate: '有效监控',
    RunNormal: '正常运行',
    subtotalField: '电池数',
    effectiveField: '有效监控数',
    abnormalField: '运行异常数',
    batteryModel: '型号',
    provence: '地区',
    online: '本月',
    offLine: '有效',
    invalid: '无效'
  },
  positions: {
    title1: '设备列表',
    title2: '在线电池列表',
    lookAll: '查看全部',
    track: '历史轨迹',
    onLine: '在线',
    offline: '离线',
    batteryCode: '电池编号',
    deviceCode: '设备编号',
    updateTime: '更新时间',
    intersection: '路口',
    latLng: '坐标',
    address: '地址',
    getAdressErr: '地址获取失败'
  },
  group: {
    allGroup: '整组',
    single: '单体',
    high: '高',
    mid: '中',
    low: '低'
  },
  toggleTip: {
    open: '展开',
    close: '收起'
  },
  history: {
    startTime: '选择开始时间',
    endTime: '选择结束时间',
    start: '开始',
    pause: '暂停',
    continue: '继续',
    stop: '停止',
    heatActive: '活动热区',
    TrackReplay: '轨迹回放',
    times: '时间',
    batteryList: '电池列表',
    online: '上线',
    offLine: '下线',
    checkErr: '开始时间应小于结束时间',
    noData: '此设备当前时间段内，暂无数据',
    noDevice: '暂无设备, 请先注册设备',
    latLng: '坐标',
    address: '查看地址',
    from: '从',
    to: '至',
    exportBtn: '导出Excel',
    cycle: '电池循环次数',
    chargeDuration: '充电时间',
    dischargeDuration: '放电时间',
    avgChargeDuration: '平均充电时间',
    avgDischargeDuration: '平均放电时间',
    empty: '空载时间',
    fluidTimes: '补水次数',
    avgFluidDuration: '平均补水时长',
    historyWarn: '历史告警',
    historyfluid: '历史补水',
    week: '最近一周',
    mounth: '最近一月',
    threemonth: '最近三个月',
    sixmounth: '最近六个月',
    year: '最近一年',
    all: '全生命周期',
    maker: '制表人',
    makeTime: '制表时间',
    fileName: '请输入导出文件名',
    tips: '提示',
    fluidTime: '补水时间',
    fluidTemp: '补水温度',
    LengthOfYime: '距上次补水时长',
    No: '第',
    point: '个点',
    junction: '路口',
    track: '轨迹'
  },
  pageBtn: {
    previous: '上一页',
    next: '下一页'
  },
  timeBtn: {
    cancle: '取消',
    sure: '确定',
    clear: '清空',
    all: '全部',
    del: '删除',
    confirm: '确定',
    reset: '重 置',
    save: '保存'
  },
  fence: {
    cancelSeting: '取消设置',
    sureSeting: '确定设置',
    back: '返回',
    addBtn: '添加围栏',
    delBtn: '删除围栏',
    tipMsg: {
      addSuccess: '添加成功',
      delSuccess: '删除成功',
      addPointer: '请选取围栏点',
      selectToDel: '请点击要删除的围栏',
      morePointer: '最多选取10个点'
    }
  },
  batteryList: {
    batteryVoltage: '电池组额定电压',
    batteryCapacity: '电池组额定容量',
    singleBattery: '电池单体型号',
    choseDevice: '监测设备编号（选填）',
    deviceCode: '设备编号',
    serial: '序号',
    batteryCode: '电池编号',
    binding: '绑定状态',
    running: '运行状态',
    detail: '查看',
    online: '在线',
    offline: '离线',
    noBind: '未绑定',
    hasBind: '已绑定',
    batteryDetail: '详情',
    batteryNumber: '电池编号',
    model: '电池型号',
    battertModel: '电池型号',
    specif: '电池组规格',
    customer: '客户企业',
    enterprise: '生产企业',
    bindStatus: '绑定状态',
    onlineStatus: '在线状态',
    view: '查看',
    batteryAddBtn: '电池登记',
    createDate: '生产日期',
    manufactureDate: '出厂日期',
    warrantyDate: '质保期',
    cancel: '取消',
    sure: '确认',
    warn: {
      enterprise: '请填写生产商',
      customerCom: '请选择客户企业',
      batteryCode: '请输入电池编号',
      model: '请选择电池组型号',
      specif: '请选择电池组规格',
      createDate: '请选择生产日期',
      manufactureDate: '请选择出厂日期',
      warrantyDate: '请选择质保期',
      deviceId: '请选择设备编号',
      content: '内容不能为空',
      batteryVoltage: '请输入电池组额定电压',
      batteryCapacity: '请输入电池组额定容量',
      singleBattery: '请选择电池单体型号',
      CheckmanufactureDate: '出厂日期应大于生产日期',
      CheckWarrantyDate: '质保期应大于出厂日期'
    },
    batteries: '添加电池',
    batchImport: '批量导入',
    defriend: '恢复拉黑设备',
    runStatus: '运行状态',
    handle: '操作',
    unBind: '解绑',
    bind: '绑定',
    black: '拉黑',
    detele: '删除',
    batteryBindDevice: '电池与检测设备绑定',
    addModel: '添加型号',
    addSpecif: '添加规格',
    addSinggleSpecif: '添加单体规格',
    singgleSpecif: '添加单体规格',
    deleteTip: '确定删除此电池组吗？',
    search: '查询',
    clear: '清空',
    searchContent: '电池/设备编号',
    name: '企业名称',
    recovery: '恢复'
  },
  runState: {
    realData: '实时数据',
    historyData: '历史数据',
    alarmData: '告警数据',
    batteryCode: '请输入电池编号',
    selectBattery: '请先选择一个电池组！'
  },
  realTime: {
    time: '时间',
    temperature: '温度',
    fluid: '液位',
    voltage: '电压',
    singleVoltage: '单体电压',
    current: '电流',
    quantity: '电量',
    fourHour: '过去4小时监测数据',
    update: '是否自动更新数据',
    query: '主动查询',
    normal: '正常',
    abnormal: '异常',
    refresh: '刷新时间',
    warn: '告警',
    times: '次',
    totalWarn: '累计告警'
  },
  alarmList: {
    serial: '序号',
    time: '告警时间',
    batteryCode: '电池编号',
    content: '告警内容',
    handle: '操作',
    detail: '详情',
    batteryDetail: '电池详情',
    specif: '电池组规格',
    customer: '客户名称',
    deviceCode: '监测设备编号',
    grid: '设备坐标',
    position: '查看位置',
    location: '查看告警位置',
    alarmItem: '告警项目',
    alarmHierarchy: '告警层级',
    alarmLevel: '告警级别',
    more: '更多',
    batteries: '电池数',
    thride: '告警阈值',
    realDate: '实际值',
    view: '查看',
    custorm: '客户',
    latLng: '位置',
    warnData: '告警值',
    endTime: '结束时间',
    startTime: '开始时间'
  },
  useMsg: {
    projetName: '选择子系统',
    serial: '序号',
    name: '用户名',
    accountIdentity: '账户身份',
    companyIdentity: '企业身份',
    detail: '详情',
    administrator: '管理员',
    superAdministrator: '超级管理员',
    userDetail: '用户详情',
    userName: '用户名',
    accountRole: '账户身份',
    enterpriseRole: '企业身份',
    enterpriseName: '企业名称',
    phone: '手机号',
    email: '邮箱',
    loginPwd: '登陆密码',
    add: {
      china: '国内',
      international: '国际',
      userName: '用户名',
      password: '登陆密码',
      phone: '手机号码',
      email: '邮箱（选填）',
      enterpriseName: '企业名称',
      nature: '企业性质',
      manufacturer: '创建生产企业管理员',
      customer: '添加客户企业管理员',
      manuProduct: '添加生产企业普通管理员',
      cusNoraml: '添加本企业用户',
      cancel: '取 消',
      sure: '确 认'
    },
    warn: {
      userName: '请输入用户名',
      nameLimit: '用户名长度在 4 到 20 个字符',
      password: '请输入密码',
      passwordLimit: '密码长度在 6 到 20 个字符',
      phone: '请输入手机号码',
      phoneCheck: '手机号格式错误',
      emailCheck: '邮箱格式有误',
      enterprise: '请输入企业名称',
      nature: '请选择企业性质'
    },
    success: '创建成功！',
    no: '无',
    nickName: '昵称',
    changeRole: '修改权限',
    delUserWarn: '此操作将删除该用户, 是否继续?',
    delCompanyWarn: '此操作将删除该企业以及该企业下的所有用户, 是否继续?'
  },
  defaultRole: {
    addBatteries: '电池登记',
    addblack: '拉黑及恢复电池',
    historyData: '历史数据',
    alarm: '告警事件',
    sameAnalysis: '数据对比',
    personalInfo: '个人信息维护',
    allocation: '电池调配'
  },
  device: {
    serial: '序号',
    deviceCode: '设备编号',
    bindStatus: '绑定状态',
    runStatus: '在线状态',
    detail: '详情',
    deviceDetail: '设备详情',
    manufacturerName: '企业名称',
    createTime: '创建时间',
    batteryCode: '电池编号',
    onlineStatus: '在线状态',
    device: '监测设备',
    location: '查看告警位置',
    addDevice: '添加设备',
    nobind: '未绑定',
    hasbind: '已绑定',
    online: '在线',
    offline: '离线',
    regDevice: '设备注册',
    enterprise: '生产企业',
    upLevel: '设备升级',
    deviceCategory: '设备类别',
    company: '相关企业',
    registed: '已注册',
    noregist: '未注册',
    delTips: '确定删除此设备吗？',
    selectCampany: '请选择企业',
    batteryGps: '电池追踪',
    batteryMonitor: '电池监测',
    handel: '查看'
  },
  addDevice: {
    title: '添加设备',
    back: '取消',
    deviceCode: '设备编号',
    manufacturer: '生产商',
    Customer: '客户',
    createBtn: '确认',
    noData: '暂无数据',
    errorTip: '请填写设备编号',
    manufacturerErr: '请选择生产商',
    success: '创建成功'
  },
  user: {
    edit: '编辑',
    save: '保存',
    cancel: '取消',
    userName: '用户名',
    userRole: '账户身份',
    enterpriseRole: '企业身份',
    enterpriseName: '企业名称',
    phone: '手机号码',
    email: '邮箱',
    no: '无',
    seccess: '修改成功',
    userInfo: '个人信息编辑',
    nameErr: '请输入用户名',
    phoneErr: '请输入手机号码',
    phoneCheck: '手机号格式错误'
  },
  password: {
    new: '新密码',
    placeholder: '请输入新密码',
    changeBtn: '修改密码',
    error: '请输入新密码',
    success: '修改成功',
    passwordLimit: '长度在 6 到 20 个字符'
  },
  googleAbno: {
    return: '返回',
    title: '查看设备当前位置',
    OUT: 'Out of the geofence.',
    Geofence: '超出围栏点',
    nowPosition: '当前实时位置'
  },
  comparison: {
    same: '同一电池单元',
    diffrence: '不同电池单元',
    comparData: '比较数据',
    batteryCode: '电池编号',
    timeRange: '请选择时间范围',
    comparWay: '请选择对比方式',
    addCompar: '添加电池单元',
    most: '最多可选',
    item: '项',
    deviceId: '设备ID',
    YearOnYear: '同比',
    monthOnMonth: '环比',
    thisPeriod: '本期',
    lastPeriod: '上期',
    batteryUse: '电池使用情况',
    alarmTimes: '告警次数',
    charageSituation: '充电情况',
    charageTimes: '充电次数',
    discharageSituation: '放电情况',
    discharageTimes: '工作次数',
    selectBattery: '请选择电池组',
    addOneBattery: '需添加1组电池',
    addTwoBattery: '需添加2组电池',
    changeBattery: '更换电池单元',
    alarm: '告警情况'
  },
  notice: {
    status: '状态',
    hasAdd: '已添加',
    noAdd: '未添加',
    viewUser: '查看已添加用户',
    atMost: '（最多添加128人）',
    add: '添加',
    outerMost: '已添加的告警接收人（最多3位）'
  },
  stock: {
    unassigned: '未分配电池',
    custormBat: '客户企业电池',
    selectAll: '全选',
    distribution: '分配',
    recovery: '收回',
    load: '加载中...',
    noData: '暂无数据'
  },
  threshold: {
    changeThreshold: '修改阈值',
    recovery: '恢复全局',
    singleVoltage: '单体充电电压上限阈值',
    singleDisVoltage: '单体放电电压下限阈值',
    maxColtage: '整组充电电压上限阈值',
    minDVoltage: '整组放电电压下限阈值',
    maxCCurrent: '充电电流上限阈值系数',
    maxDCurrent: '放电电流上限阈值系数',
    maxCTemperat: '充电温度上限阈值',
    minCTemperat: '充电温度下限阈值',
    maxDTemperat: '放电温度上限阈值',
    minDTemperat: '放电温度下限阈值',
    maxFODays: '补水超限天数',
    maxCCapacity: '充电容量上限阈值系数',
    minCCapacity: '充电容量下限阈值系数',
    warn: {
      singleVoltage: '请输入单体充电电压上限阈值',
      singleDisVoltage: '请输入单体放电电压下限阈值',
      maxColtage: '请输入整组充电电压上限阈值',
      minDVoltage: '请输入整组放电电压下限阈值',
      maxCCurrent: '请输入充电电流上限阈值系数',
      maxDCurrent: '请输入放电电流上限阈值系数',
      maxCTemperat: '请输入充电温度上限阈值',
      minCTemperat: '请输入充电温度下限阈值',
      maxDTemperat: '请输入放电温度上限阈值',
      minDTemperat: '请输入放电温度下限阈值',
      maxFODays: '请输入补水超限天数',
      maxCCapacity: '请输入充电容量上限阈值系数',
      minCCapacity: '请输入充电容量下限阈值系数',
      selectBatModel: '请选择电池型号',
      modelNoThres: '此电池型号暂未设置阈值',
      NOverall: '暂未设置全局阈值'
    }
  },
  time: {
    day: '天',
    hour: '小时',
    mins: '分钟',
    sec: '秒'
  }
};
