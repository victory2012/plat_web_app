<template>
  <div>
    <top-header>
      <div class="searchWarper" slot="mainTab">
        <div @click="searchByCode" class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" v-model="searchDeviceCode" placeholder="请输入搜索内容" />
          <ul v-show="searchNull" class="searchTerm">
            <li v-for="(value, key) in searchObj" :key="value.id"><span class="label">{{value.name}}</span><span @click="CloseTag(key)" class="iconfont icon-close2"></span></li>
          </ul>
        </div>
      </div>
    </top-header>
    <more-select ref="moreSelect" @statusChange="getStatus" @modelChange="getModel" @companyChange="getCompany">
      <!-- <span slot="mapIcon" @click="swichMapOrList" class="iconfont icon-map">
      </span> -->
    </more-select>
    <device-item class="deviceListWraper"></device-item>
    <div class="register" @click="register">注册设备</div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header.vue';
import deviceItem from './component/deviceItem';
import moreSelect from '@/components/moreSelect'
export default {
  data() {
    return {
      searchObj: {},
      searchDeviceCode: ''
    };
  },
  computed: {
    searchNull: function () {
      const keys = Object.keys(this.searchObj)
      return keys.length > 0
    }
  },
  components: { topHeader, deviceItem, moreSelect },

  mounted() { },

  methods: {
    searchByCode() { },
    register() {
      this.$router.push({ name: 'register' })
    },
    swichMapOrList() {
      if (this.showComponent === 'battery') {
        this.showComponent = 'batteryMap';
      } else {
        this.showComponent = 'battery';
      }
    },
    getCompany(data) {
      if (data.prod) {
        this.$set(this.searchObj, 'prod', data.prod)
      }
      if (data.purchase) {
        this.$set(this.searchObj, 'purchase', data.purchase)
      }
      this.getBatteryList(this.searchObj)
    },
    getModel(data) {
      if (data.model) {
        this.$set(this.searchObj, 'model', data.model)
      }
      this.getBatteryList(this.searchObj)
    },
    getStatus(data) {
      if (data.status) {
        this.$set(this.searchObj, 'status', data.status)
      }
      this.getBatteryList(this.searchObj)
    },
    CloseTag(key) {
      this.$delete(this.searchObj, key)
      this.getBatteryList(this.searchObj)
    },
    getBatteryList(data) {
      if (this.showComponent === 'battery') {
        // this.$refs.battery.parentCall(data)
      }
    }
  }
}
</script>
<style lang='stylus' scoped>
.deviceListWraper
  height calc(100vh - 140px)
  box-sizing border-box
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
      background #fff
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
          font-size 12px
          &.label
            max-width 60px
            white-space nowrap
            overflow hidden
            text-overflow ellipsis
  &>div
    flex 1
.register
  position fixed
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
</style>
