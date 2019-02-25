<template>
  <div class="wraper">
    <top-header fixed>
      <div slot="left" @click="goBack" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div @click="showRealTimeData" :class="{'active': realDefault}">实时数据</div>
        <div @click="showHistoryData" :class="{'active': !realDefault}">历史数据</div>
      </div>
    </top-header>
    <component :batteryProp='$route.query' :is="showComponentId"></component>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  components: {
    topHeader,
    realTimeData: () => import('./realTime/realDate.vue'),
    historyData: () => import('./realTime/historyData.vue')
  },
  data() {
    return {
      realDefault: true,
      showComponentId: 'realTimeData'
    }
  },
  // computed: {
  //   batteryCode: () => (this.$route.query)
  // },
  methods: {
    goBack() {
      this.$router.push({ name: 'MonitorBattery' });
    },
    showRealTimeData() {
      this.realDefault = true
      this.showComponentId = 'realTimeData'
    },
    showHistoryData() {
      this.realDefault = false
      this.showComponentId = 'historyData'
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
</style>
