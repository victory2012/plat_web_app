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
        <cube-input class="input" type='password' placeholder="请输入旧密码" v-model="submit.oldPassword"></cube-input>
      </div>
      <div class="password flex">
        <p>新密码</p>
        <cube-input class="input" type='password' placeholder="请输入新密码" v-model="submit.newPassword"></cube-input>
        <!-- <input type="password" placeholder="请输入新密码" class="input"> -->
      </div>
    </div>
    <div class="submitBtn">
      <cube-button type="submit" class="SubmitBtn" @click="submitFrom()">修改密码</cube-button>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'
import { passwordCheck, spaceCheck } from '@/utils/check'
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
      const { oldPassword, newPassword } = this.submit
      console.log(this.submit)
      if (!oldPassword) {
        this.$Toast('旧密码不能为空')
        return
      }
      if (!newPassword) {
        this.$Toast('新密码不能为空')
        return
      }
      if (!spaceCheck(oldPassword)) {
        this.$Toast('旧密码不能有空格')
        return
      }
      if (!spaceCheck(newPassword)) {
        this.$Toast('新密码不能有空格')
        return
      }
      if (!passwordCheck(oldPassword)) {
        this.$Toast('密码格式有误，由6-20位数字、字母、特殊符号组成');
        return
      }
      if (!passwordCheck(newPassword)) {
        this.$Toast('密码格式有误，由6-20位数字、字母、特殊符号组成');
        return
      }
      this.$api.changeUserPwd({ oldPassword, newPassword }).then(({ data }) => {
        if (data.code === 0) {
          this.submit = {}
          this.$createDialog({
            type: 'alert',
            title: '修改成功',
            icon: 'color-green font44 iconfont icon-Success'
          }).show()
        }
      })
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
