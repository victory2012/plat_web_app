<template>
  <div class="mask" @click="closeThis" v-show="showThisComponent">
    <div class="wraper">
      <p class="icon">
        <span class="iconfont"></span>
      </p>
      <slot class="options" name="options"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: ['showComponent'],
  data () {
    return {
      showOrhide: this.showComponent
    };
  },
  computed: {
    showThisComponent: function () {
      return this.showOrhide
    }
  },
  watch: {
    showComponent: {
      handler (val) {
        this.showOrhide = val
      }
    }
  },
  components: {},

  mounted () { },

  methods: {
    closeThis () {
      // this.showOrhide = false
      this.$emit('onchange', { 'showOrhide': false })
    }
  }

}

</script>
<style lang='stylus' scoped>
.mask
  position fixed
  top $header-height
  right 0
  bottom 0
  left 0
  .wraper
    position absolute
    top -6px
    right 8px
    color #ffffff
    .icon
      box-sizing border-box
      text-align right
      padding-right 5px
      font-size 0
      .iconfont
        display inline-block
        // width 20px
        border 10px solid transparent
        border-bottom 15px solid #868686
        width 0
        height 0
</style>
