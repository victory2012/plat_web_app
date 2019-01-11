<template>
  <div class="view-wrapper">
    <ul class="alarmTit">
      <li>时间</li>
      <li>项目</li>
      <li>电池编号</li>
      <li>设备编号</li>
    </ul>
    <cube-scroll class="alarmList" ref="scroll" :options="options" @pulling-up="pullingUp">
      <div class="alarmItem" v-for="alarm in alarmData" :key="alarm.id">
        <div>{{alarm.time}}</div>
        <div>{{alarm.item}}</div>
        <div>{{alarm.batteryId}}</div>
        <div>{{alarm.deviceId}}</div>
      </div>
    </cube-scroll>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {
      threshold: 20,
      pullUpLoad: true,
      pullDownRefreshObj: {
        threshold: 500,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50
      },
      alarmData: [
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        }
      ]
    };
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    }
  },
  mounted () { },

  methods: {
    pullingDown () {
      console.log('pullDownRefreshObj')
    },
    pullingUp () {
      console.log('pullUpLoadObj')
    }
  }

}

</script>
<style lang='stylus' scoped>
.view-wrapper
  .alarmTit
    display flex
    li
      flex 1
</style>
