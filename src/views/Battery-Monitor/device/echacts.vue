<template>
  <div id="main"></div>
</template>

<script>
import echarts from 'echarts'
import lineChartConfig from '@/echartConfig/lineChart.config'
export default {
  data() {
    return {
    }
  },
  mounted() {
    // eslint-disable-next-line
    const myChart = echarts.init(document.getElementById('main'));
    myChart.setOption(lineChartConfig)
  }
}
</script>

<style scoped lang="stylus">
#main
  width 9.8rem
  height 7rem
</style>
