<template>
  <div ref="batteryRunning" class="batteryRunning">
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" placeholder="请输入搜索内容" />
          <ul v-show="searchArr.length > 0" class="searchTerm">
            <li v-for="(item, index) in searchArr" :key="item.id"><span class="label">{{item.name}}</span><span @click="CloseTag(index)" class="iconfont icon-close2"></span></li>
          </ul>
        </div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <more-select ref="moreSelect" @statusChange="getStatus" @modelChange="getModel" @companyChange="getCompany">
      <span slot="mapIcon" @click="swichMapOrList" class="iconfont icon-map">
      </span>
    </more-select>
    <div class="batteryWrapper">
      <component ref="battery" :is="showComponent"></component>
      <div class="pb" @click="goToRegisterBattery" v-show="showComponent === 'battery'">
        登记电池
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/monitor-mixin'
import moreSelect from '@/components/moreSelect'
export default {
  data() {
    return {
      showComponent: 'battery',
      height: 0,
      searchArr: [],
      searchObj: {},
      testCompany: []
    };
  },
  computed: {
    options() {
      return {
        scrollbar: false, // 是否显示滚动条
        click: false
      }
    }
  },
  mixins: [Mixins],
  components: {
    topHeader,
    moreSelect,
    'battery': () => import('./batteryList/battery'),
    'batteryMap': () => import('./batteryList/batteryMap')
  },
  created() {

  },
  mounted() {
  },

  methods: {
    getCompany(data) {
      if (data.prod) {
        this.searchObj.prod = data.prod
      }
      if (data.purchase) {
        this.searchObj.purchase = data.purchase
      }
      this.exchange()
    },
    getModel(data) {
      if (data.model) {
        this.searchObj.model = data.model
      }
      this.exchange()
    },
    getStatus(data) {
      if (data.status) {
        this.searchObj.status = data.status
      }
      this.exchange()
    },
    /* 重组 搜索数组 */
    exchange() {
      this.searchArr = []
      /* 利用 对象key的唯一性 来解决替换相同项目的问题，然后 在push到数组中 显示在头部 */
      for (let key in this.searchObj) {
        this.searchArr.push(this.searchObj[key])
      }
      if (this.showComponent === 'battery') {
        this.$refs.battery.doGetBatteryList(this.searchObj)
      }
    },
    CloseTag(index) {
      this.searchArr.splice(index, 1)
    },
    swichMapOrList() {
      if (this.showComponent === 'battery') {
        this.showComponent = 'batteryMap';
      } else {
        this.showComponent = 'battery';
      }
    },
    goToRegisterBattery() {
      this.$router.push({
        name: 'MonitorBatteryRegister'
      })
    }
  }

}
</script>
<style lang='stylus' scoped>
.backIcon
  font-size 20px
.batteryRunning
  width 100vw
  position relative
  height calc(100vh - 45px)
  .batteryWrapper
    width 100vw
    position relative
    height calc(100% - 85px)
    .pb
      position absolute
      top 75%
      right 20px
      width 61px
      height 61px
      line-height 61px
      color rgb(255, 255, 255)
      background-color rgb(113, 191, 219)
      font-size 14px
      text-align center
      border-radius 50%
      transition transform 0.1s ease-in-out
      box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
      z-index 99
  .searchWarper
    display flex
    box-sizing border-box
    height 34px
    margin 3px auto
    SetAllBorder(1px)
    line-height 34px
    .searchIcon
      flex 0 0 30px
    .inputPart
      position relative
      padding 0 10px
      input
        outline none
        width 100%
        height 30px
      .searchTerm
        position absolute
        top 2px
        left 0
        right 0
        bottom 2px
        font-size 0
        text-align left
        overflow hidden
        li
          vertical-align top
          font-size 0
          display inline-block
          height 28px
          line-height 28px
          padding 0 5px
          margin-right 3px
          background-color #666
          color #FFF
          border-radius 2px
          box-sizing border-box
          // label
          span
            vertical-align top
            display inline-block
            font-size 13px
            &.label
              max-width 60px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
    &>div
      flex 1
</style>
