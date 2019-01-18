<template>
  <div>
    <top-header class="headerContent" fixed>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="searchWarper">
        <div @click="switchTabs('noactive')" :class="{'active': show === 'noactive'}">未激活</div>
        <div @click="switchTabs('hasactive')" :class="{'active': show === 'hasactive'}">已激活</div>
        <div @click="switchTabs('haswarn')" :class="{'active': show === 'haswarn'}">以告警</div>
      </div>
    </top-header>
    <div class="wraper">
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
    <div class="handleBtn">
      <p @click="selectAllBattery" class="">全选</p>
      <p>激活</p>
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
      show: 'noactive',
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
      list: []
    };
  },
  components: {
    topHeader
  },
  mounted() {
    this.list = this.test;
  },

  methods: {
    switchTabs(str) {
      this.show = str
    },
    chooseItem(key) {
      key.choose = !key.choose
    },
    selectAllBattery() {
      this.list.forEach(key => {
        key.choose = true
      })
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
    border-right 1px solid $color-project-blue
    &:nth-child(3)
      border-right none
    &.active
      color #ffffff
      background-color $color-project-blue
.wraper
  padding 0 15px
  margin-top 50px
  height calc(100vh - 155px)
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
.handleBtn
  height 60px
  display flex
  justify-content space-between
  padding 0 30px
  p
    flex 0 0 80px
    margin-top 10px
    height 30px
    background $color-project-blue
    color #ffffff
    line-height 30px
    text-align center
    border-radius 5px
</style>
