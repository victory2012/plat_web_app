<template>
  <div class="chat" id="gaugeChart"></div>
</template>
<script>

import { mapGetters } from 'vuex';
import gaugeConfig from '@/echartConfig/gauge.config'
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
    // this._resizeHanlder = debounce(() => {
    //   this.$gaugeChart.resize();
    //   this.pieChart2.resize();
    // }, 100);
    // window.addEventListener("resize", this._resizeHanlder);
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
      const { total, currentMonthTotal, alarmedTotal, activeTotal } = data;
      console.log(this.carData)
      console.log(currentMonthTotal);
      console.log(alarmedTotal)
      let effective = Number(activeTotal) / Number(total); // 有效数
      let jiankongshu = (effective * 100).toFixed(2);
      gaugeConfig.tooltip[0].formatter = p => {
        // let item = `全部：${total}<br />有效：${0}<br />${jiankongshu}%`;
        let item = `${this.$t('overview.total')}：${total}<br />${this.$t(
          'overview.effectiveRate'
        )}：${p.data.per || 0}<br />${p.data.value}%`;
        return item;
      };
      gaugeConfig.tooltip[1].formatter = p => {
        // let item = `全部：${total}<br />有效：${0}<br />${jiankongshu}%`;
        let item = `${this.$t('overview.total')}：${total}<br />${this.$t(
          'overview.effectiveRate'
        )}：${p.data.per || 0}<br />${p.data.value}%`;
        return item;
      };
      // voltageOptions.title.text = t("overview.valid");
      gaugeConfig.series[0].data = [
        {
          per: activeTotal,
          value: jiankongshu || 0
          // name: "有效监控"
        }
      ];
      gaugeConfig.series[1].data = [
        {
          per: activeTotal,
          value: jiankongshu || 0
          // name: "有效监控"
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
