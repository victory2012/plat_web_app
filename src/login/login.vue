<template>
  <div class="loginPage">
    <transition name='slide-fade'>
      <div class="card ad" v-show="showAD">
        <div class="adinfo">
          摩融电池检测管理平台
        </div>
      </div>
    </transition>
    <transition name='slide-fade'>
      <div class="card loginCenter" v-show="!showAD">
        <cube-button @click="signIn">test login btn</cube-button>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: '',
  data () {
    return {
      showAD: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showAD = false
    }, 3000)
  },
  methods: {
    signIn () {
      this.$router.push('home')
    }
  }

}

</script>
<style lang='stylus' scoped>
.loginPage
  width 100%
  height 100%
  .card
    height 100%
    .adinfo
      width 100%
      height 40vh
      text-align center
      line-height 40vh
      color #ffffff
      font-size 18px
    &.ad
      background-color blue
    &.loginCenter
      background-color #ffffff
      padding 0 10px
</style>
