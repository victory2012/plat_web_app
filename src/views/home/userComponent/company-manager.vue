<template>
  <div>
    <cube-scroll class="companyList" ref="scroll" :options="options" @pulling-down="pullingDown" @pulling-up="pullingUp">
      <div class="companyItem" @click.stop="stopPropagation">
        <div class="company">
          <img src="../../../assets/img/default_avatar.png" alt="" srcset="">
          <div class="companyInfo">
            <p class="companyName">上海摩融信息科技有限公司</p>
            <p class="address">地址：<span>上海市世纪大道1777号</span></p>
          </div>
        </div>
        <div class="companyPhone">
          <div class="phone">
            <span class="tit">电话：</span>
            <span>15666558899</span>
          </div>
          <div class="detailBtn">详情</div>
        </div>
      </div>
    </cube-scroll>
    <div class="pb" @click="addCompany" :class="{'animation': activeBtn}">
      添加公司
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {
      activeBtn: false,
      threshold: 20,
      pullUpLoad: true,
      testObj: {},
      pullDownRefreshObj: {
        threshold: 50,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50
      }
    };
  },
  computed: {
    options () {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    }
  },
  components: {},

  mounted () { },

  methods: {
    onFetch () {
      let items = []
      return new Promise((resolve) => {
        // 模拟请求 50 条数据，因为 size 设置为 50
        setTimeout(() => {
          for (let i = 0; i < 20; i++) {
            items.push({
              id: i,
              avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
              msg: '123',
              time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
            })
          }
          resolve(items)
        }, 1000)
      })
    },
    pullingDown () {
      console.log('pullDownRefreshObj')
    },
    pullingUp () {
      console.log('pullUpLoadObj')
    },
    addCompany () {
      console.log('addCompany')
    }
  }

}

</script>
<style lang='stylus' scoped>
.animation
  -webkit-animation mint-zoom 0.5s ease-in-out
  animation mint-zoom 0.5s ease-in-out
.pb
  position fixed
  top 75%
  right 20px
  width 61px
  height 61px
  line-height 61px
  color rgb(255, 255, 255)
  background-color rgb(113, 191, 219)
  font-size 14px
  text-align center
  border-radius 50%
  transition transform 0.1s ease-in-out
  // background:
  -webkit-box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
  box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
.companyList
  // background-color $boder-coloGray
  // min-height bodyMinHeight(100vh, $header-height, $footer-height)
  .companyItem
    padding 5px 15px
    box-sizing border-box
    background-color #ffffff
    margin-bottom 10px
    border-bottom 8px solid $boder-coloGray
    .company
      display flex
      margin-bottom 10px
      img
        flex 0 0 70px
        height 60px
      .companyInfo
        padding 0 8px
        flex 1
        .companyName
          line-height 40px
          font-size 16px
        .address
          color $subText-color
    .companyPhone
      display flex
      justify-content space-between
      height 30px
      line-height 30px
      .phone
        font-size 14px
        flex 1
      .detailBtn
        width 90px
        text-align center
        font-size 16px
        color #ffffff
        background-color $color-project-blue
        border-radius 5px
</style>
