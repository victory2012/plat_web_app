<template>
  <div ref="wrapper" class="overview-wrapper">
    <!-- 仪表盘 -->
    <gauge-component ref="gauge"></gauge-component>
    <div ref="subTabsContent" class="subTabsContent">
      <div v-for="item in subTabs" :key="item.icon">
        <div><i class="iconfont" :class="item.icon"></i></div>
        <div class="numb">{{item.numb}}</div>
        <div class="tabText">{{item.text}}</div>
      </div>
    </div>
    <alarm-list :height="height"></alarm-list>
  </div>
</template>

<script>
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
  mounted() {
    this.height = this.$refs.wrapper.offsetHeight - this.$refs.subTabsContent.offsetHeight - 200 - 60
    // console.log(this.$refs.gauge.offsetHeight)
    // console.log(this.$refs.subTabsContent.offsetHeight)
  },
  methods: {}

}

</script>
<style lang='stylus' scoped>
.overview-wrapper {
  width: 100%;
  height: 100%;

  .subTabsContent {
    display: flex;
    padding: 15px;
    margin: 5px 0 20px 0;
    SetBorder(1px, top);

    // SetBorder(1px, bottom)
    .numb {
      font-size: 16px;
      font-weight: bold;
      padding: 6px 0;
      color: $main-text-color;
    }

    .tabText {
      font-size: 14px;
      color: $subText-color;
    }

    &>div {
      text-align: center;
      flex: 1;

      .iconfont {
        font-size: 30px;
        color: $color-project-blue;
      }
    }
  }
}
</style>
