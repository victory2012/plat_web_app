<template>
  <div>
    <div class="banner" @touchmove='touchmove'>
      <cube-slide :data="items" :options='slideOptions' />
    </div>
    <div class="body">
      <div class="projects">
        <div class="tab-menu" v-for="item in projects" :key="item.name">
          <i slot="icon" :class="item.icon"></i>
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {
      slideOptions: {
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
          icon: 'cubeic-home',
          name: '监测',
          link: 'moniter'
        },
        {
          icon: 'cubeic-like',
          name: '追踪',
          link: 'track'
        }
      ]
    };
  },
  methods: {
    touchmove (e) {
      e.stopPropagation()
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
</style>
