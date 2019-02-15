<template>
  <div>
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab"> 告警详情 </div>
    </top-header>
    <div class="alarmItem">
      <cube-scroll class="alarmList" ref="scroll">
        <ul class="detailWraper">
          <li>
            <div class="tit">客户企业</div>
            <div class="inputContent">{{alarmItemDetail.companyName}}</div>
          </li>
          <li>
            <div class="tit">电池编号</div>
            <div class="inputContent">{{alarmItemDetail.hostCode}}</div>
          </li>
          <li>
            <div class="tit">告警值</div>
            <div class="inputContent">{{alarmItemDetail.actualValue}}</div>
          </li>
          <li>
            <div class="tit">告警项目</div>
            <div class="inputContent">{{alarmItemDetail.items}}</div>
          </li>
          <li>
            <div class="tit">告警层级</div>
            <div class="inputContent">{{alarmItemDetail.hierarchy}}</div>
          </li>
          <li>
            <div class="tit">告警级别</div>
            <div class="inputContent">{{alarmItemDetail.levels}}</div>
          </li>
          <li>
            <div class="tit">液位</div>
            <div class="inputContent">{{rowObj.fluidLevel}}</div>
          </li>
          <li>
            <div class="tit">温度(℃)</div>
            <div class="inputContent">{{rowObj.temperature}}</div>
          </li>
          <li>
            <div class="tit">电压(V)</div>
            <div class="inputContent">{{rowObj.voltage}}</div>
          </li>
          <li>
            <div class="tit">电流(A)</div>
            <div class="inputContent">{{rowObj.current}}</div>
          </li>
          <li>
            <div class="tit">告警内容</div>
            <div class="inputContent">{{alarmItemDetail.content}}</div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import t from '@/utils/translate';
import { mapState } from 'vuex'
export default {
  data() {
    return {
      rowObj: {}
    };
  },
  components: {
    topHeader
  },
  computed: {
    ...mapState(['alarmItemDetail'])
  },
  mounted() {
    const alarmItemId = this.$route.query.id;

    this.getAlarmDetailById(alarmItemId)
  },

  methods: {
    /* 返回 */
    goBack() {
      this.$router.push({
        name: 'MonitorBatteryAlarm'
      })
      this.$store.commit('SETalarmItemDetail', {})
    },
    getAlarmDetailById(dataId) {
      this.$api.allAlarmData(dataId).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          if (result) {
            const { temperature, voltage, current, fluidLevel } = result;
            let fluid = fluidLevel === 0 ? t('realTime.normal') : t('realTime.abnormal');
            this.$set(this.rowObj, 'fluidLevel', fluid)
            this.$set(this.rowObj, 'temperature', temperature)
            this.$set(this.rowObj, 'voltage', voltage)
            this.$set(this.rowObj, 'current', current)
            // this.rowObj.address = callRes.formattedAddress || '--';
          }
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.alarmItem
  height calc(100vh - 40px)
  .alarmList
    height 100%
    .detailWraper
      padding 10px 15px
      li
        display flex
        padding 5px 0
        line-height 40px
        .tit
          flex 0 0 100px
        .inputContent
          text-align right
          flex 1
          color $subText-color
</style>
