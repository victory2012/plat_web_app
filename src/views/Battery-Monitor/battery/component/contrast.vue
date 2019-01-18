<template>
  <div class="contrastCenter">
    <top-header class="headerContent" fixed>
      <div @click="goBack" slot="left" class="backIcon">
        <i class="iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div @click="sameBatteryContrast" :class="{'active': sameBattery}">同一电池</div>
        <div @click="differenceBatteryContrast" :class="{'active': !sameBattery}">不同电池</div>
      </div>
    </top-header>
    <!-- 搜索部分 -->
    <div class="searchPart">
      <div class="input">
        <i class="iconfont icons icon-Search"></i>
        <input type="text" placeholder="请输入搜索内容" />
        <ul v-show="searchArr.length > 0" class="searchTerm">
          <li v-for="item in searchArr" :key="item.id">
            <span class="label">{{item.name}}</span>
            <span class="iconfont icon-close2"></span>
          </li>
        </ul>
      </div>
      <div class="btn">
        <p>选电池</p>
      </div>
    </div>
    <!-- 选中的企业、电池、设备 -->
    <div class="userInfo">
      <div class="select">
        <P><span class="iconfont icon-Accountant"></span>摩融科技</P>
        <P><span class="iconfont icon-battery5"></span>123456abc</P>
        <P><span class="iconfont icon-devices"></span>def1345678</P>
      </div>
    </div>
    <!-- 图标部分 -->
    <div class="chartsWraper">
      <charts-component></charts-component>
    </div>
    <div class=""></div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import chartsComponent from './contrast/echarts'
import Mixins from '@/mixins/monitor-mixin'
export default {
  name: '',
  mixins: [Mixins],
  data() {
    return {
      sameBattery: true,
      searchArr: [
        {
          id: Math.random(),
          name: '摩融生sss搜索'
        }, {
          id: Math.random(),
          name: '客户企业'
        }, {
          id: Math.random(),
          name: '电池12'
        }
      ]
    };
  },

  components: {
    topHeader,
    chartsComponent
  },

  mounted() { },

  methods: {
    sameBatteryContrast() {
      this.sameBattery = true
    },
    differenceBatteryContrast() {
      this.sameBattery = false
    }
  }

}

</script>
<style lang='stylus' scoped>
.searchWarper
  flex 1
  overflow hidden
  height 32px
  margin 3px auto
  width 75%
  border 1px solid $color-project-blue
  border-radius 3px
  display flex
  &>div
    flex 1
    text-align center
    line-height 32px
    color $color-project-blue
    &.active
      color #ffffff
      background-color $color-project-blue
.contrastCenter
  padding-top $header-height + 5px
  .searchPart
    height 40px
    box-sizing border-box
    display flex
    padding 5px 10px
    .input
      position relative
      flex 1
      SetAllBorder(1px)
      margin-right 5px
      .icons
        position absolute
        left 8px
        top 6px
        font-size 18px
      input
        position absolute
        left 35px
        top 0px
        width 85%
        outline none
        height 28px
        line-height 28px
      .searchTerm
        position absolute
        left 35px
        top 0px
        right 0
        height 28px
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
    .btn
      flex 0 0 60px
      p
        height 30px
        background $color-project-blue
        text-align center
        line-height 30px
        color #ffffff
        border-radius 3px
  .userInfo
    width 90%
    margin 0 auto
    SetAllBorder(1px)
    border-radius 5px
    box-shadow 5px 5px 10px 0 hsla(0, 6%, 58%, 0.6)
    box-sizing border-box
    padding 5px 10px
    .select
      display flex
      p
        flex 1
        line-height 24px
        width 100%
        font-size 12px
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        .iconfont
          margin-right 3px
          color $color-project-blue
  .chartsWraper
    height calc(100vh - 165px)
</style>
