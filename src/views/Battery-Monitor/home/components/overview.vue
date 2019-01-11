<template>
  <div class="overview-wrapper">
    <gauge-component></gauge-component>
  </div>
</template>

<script>
import gaugeComponent from './dashboard'

export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },

  components: {
    gaugeComponent
  },

  mounted () {
    // eslint-disable-next-line
    console.log(echarts)
  },
  methods: {}

}

</script>
<style lang='stylus' scoped>
.overview-wrapper
  width 100%
  height 100%
</style>
