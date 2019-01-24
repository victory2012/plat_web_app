<template>
  <div class="chat" id="gaugeChart"></div>
</template>
<script>

import { mapGetters } from 'vuex';
import gaugeConfig from '@/echartConfig/gauge.config'
import t from '@/utils/translate.js'
export default {
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({
      carData: 'getCardData'
    })
  },
  mounted() {
    this.init();
  },
  watch: {
    carData: {
      handler: function (val) {
        this.dataChange(val);
      },
      deep: true
    }
  },
  methods: {
    init() {
      let $gaugeChart = document.getElementById('gaugeChart');
      // eslint-disable-next-line
      this.$gaugeChart = echarts.init($gaugeChart);
      this.dataChange(this.carData);
    },
    dataChange(data) {
      const { total, alarmedTotal, activeTotal } = data;
      let defrence = Number(activeTotal) - Number(alarmedTotal); // 运行正常数
      let runNomal = defrence < 0 ? 0 : defrence; // 运行正常数 激活总数 减去 告警数
      let effective = Number(activeTotal) / Number(total); // 有效数 比例
      let jiankongshu = effective ? (effective * 100).toFixed(2) : 0; // 有效数 比例
      let namals = defrence > 0 ? ((defrence / Number(data.total)) * 100).toFixed(2) : 0
      gaugeConfig.tooltip.formatter = p => {
        console.log(p)
        let info = p.seriesName
        let item = `${t('overview.total')}：${total}<br />${info}：${p.data.per || 0}<br />${p.data.value}%`;
        return item;
      };
      gaugeConfig.series[0].data = [
        {
          per: namals,
          value: runNomal || 0
        }
      ];
      gaugeConfig.series[1].data = [
        {
          per: activeTotal,
          value: jiankongshu || 0
        }
      ];
      this.$gaugeChart.setOption(gaugeConfig);
    }
  }
};
</script>
<style lang="stylus" scoped>
.chat
  width 100vw
  height 200px
</style>
