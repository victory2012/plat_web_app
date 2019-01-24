<template>
  <div>
    <div ref="filterPart" class="filterPart">
      <div @click="companyClick" :class="{'selcetBy': company}" class="select">
        <span>客户企业</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="showBatteryList" :class="{'selcetBy': battery}" class="select">
        <span>电池型号</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="batteryStatusClick" :class="{'selcetBy': companyStatus}" class="select">
        <span>状态</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <slot name="mapIcon"></slot>
    </div>
    <div class="popupWraper" v-show="wrap">
      <!-- 公司列表 -->
      <div class="company" v-show="company">
        <div class="production" v-if="userData.type === 1">
          <h2 class="listTit">生产企业</h2>
          <cube-scroll class="productionList" :data='manufacturerNames' ref="scroll" :options="options">
            <ul class="listWraper">
              <li class="listItem" v-for="item in manufacturerNames" :key="item.id" @click="chooseProductionItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
              <li class="noData" v-if="manufacturerNames.length === 0">暂无数据</li>
            </ul>
          </cube-scroll>
        </div>
        <div class="purchase">
          <h2 class="listTit">采购企业</h2>
          <cube-scroll class="productionList" :data='PurchaseNames' ref="scroll" :options="options">
            <ul class="listWraper">
              <li class="listItem" v-for="item in PurchaseNames" :key="item.id" @click="choosePurchaseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
              <li class="noData" v-if="PurchaseNames.length === 0">暂无数据</li>
            </ul>
          </cube-scroll>
        </div>
        <section class="companyBtn">
          <p @click="CancelHandle">取消</p>
          <p @click="companyConfirm" class="sure">确定</p>
        </section>
      </div>
      <!-- 电池状态 -->
      <div class="allStatus" v-show="companyStatus">
        <div class="status" v-for="item in status" :key="item.id">
          <h2 class="listTit">{{item.title}}</h2>
          <ul>
            <li v-for="info in item.data" @click="choosStatuItem(info, item.data)" :key="info.value" :class="{'active': info.choose}">{{info.name}}</li>
          </ul>
        </div>
        <section class="companyBtn">
          <p @click="CancelHandle">取消</p>
          <p @click="statusConfirm" class="sure">确定</p>
        </section>
      </div>
      <!-- 电池型号 -->
      <div class="battery" v-show="battery">
        <h2 class="listTit">电池型号</h2>
        <cube-scroll class="productionList" :data='modelArr' ref="scroll" :options="options">
          <ul class="listWraper">
            <li class="listItem" v-for="item in modelArr" :key="item.id" @click="chooseModelItem(item)" :class="{'choosed': item.choose}">{{item.dicKey}}</li>
            <li class="noData" v-if="modelArr.length === 0">暂无数据</li>
          </ul>
        </cube-scroll>
        <section class="companyBtn">
          <p @click="CancelHandle">取消</p>
          <p @click="modelConfirm" class="sure">确定</p>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      userData: 'getLoginData'
    }),
    options() {
      return {
        scrollbar: false, // 是否显示滚动条
        click: true
      }
    }
  },
  data() {
    return {
      company: false,
      companyStatus: false,
      wrap: false,
      battery: false,
      PurchaseNames: [], // 客户企业列表
      manufacturerNames: [], // 生产企业列表
      modelArr: [],
      status: [
        {
          id: Math.random(),
          title: '绑定状态',
          data: [
            {
              name: '全部',
              id: '',
              item: 'status',
              value: 'all',
              choose: true
            },
            {
              name: '未绑定',
              id: '0',
              item: 'status',
              value: 'nobind',
              choose: false
            },
            {
              name: '已绑定',
              id: '1',
              item: 'status',
              value: 'hasbind',
              choose: false
            }
          ]
        }
        // {
        //   id: Math.random(),
        //   title: '在线状态',
        //   data: [
        //     {
        //       label: '全部',
        //       id: 'allOline',
        //       choose: true
        //     },
        //     {
        //       label: '在线',
        //       id: 'online',
        //       choose: false
        //     },
        //     {
        //       label: '离线',
        //       id: 'offline',
        //       choose: false
        //     }
        //   ]
        // }
      ]
    };
  },
  mounted() {
    if (this.userData.type === 1) {
      this.getManifictru()
      this.PurchaseNames = []
    } else {
      this.getPurchaseNames()
    }
    this.getBatteryModel()
  },

  methods: {
    /* 点击生产企业列表中的某一项 */
    chooseProductionItem(item) {
      this.manufacturerNames.forEach(key => {
        key.choose = false
        if (item.id === key.id) {
          key.choose = true
        }
      })
      this.defaultManufact = item
      this.getPurchaseNamesDefault()
    },
    /* 点击客户企业列表中的某一项 */
    choosePurchaseItem(item) {
      this.PurchaseNames.forEach(key => {
        key.choose = false
        if (item.id === key.id) {
          key.choose = true
        }
      })
      this.defaultPurchase = item
    },
    chooseItem(item) {
      item.choose = !item.choose
    },
    /* 公司选项中 确定按钮  把选择的企业 emit出去 */
    companyConfirm() {
      const params = {}
      if (this.defaultManufact) {
        params.prod = this.defaultManufact
      }
      if (this.defaultManufact) {
        params.purchase = this.defaultPurchase
      }
      if (JSON.stringify(params) !== '{}') {
        this.$emit('companyChange', params)
      }
      this.CancelHandle()
    },
    /* 状态 点击确认按钮  把选择的status emit 出去 */
    statusConfirm() {
      const params = {}
      if (this.selectStatus) {
        params.status = this.selectStatus
      }
      if (JSON.stringify(params) !== '{}') {
        this.$emit('statusChange', params)
      }
      this.CancelHandle()
    },
    /* 电池型号 点击确认按钮  把选择的电池型号 emit 出去 */
    modelConfirm() {
      const params = {}
      if (this.selectModel) {
        params.model = {
          id: this.selectModel.id,
          item: 'model',
          name: this.selectModel.dicKey
        }
      }
      if (JSON.stringify(params) !== '{}') {
        this.$emit('modelChange', params)
      }
      this.CancelHandle()
    },
    /* 选择 型号中的某一项 */
    chooseModelItem(item) {
      this.modelArr.forEach(key => {
        key.choose = false
        if (item.id === key.id) {
          key.choose = true
        }
      })
      this.selectModel = item
    },
    showBatteryList() {
      this.wrap = true
      this.companyStatus = false
      this.company = false
      this.battery = true
    },
    /* 获取生产企业列表 */
    getManifictru() {
      this.manufacturerNames = []
      this.$api.manufacturerNames().then(res => {
        console.log('manufacturerNames', res)
        if (res.data && res.data.code === 0) {
          let result = res.data.data;
          result.forEach((key, index) => {
            key.choose = false
            key.item = 'manufacturer'
            if (index === 0) {
              key.choose = true
              this.defaultManufact = key
            }
            this.manufacturerNames.push(key)
          })
          this.getPurchaseNamesDefault()
          this.$refs.scroll.refresh()
        }
      })
    },
    /* 获取指定的生产企业下的 采购企业 列表 */
    getPurchaseNamesDefault() {
      this.PurchaseNames = []
      this.$api.purchaseNameByManufacturerId(this.defaultManufact.id).then(res => {
        console.log('purchaseNames2', res)
        if (res.data && res.data.code === 0) {
          let result = res.data.data;
          result.forEach((key) => {
            key.choose = false
            key.item = 'purchase'
            this.PurchaseNames.push(key)
          })
        }
      })
    },
    /* 采购企业id+name 列表 */
    getPurchaseNames() {
      this.PurchaseNames = []
      this.$api.purchaseNames2().then(res => {
        console.log('purchaseNames2', res)
        if (res.data && res.data.code === 0) {
          let result = res.data.data;
          result.forEach((key) => {
            key.choose = false
            key.item = 'purchase'
            this.PurchaseNames.push(key)
          })
          this.$refs.scroll.refresh()
        }
      })
    },
    getBatteryModel() {
      this.$api.batteryModelList().then(res => {
        console.log('batteryModelList', res);
        if (res.data && res.data.code === 0) {
          const result = res.data.data
          result.forEach(key => {
            key.choose = false
            this.modelArr.push(key)
          })
          this.$refs.scroll.refresh()
        }
      })
    },
    companyClick() {
      this.wrap = true
      this.company = true
      this.companyStatus = false
      this.battery = false
    },
    batteryStatusClick() {
      this.wrap = true
      this.companyStatus = true
      this.company = false
      this.battery = false
    },
    CancelHandle() {
      this.wrap = false
      this.companyStatus = false
      this.company = false
      this.battery = false
      this.defaultManufact = null
      this.defaultPurchase = null
      this.selectStatus = null
      this.selectModel = null
    },
    choosStatuItem(info, data) {
      data.forEach(key => {
        key.choose = false
      });
      info.choose = true
      this.selectStatus = info
    }
  }
}

