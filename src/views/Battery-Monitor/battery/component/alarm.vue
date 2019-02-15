<template>
  <div class="batteryAlarm">
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon" @click="getAlarmListByCode"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" v-model="searchObj.searchCode" placeholder="请输入搜索内容" />
          <ul v-show="searchArr.length > 0" class="searchTerm">
            <li v-for="item in searchArr" :key="item.id"><span class="label">{{item.name}}</span><span class="iconfont icon-close2"></span></li>
          </ul>
        </div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
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
      <div @click="showMoreSelect" class="timeBtn">筛选
        <span class="iconfont icon-downarrow1"></span>
      </div>
    </div>
    <div v-show="moreSelect" class="moreSelectWraper">
      <div @click="alarmItemClick" :class="{'selcetBy': alarmActive == 'alarmItem'}" class="select">
        <span>告警项目</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="alarmLevelClick" :class="{'selcetBy': alarmActive == 'alarmLevel'}" class="select">
        <span>告警级别</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="HierarchyClick" :class="{'selcetBy': alarmActive == 'Hierarchy'}" class="select">
        <span>告警层级</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
    </div>
    <div class="alarmWraper">
      <alarm-itme ref="alarmItem"></alarm-itme>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/monitor-mixin'
import { ToastOnlyText } from '@/utils/Toast'
import alarmItme from './alarmList/alarmItem'
import t from '@/utils/translate';
export default {
  data() {
    return {
      searchArr: [],
      startTime: '年/月/日',
      endTime: '年/月/日',
      moreSelect: false,
      alarmActive: '',
      searchObj: {},
      hierarchyArr: [
        {
          value: '',
          text: t('timeBtn.all')
        },
        {
          value: 'Group',
          text: t('group.allGroup')
        },
        {
          value: 'Single',
          text: t('group.single')
        }
      ],
      levelArr: [
        {
          value: '',
          text: t('timeBtn.all')
        },
        {
          value: 1,
          text: t('group.high')
        },
        {
          value: 2,
          text: t('group.mid')
        },
        {
          value: 3,
          text: t('group.low')
        }
      ],
      alarmArr: [
        {
          value: '',
          text: t('timeBtn.all')
        },
        {
          value: 'Voltage',
          text: t('realTime.voltage')
        },
        {
          value: 'Current',
          text: t('realTime.current')
        },
        {
          value: 'Temperature',
          text: t('realTime.temperature')
        },
        {
          value: 'Fluid',
          text: t('realTime.fluid')
        }
      ]
    };
  },
  mixins: [Mixins],
  components: {
    topHeader,
    alarmItme
  },
  mounted() {
  },

  methods: {
    /* 告警项目 */
    alarmItemClick() {
      this.alarmActive = 'alarmItem';
      if (!this.alarmItemPicker) {
        this.alarmItemPicker = this.$createPicker({
          title: '告警项目',
          data: [this.alarmArr],
          onSelect: this.selectHandle,
          onCancel: () => { this.alarmActive = '' }
        })
      }
      this.alarmItemPicker.show()
    },
    /* 告警级别 */
    alarmLevelClick() {
      this.alarmActive = 'alarmLevel'
      if (!this.alarmLevelPicker) {
        this.alarmLevelPicker = this.$createPicker({
          title: '告警级别',
          data: [this.levelArr],
          onSelect: this.selectHandle,
          onCancel: () => { this.alarmActive = '' }
        })
      }
      this.alarmLevelPicker.show()
    },
    /* 告警层级 */
    HierarchyClick() {
      this.alarmActive = 'Hierarchy'
      if (!this.HierarchyPicker) {
        this.HierarchyPicker = this.$createPicker({
          title: '告警层级',
          data: [this.hierarchyArr],
          onSelect: this.selectHandle,
          onCancel: () => { this.alarmActive = '' }
        })
      }
      this.HierarchyPicker.show()
    },
    getAlarmListByCode() {
      this.getBatteryAlarmList()
    },
    getBatteryAlarmList() {
      this.$refs.alarmItem.getAlarmListByOpts(this.searchObj)
    },
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
    /* 显示更多筛选条件 */
    showMoreSelect() {
      this.moreSelect = !this.moreSelect
    },
    /* 确认筛选条件 处理方法 */
    selectHandle(selectedVal) {
      const value = selectedVal[0];
      if (this.alarmActive === 'alarmItem') {
        this.searchObj.item = value
      }
      if (this.alarmActive === 'alarmLevel') {
        this.searchObj.level = value
      }
      if (this.alarmActive === 'Hierarchy') {
        this.searchObj.hierarchy = value
      }
      this.getBatteryAlarmList()
    }
  }

}

</script>
<style lang='stylus' scoped>
.backIcon
  font-size 20px
section
  height 40px
  display flex
  p
    flex 1
    text-align center
    line-height 40px
    border 1px solid $color-project-blue
    color $color-project-blue
    &.sure
      background $color-project-blue
      color #ffffff
.batteryAlarm
  width 100vw
  height calc(100vh - 45px)
  position relative
  .alarmWraper
    height calc(100% - 80px)
  .searchWarper
    display flex
    box-sizing border-box
    height 34px
    margin 3px auto
    SetAllBorder(1px)
    line-height 34px
    .searchIcon
      flex 0 0 30px
    .inputPart
      position relative
      padding 0 10px
      input
        outline none
        width 100%
        height 30px
      .searchTerm
        position absolute
        top 2px
        left 0
        right 0
        bottom 2px
        font-size 0
        text-align left
        overflow hidden
        li
          vertical-align top
          font-size 0
          display inline-block
          height 28px
          line-height 28px
          padding 0 5px
          margin-right 3px
          background-color #666
          color #FFF
          border-radius 2px
          box-sizing border-box
          // label
          span
            vertical-align top
            display inline-block
            font-size 13px
            &.label
              max-width 60px
              white-space nowrap
              overflow hidden
              text-overflow ellipsis
    &>div
      flex 1
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
      line-height 28px
      padding-left 5px
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
  .moreSelectWraper
    padding 5px 10px
    display flex
    justify-content space-between
    align-items center
    margin-top 5px
    SetBorder(1px, bottom)
    &>.iconfont
      margin-right 8px
      font-size 20px
      color $icon-color-gray
    .select
      flex 0 0 100px
      line-height 30px
      height 30px
      display flex
      justify-content space-between
      font-size 13px
      SetAllBorder(1px)
      border-radius 5px
      padding-left 6px
      box-sizing border-box
      &.selcetBy
        color $color-project-blue
        border-color $color-project-blue
        .iconfont
          color $color-project-blue
      .iconfont
        font-size 28px
        color $icon-color-gray
</style>
