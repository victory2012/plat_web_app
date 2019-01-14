<template>
  <div ref="batteryRunning" class="batteryRunning">
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
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
    <div ref="filterPart" class="filterPart">
      <div @click="companyClick" :class="{'selcetBy': showPopup.company}" class="select">
        <span>客户企业</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="showBatteryList" class="select">
        <span>电池型号</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="companyStatusClick" :class="{'selcetBy': showPopup.status}" class="select">
        <span>状态</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <span @click="swichMapOrList" class="iconfont icon-map">
      </span>
    </div>
    <div class="popupWraper" v-show="showPopup.wrap">
      <div class="company" v-show="showPopup.company">
        <div class="production">
          <h2>生产企业</h2>
          <cube-scroll class="productionList" ref="productionscroll" :options="options">
            <ul>
              <li v-for="item in testCompany" :key="item.id" @click="chooseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
            </ul>
          </cube-scroll>
        </div>
        <div class="purchase">
          <h2>采购企业</h2>
          <cube-scroll class="productionList" ref="purchasescroll" :options="options">
            <ul>
              <li v-for="item in testCompany" :key="item.id" @click="chooseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
            </ul>
          </cube-scroll>
        </div>
        <section class="companyBtn">
          <p @click="companyCancelHandle">取消</p>
          <p class="sure">确定</p>
        </section>
      </div>
      <div class="allStatus" v-show="showPopup.status">
        <div class="status" v-for="item in status" :key="item.id">
          <h2>{{item.title}}</h2>
          <ul>
            <li v-for="info in item.data" @click="choosStatuItem(info, item.data)" :key="info.id" :class="{'active': info.choose}">{{info.label}}</li>
          </ul>
        </div>
        <section class="companyBtn">
          <p @click="statusCancelHandle">取消</p>
          <p class="sure">确定</p>
        </section>
      </div>
    </div>
    <div class="batteryWrapper" :style="{height:height +'px'}">
      <component :is="showComponent"></component>
      <div class="pb" @click="goToRegisterBattery">
        登记电池
      </div>
      <!-- <battery-list ref="batteryList"></battery-list> -->
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/monitor-mixin'
// import batteryList from './batteryList/battery'

