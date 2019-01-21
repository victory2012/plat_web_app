<template>
  <div>
    <top-header>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab">企业详情</div>
    </top-header>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'
export default {
  data() {
    return {

    };
  },

  components: {
    topHeader
  },

  mounted() { },

  methods: {}

}

</script>
<style lang='stylus' scoped>
</style>
