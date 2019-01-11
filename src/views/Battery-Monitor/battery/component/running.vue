<template>
  <div class="batteryRunning">
    <top-header>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" placeholder="请输入搜索内容" />
          <ul class="searchTerm">
            <li v-for="item in searchArr" :key="item.id"><span class="label">{{item.name}}</span><span class="iconfont icon-close2"></span></li>
          </ul>
        </div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div class="filterPart">
      <div class="select">
        <span>客户企业</span>
        <span class="iconfont icon-downarrow"></span>
      </div>
      <div class="select">
        <span>电池型号</span>
        <span class="iconfont icon-downarrow"></span>
      </div>
      <div class="select">
        <span>状态</span>
        <span class="iconfont icon-downarrow"></span>
      </div>
      <div class="select">
        地图
        <span class="iconfont icon-downarrow"></span>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/mixins'
export default {
  name: '',
  props: [''],
  data () {
    return {
      searchArr: [
        {
          id: Math.random(),
          name: '生产企业XXX'
        }, {
          id: Math.random(),
          name: '生产企业XXX'
        }

      ]
    };
  },
  mixins: [Mixins],
  components: {
    topHeader
  },

  mounted () { },

  methods: {}

}

</script>
<style lang='stylus' scoped>
.batteryRunning
  width 100%
  height calc(100vh - 45px)
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
  .filterPart
    height $header-height
    box-sizing border-box
    padding 5px 10px
    display flex
    .select
      flex 0 0 80px
      line-height 30px
      display flex
      margin-right 15px
      justify-content space-between
      font-size 13px
      .iconfont
        font-size 12px
        color #bcbcbc
</style>
