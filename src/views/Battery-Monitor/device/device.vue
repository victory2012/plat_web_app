<template>
  <div>
    <top-header fixed>
      <div slot="mainTab">
        <cube-input clearable class="input"></cube-input>
      </div>
    </top-header>
    <div class="equipmentList">
      <div class="search">
        <cube-select class="select" v-model="value.manufacturing" :options="options" :placeholder="value.manufacturing">
        </cube-select>
        <cube-select class="select" v-model="value.model" :options="options" :placeholder="value.model">
        </cube-select>
        <cube-select class="select" v-model="value.screen" :options="options" :placeholder="value.screen">
        </cube-select>
        <div class="select Handover" @click="changes">
        </div>
      </div>
      <cube-scroll>
        <equipment-list></equipment-list>
      </cube-scroll>
    </div>
    <div class="register" @click="register">注册设备</div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header.vue';
import equipmentList from './equipmentList';
export default {
  data() {
    return {
      options: [2013, 2014, 2015, 2016, 2017, 2018],
      value: { manufacturing: '生产企业', model: '电池型号', screen: '筛选' },
      search: '',
      messages: '请输入查询信息',
      equipmentList: []
    };
  },

  components: { topHeader, equipmentList },

  mounted() { },

  methods: {
    clear() {
      alert('清除')
    },
    changes() {
      this.$router.push()
    },
    register() {
      this.$router.push({ name: 'register' })
    }
  }
}
</script>
<style lang='stylus' scoped>
@import '../../../theme.styl'

.register
  position fixed
  top 75%
  right 20px
  width 61px
  height 61px
  line-height 61px
  color rgb(255, 255, 255)
  background-color rgb(113, 191, 219)
  font-size 14px
  text-align center
  border-radius 50%
  transition transform 0.1s ease-in-out
  box-shadow 0 5px 12px rgba(0, 0, 0, 0.175)
  z-index 99
.closeIcon
  padding 0 1.24rem
.equipmentList
  position fixed
  top contentFixedTop(5)
  left 0
  bottom contentFixedBottom(0)
  -webkit-overflow-scrolling touch
  overflow scroll
  overflow-scrolling touch
  width 100%
  .search
    display flex
    width 100%
    .select
      flex-grow 1
      margin-left 0.15rem
    .Handover
      padding 0 0.5rem
      flex-grow 1
      height 1rem
      background url('../../../assets/img/Handover.png') no-repeat center
      // background-image: url();
</style>
