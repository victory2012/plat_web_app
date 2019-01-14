<template>
  <cube-scroll class="batteryList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="batteryItem" v-for="item in randerData" :key="item.id">
      <div class="itemTop">
        <div class="batteryCode">
          <p>{{item.batteryCode}}</p>
          <p class="subTsxt">电池编号</p>
        </div>
        <div class="bindStatus">
          <p>已绑定</p>
        </div>
        <div class="deviceCode">
          <p>{{item.deviceCode}}</p>
          <p class="subTsxt">设备编号</p>
        </div>
      </div>
      <div class="itemMid">
        <p><span class="subTsxt">电池型号：</span><span>{{item.model}}</span></p>
        <p><span class="subTsxt">电池规格：</span><span>{{item.specifications}}</span></p>
        <p><span class="subTsxt">额定电压：</span><span>{{item.voltage}}</span></p>
      </div>
      <div v-show="item.showBtn" class="itemHandle">
        <p>解绑</p>|
        <p>删除</p>|
        <p>详情</p>
      </div>
      <p @click.stop="showBtn(item)" :class="{'down': item.showBtn}" class="rightIcon">
        <span class="iconfont icon-right"></span>
      </p>
    </div>
  </cube-scroll>
</template>

<script>

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
      randerData: [
        {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
        }, {
          id: Math.random(),
          batteryCode: 'B00225',
          deviceCode: 'abc123456789',
          bindStatus: true,
          model: '型号123456',
          specifications: '规格12',
          voltage: '220v',
          showBtn: false
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
        click: false
      }
    }
  },
  mounted () { },
  methods: {
    jisuan (a, b, c) {
      console.log(a + b + c)
    },
    pullingUp () {
      console.log('pullingUp')
    },
    showBtn (item) {
      console.log(item)
      // e.stopPropagation();

      item.showBtn = !item.showBtn
    }
  }

}

</script>
<style lang='stylus' scoped>
// .subTsxt
// color $subText-color
.batteryItem
  position relative
  padding 10px
  &>.rightIcon
    position absolute
    top 36px
    right 10px
    display inline-block
    transition all 0.25s ease
    .iconfont
      font-size 22px
    &.down
      transition all 0.25s ease
      transform rotate(90deg)
  SetBorder(5px, bottom)
  .itemTop
    padding-right 25px
    .bindStatus
      flex 0 0 80px
      p
        height 20px
        line-height 20px
        color #ffffff
        background $handle-text-btn-color
        border-radius 10px
        &.active
          background #0099cc
    &>div > p
      font-weight bolder
      line-height 30px
      font-size 14px
  .itemMid
    padding-right 25px
    margin 15px 0
    justify-content space-between
    &>p
      margin-right 5px
      font-size 13px
      color #464646
  .itemHandle
    margin 30px 0 10px
    justify-content space-between
    p
      flex 1
      text-align center
      color $handle-text-btn-color
  &>div
    display flex
    justify-content center
    align-items center
    &> div
      flex 1
      text-align center
</style>
