<template>
  <div class="permissionWraper">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">用户权限</div>
    </top-header>
    <div v-for="key in permissionArr" :key="key.id">
      <cube-checkbox v-model="key.permission" position="right" shape="square" :hollow-style="true">
        {{key.name}}
      </cube-checkbox>
    </div>
  </div>
</template>
<script>
import topHeader from '@/components/header/header';

export default {
  data() {
    return {
      permissionArr: [
        {
          id: Math.random(),
          name: '添加电池',
          permission: false
        }
      ]
    }
  },
  components: {
    topHeader
  },
  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    }
  }
}
</script>
<style lang="stylus" scoped>
.permissionWraper
  height 100%
  box-sizing border-box
  padding $header-height +5px 15px $footer-height
</style>
