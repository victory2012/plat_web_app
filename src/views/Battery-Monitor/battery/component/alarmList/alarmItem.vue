<template>
  <cube-scroll :data="randerList" class="alarmList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="wrapper" v-for="item in randerList" :key="item.id">
      <div class="itemMain">
        <div class="leftMsg">
          <div class="time">
            <span>告警时间：</span>
            <span>{{item.createTime}}</span>
          </div>
          <div class="code">
            <span>设备编号：{{item.deviceCode}}</span><span>电池编号：{{item.hostCode}}</span>
          </div>
        </div>
        <!-- <div @click="doShowMore(item)" class="rightIcon" :class="{'down': item.showMore}">
          <span class="iconfont icon-right"></span>
        </div> -->
      </div>
      <!--  v-show="item.showMore" -->
      <div class="Bottom">
        <div class="LeftInfo">
          <div class="model">
            <span>电池型号：{{item.model}}</span>
            <span>告警层级：{{item.hierarchy}}</span>
            <span>告警级别：{{item.levels}}</span>
          </div>
          <div class="volatage">
            <span>电压：{{item.valatage}}</span>
            <span>客户企业：{{item.companyName}}</span>
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
            <p @click="showAlarmDetail(item)">详情</p>
          </div>
        </div>
      </div>
    </div>
    <p class="noData" v-show="randerList.length == 0">暂无数据</p>
  </cube-scroll>
</template>

<script>
import utils from '@/utils/utils';
import t from '@/utils/translate';
export default {
  name: '',
  props: [''],
  data() {
    return {
      pageNum: 1,
      pullUpLoadObj: {
        threshold: 50
      },
      randerList: []
    };
  },
  computed: {
    options() {
      return {
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true,
        click: true
      }
    }
  },
  mounted() {
    this.getAlarmList()
  },

  methods: {
    /* 展示地图位置 */
    showLocation() {
      this.$router.push({
        name: 'MonitorBatteryAlarmMap'
      })
    },
    /* 查看详情 */
    showAlarmDetail(item) {
      this.$store.commit('SETalarmItemDetail', item)
      this.$router.push({
        name: 'MonitorAlarmDetail',
        query: {
          id: item.dataId
        }
      })
    },
    /* 上拉加载更多 */
    pullingUp() {
      this.pageNum++
      if (this.pageNum > this.totalPage) {
        this.pageNum = this.totalPage
        this.$refs.scroll.forceUpdate();
      } else {
        this.pullingUpGetMore(this.cacheParams)
      }
    },
    doShowMore(item) {
      item.showMore = !item.showMore
    },
    pullingUpGetMore(data) {
      this.getAlarmList(data)
    },
    getAlarmListByOpts(data = {}) {
      this.randerList = []
      this.getAlarmList(data)
    },
    getAlarmList(data = {}) {
      const pageObj = {
        pageSize: 15,
        pageNum: this.pageNum
      };
      if (data.startTime) {
        pageObj.startCreateTime = utils.creatTimeStart(data.startTime)
      }
      if (data.endTime) {
        pageObj.endCreateTime = utils.creatTimeEnd(data.endTime)
      }
      if (data.item) {
        pageObj.item = data.item;
      }
      if (data.searchCode) {
        pageObj.code = data.searchCode;
      }
      if (data.level) {
        pageObj.level = data.level;
      }
      if (data.hierarchy) {
        pageObj.hierarchy = data.hierarchy;
      }
      this.cacheParams = data // 缓存搜索条件
      this.$api.alarmData(pageObj).then((res) => {
        console.log(res)
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.totalPage = result.totalPage
          if (result.pageData.length === 0) {
            return
          }
          result.pageData.forEach((key) => {
            key.showMore = false
            key.levels = utils.level(key.level);
            key.hierarchy = key.hierarchy === 'Group' ? t('group.allGroup') : t('group.single');
            key.items = utils.item(key.item);
            if (key.item === 'Fluid') {
              key.thresholdValue = '-';
              key.actualValue = t('realTime.abnormal');
            }
            this.randerList.push(key);
          });
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.noData
  height 30px
  line-height 30px
  text-align center
  color $icon-color-gray
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
