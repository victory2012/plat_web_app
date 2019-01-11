<template>
  <div>
    <top-header fixed>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" placeholder="请输入搜索内容"/>
        </div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/mixins'
export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },
  mixins: [Mixins],
  components: {
    topHeader
  },

  mounted () {},

  methods: {}

}

</script>
<style lang='stylus' scoped>
.searchWarper
  display flex
  box-sizing border-box
  height 34px
  margin 3px auto
  width 90%
  SetAllBorder(1px)
  line-height 34px
  .searchIcon
    flex 0 0 30px
  .inputPart
    padding 0 10px
    // font-size 0
    input
      outline none
      width 100%
      height 30px
  &>div
    flex 1
</style>
