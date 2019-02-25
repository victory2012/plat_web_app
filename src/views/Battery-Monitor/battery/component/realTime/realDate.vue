<template>
  <div>
    <div class="realTitles">
      <div class="item message">
        <div>
          <span class="iconfont icon-battery2"></span>
          <span>{{companyInfo.code}}</span>
        </div>
        <div>
          <span class="iconfont icon-devices"></span>
          <span>{{companyInfo.deviceCode}}</span>
        </div>
      </div>
      <div class="item">
        <div>
          <span class="iconfont icon-Message"></span>
          <span>{{companyInfo.name}}</span>
        </div>
        <div>
          <span class="iconfont icon-Location"></span>
          <span></span>
        </div>
      </div>
    </div>
    <cube-scroll class="scrollWarp">
      <div class="realMain">
        <div class="data">
          <div v-for="item in randerObj" :key="item.title">
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
      <echart-comp :chartData="dataObj"></echart-comp>
    </cube-scroll>
  </div>
</template>

<script>

import echartComp from './echarts-comp'
import utils from '@/utils/utils'
import t from '@/utils/translate'
export default {
  props: {
    batteryProp: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      companyInfo: {},
      dataObj: {},
      randerObj: {
        fluid: {
          title: '液位',
          main: '',
          src: require('@/assets/img/level.png')
        },
        temperature: {
          title: '温度',
          main: '',
          src: require('@/assets/img/temp.png')
        },
        singleVoltage: {
          title: '单体电压',
          main: '',
          src: require('@/assets/img/voltage.png')
        },
        current: {
          title: '电流',
          main: '',
          src: require('@/assets/img/current.png')
        },
        voltage: {
          title: '电压',
          main: '',
          src: require('@/assets/img/voltage_total.png')
        },
        capacity: {
          title: '电量',
          main: '',
          src: require('@/assets/img/capacity.png')
        }
      }
    };
  },
  components: { echartComp },
  mounted() {
    this.getCompanyInfo()
    this.getQuantity()
    this.getChartData()
  },

  methods: {
    getCompanyInfo() {
      this.$api.batteryGroupInfo(this.batteryProp.hostId).then(res => {
        console.log(res);
        if (res.data.data && res.data.code === 0) {
          let result = res.data.data;
          // let position = {
          //   gcjLongitude: result.gcjLongitude,
          //   gcjLatitude: result.gcjLatitude
          // };
          // let Times = utils.TimeSconds(result.time);
          this.companyInfo.code = result.code
          this.companyInfo.deviceCode = result.deviceCode
          this.companyInfo.name = result.companyName
          this.randerObj.fluid.main = result.fluidLevel === 0 ? t('realTime.normal') : t('realTime.abnormal'); // "正常" : "异常";
          this.randerObj.temperature.main = result.temperature
          this.randerObj.singleVoltage.main = result.singleVoltage
          this.randerObj.current.main = result.current
          this.randerObj.voltage.main = result.voltage
          // this.companyInfo.yyddmm = utils.yyyymmdd(Times);
          // this.companyInfo.hhmmss = utils.hhmmss(Times);
          // this.mapPosition = position;
          this.$store.commit('SetBatteryGroupInfo', result)
        }
      });
    },
    /* 获取电量 */
    getQuantity() {
      if (!this.batteryProp.deviceCode) return
      this.$api.batteryCapacity(this.batteryProp.deviceCode)
        .then(res => {
          console.log('getQuantity', res);
          if (res.data && res.data.code === 0) {
            this.randerObj.capacity.main = `${Math.round(res.data.data * 100)}%`;
          }
        });
    },
    getChartData() {
      let endTime = utils.dateFomat(utils.getFourHours());
      let startTime = utils.fomats(utils.toUTCTime(utils.dateFomat(new Date())));
      this.$api
        .realData(this.batteryProp.hostId, this.batteryProp.deviceId, startTime, endTime)
        .then(res => {
          console.log(res);
          if (res.data && res.data.code === 0) {
            let result = res.data.data;
            this.dataObj = {
              timeArr: [],
              singleVoltage: [],
              temperature: [],
              voltage: [],
              current: []
            };
            result.forEach(key => {
              let timeArr = utils.TimeSconds(key.time); // 时间
              this.dataObj.singleVoltage.push({
                name: timeArr,
                value: [timeArr, key.singleVoltage]
              });
              this.dataObj.temperature.push({
                name: timeArr,
                value: [timeArr, key.temperature]
              });
              this.dataObj.voltage.push({
                name: timeArr,
                value: [timeArr, key.voltage]
              });
              this.dataObj.current.push({
                name: timeArr,
                value: [timeArr, -key.current]
              });
            });
            this.hasgetData = true;
          }
        });
    }
  }

}

</script>
<style lang='stylus' scoped>
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
  height calc(100vh - 120px)
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
