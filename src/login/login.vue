<template>
  <div class="loginPage">
    <transition name='slide-fade'>
      <div class="card ad" v-show="showAD">this is 开屏广告</div>
    </transition>
    <transition name='slide-fade'>
      <div class="card loginCenter" v-show="!showAD">
        <cube-button @click="signIn">Light Button</cube-button>
      </div>
    </transition>
  </div>
</template>
<script>
export default {
  name: '',
  props: [''],
  data () {
    return {
      showAD: true
    }
  },
  components: {},
  mounted () {
    setTimeout(() => {
      this.showAD = false
    }, 2000)
  },
  methods: {
    signIn () {
      this.$router.push('home')
    }
  }

}

</script>
<style lang='stylus' scoped>
.loginPage {
  width: 100%;
  height: 100%;

  .card {
    // width: 100%;
    height: 100%;

    &.ad {
      background-color: blue;
    }

    &.loginCenter {
      background-color: #ffffff;
      padding: 0 10px;
    }
  }
}
</style>
