<template>
  <div class="registers">
    <top-header>
      <div slot="left">
        <i class="cubeic-back" @click="goBack"></i>
      </div>
      <div slot="mainTab" class="mainTab">
        <span>设备注册</span>
      </div>
      <!-- <div slot="right" class="right">
        <span>扫一扫</span>
      </div> -->
    </top-header>
    <div class="main">
      <div>
        <p>设备编号</p>
        <cube-input class="input"></cube-input>
      </div>
      <div>
        <p>设备类别</p>
        <cube-input class="input" type='password'></cube-input>
      </div>
      <div>
        <p>相关企业</p>
        <cube-input class="input" type='password'></cube-input>
      </div>
    </div>
    <div class="submit">
      <cube-button type="submit" class="cancelBtn" @click="cancelBtn()">取消</cube-button>
      <cube-button type="submit" class="submitBtn" @click="submitFrom()">确认</cube-button>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header.vue';
export default {
  components: { topHeader },
  methods: {
    goBack() {
      this.$router.push({ name: 'HomeDevice' });
    },
    submitFrom() {
      alert('确定')
    },
    cancelBtn() {
      alert('取消')
    }
  }
}
</script>

<style lang='stylus' scoped>
.right
  width 1.2rem
  span
    font-weight bold
.submit
  display flex
  margin 1.5rem 0 0 1.5rem
  .submitBtn
    width 3rem
    margin-left 1rem
    background red
  .cancelBtn
    width 3rem
.main
  margin 1rem 0 0 1rem
  div
    display flex
    margin-bottom 0.5rem
    .input
      width 6rem
    p
      line-height 1rem
      padding-right 0.5rem
</style>
