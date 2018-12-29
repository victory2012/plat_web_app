<template>
  <div class="home">
    <div class="banner">
      <cube-slide :data="items" />
    </div>
    <div class="footerBar">
      <cube-tab-bar v-model="selectedLabelSlots" show-slider inline @click="clickHandler">
        <cube-tab v-for="item in tabs" :label="item.label" :key="item.label">
          <!-- name为icon的插槽 -->
          <i slot="icon" :class="item.icon"></i>
          <!-- 默认插槽 -->
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      selectedLabelSlots: '',
      tabs: [{
        label: 'Home',
        icon: 'cubeic-home'
      }, {
        label: 'Like',
        icon: 'cubeic-like'
      }, {
        label: 'Vip',
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
    clickHandler () { }
  }
}
</script>
<style lang="stylus" scoped>
.home {
  height: 100%;
}
</style>
