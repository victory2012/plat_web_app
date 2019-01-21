<template>
  <cube-scroll class="companyList" ref="scroll" :options="options" @pulling-down="pullingDown" @pulling-up="pullingUp">
    <div v-for="key in testArr" :key="key.id" class="companyItem">
      <img class="companyLogo" src="../../../assets/img/default_avatar.png" alt="" srcset="">
      <div class="companyInfo">
        <p class="companyName">{{key.name}}</p>
        <p class="address">地址：{{key.address}}</p>
        <p class="detail">详情</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
// import Popup from '@/components/Popup'

export default {
  data() {
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
      },
      listArr: [
        {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }, {
          name: '上海摩融信息科技',
          address: '上海市世纪大道1777号',
          id: Math.random()
        }
      ],
      testArr: []
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
  components: {
    // 'pop-company': Popup
  },

  mounted() {
    this.testArr = this.listArr
    this.getCompanyListFun()
  },

  methods: {
    pullingDown() {
      // console.log('pullDownRefreshObj')
    },
    pullingUp() {
      // console.log('pullUpLoadObj')
    },
    getCompanyListFun() {
      this.$api.getCompanyList().then(({ data }) => {
        console.log('company list', data)
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.animation
  -webkit-animation mint-zoom 0.5s ease-in-out
  animation mint-zoom 0.5s ease-in-out
.companyList
  // background-color $boder-coloGray
  // min-height bodyMinHeight(100vh, $header-height, $footer-height)
  .companyItem
    padding 10px 15px
    box-sizing border-box
    background-color #ffffff
    border-bottom 3px solid $boder-coloGray
    display flex
    .companyLogo
      display block
      width 60px
      height 60px
    .companyInfo
      position relative
      flex 1
      box-sizing border-box
      padding-left 10px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      p
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        line-height 30px
      .address
        box-sizing border-box
        padding-right 30px
        width 100%
      .detail
        position absolute
        right 0px
        bottom 0px
        color #ff5050
</style>
