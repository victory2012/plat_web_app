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
        <upload-img @urlCallback="getUserAvtar" class="userAvtar" label="用户头像"></upload-img>
        <div class="personalData_title">
          <p>昵称</p>
          <input class="input" v-model="userArr.nickName" placeholder="请输入昵称" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>账号</p>
          <input class="input" v-model="userArr.account" placeholder="请输入账号" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>密码</p>
          <input class="input" v-model="userArr.password" placeholder="请输入密码" type="password">
        </div>
        <div class="personalData_title">
          <p><span>*</span>手机号码</p>
          <input class="input" v-model="userArr.phone" placeholder="请输入手机号码" type="tel">
        </div>
        <div class="personalData_title">
          <p>邮箱</p>
          <input class="input" v-model="userArr.email" placeholder="请输入邮箱" type="text">
        </div>
        <div class="submitBtn">
          <p @click="createUser">确定</p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import uploadImg from '@/components/upload/upload'
import t from '@/utils/translate';
import { phoneNumCheck, emailCheck, passwordCheck, accountCheck, spaceCheck } from '@/utils/check.js'

export default {
  name: '',
  props: [''],
  data() {
    return {
      userArr: {},
      userAvtar: ''
    };
  },
  components: {
    topHeader,
    uploadImg
  },
  mounted() { },

  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    },
    getUserAvtar(url) {
      this.userAvtar = url
      console.log('getUserAvtar', url);
    },
    /* 创建用户 并 检测数据 */
    createUser() {
      const { nickName, account, password, phone, email } = this.userArr
      if (
        !account ||
        !password ||
        !phone) {
        this.$Toast('请填写完整');
        return
      }
      console.log('password', password)
      if (spaceCheck(password)) {
        this.$Toast('密码中含有空格');
        return
      }
      if (!phoneNumCheck(phone)) {
        this.$Toast('手机号有误');
        return
      }
      if (!accountCheck(account)) {
        this.$Toast('账号格式有误，由4-20位数字、字母组成');
        return
      }
      if (!passwordCheck(phone)) {
        this.$Toast('密码格式有误，由6-20位数字、字母、特殊符号组成');
        return
      }
      if (email && !emailCheck(email)) {
        this.$Toast('邮箱格式不正确');
        return
      }
      const params = {
        account,
        password,
        phone,
        isCreator: 1
      }
      if (nickName) {
        params.nickName = nickName
      }
      if (email) {
        params.email = email
      }
      if (this.userAvtar) {
        params.photo = this.userAvtar
      }
      this.doCreateFun(params)
    },
    /* 创建用户 方法 */
    doCreateFun(params) {
      this.$api.createUser(params).then(({ data }) => {
        if (data.code === 0) {
          this.$Toast({
            message: t('successTips.addSuccess') // "创建成功"
          });
        }
      })
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
    .userAvtar
      border-bottom 1px solid #f2f2f2
      padding-bottom 10px
    .personalData_title
      display flex
      justify-content space-between
      height 30px
      line-height 30px
      padding 15px 0 10px
      border-bottom 1px solid #f2f2f2
      &>p
        flex 0 0 120px
        span
          color red
          font-size 18px
          vertical-align middle
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
