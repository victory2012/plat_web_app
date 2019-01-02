<template>
  <div class="userContent">
    <top-header title="个人中心" fixed>
      <div @click="handleBack" slot="left">back</div>
      <div @click="right" slot="right">more</div>
    </top-header>
    <div class="userAvats">
      <cube-scroll ref="scroll" :data="items">
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'

export default {
  components: {
    topHeader
  },
  name: '',
  props: [''],
  data () {
    return {
      items: [
      ]
    };
  },

  mounted () { },

  methods: {
    handleBack (e) {
      console.log('handleBack')
      e.stopPropagation();
    },
    right (e) {
      console.log('right')
      e.stopPropagation();
    }
  }

}

</script>
<style lang='stylus' scoped>
@import '../../theme.styl'

.userContent
  box-sizing border-box
  padding-top $header-height
  padding-bottom $footer-height
  height 100vh
  // overflow hidden
  .userAvats
    overflow auto
    .item
      height 50px
</style>
