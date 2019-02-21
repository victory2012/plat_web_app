<template>
  <div class="loginPage">
    <transition name='slide-fade'>
      <div class="card loginCenter">
        <div @click="showActive" class="languageWarp">
          <p class="languageCenter">{{localLanguge}}<i class="iconfont icon-downarrow"></i></p>
        </div>
        <div class="logo">
          <img :src="LogoSrc" alt="">
        </div>
        <div class="logForm">
          <component :is="componentId"></component>
          <div class="tagWarp">
            <p v-show="!accountLogin" @click="changeLoginWay('account')" :class="{'active': !accountLogin}">{{$t('loginMsg.labelAccPass')}}</p>
            <p v-show="accountLogin" @click="changeLoginWay('findpwd')" class="active">找回密码</p>
            <p @click="changeLoginWay('sms')" :class="{'active': accountLogin}" class="smsCode">{{$t('loginMsg.labelSmsCode')}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import t from '@/utils/translate';
import mixin from './mixin'
export default {
  name: 'login',
  data() {
    return {
      LogoSrc: require('../assets/img/logo.png'),
      localLanguge: '中文',
      accountLogin: true,
      smsCode: t('loginMsg.getSmsCode'),
      componentId: 'accountLogin',
      hasGetSms: false // 是否已经获取了短信验证码
    }
  },
  mixins: [mixin],
  components: {
    accountLogin: () => import('./component/account_login.vue'),
    phoneLogin: () => import('./component/phone_login.vue'),
    findPwd: () => import('./component/find_password.vue')
  },
  methods: {
    changeLoginWay(str) {
      if (str === 'sms') {
        this.componentId = 'phoneLogin'
        this.accountLogin = false
      };
      if (str === 'account') {
        this.componentId = 'accountLogin'
        this.accountLogin = true
      }
      if (str === 'findpwd') {
        this.componentId = 'findPwd'
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
.loginPage
  width 100%
  height 100%
  // position relative
  background-color #ffffff
  .card
    height 100%
    &.ad
      background-color $color-project-blue
      text-align center
      color #ffffff
      font-size 18px
      box-sizing border-box
      padding-top 100px
      img
        display block
        margin 0 auto
        width 160px
        height auto
        margin-bottom 100px
    &.loginCenter
      background-color #ffffff
      padding 0 5vw
      .languageWarp
        // position absolute
        padding 20px
        font-size 14px
        text-align right
        .languageCenter
          font-size 15px
        .iconfont
          margin-left 5px
          font-size 12px
      .logo
        padding-top 20px
        text-align center
        img
          width 160px
          height auto
      .logForm
        margin 40px auto 0
        .flex
          display flex
          p
            flex 0 0 80px
            text-align center
            line-height 40px
          .input
            flex 1
          .getSmsBtn
            flex 0 0 90px
            box-sizing border-box
            text-align center
            line-height 40px
            margin-left 20px
            background-color $color-project-blue
            color #fff
            padding 0 10px
            border-radius 5px
            &.disable
              background-color #c5c5c5
        .account
          margin-bottom 15px
        .password
          margin-bottom 40px
        .tagWarp
          display flex
          margin-top 30px
          p
            flex 1
            color #9e9e9e
            &.active
              color $color-project-blue
            &.smsCode
              text-align right
</style>
