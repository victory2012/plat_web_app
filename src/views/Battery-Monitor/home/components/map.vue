<template>
  <div class="mapWrapper">
    <div class="mapContent" id="mapContent"></div>
  </div>
</template>

<script>
import AMap from 'AMap'
export default {
  name: '',
  props: [''],
  data() {
    return {
      map: ''
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
      this.map = new AMap.Map('mapContent', {
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
  width: 100%;
  height: 100%;

  .mapContent {
    width: 100%;
    height: 100%;
  }
}
</style>
