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
input:disabled, textarea:disabled
  background #fff
  cursor default
  color #a0a0a0
.color-green
  color green
.cube-dialog-icon .font44
  font-size 44px
.mainApp
  width 100%
  height 100%
  font-size 14px
.cube-tab-bar
  height 100%
.cube-tab_active
  a
    color $tab-active-color
.cube-slide-item
  a
    img
      width 100%
      height $banner-height
.slide-fade-enter-active
  transition all 0.15s ease
.slide-fade-leave-active
  transition all 0.15s cubic-bezier(1, 0.5, 0.8, 1)
.slide-fade-enter, .slide-fade-leave-to
  // transform translateX(30px)
  opacity 0
.amap-copyright, .amap-logo
  display none !important
::-webkit-input-placeholder /* WebKit browsers */
  color #ccc
:-moz-placeholder /* Mozilla Firefox 4 to 18 */
  color #ccc
::-moz-placeholder /* Mozilla Firefox 19+ */
  color #ccc
:-ms-input-placeholder /* Internet Explorer 10+ */
  color #ccc
</style>
