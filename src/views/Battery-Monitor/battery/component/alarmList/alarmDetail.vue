<template>
  <div>
    <top-header>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab"> 告警详情 </div>
    </top-header>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  data() {
    return {

    };
  },

  components: {
    topHeader
  },

  mounted() { },

  methods: {
    /* 返回 */
    goBack() {
      this.$router.push({
        name: 'MonitorBattery'
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
</style>
