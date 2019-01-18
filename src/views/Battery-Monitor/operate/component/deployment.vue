<template>
  <div class="deployment">
    <top-header class="headerContent" fixed>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="iconfont icon-back1"></i>
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
            <p @click="selectAll">全选</p>
            <p @click="cancelSelect">取消选择</p>
          </div>
        </div>
        <div class="listWraper">
          <cube-scroll class="batteryList">
            <ul class="wrapper">
              <li @click="chooseItem(key)" v-for="key in list" :key="key.id" class="item">
                <p>编号：{{key.batteryCode}}</p>
                <p>型号：{{key.model}}</p>
                <p>设备：{{key.device}}</p>
                <p>规格：{{key.sipf}}</p>
                <i v-show="key.choose" class="iconfont icon-tubiaozhizuomoban"></i>
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
        <div class="listWraper">
          <cube-scroll class="batteryList">
            <ul class="wrapper">
              <li v-for="key in company" :key="key.id" class="item company">
                {{key.name}}
              </li>
            </ul>
          </cube-scroll>
        </div>
      </div>
      <div class="handleBtn">
        <p class="cancel">取消</p>
        <p>确定</p>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import mixins from '@/mixins/monitor-mixin'
export default {
  name: '',
  mixins: [mixins],
  data() {
    return {
      deployment: true,
      test2: [
        {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }, {
          id: Math.random(),
          name: '生产企业1'
        }
      ],
      test: [
        {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }, {
          batteryCode: '1245',
          model: 'model1',
          device: '45789',
          sipf: '规格1',
          id: Math.random(),
          choose: false
        }
      ],
      list: [],
      company: []
    };
  },

  components: {
    topHeader
  },

  mounted() {
    this.list = this.test;
    this.company = this.test2
  },

  methods: {
    selectAll() {
      this.list.forEach(key => {
        key.choose = true
      })
    },
    cancelSelect() {
      this.list.forEach(key => {
        key.choose = false
      })
    },
    doDeployment() {
      this.deployment = true
    },
    doRecovery() {
      this.deployment = false
    },
    chooseItem(key) {
      key.choose = !key.choose
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
  height 100%
  SetBorder(1px, bottom)
  SetBorder(1px, top)
  .batteryList
    height 100%
    .wrapper
      display flex
      justify-content space-between
      flex-wrap wrap
      .item
        position relative
        flex 0 0 30%
        padding 3px
        border-radius 5px
        border 1px solid $color-project-blue
        margin-bottom 6px
        i
          position absolute
          right 0px
          bottom 0px
          color $color-project-blue
        p
          font-size 12px
        &.company
          box-sizing border-box
          height 30px
          background #ffffff
          text-align center
          line-height 24px
          border-radius 0
          margin-bottom 10px
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
      height calc(50% - 30px)
      overflow hidden
    .bottom
      flex 1
      height calc(50% - 30px)
      overflow hidden
    .handleBtn
      height 60px
      text-align right
      p
        margin-top 10px
        display inline-block
        padding 10px 20px
        background $color-project-blue
        color #ffffff
        text-align center
        margin-right 10px
        border-radius 5px
        &.cancel
          background $icon-color-gray
</style>
