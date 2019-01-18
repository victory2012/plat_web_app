<template>
  <div class="changes">
    <top-header fixed>
      <div @click="handleBack" slot="left">
        <i class="cubeic-back"></i>
      </div>
      <div slot="mainTab">
        <p>{{title}}</p>
      </div>
    </top-header>
    <div class="changePassword">
      <div class="account flex">
        <p>旧密码</p>
        <!-- <input type="password" placeholder="请输入旧密码" class="input"> -->
        <cube-input class="input" type='password' placeholder="请输入旧密码" v-model="submit.oldPass"></cube-input>
      </div>
      <div class="password flex">
        <p>新密码</p>
        <cube-input class="input" type='password' placeholder="请输入新密码" v-model="submit.newPass"></cube-input>
        <!-- <input type="password" placeholder="请输入新密码" class="input"> -->
      </div>
    </div>
    <div class="submitBtn">
      <cube-button type="submit" class="SubmitBtn" @click="submitFrom()">Submit Button</cube-button>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'

export default {
  data() {
    return {
      submit: {},
      title: '修改密码'
    }
  },
  components: {
    topHeader
  },
  methods: {
    handleBack() {
      this.$router.push({ name: 'HomeMe' });
    },
    submitFrom() {
      this.$createDialog({
        type: 'alert',
        title: '修改成功',
        icon: 'color-green font44 iconfont icon-Success'
      }).show()
      // this.$api.changeUserPwd().then(({ data }) => {
      //   if (data.code === 0) {
      //     this.$createDialog({
      //       type: 'alert',
      //       title: '修改成功',
      //       icon: 'color-green font44 iconfont icon-Success'
      //     }).show()
      //   }
      // })
    }
  }
}
</script>

<style lang='stylus' scoped>
.changes
  box-sizing border-box
  padding-top $header-height
  padding-bottom $footer-height
  height 100vh
.changePassword
  margin 60px auto 50px
  padding 0 15px
  .flex
    display flex
    // border-bottom 1px solid #f2f2f2
    margin-bottom 15px
    p
      flex 0 0 100px
      line-height 40px
      padding-left 15px
    .input
      flex 1
      outline none
.SubmitBtn
  width 7.5rem
  margin 0 auto
</style>