</script>
<style lang='stylus' scoped>
.listTit
  line-height 30px
  padding-left 15px
.listWraper
  display flex
  justify-content space-between
  flex-wrap wrap
  padding 10px
  .listItem
    flex 0 0 26%
    text-align center
    line-height 26px
    border 1px solid $color-project-blue
    background #ffffff
    color $color-project-blue
    margin-bottom 10px
    overflow hidden
    white-space nowrap
    text-overflow ellipsis
    &.choosed
      background-color $color-project-blue
      color #ffffff
  .noData
    flex 1
    text-align center
    color $icon-color-gray
.productionList
  height 146px
.companyBtn
  height 32px
  display flex
  padding 5px 15px
  p
    flex 1
    text-align center
    height 30px
    line-height 30px
    border 1px solid $color-project-blue
    color $color-project-blue
    border-radius 5px
    margin 0 6px
    &.sure
      background $color-project-blue
      color #ffffff
.filterPart
  padding 5px 10px
  display flex
  justify-content space-between
  align-items center
  margin-top 5px
  SetBorder(1px, bottom)
  &>.iconfont
    margin-right 8px
    font-size 20px
    color $icon-color-gray
  .select
    flex 0 0 100px
    line-height 30px
    height 30px
    display flex
    justify-content space-between
    font-size 13px
    SetAllBorder(1px)
    border-radius 5px
    padding-left 6px
    box-sizing border-box
    &.selcetBy
      color $color-project-blue
      border-color $color-project-blue
    .iconfont
      font-size 28px
      color $icon-color-gray
.popupWraper
  position absolute
  top 85px
  left 0
  width 100%
  z-index 11
  background-color #ffffff
  box-shadow 0 2px 5px 0 hsla(0, 6%, 58%, 0.6)
  .company
    .production
      SetBorder(1px, bottom)
    &>div
      height 180px
  .allStatus
    padding 0 10px 10px
    .status
      ul
        display flex
        flex-wrap wrap
        li
          flex 0 0 70px
          line-height 28px
          text-align center
          border 1px solid $color-project-blue
          margin-right 15px
          font-size 13px
          margin-bottom 15px
          &.active
            background-color $color-project-blue
            color #ffffff
</style>
