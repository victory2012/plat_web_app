<template>
  <div class="home">
    <div class="banner">
      <cube-slide :data="items" />
    </div>
    <div class="body">
      <div class="tab-menu">电池检测</div>
      <div class="tab-menu">电池追踪</div>
      <!-- <div>
        <video ref="video" id="video" autoplay="" style='width:320px;height:140px'></video>
        <button @click="getMedia" id='picture'>PICTURE</button>
        <canvas ref="canvas" id="canvas" width="320" height="140"></canvas>
      </div> -->
    </div>
    <div class="footerBar">
     <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      show-slider
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selectedLabelDefault: 'Home',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'News',
        icon: 'cubeic-like'
      }, {
        label: 'User',
        icon: 'cubeic-vip'
      }, {
        label: 'Me',
        icon: 'cubeic-person'
      }],
      items: [
        {
          // url: 'http://www.didichuxing.com/',
          image: require('../assets/img/1.jpg')
        },
        {
          // url: 'http://www.didichuxing.com/',
          image: require('../assets/img/4.jpg')
        }
      ]
    }
  },
  methods: {
    clickHandler () { },
    changeHandler () {},
    getMedia () {
      const video = this.$refs.video;
      const context = this.$refs.canvas.getContext('2d');
      if (navigator.getUserMedia) { // 标准的API
        navigator.getUserMedia({ 'video': true }, (stream) => {
          video.src = stream;
          video.play();
        }, this.errocb);
      } else if (navigator.webkitGetUserMedia) { // WebKit 核心的API
        navigator.webkitGetUserMedia({ 'video': true }, (stream) => {
          video.src = window.webkitURL.createObjectURL(stream);
          video.play();
        }, this.errocb);
      }
      context.drawImage(video, 0, 0, 320, 140);
    },
    errocb () {
      console.log('sth wrong')
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  height 100%
  .footerBar
    box-shadow: 0 0 10px 0 hsla(0,6%,58%,.6);
    position fixed
    left 0
    right 0
    bottom 0
    height $footer-height
    font-size 16px

</style>
