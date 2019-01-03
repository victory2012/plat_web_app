<template>
  <div class="monitorProject" @click="monitorProject">
    <top-header title="电池监测" fixed>
      <div slot="left">
        <i class="iconfont icon-back1"></i>
      </div>
      <div slot="right">
        <i class="iconfont icon-more"></i>
      </div>
    </top-header>
  </div>
</template>
<script>
import topHeader from '@/components/header/header'

export default {
  components: {
    topHeader
  },
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    monitorProject (e) {
      e.stopPropagation();
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitorProject
  height 100vh
</style>
