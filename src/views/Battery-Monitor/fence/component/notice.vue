<template>
  <div class="noticeCenter">
    <top-header fixed>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div class="active">未添加</div>
        <div>已添加</div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div class="noticeSearch">
      <input placeholder="请输入内容" type="text">
    </div>
    <div class="noticeWraper">
      <cube-scroll class="cubeScrollWraper" :options="options" @pulling-up="pullingUp">
        <div class="noticeInfo" v-for="key in randerArr" :key="key.id">
          <div class="noticePersion">
            <span>用户名：{{key.user}}</span>
            <span>账户身份：{{key.role}}</span>
          </div>
          <div class="noticePersionInfo">
            <div class="top">
              <p class="phone">
                <span>手机号：{{key.phone}}</span>
                <span>状态：{{key.state}}</span>
              </p>
              <p class="createTime">
                <span>创建时间: {{key.time}}</span>
              </p>
            </div>
            <div class="btn">
              <p>添加</p>
            </div>
          </div>
        </div>
      </cube-scroll>
    </div>
    <div class="pb"> 外部接收 </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';

export default {
  data () {
    return {
      pullDownRefreshObj: {
        threshold: 500,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50
      },
      randerArr: [
        {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }, {
          id: Math.random(),
          user: '张王李赵',
          role: '管理员',
          state: '状态：未添加',
          time: '2019-01-01 12:12:12',
          phone: '15899663300'
        }
      ]
    };
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: false,
        click: true
      }
    }
  },
  components: {
    topHeader
  },
  mounted () { },
  methods: {
    pullingUp () {
      console.log('pullingUp')
    },
    goBackToHome () { },
    goBack () {
      this.$router.push({ name: 'Monitor' })
    }
  }

}

</script>
<style lang='stylus' scoped>
.searchWarper
  flex 1
  overflow hidden
  height 32px
  margin 3px 10px 3px 30px
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
.noticeCenter
  width 100%
  height 100%
  .noticeSearch
    margin 45px auto 4px
    height 30px
    width 80%
    border 1px solid #e5e5e5
    input
      height 24px
      line-height 24px
      margin-top 3px
      outline none
  .noticeWraper
    width 100%
    height calc(100% - 80px)
    border-top 1px solid #e5e5e5
    .cubeScrollWraper
      width 100%
      height 100%
      .noticeInfo
        padding 10px
        border-bottom 5px solid #e5e5e5
        .noticePersion
          line-height 30px
          display flex
          span
            flex 1
            font-weight 700
        .noticePersionInfo
          display flex
          .top
            flex 1
            .phone
              line-height 40px
            .createTime
              line-height 30px
          .btn
            flex 0 0 80px
            display flex
            justify-content center
            align-items center
            p
              width 80%
              line-height 30px
              text-align center
              background-color $color-project-blue
              color #ffffff
              border-radius 5px
  .pb
    position absolute
    top 75%
    right 20px
    width 70px
    height 70px
    line-height 70px
    color rgb(255, 255, 255)
    background-color rgb(113, 191, 219)
    font-size 14px
    text-align center
    border-radius 50%
    transition transform 0.1s ease-in-out
    box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
    z-index 99
</style>
