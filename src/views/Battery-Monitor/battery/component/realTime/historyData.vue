<template>
  <div>
    <div class="timeSelect">
      <div class="timeInfo">
        <span>从</span>
        <span @click="timeStartTimeSelect" class="timeInput">
          {{startTime}}
        </span>
        <span>至</span>
        <span @click="timeEndTimeSelect" class="timeInput">
          {{endTime}}
        </span>
      </div>
      <div class="timeBtn">查询</div>
    </div>
    <div class="realTitles">
      <div class="item message">
        <div>
          <span class="iconfont icon-battery2"></span>
          <span>{{batteryGroupInfo.code}}</span>
        </div>
        <div>
          <span class="iconfont icon-devices"></span>
          <span>{{batteryGroupInfo.deviceCode}}</span>
        </div>
      </div>
      <div class="item">
        <div>
          <span class="iconfont icon-Message"></span>
          <span>{{batteryGroupInfo.companyName}}</span>
        </div>
        <div>
          <span class="iconfont icon-Location"></span>
          <span></span>
        </div>
      </div>
    </div>
    <cube-scroll class="scrollWarp">
      <echart-comp :chartData="dataObj"></echart-comp>
    </cube-scroll>
  </div>
</template>

<script>
import { ToastOnlyText } from '@/utils/Toast'
import utils from '@/utils/utils'
import { mapState } from 'vuex'
import echartComp from './echarts-comp'
export default {
  props: {
    batteryProp: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      startTime: '年/月/日',
      endTime: '年/月/日',
      dataObj: {}
    };
  },
  computed: {
    ...mapState(['batteryGroupInfo'])
  },
  components: { echartComp },
  mounted() {
    console.log('历史数据中拿到的props', this.batteryProp)
  },

  methods: {
    /* 选择开始时间 */
    timeStartTimeSelect() {
      if (!this.StartTimePicker) {
        this.StartTimePicker = this.$createDatePicker({
          max: new Date(2100, 9, 20),
          value: new Date(),
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          onSelect: (data, selectedVal, selectedText) => {
            const result = selectedText.join('-')
            this.startTime = result
            this.searchObj.startTime = result
            if (this.searchObj.endTime) {
              if (new Date(this.searchObj.startTime) > new Date(this.searchObj.endTime)) {
                ToastOnlyText('开始时间应小于结束时间')
                this.startTime = '年/月/日'
                this.searchObj.startTime = null
                return
              }
              this.getBatteryAlarmList()
            }
          }
        })
      }
      this.StartTimePicker.show()
    },
    /* 选择结束时间 */
    timeEndTimeSelect() {
      if (!this.EndTimePicker) {
        this.EndTimePicker = this.$createDatePicker({
          max: new Date(2100, 9, 20),
          value: new Date(),
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          onSelect: (data, selectedVal, selectedText) => {
            const result = selectedText.join('-')
            this.endTime = result
            this.searchObj.endTime = result
            if (this.searchObj.startTime) {
              if (new Date(this.searchObj.startTime) > new Date(this.searchObj.endTime)) {
                ToastOnlyText('开始时间应小于结束时间')
                this.endTime = '年/月/日'
                this.searchObj.endTime = null
                return
              }
              this.getBatteryAlarmList()
            }
          }
        })
      }
      this.EndTimePicker.show()
    },
    /* 确认按钮 */
    getChartData() {
      let startTime = utils.toUTCTime(utils.startTime(this.showStartTime));
      let endTime = utils.toUTCTime(utils.endTime(this.showEndTime));
      this.getChartDatafun(startTime, endTime);
    },
    /* 获取Echart相关数据 以及 地图坐标 */
    getChartDatafun(startTime, endTime) {
      // Toast("开始请求数据");
      this.$api
        .historyData(this.batteryProp.hostId, this.batteryProp.deviceId, startTime, endTime)
        .then(res => {
          this.dataObj = {
            singleVoltage: [],
            timeArr: [],
            temperature: [],
            voltage: [],
            current: [],
            capacity: []
          };
          if (res.data && res.data.code === 0) {
            let result = res.data.data;
            this.resultList = result.list;
            this.resultList.forEach((key) => {
              let timeStr = utils.TimeSconds(key.time); // 时间
              let capacity = Math.round(key.capacity * 100);
              this.dataObj.singleVoltage.push({
                name: timeStr,
                value: [timeStr, key.singleVoltage]
              });
              this.dataObj.temperature.push({
                name: timeStr,
                value: [timeStr, key.temperature]
              });
              this.dataObj.voltage.push({
                name: timeStr,
                value: [timeStr, key.voltage]
              });
              this.dataObj.current.push({
                name: timeStr,
                value: [timeStr, -key.current]
              });
              this.dataObj.capacity.push({
                name: timeStr,
                value: [timeStr, capacity]
              });
            });
            // let sums = result.summary;
            // this.eventSummary = result.eventSummary || {};
            // this.summary = {
            //   chargeDuration: (sums.chargeDuration / 60).toFixed(2),
            //   dischargeDuration: (sums.dischargeDuration / 60).toFixed(2),
            //   cycle: sums.cycle,
            //   avgChargeDuration: (+sums.avgChargeDuration / 60).toFixed(2),
            //   avgDischargeDuration: (+sums.avgDischargeDuration / 60).toFixed(
            //     2
            //   ),
            //   fluidSupplementTimes: sums.fluidSupplementTimes,
            //   avgFluidSupplementDuration: (
            //     sums.avgFluidSupplementDuration / 60
            //   ).toFixed(2),
            //   idleDuration: (sums.idleDuration / 60).toFixed(2)
            // };
            // this.peiObj.eventSummary = result.eventSummary || {};
            // this.peiObj.summary = this.summary || {};
          }
        });
    }
  }

}

</script>
<style lang='stylus' scoped>
.timeSelect
  height 40px
  display flex
  padding 0 20px 0 10px
  align-items center
  background-color $color-project-blue
  .timeBtn
    flex 0 0 60px
    margin-left 10px
    height 28px
    text-align center
    line-height 28px
    background #ffffff
    box-sizing border-box
    .iconfont
      vertical-align middle
      font-size 23px
  .timeInfo
    flex 1
    font-size 0
    span
      vertical-align middle
      text-align center
      height 40px
      line-height 40px
      font-size 14px
      display inline-block
      width 10%
      color #ffffff
      &.timeInput
        width 40%
        height 28px
        line-height 28px
        font-size 14px
        color #717171
        text-align left
        padding-left 8px
        box-sizing border-box
        background-color #ffffff
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
.realTitles
  width 9.5rem
  border-radius 0.3rem
  margin 0.2rem auto
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
.scrollWarp
  height calc(100vh - 170px)
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
