<template>
  <div>
    <div class="banner">
      <cube-slide :data="items" :options='sildOptions'>
        <template slot="dots" slot-scope="props">
          <span class="dot" :class="{active: props.current === index}" v-for="(item, index) in props.dots" :key="index">{{index + 1}}</span>
        </template>
      </cube-slide>
    </div>
    <div class="body">
      <div class="projects">
        <div class="tab-menu" v-for="item in projects" @click="selectSubProject(item)" :key="item.name">
          <div class="icon">
            <i slot="icon" :class="item.icon"></i>
          </div>
          <div class="content">{{item.name}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { monitorFooterBar } from '@/config/footerTab'

export default {
  data() {
    return {
      sildOptions: {
        stopPropagation: true
      },
      items: [
        {
          // url: 'http://www.didichuxing.com/',
          image: require('../../assets/img/1.jpg')
        },
        {
          // url: 'http://www.didichuxing.com/',
          image: require('../../assets/img/4.jpg')
        }
      ],
      projects: [
        {
          icon: 'iconfont icon-Monitor-',
          name: '电池监控管理系统',
          link: 'Monitor'
        },
        {
          icon: 'iconfont icon-tracking_selected',
          name: '电池定位追踪系统',
          link: 'Track'
        }
      ]
    };
  },
  methods: {
    selectSubProject(item) {
      this.$store.commit('setRouterIndex', 0)
      this.$router.push({ name: item.link })
      // if (item.link === 'monitor') {
      //   this.$store.commit('setMainTabBar', monitorFooterBar())
      // }
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '../../theme.styl'

.banner
  .dot
    width 8px
    height 8px
    border-radius 50%
    border 1px solid #eaeaea
.body
  .projects
    // display flex
    padding 5px 10px
    // justify-content space-between
    &>div
      position relative
      text-align center
      padding 15px 10px
      height 80px
      border-radius 5px
      font-size 16px
      color $color-project-blue
      .content
        position absolute
        top 30px
        left 30px
        right 10px
        height 50px
        line-height 50px
        background-color $bg-color-EEE
        box-shadow 5px 5px 10px 0 rgba(0, 0, 0, 0.2)
        border-radius 5px
      .icon
        position absolute
        top 15px
        left 10px
        width 80px
        height 80px
        line-height 80px
        background-color $bg-color-EEE
        border-radius 50%
        z-index 2
        box-shadow 5px 5px 10px 0 rgba(0, 0, 0, 0.2)
        .iconfont
          font-size 32px
</style>
