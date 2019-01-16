<template>
  <div class="view-wrapper">
    <ul ref="alarmTit" class="alarmTit">
      <li class="time">时间</li>
      <li class="itme">项目</li>
      <li class="battery">电池编号</li>
      <li class="device">设备编号</li>
    </ul>
    <cube-scroll class="alarmList" :style="{height: height + 'px' }" ref="scroll">
      <div class="alarmItem" v-for="alarm in alarmData" :key="alarm.id">
        <div class="time">{{alarm.time}}</div>
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
  props: ['height'],
  data() {
    return {
      wraperHeight: 0,
      alarmData: [
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
        {
          id: Math.random(),
          time: '2018-12-12 12:12:12',
          item: '电压',
          batteryId: 'B0001',
          deviceId: 'abc123456'
        },
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
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    }
  },
  mounted() {
    this.wraperHeight = this.height - this.$refs.alarmTit.offsetHeight
  },

  methods: {
    pullingDown() {
      console.log('pullDownRefreshObj')
    },
    pullingUp() {
      console.log('pullUpLoadObj')
    }
  }

}

</script>
<style lang='stylus' scoped>
.view-wrapper {
  .alarmTit {
    display: flex;
    SetBorder(1px, bottom);
    padding: 10px;

    li {
      flex: 1;
      text-align: center;
      color: $subText-color;

      &.time {
        text-align: left;
        flex: 0 0 35%;
      }
    }
  }

  .alarmList {
    // height 200px
    .alarmItem {
      display: flex;
      padding: 15px 10px;
      SetBorder(1px, bottom);

      .time {
        text-align: left;
        flex: 0 0 35%;
        font-size: 13px;
      }

      & > div {
        flex: 1;
        text-align: center;
      }
    }
  }
}
</style>
