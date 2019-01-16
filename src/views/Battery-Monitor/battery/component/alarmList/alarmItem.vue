<template>
  <cube-scroll class="alarmList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="wrapper" v-for="item in list" :key="item.id">
      <div class="itemMain">
        <div class="leftMsg">
          <div class="time">
            <span>告警时间：</span>
            <span>{{item.time}}</span>
          </div>
          <div class="code">
            <span>设备编号：{{item.deviceCode}}</span><span>电池编号：{{item.batteryCode}}</span>
          </div>
        </div>
        <div @click="doShowMore(item)" class="rightIcon" :class="{'down': item.showMore}">
          <span class="iconfont icon-right"></span>
        </div>
      </div>
      <div class="Bottom" v-show="item.showMore">
        <div class="LeftInfo">
          <div class="model">
            <span>电池型号：{{item.model}}</span>
            <span>告警层级：{{item.hierarchy}}</span>
            <span>告警级别：{{item.level}}</span>
          </div>
          <div class="volatage">
            <span>电压：{{item.valatage}}</span>
            <span>客户企业：{{item.company}}</span>
          </div>
          <div class="alarmContent">
            <span>告警内容：{{item.content}}</span>
          </div>
        </div>
        <div class="rightBtn">
          <div @click="showLocation" class="location">
            <span class="iconfont icon-location"></span>
          </div>
          <div class="detail">
            <p>详情</p>
          </div>
        </div>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
export default {
  name: '',
  props: [''],
  data () {
    return {
      pullDownRefreshObj: {
        threshold: 500,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50
      },
      list: [
        {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }, {
          time: '2018-12-12 12:12:12',
          deviceCode: 'abc123456',
          batteryCode: 'aa12457',
          model: 'model1',
          hierarchy: '5',
          level: '高',
          valatage: '12V',
          company: '上海摩融信息科技',
          content: '电解液位低，应该补水',
          id: Math.random(),
          showMore: false
        }
      ]
    };
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true,
        click: true
      }
    }
  },
  mounted () { },

  methods: {
    showLocation () {
      console.log('showMap');
      this.$router.push({
        name: 'MonitorBatteryAlarmMap'
      })
    },
    pullingUp () {
      console.log('pullingUp')
    },
    doShowMore (item) {
      item.showMore = !item.showMore
    }
  }

}

</script>
<style lang='stylus' scoped>
.alarmList
  height 100%
  .wrapper
    padding 10px 10px 0
    border-bottom 5px solid #eaeaea
    .itemMain
      display flex
      .leftMsg
        flex 1
        line-height 30px
        .time
          font-size 14px
          span
            font-weight 700
        .code
          font-size 13px
          span
            margin-right 10px
      .rightIcon
        flex 0 0 60px
        text-align center
        line-height 60px
        transition all 0.25s ease
        .iconfont
          font-size 24px
        &.down
          transition all 0.25s ease
          transform rotate(90deg)
    .Bottom
      line-height 32px
      font-size 12px
      display flex
      .LeftInfo
        flex 1
        .alarmContent
          span
            color $handle-text-btn-color
        span
          margin-right 10px
      .rightBtn
        flex 0 0 60px
        text-align center
        .location
          margin-bottom 20px
          .iconfont
            font-size 28px
            color $color-project-blue
        .detail
          p
            background-color $color-project-blue
            color #ffffff
            height 26px
            line-height 26px
            border-radius 5px
</style>
