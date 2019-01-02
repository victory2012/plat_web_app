<template>
  <div id="app" class="mainApp">
    <router-view />
  </div>
</template>
<style lang="stylus">
@require './theme.styl'

html, body
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  background $bg-white-color // 背景色
  width 100%
  height 100%
  box-sizing border-box
.mainApp
  width 100%
  height 100%
  font-size 14px
.cube-tab-bar
  height 100%
.cube-slide-item
  a
    img
      width 100%
      height $banner-height
.slide-fade-enter-active
  transition all 0.3s ease
.slide-fade-leave-active
  transition all 0.3s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to
  // transform translateX(30px)
  opacity 0
</style>
