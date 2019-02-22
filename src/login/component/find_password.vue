<template>
  <div>
    <div v-show="!newPassword" class="account flex">
      <p>{{$t('loginMsg.phone')}}:</p>
      <cube-input class="input" v-model="logObj.phone" :maxlength='11' :placeholder="$t('loginMsg.errorMsg.phoneNub')"></cube-input>
    </div>
    <div v-show="!newPassword" class="password flex">
      <p>{{$t('loginMsg.smsCode')}}:</p>
      <cube-input class="input" v-model="logObj.smscode" :placeholder="$t('loginMsg.errorMsg.smsCodeErr')"></cube-input>
      <div @click="getSmsCode" :class="{'disable': hasGetSms}" class="getSmsBtn">{{smsCode}}</div>
    </div>
    <div v-show="newPassword" class="account flex">
      <p>输入密码:</p>
      <cube-input class="input" v-model="password.newPassword" type='password'></cube-input>
    </div>
    <div v-show="newPassword" class="password flex">
      <p>确认密码:</p>
      <cube-input class="input" v-model="password.repeatPassword" type='password'></cube-input>
    </div>
    <cube-button v-show="!newPassword" type="submit" @click="nextStep">下一步</cube-button>
    <cube-button v-show="newPassword" type="submit" @click="sureBtn">确认</cube-button>
  </div>
</template>

<script>
import mixin from '../mixin'
import t from '@/utils/translate';
export default {
  data() {
    return {
      password: {},
      newPassword: false,
      smsCode: t('loginMsg.getSmsCode'),
      hasGetSms: false // 是否已经获取了短信验证码
    };
  },
  mixins: [mixin],
  methods: {
    nextStep() {
      this.newPassword = true
    },
    sureBtn() { }
  }
}

</script>
<style lang='stylus' scoped>
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
</style>
