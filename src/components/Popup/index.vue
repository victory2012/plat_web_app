<template>
  <div class="popupWraper">
    <!-- <div class="mask"></div> -->
    <div class="content">
      <slot name='content'></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data() {
    return {

    };
  },

  components: {},

  mounted() { },

  methods: {}

}

</script>
<style lang='stylus' scoped>
.popupWraper
  position fixed
  top 0px
  right 0px
  bottom 0
  left 0
  background rgba(0, 0, 0, 0.6)
  z-index 111
  .content
    position absolute
    left 50%
    top 50%
    transform translate(-50%, -50%)
    background-color #ffffff
    border-radius 5px
    color #333333
    width 355px
    // margin 0 auto
</style>
