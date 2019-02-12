<template>
  <div class="bindWraper">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" v-model="searchDeviceCode" placeholder="请输入设备编号" />
        </div>
      </div>
      <div slot="right" class="CloseIcon">绑定</div>
    </top-header>
    <cube-scroll class="deviceList">
      <ul class="listWraper">
        <li v-for="item in deviceList" :key="item.id">{{item.code}}</li>
        <li v-show="deviceList.length === 0" class="noDate">暂无数据</li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  data() {
    return {
      searchDeviceCode: '',
      deviceList: []
    };
  },
  components: {
    topHeader
  },
  watch: {
    searchDeviceCode: {
      handler: function (code) {
        console.log(code)
        this.getDeviceListByCode(code);
      }
    }
  },
  mounted() {
    this.getDeviceListByCode()
  },
  methods: {
    back() {
      this.$router.push({
        name: 'MonitorBattery'
      })
    },
    getDeviceListByCode(deviceCode = '') {
      this.deviceList = []
      this.$api.DeviceListByCode(deviceCode).then(res => {
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.deviceList = result
        }
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.bindWraper
  width 100%
  height 100vh
  box-sizing border-box
  padding-top 45px
  .searchWarper
    width 80%
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
  .deviceList
    height 100%
    .listWraper
      padding 0 15px
      .noDate
        text-align center
        color $subText-color
        border none
      li
        text-indent 1em
        padding 15px 0
        SetBorder(1px, bottom)
</style>
