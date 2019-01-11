<template>
  <div class="monitorProject">
    <!-- <div class="homeBody" @touchstart='touchstart' @touchend='touchend'> -->
    <div class="homeBody">
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

export default {
  components: {
    footerBar
  },
  mixins: [mixins],
  data () {
    return {
    }
  },
  mounted () {
  },
  methods: {
  }
}
</script>

<style lang="stylus" scoped>
.monitorProject
  height 100%
  .homeBody
    // padding-top $header-height
    width 100%
    height 100%
    box-sizing border-box
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
