<template>
  <div class="add">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">创建用户</div>
    </top-header>
    <div class="creteWraper">
      <cube-scroll>
        <div class="personalData_title">
          <p>昵称</p>
          <input class="input" v-model="userArr.companyName" type="text">
        </div>
        <div class="personalData_title">
          <p>用户名</p>
          <input class="input" v-model="userArr.companyName" type="text">
        </div>
        <div class="personalData_title">
          <p>密码</p>
          <input class="input" v-model="userArr.password" type="password">
        </div>
        <div class="personalData_title">
          <p>手机号码</p>
          <input class="input" v-model="userArr.phone" type="text">
        </div>
        <div class="personalData_title">
          <p>邮箱</p>
          <input class="input" v-model="userArr.email" type="text">
        </div>
        <div class="submitBtn">
          <p>确定</p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  name: '',
  props: [''],
  data() {
    return {
      userArr: {},
      action: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      }
    };
  },
  components: {
    topHeader
  },
  mounted() { },

  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    },
    processFile(file, next) {
      // compress(file, {
      //   compress: {
      //     width: 1600,
      //     height: 1600,
      //     quality: 0.5
      //   }
      // }, next)
    },
    fileSubmitted(file) {
      file.base64Value = file.file.base64
    }
  }

}

</script>
<style lang='stylus' scoped>
.add
  height 100%
  box-sizing border-box
  padding $header-height + 5px 15px $footer-height
  .creteWraper
    padding-top 10px
    height 100%
    box-sizing border-box
    .personalData_title
      display flex
      justify-content space-between
      height 30px
      line-height 30px
      padding 15px 0 10px
      border-bottom 1px solid #f2f2f2
      input
        outline none
    .submitBtn
      padding 0 60px
      margin-top 30px
      p
        line-height 40px
        height 40px
        background $color-project-blue
        color #ffffff
        text-align center
        border-radius 5px
</style>
