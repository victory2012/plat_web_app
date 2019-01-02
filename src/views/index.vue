<template>
  <div class="home">
    <div class="homeBody" @touchstart='touchstart' @touchend='touchend'>
      <transition name="slide-fade" mode="out-in">
        <router-view />
      </transition>
    </div>
    <div class="footerBar">
      <cube-tab-bar v-model="selectedLabelDefault" @change="chooseMenu" :inline='false' show-slider>
        <cube-tab v-for="(item) in tabs" :label="item.link" :key="item.label">
          <i slot="icon" class="tabIcon" :class="item.icon"></i>
          <router-link :to="item.link">{{item.label}}</router-link>
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
      selectedLabelDefault: 'home',
      routerIndex: 0,
      tabs: [{
        label: '首页',
        icon: 'cubeic-home',
        link: 'home'
      }, {
        label: '消息',
        icon: 'cubeic-like',
        link: 'news'
      }, {
        label: '用户',
        icon: 'cubeic-vip',
        link: 'user'
      }, {
        label: '我的',
        icon: 'cubeic-person',
        link: 'me'
      }]
    }
  },
  mounted () {
    const routeName = this.$route.name;
    this.getTabIndex(routeName)
  },
  methods: {
    /**
     * @function getTabIndex
     * @desc 根据 name 计算出name在tabs中的索引，并赋值给 routerIndex 修改 selectedLabelDefault默认值
     * @param {name} 创建时 从路由中获取，footer tab切换时 获取当前激活的tab的 link
     */
    getTabIndex (name) {
      const Index = this.tabs.findIndex((item) => {
        return item.link === name
      })
      if (Index > 0) {
        this.routerIndex = Index
        this.selectedLabelDefault = this.tabs[Index].link
      } else {
        this.routerIndex = 0
      }
    },
    /**
     * @function chooseMenu
     * @desc cube-ui对cube-tab-bar提供了change方法，会拿到当前激活的tab的label值
     * @param {data} 返回的cube-tab 上的label 的值
     */
    chooseMenu (data) {
      this.getTabIndex(data)
    },
    /**
     * @function touchstart
     * @desc 当前手指按在屏幕时 获取当前点在屏幕中的位置
     * @param {e} event对象 从中获取当前点击的页面位置 并保存
     */
    touchstart (e) {
      this.touchPointerX = e.touches[0].pageX;
      this.touchPointerY = e.touches[0].pageY;
    },
    /**
     * @function touchend
     * @desc 当前手指离开屏幕时 获取当前点在屏幕中的位置
     * @desc 根据touchstart 获取的点 跟 手指离开的点做比较，来判断是左滑还是右滑
     * @param {e} event对象 从中获取当前手指离开的页面位置 并保存
     */
    touchend (e) {
      this.touchendPointerX = e.changedTouches[0].pageX
      this.touchendPointerY = e.changedTouches[0].pageY
      const moveY = Math.abs(this.touchendPointerY - this.touchPointerY)
      const moveX = Math.abs(this.touchendPointerX - this.touchPointerX)
      if (moveY > moveX) return
      if (this.touchendPointerX - this.touchPointerX < -50) {
        this.routerIndex++
        if (this.routerIndex === this.tabs.length) {
          this.routerIndex = this.tabs.length - 1
        }
        this.$router.push(this.tabs[this.routerIndex].link)
        this.selectedLabelDefault = this.tabs[this.routerIndex].link
      }
      if (this.touchendPointerX - this.touchPointerX > 50) {
        this.routerIndex--
        if (this.routerIndex < 0) {
          this.routerIndex = 0;
        }
        this.$router.push(this.tabs[this.routerIndex].link)
        this.selectedLabelDefault = this.tabs[this.routerIndex].link
      }
    }
  }
}
</script>
<style lang="stylus" scoped>
.home
  height 100%
  .homeBody
    width 100%
    height 100%
  .footerBar
    box-shadow $footer-shadow
    position fixed
    left 0
    right 0
    bottom 0
    height $footer-height
    font-size 12px
    z-index 100
    background-color $btn-primary-color
    .tabIcon
      display block
      font-size 24px
</style>
