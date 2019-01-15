<template>
  <div class="mapWrapper">
    <div class="mapContentBattery" id="mapContentBattery"></div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data() {
    return {

    };
  },

  components: {},

  mounted() {
    this.mapInit()
  },

  methods: {
    mapInit() {
      const lang = sessionStorage.getItem('locale') === 'en' ? 'en' : 'zh_cn';
      // eslint-disable-next-line
      this.map = new AMap.Map('mapContentBattery', {
        resizeEnable: true,
        zoom: 15,
        lang
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.mapWrapper {
  height: 100%;
  width: 100%;

  .mapContentBattery {
    width: 100%;
    height: 100%;
  }
}
</style>
