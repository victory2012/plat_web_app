<template>
  <div class="wraper">
    <top-header fixed>
      <div slot="left" @click="goBack" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div :class="{'active': realDefault}">实时数据</div>
        <div :class="{'active': !realDefault}">历史数据</div>
      </div>
    </top-header>
    <div class="realTitles">
      <div class="item message">
        <div>
          <span class="iconfont icon-battery2"></span>
          <span>batteryCode</span>
        </div>
        <div>
          <span class="iconfont icon-devices"></span>
          <span>deviceCode</span>
        </div>
      </div>
      <div class="item">
        <div>
          <span class="iconfont icon-Message"></span>
          <span>摩融科技</span>
        </div>
        <div>
          <span class="iconfont icon-Location"></span>
          <span>address</span>
        </div>
      </div>
    </div>
    <div class="realMain">
      <div class="data">
        <div v-for="(item) in list" :key="item.title">
          <div>
            <img :src="item.src">
            <h2>{{item.main}}</h2>
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div class="realBtn">
        <p class="activeTit">数据更新时间和主动查询</p>
        <p class="activeBtn">主动查询</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header.vue';
export default {
  components: { topHeader },
  data() {
    return {
      realDefault: true,
      list: [{
        title: '液位',
        main: '异常',
        src: require('@/assets/img/temp.png')
      }, {
        title: '温度',
        main: '24.2C',
        src: require('@/assets/img/level.png')
      }, {
        title: '电压',
        main: '32.33V',
        src: require('@/assets/img/voltage.png')
      }, {
        title: '单体电压',
        main: '0.021V',
        src: require('@/assets/img/voltage_total.png')
      }, {
        title: '电流',
        main: '0A',
        src: require('@/assets/img/current.png')
      }, {
        title: '电量',
        main: '0%',
        src: require('@/assets/img/capacity.png')
      }]
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'MonitorBattery' });
    }
  }
}
</script>

<style lang='stylus' scoped>
.searchWarper
  flex 1
  overflow hidden
  height 32px
  margin 3px auto
  width 75%
  border 1px solid $color-project-blue
  border-radius 3px
  display flex
  &>div
    flex 1
    text-align center
    line-height 32px
    color $color-project-blue
    &.active
      color #ffffff
      background-color $color-project-blue
.wraper
  padding-top contentFixedTop(5)
  .realTitles
    width 9.5rem
    border-radius 0.3rem
    margin 0 auto
    margin-top 0.2rem
    box-shadow $header-shadow
    .item
      display flex
      line-height 30px
      height 30px
      padding 5px 0
      div
        flex 1
        padding 0 10px
        .iconfont
          margin-right 5px
  .realMain
    .data
      margin-top 30px
      display flex
      flex-wrap wrap
      div
        display flex
        flex 1
        width 3rem
        margin-bottom 0.2rem
        div
          display flex
          flex-direction column
          text-align center
          h2
            text-align center
            font-size 0.35rem
            padding 0.3rem 0 0.1rem
          img
            width 0.8rem
            height 0.8rem
            margin 0 auto
    .realBtn
      display flex
      padding 5px 15px
      .activeTit
        flex 1
        line-height 30px
      .activeBtn
        flex 0 0 120px
        text-align center
        height 30px
        line-height 30px
        background $color-project-blue
        color #ffffff
</style>
