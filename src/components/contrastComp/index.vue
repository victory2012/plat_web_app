<template>
  <div class="battery">
    <div class="item productCompany" v-if="userData.type === 1">
      <h2 class="listTit">生产企业</h2>
      <cube-scroll class="productionList" :data='manufacturerNames' ref="scroll" :options="options">
        <ul class="listWraper">
          <li class="listItem" v-for="item in manufacturerNames" :key="item.id" @click="chooseProductionItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
          <li class="noData" v-if="manufacturerNames.length === 0">暂无数据</li>
        </ul>
      </cube-scroll>
    </div>
    <div class="item custormCompany">
      <h2 class="listTit">采购企业</h2>
      <cube-scroll class="productionList" :data='PurchaseNames' ref="scroll" :options="options">
        <ul class="listWraper">
          <li class="listItem" v-for="item in PurchaseNames" :key="item.id" @click="choosePurchaseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
          <li class="noData" v-if="PurchaseNames.length === 0">暂无数据</li>
        </ul>
      </cube-scroll>
    </div>
    <div class="item batteryList">
      <h2 class="listTit">电池</h2>
      <cube-scroll class="productionList" :data='batteryList' ref="scroll" :options="options">
        <ul class="listWraper">
          <li class="listItem" v-for="item in batteryList" :key="item.id" @click="choosePurchaseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
          <li class="noData" v-if="batteryList.length === 0">暂无数据</li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: [''],
  data() {
    return {
      PurchaseNames: [], // 客户企业列表
      manufacturerNames: [], // 生产企业列表
      batteryList: []
    };
  },

  components: {},
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
  mounted() {
    if (this.userData.type === 1) {
      this.getManifictru()
      this.PurchaseNames = []
    } else {
      this.getPurchaseNames()
    }
  },

  methods: {
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
        }
      })
    },
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
    }
  }

}

</script>
<style lang='stylus' scoped>
.battery
  padding 0 10px
  width 100%
  box-sizing border-box
  background #ffffff
  .item
    SetAllBorder(1px)
    border-top none
    .listTit
      line-height 30px
      padding-left 15px
      // SetBorder(1px, bottom)
    .productionList
      height 100px
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
</style>
