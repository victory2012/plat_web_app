<template>
  <div class="monitorProject">
    <top-header title="电池监测" fixed>
      <div slot="left" @click="goBackToHome">
        <i class="iconfont icon-back1"></i>
      </div>
      <div slot="right">
        <i class="iconfont icon-more"></i>
      </div>
    </top-header>
    <div class="homeBody" @touchstart='touchstart' @touchend='touchend'>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="footerBar">
      <footer-bar @tabIndex="tabIndex" :defaultValue='defaultLable' :tabs='footerBar'></footer-bar>
    </div>
  </div>
</template>
<script>
import footerBar from '@/components/footer/footer';
import mixins from '@/mixins/mixins'
import { mainFooterBar } from '@/config/footerTab';
import topHeader from '@/components/header/header'

export default {
  components: {
    footerBar,
    topHeader
  },
  mixins: [mixins],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
    goBackToHome () {
      this.$router.push('/home')
      this.$store.commit('setMainTabBar', mainFooterBar())
    }
  }
}
</script>

<style lang="stylus" scoped>
.monitorProject
  height 100%
  .homeBody
    padding-top $header-height
    width 100%
    height 100%
  .footerBar
    box-shadow $footer-shadow
    position fixed
    left 0
    right 0
    bottom 0
    height $footer-height
    font-size 12px
    z-index 100
    background-color $btn-primary-color
</style>
