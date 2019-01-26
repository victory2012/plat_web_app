<template>
  <cube-scroll class="ChartsList" ref="scroll">
    <div class="chartItme" id="voltage"></div>
    <div class="chartItme" id="singleVoltage"></div>
    <div class="chartItme" id="current"></div>
    <div class="chartItme" id="quantity"></div>
    <div class="chartItme" id="temperature"></div>
  </cube-scroll>
</template>

<script>
import echarts from 'echarts'
import lineChartConfig from '@/echartConfig/lineChart.config'
export default {
  name: '',
  props: [''],
  data() {
    return {
    };
  },

  components: {},

  mounted() {
    this.init()
  },

  methods: {
    init() {
      const $voltage = document.getElementById('voltage');
      const $singleVoltage = document.getElementById('singleVoltage');
      const $current = document.getElementById('current');
      const $quantity = document.getElementById('quantity');
      const $temperature = document.getElementById('temperature');
      // eslint-disable-next-line
      this.$voltage = echarts.init($voltage);
      // eslint-disable-next-line
      this.$singleVoltage = echarts.init($singleVoltage);
      // eslint-disable-next-line
      this.$current = echarts.init($current);
      // eslint-disable-next-line
      this.$quantity = echarts.init($quantity);
      // eslint-disable-next-line
      this.$temperature = echarts.init($temperature);

      this.$voltage.setOption(lineChartConfig)
      this.$singleVoltage.setOption(lineChartConfig)
      this.$current.setOption(lineChartConfig)
      this.$quantity.setOption(lineChartConfig)
      this.$temperature.setOption(lineChartConfig)
    }
  }

}

</script>
<style lang='stylus' scoped>
.ChartsList
  width 100%
  height 100%
  box-sizing border-box
  padding 10px 20px
  .chartItme
    width 100%
    height 240px
    margin 30px 0
</style>
