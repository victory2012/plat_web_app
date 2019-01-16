<template>
  <div class="deployment">
    <top-header class="headerContent" fixed>
      <div slot="left" class="backIcon">
        <i class="iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div @click="doDeployment" :class="{'active': deployment}">分配</div>
        <div @click="doRecovery" :class="{'active': !deployment}">回收</div>
      </div>
    </top-header>
    <div class="content">
      <div class="top">
        <div class="title">
          <div class="name">
            <span class="text">尚未分配的电池</span>
            <i class="boreder"></i>
          </div>
          <div class="btn">
            <p>全选</p>
            <p>取消选择</p>
          </div>
        </div>
        <div class="listWraper">
          <cube-scroll class="batteryList">
            <ul class="wrapper">
              <li class="item">
                <p>编号：123455</p>
                <p>型号：model</p>
                <p>设备：acd115</p>
                <p>规格：25544</p>
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
      <div class="bottom">
        <div class="title">
          <div class="name">
            <span class="text">分配往目标企业</span>
            <i class="boreder"></i>
          </div>
          <div class="btn">
          </div>
        </div>
        <div class="listWraper"></div>
      </div>
      <div class="handleBtn">
        <p>取消</p>
        <p>确定</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  name: '',
  props: [''],
  data() {
    return {
      deployment: true
    };
  },

  components: {
    topHeader
  },

  mounted() { },

  methods: {
    doDeployment() {
      this.deployment = true
    },
    doRecovery() {
      this.deployment = false
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
.title
  display flex
  height 40px
  .name
    position relative
    flex 1
    text-align center
    line-height 40px
    align-items center
    .text
      position absolute
      top 50%
      left 50%
      width 110px
      transform translate(-50%, -50%)
      display inline-block
      background #ffffff
      z-index 2
    .boreder
      position absolute
      top 19px
      left 0
      display inline-block
      width 100%
      border-bottom 2px solid #797979
      z-index 1
  .btn
    flex 0 0 160px
    text-align right
    p
      margin 5px 5px
      display inline-block
      height 28px
      line-height 28px
      padding 0 10px
      border-radius 3px
      color #797979
      border 1px solid $color-project-blue
.listWraper
  height calc(100% - 40px)
  SetBorder(1px, bottom)
  SetBorder(1px, top)
  .batteryList
    height 100%
    .wrapper
      display flex
      justify-content space-between
      .item
        flex 0 0 30%
        padding 3px
        border-radius 3px
        border 1px solid $color-project-blue
.deployment
  box-sizing border-box
  height calc(100vh - 45px)
  padding-top $header-height + 3px
  .content
    height 100%
    display flex
    flex-direction column
    padding 0 15px
    .top
      flex 1
      margin-bottom 2px
    .bottom
      flex 1
    .handleBtn
      height 60px
</style>
