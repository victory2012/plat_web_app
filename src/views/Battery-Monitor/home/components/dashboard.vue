<template>
  <div class="chat" id="gaugeChart"></div>
</template>
<script>
/* eslint-disable */
// import { mapGetters } from 'vuex';
import echarts from 'echarts'
import gaugeConfig from '@/echartConfig/gauge.config'
export default {
  // props: {
  //   cardData: {
  //     type: Object,
  //     default: () => { }
  //   }
  // },
  data() {
    return {
      pieChart1: "",
      pieChart2: "",
    };
  },
  // watch: {
  //   carData: {
  //     handler: function (val) {
  //       this.dataChange(val);
  //     },
  //     deep: true
  //   }
  // },
  // computed: {
  //   ...mapGetters({
  //     carData: 'monitor/GETCARDDATA'
  //   })
  // },
  mounted() {
    this.init();
    // this._resizeHanlder = debounce(() => {
    //   this.$gaugeChart.resize();
    //   this.pieChart2.resize();
    // }, 100);
    // window.addEventListener("resize", this._resizeHanlder);
  },
  methods: {
    init() {
      let $gaugeChart = document.getElementById("gaugeChart");
      // let $pieChart2 = document.getElementById("pieChart2");
      this.$gaugeChart = echarts.init($gaugeChart);
      this.dataChange();
    },
    dataChange(data) {
      gaugeConfig.tooltip.formatter = p => {
        let item = `全部：${200}<br />有效：${0}<br />${0}%`;
        return item;
      };
      // voltageOptions.title.text = t("overview.valid");
      gaugeConfig.series[0].data = [
        {
          per: 200,
          value: 0
          // name: "有效监控"
        }
      ];
      this.$gaugeChart.setOption(gaugeConfig);
    }
  }
};
</script>
<style lang="stylus" scoped>
.chat {
  width: 100vw;
  height: 200px;
}
</style>
