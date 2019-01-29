<template>
  <div class="view-wrapper">
    <ul ref="alarmTit" class="alarmTit">
      <li class="time">时间</li>
      <li class="itme">项目</li>
      <li class="battery">电池编号</li>
      <li class="device">设备编号</li>
    </ul>
    <cube-scroll class="alarmList" :data='tableData' :style="{height: height + 'px' }" ref="scroll">
      <div class="alarmItem" v-for="alarm in tableData" :key="alarm.id">
        <div class="time">{{alarm.time}}</div>
        <div>{{alarm.items}}</div>
        <div>{{alarm.hostCode}}</div>
        <div>{{alarm.deviceId}}</div>
      </div>
      <p v-show="tableData.length>0" class="lookMore">查看更多<span class="iconfont icon-right"></span></p>
      <p v-show="tableData.length === 0" class="noData">暂无数据</p>
    </cube-scroll>
  </div>
</template>

<script>
import utils from '@/utils/utils'
export default {
  name: '',
  props: ['height'],
  data() {
    return {
      wraperHeight: 0,
      tableData: []
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
    this.wraperHeight = this.height - this.$refs.alarmTit.offsetHeight;
    this.getAlarmList()
  },

  methods: {
    pullingDown() {
      console.log('pullDownRefreshObj')
    },
    pullingUp() {
      console.log('pullUpLoadObj')
    },
    getAlarmList() {
      const pageObj = {
        pageSize: 10,
        pageNum: 1
      };
      this.$api.alarmData(pageObj).then((res) => {
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.tableData = [];
          if (result.pageData.length > 0) {
            this.isNoAlarmData = false;
            result.pageData.forEach((key) => {
              key.items = utils.item(key.item);
              this.tableData.push(key);
            });
          } else {
            this.isNoAlarmData = true;
          }
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.view-wrapper
  .alarmTit
    display flex
    SetBorder(1px, bottom)
    padding 10px
    li
      flex 1
      text-align center
      color $subText-color
      &.time
        text-align left
        flex 0 0 35%
  .alarmList
    height 200px
    .alarmItem
      display flex
      padding 15px 10px
      SetBorder(1px, bottom)
      .time
        text-align left
        flex 0 0 35%
        font-size 13px
      & > div
        flex 1
        text-align center
  .lookMore
    height 30px
    line-height 30px
    text-align right
    padding-right 20px
    background $color-project-blue
    color #ffffff
  .noData
    height 30px
    line-height 30px
    text-align center
    color $icon-color-gray
</style>
