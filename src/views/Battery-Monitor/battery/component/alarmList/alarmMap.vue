<template>
  <div class="mapWrapper">
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="closeLocaltionMap" class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab">
        告警位置
      </div>
    </top-header>
    <div class="mapContent" id="mapContent"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
import topHeader from '@/components/header/header';
export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },

  components: {
    topHeader
  },

  mounted () {
    this.mapInit()
  },

  methods: {
    mapInit () {
      const lang = sessionStorage.getItem('locale') === 'en' ? 'en' : 'zh_cn';
      // eslint-disable-next-line
      this.map = new AMap.Map('mapContent', {
        resizeEnable: true,
        zoom: 15,
        lang
      });
    },
    closeLocaltionMap () {
      this.$router.push({
        name: 'MonitorBatteryAlarm'
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.mapWrapper
  width 100%
  height calc(100vh - 45px)
  .mapContent
    width 100%
    height calc(100vh - 45px)
</style>
