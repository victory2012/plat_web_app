<template>
  <div class="mapWrapper">
    <top-header fixed>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">
        地理围栏
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div class="mapContentFence" id="mapContentFence"></div>
    <div class="rightBtnWraper">
      <div>添加围栏</div>
      <div>删除围栏</div>
      <div>实时位置</div>
      <div>活动热区</div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },

  components: {
    topHeader
  },

  mounted () {
    this.mapInit()
  },

  methods: {
    mapInit () {
      const lang = sessionStorage.getItem('locale') === 'en' ? 'en' : 'zh_cn';
      // eslint-disable-next-line
      this.map = new AMap.Map('mapContentFence', {
        resizeEnable: true,
        zoom: 15,
        lang
      });
    },
    goBack () {
      this.$router.push({ name: 'Monitor' })
    },
    goBackToHome () { }
  }

}

</script>
<style lang='stylus' scoped>
.mapWrapper
  height 100%
  width 100%
  position relative
  .mapContentFence
    width 100%
    height 100%
  .rightBtnWraper
    position absolute
    top 100px
    right 5px
    width 70px
    padding 0 10px
    background #ffffff
    border-radius 5px
    box-shadow $footer-shadow
    &>div
      text-align center
      height 26px
      line-height 26px
      border 1px solid $color-project-blue
      border-radius 5px
      margin 15px 0
</style>
