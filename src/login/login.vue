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
          <div v-show="accountLogin" class="account flex">
            <p>{{$t('loginMsg.accountPlace')}}:</p>
            <cube-input class="input" v-model="logObj.account" :placeholder="$t('loginMsg.errorMsg.account')"></cube-input>
          </div>
          <div v-show="accountLogin" class="password flex">
            <p>{{$t('loginMsg.passwordPlace')}}:</p>
            <cube-input class="input" v-model="logObj.password" type='password' :placeholder="$t('loginMsg.errorMsg.password')"></cube-input>
          </div>
          <div v-show="!accountLogin" class="account flex">
            <p>{{$t('loginMsg.phone')}}:</p>
            <cube-input class="input" v-model="logObj.phone" :maxlength='11' :placeholder="$t('loginMsg.errorMsg.phoneNub')"></cube-input>
          </div>
          <div v-show="!accountLogin" class="password flex">
            <p>{{$t('loginMsg.smsCode')}}:</p>
            <cube-input class="input" v-model="logObj.smscode" :placeholder="$t('loginMsg.errorMsg.smsCodeErr')"></cube-input>
            <div @click="getSmsCode" :class="{'disable': hasGetSms}" class="getSmsBtn">{{smsCode}}</div>
          </div>
          <cube-button @click="signIn" type="submit">{{$t('loginMsg.loginBtn')}}</cube-button>
          <div class="tagWarp">
            <p @click="changeLoginWay('account')" :class="{'active': !accountLogin}">{{$t('loginMsg.labelAccPass')}}</p>
            <p @click="changeLoginWay('sms')" :class="{'active': accountLogin}" class="smsCode">{{$t('loginMsg.labelSmsCode')}}</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>
import { ToastOnlyText, ToastWithLoading } from '@/utils/Toast';
import { phoneNumCheck } from '../utils/check.js';
import t from '@/utils/translate';
export default {
  name: 'login',
  data() {
    return {
      LogoSrc: require('../assets/img/logo.png'),
      localLanguge: '中文',
      accountLogin: true,
      smsCode: t('loginMsg.getSmsCode'),
      logObj: {},
      hasGetSms: false // 是否已经获取了短信验证码
    }
  },
  mounted() {
    this.loginLoading = ToastWithLoading()
  },
  methods: {
    signIn() {
      this.$router.push({ name: 'Home' })
      // if (this.accountLogin) {
      //   this.doAccountLogin()
      // } else {
      //   this.phoneLogon()
      // }
    },
    doAccountLogin() {
      if (!this.logObj.account) {
        ToastOnlyText(t('loginMsg.errorMsg.account'))
        return
      }
      if (!this.logObj.password) {
        ToastOnlyText(t('loginMsg.errorMsg.password'))
        return
      }
      const person = {
        account: this.logObj.account,
        password: this.logObj.password
      };
      this.loginLoading.show('登录中...')
      this.$api.login(person).then(res => {
        this.loginLoading.hide()
        const data = res.data;
        if (data.code === 0) {
          localStorage.setItem('accPwd', JSON.stringify(person))
          sessionStorage.setItem('token', res.headers.token);
          sessionStorage.setItem('loginData', JSON.stringify(data.data));
          this.$store.commit('setUserLoginData', data.data)
          const result = data.data;
          const { companyId, id } = result;
          this.getCompanyPermissions(companyId, id);
        }
      })
    },
    /* 获取公司权限 */
    getCompanyPermissions(companyId, userId) {
      this.$api.getCompanyRole(companyId).then(({ data }) => {
        console.log('CompanyPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('CompanyPermissions', data.data)
          this.getUserPermissions(userId)
        }
      })
    },
    /* 获取个人权限 */
    getUserPermissions(userId) {
      this.$api.permissions(userId).then(({ data }) => {
        console.log('UserPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('UserPermissions', data.data)
          this.$router.push({ name: 'Home' })
        }
      })
    },
    /* 获取验证码 */
    getSmsCode() {
      if (this.hasGetSms) {
        return
      }
      if (!this.logObj.phone) {
        ToastOnlyText(t('loginMsg.errorMsg.phoneNub'))
        return
      }
      if (!phoneNumCheck(this.logObj.phone)) {
        ToastOnlyText(t('loginMsg.errorMsg.checkPhone'))
        return
      }
      let conut = 60;
      this.$api.SMScode({ phone: this.logObj.phone }).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.hasGetSms = true;
          const Timer = setInterval(() => {
            conut--;
            this.smsCode = `${conut}s`;
            if (conut < 1) {
              this.smsCode = t('loginMsg.getSmsCode');
              this.hasGetSms = false;
              clearInterval(Timer);
            }
          }, 1000);
          ToastOnlyText(t('loginMsg.smsSuccess'))
        }
      });
    },
    phoneLogon() {
      if (!this.logObj.phone) {
        ToastOnlyText(t('loginMsg.errorMsg.phoneNub'))
        return
      }
      if (!phoneNumCheck(this.logObj.phone)) {
        ToastOnlyText(t('loginMsg.errorMsg.checkPhone'))
        return
      }
      if (!this.logObj.smscode) {
        ToastOnlyText(t('loginMsg.errorMsg.smsCodeErr'))
        return
      }
      const phoneObj = {
        phone: this.logObj.phone,
        code: this.logObj.smscode
      };
      this.loginLoading.show('登录中...')
      this.$api.SMSVertify(phoneObj).then((res) => {
        console.log(res);
        this.loginLoading.hide()
        const data = res.data;
        if (data.code === 0) {
          sessionStorage.setItem('token', res.headers.token);
          sessionStorage.setItem('loginData', JSON.stringify(data.data));
          this.$store.commit('setUserLoginData', data.data)
          const result = data.data;
          const { companyId, id } = result;
          this.getCompanyPermissions(companyId, id);
        }
      });
    },
    /* 切换语言 */
    changeLoginWay(str) {
      if (str === 'account') {
        this.accountLogin = true
      } else {
        this.accountLogin = false
      }
    },
    showActive() {
      this.$createActionSheet({
        data: [
          {
            content: '中文',
            local: 'zh'
          },
          {
            content: 'English',
            local: 'en'
          }
        ],
        onSelect: (item) => {
          console.log(item)
          this.localLanguge = item.content
        }
      }).show()
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
