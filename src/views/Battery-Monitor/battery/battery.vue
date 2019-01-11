<template>
  <div>
    <cube-slide :loop=false :auto-play=false :show-dots=false :initialIndex='initialIndex' :threshold='0.2' ref='slide'>
      <cube-slide-item>
        <batteryAlarm></batteryAlarm>
      </cube-slide-item>
      <cube-slide-item>
        <batteryRunning></batteryRunning>
      </cube-slide-item>
    </cube-slide>
    <div class="footerBar">
      <batteryFooter :tabs="tabs" :isSubTab="true" :defaultValue="tabs[1].link"></batteryFooter>
    </div>
  </div>
</template>

<script>
import batteryRunning from './component/running'
import batteryFooter from '@/components/footer/footer'
import batteryAlarm from './component/alarm'

export default {
  data () {
    return {
      selectedLabelDefault: 'run',
      tabs: [
        {
          link: 'alarm',
          label: '告警'
        },
        {
          link: 'run',
          label: '运行'
        },
        {
          link: 'ratio',
          label: '对比'
        }
      ],
      initialIndex: 1
    };
  },
  components: {
    batteryRunning,
    batteryFooter,
    batteryAlarm
  },
  mounted () { },

  methods: {
    clickHandler () {}
  }

}

</script>
<style lang='stylus' scoped>
.leftIcon
  .iconfont
    font-size 22px
.slide-item
  height calc(100vh - 45px)
.footerBar
  box-shadow $footer-shadow
  position fixed
  left 0
  right 0
  bottom 0
  height $footer-height
  font-size 12px
  z-index 100
  background-color $btn-primary-color
</style>
