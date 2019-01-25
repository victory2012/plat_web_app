<template>
  <div ref="wrapper" class="overview-wrapper">
    <!-- 仪表盘 -->
    <gauge-component ref="gauge"></gauge-component>
    <div ref="subTabsContent" class="subTabsContent">
      <div>
        <div><i class="iconfont icon-devices"></i></div>
        <div class="numb">{{cardData.total}}</div>
        <div class="tabText">电池总数</div>
      </div>
      <div>
        <div><i class="iconfont icon-Reports"></i></div>
        <div class="numb">{{cardData.currentMonthTotal}}</div>
        <div class="tabText">本月新增</div>
      </div>
      <div>
        <div><i class="iconfont icon-alert1"></i></div>
        <div class="numb">{{cardData.alarmedTotal}}</div>
        <div class="tabText">告警总数</div>
      </div>
    </div>
    <alarm-list :height="height"></alarm-list>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import gaugeComponent from './dashboard'
import alarmList from './alarmList'

export default {
  data() {
    return {
      height: 0,
      subTabs: [
        {
          icon: 'icon-devices',
          numb: '100',
          text: '电池总数'
        },
        {
          icon: 'icon-Reports',
          numb: '20',
          text: '本月新增'
        },
        {
          icon: 'icon-alert1',
          numb: '10',
          text: '告警总数'
        }
      ]
    };
  },
  components: {
    gaugeComponent,
    alarmList
  },
  computed: {
    ...mapGetters({
      cardData: 'getCardData'
    })
  },
  mounted() {
    this.height = this.$refs.wrapper.offsetHeight - this.$refs.subTabsContent.offsetHeight - 200 - 40 - 30
    this.getCardData()
  },
  methods: {
    ...mapActions({
      getCardData: 'carData'
    })
  }

}

</script>
<style lang='stylus' scoped>
.overview-wrapper
  width 100%
  height 100%
  .subTabsContent
    display flex
    padding 15px
    margin-top 5px
    SetBorder(1px, top)
    // SetBorder(1px, bottom)
    .numb
      font-size 16px
      font-weight bold
      padding 6px 0
      color $main-text-color
    .tabText
      font-size 14px
      color $subText-color
    &>div
      text-align center
      flex 1
      .iconfont
        font-size 30px
        color $color-project-blue
</style>
