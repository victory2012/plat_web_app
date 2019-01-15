<template>
  <div>
    <cube-slide :loop=false :auto-play=false @change="slideChange" :show-dots=false :initialIndex='initialIndex' :threshold='0.2' ref='slide'>
      <cube-slide-item>
        <batteryAlarm></batteryAlarm>
      </cube-slide-item>
      <cube-slide-item>
        <batteryRunning></batteryRunning>
      </cube-slide-item>
      <cube-slide-item>
        <batteryContrast></batteryContrast>
      </cube-slide-item>
    </cube-slide>
    <div class="footerBar">
      <batteryFooter @tabIndex="tabIndex" :tabs="tabs" :isSubTab="true" :defaultValue="selectedLabelDefault"></batteryFooter>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import batteryFooter from '@/components/footer/footer'
import batteryRunning from './component/running'
import batteryAlarm from './component/alarm'
import batteryContrast from './component/contrast'

export default {
  data() {
    return {
      selectedLabelDefault: ''
    };
  },
  computed: {
    ...mapGetters({
      initialIndex: 'getMonitorBatteryIndex',
      tabs: 'getMonitorBatteryFooter'
    })
  },
  components: {
    batteryRunning,
    batteryFooter,
    batteryAlarm,
    batteryContrast
  },
  mounted() {
    this.selectedLabelDefault = this.tabs[1].link
  },

  methods: {
    clickHandler() { },
    tabIndex(index) {
      console.log(index);
      this.$store.commit('setMinitorBatteryIndex', index)
    },
    slideChange(index) {
      console.log(index);
      this.selectedLabelDefault = this.tabs[index].link
    }
  }

}

</script>
<style lang='stylus' scoped>
.leftIcon {
  .iconfont {
    font-size: 22px;
  }
}

.slide-item {
  height: calc(100vh - 45px);
}

.footerBar {
  box-shadow: $footer-shadow;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  height: $footer-height;
  font-size: 12px;
  z-index: 100;
  background-color: $btn-primary-color;
}
</style>
