<template>
  <div id="main"></div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    var myChart = echarts.init(document.getElementById('main'));
    myChart.setOption({
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: ['12-17', '12-17', '12-17', '12-17', '12-17']
      },
      yAxis: {
        type: 'value'
      },
      color: ['#d8ebfe'],
      series: [{
        data: [55, 52, 48, 51, 50, 60],
        type: 'line',
        areaStyle: {}
      }],
      dataZoom: [
        {   // 这个dataZoom组件，默认控制x轴。
          type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
          start: 0,      // 左边在 10% 的位置。
          end: 100         // 右边在 60% 的位置。
        }
      ],
    })
  }
}
</script>

<style scoped lang="stylus">
#main {
  width: 9.8rem;
  height: 8rem;
}
</style>
