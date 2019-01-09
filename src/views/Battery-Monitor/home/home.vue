<template>
  <div>
    this is home page
    <!-- <top-header title="电池监测" fixed>
      <div slot="left" @click="goBackToHome">
        <i class="iconfont icon-back1"></i>
      </div>
      <div slot="right">
        <i class="iconfont icon-more"></i>
      </div>
    </top-header> -->
  </div>
</template>

<script>
import { mainFooterBar } from '@/config/footerTab';
// import topHeader from '@/components/header/header'
export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },

  // components: {
  //   topHeader
  // },

  mounted () { },

  methods: {
    goBackToHome () {
      this.$router.push('/home')
      this.$store.commit('setMainTabBar', mainFooterBar())
    }
  }

}

</script>
<style lang='' scoped>
</style>
