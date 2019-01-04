<template>
  <div>
    <div class="banner">
      <cube-slide :data="items" :options='sildOptions' />
    </div>
    <div class="body">
      <div class="projects">
        <div class="tab-menu" v-for="item in projects" @click="selectSubProject(item)" :key="item.name">
          <i slot="icon" :class="item.icon"></i>
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { monitorFooterBar } from '@/config/footerTab'

export default {
  data () {
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
          name: '监测',
          link: 'Monitor'
        },
        {
          icon: 'iconfont icon-tracking_selected',
          name: '追踪',
          link: 'Track'
        }
      ]
    };
  },
  methods: {
    sildChange (e) {
      e.stopPropagation()
    },
    selectSubProject (item) {
      this.$router.push({ name: item.link })
      if (item.link === 'monitor') {
        this.$store.commit('setMainTabBar', monitorFooterBar())
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
@import '../../theme.styl'

.body
  .projects
    display flex
    padding 5px 10px
    justify-content space-between
    &>div
      flex 0 0 4rem
      text-align center
      padding 15px 10px
      background-color $bg-color-EEE
      border-radius 5px
      font-size 16px
      color $color-project-blue
      .iconfont
        font-size 22px
</style>