const column1 = [
  { text: 'Text12346', value: '123456' },
  { text: 'Text12346', value: 'aad' },
  { text: 'Text12346', value: 'ddeef' },
  { text: 'Text12346', value: 'gdfg' },
  { text: 'Text12346', value: 'fgh' },
  { text: 'Text12346', value: 'ddeghjef' }
]
export default {
  data () {
    return {
      showComponent: 'battery',
      height: 0,
      showPopup: {
        wrap: false,
        company: false,
        status: false
      },
      status: [
        {
          id: Math.random(),
          title: '绑定状态',
          data: [
            {
              label: '全部',
              id: 'all',
              choose: true
            },
            {
              label: '未绑定',
              id: 'nobind',
              choose: false
            },
            {
              label: '已绑定',
              id: 'hasbind',
              choose: false
            }
          ]
        },
        {
          id: Math.random(),
          title: '在线状态',
          data: [
            {
              label: '全部',
              id: 'allOline',
              choose: true
            },
            {
              label: '在线',
              id: 'online',
              choose: false
            },
            {
              label: '离线',
              id: 'offline',
              choose: false
            }
          ]
        },
        {
          id: Math.random(),
          title: '运行状态',
          data: [
            {
              label: '全部',
              id: 'runall',
              choose: true
            }, {
              label: '已激活',
              id: 'hasactive',
              choose: false
            }, {
              label: '未激活',
              id: 'noactive',
              choose: false
            }, {
              label: '激活中',
              id: 'activing',
              choose: false
            }, {
              label: '取消告警中',
              id: 'cancelActive',
              choose: false
            }
          ]
        }
      ],
      searchArr: [
        {
          id: Math.random(),
          name: '生产企业XXX'
        }, {
          id: Math.random(),
          name: '生产企业XXX'
        }

      ],
      testCompany: [],
      companyData: [
        {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }, {
          id: Math.random(),
          name: '生产企业',
          choose: false
        }
      ]
    };
  },
  computed: {
    options () {
      return {
        scrollbar: false, // 是否显示滚动条
        click: false
      }
    }
  },
  mixins: [Mixins],
  components: {
    topHeader,
    'battery': () => import('./batteryList/battery'),
    'batteryMap': () => import('./batteryList/batteryMap')
  },
  created () {

  },
  mounted () {
    // this.$refs.batteryList.jisuan(1, 2, 3)
    /*
    * js 计算出 电池列表内容区域的高度
    * 40 : header 组件的高度
    */
    this.height = this.getOffsetHeight('batteryRunning') - this.getOffsetHeight('filterPart') - 40
  },

  methods: {
    chooseItem (item) {
      console.log(item)
      item.choose = !item.choose
    },
    swichMapOrList () {
      if (this.showComponent === 'battery') {
        this.showComponent = 'batteryMap';
      } else {
        this.showComponent = 'battery';
      }
    },
    goToRegisterBattery () {
      this.$router.push({
        name: 'MonitorBatteryRegister'
      })
    },
    companyClick () {
      this.showPopup.wrap = true
      this.showPopup.company = true
      this.showPopup.status = false
      this.testCompany = this.companyData
    },
    companyCancelHandle () {
      this.showPopup.wrap = false
      this.showPopup.status = false
      this.showPopup.company = false
    },
    companyStatusClick () {
      this.showPopup.wrap = true
      this.showPopup.status = true
      this.showPopup.company = false
    },
    statusCancelHandle () {
      this.showPopup.wrap = false
      this.showPopup.status = false
      this.showPopup.company = false
    },
    choosStatuItem (info, data) {
      data.forEach(key => {
        key.choose = false
      });
      info.choose = true
    },
    showBatteryList () {
      this.companyCancelHandle()
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: 'Picker',
          data: [column1],
          onSelect: this.selectHandle,
          onCancel: this.cancelHandle
        })
      }
      this.picker.show()
    },
    selectHandle (selectedVal, selectedIndex, selectedText) {
      // this.$createDialog({
      //   type: 'warn',
      //   content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
      //   icon: 'cubeic-alert'
      // }).show()
    },
    cancelHandle () {
      // this.$createToast({
      //   type: 'correct',
      //   txt: 'Picker canceled',
      //   time: 1000
      // }).show()
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
.batteryRunning
  width 100%
  position relative
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
      flex 0 0 80px
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
        font-size 28px
        color $icon-color-gray
  .popupWraper
    position absolute
    top 85px
    left 0
    width 100%
    z-index 11
    background-color #ffffff
    .company
      .production
        SetBorder(1px, bottom)
      &>div
        height 180px
        .productionList
          height 146px
        h2
          line-height 30px
          padding-left 15px
        ul
          display flex
          justify-content space-between
          flex-wrap wrap
          padding 10px
          li
            flex 0 0 26%
            text-align center
            line-height 26px
            border 1px solid $color-project-blue
            background #ffffff
            color $color-project-blue
            margin-bottom 10px
            overflow hidden
            white-space nowrap
            text-overflow ellipsis
            &.choosed
              background-color $color-project-blue
              color #ffffff
    .allStatus
      padding 0 10px 10px
      .status
        // padding 10px
        h2
          font-size 15px
          line-height 30px
        ul
          display flex
          flex-wrap wrap
          li
            flex 0 0 75px
            line-height 28px
            text-align center
            border 1px solid $color-project-blue
            margin-right 15px
            font-size 13px
            margin-bottom 15px
            &.active
              background-color $color-project-blue
              color #ffffff
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
  box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
  z-index 99
</style>
