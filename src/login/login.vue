<template>
  <div class="loginPage">
    <transition name='slide-fade'>
      <div class="card ad" v-show="showAD">
        摩融电池检测管理平台
        <!-- <div class="adinfo">
          摩融电池检测管理平台1
        </div> -->
      </div>
    </transition>
    <transition name='slide-fade'>
      <div class="card loginCenter" v-show="!showAD">
        <!-- <cube-button @click="signIn">test login</cube-button> -->
        <!-- <cube-button @click="signIn" type="submit">Submit Button</cube-button> -->
        <div class="logForm">
          <div class="account">
            <cube-input v-model="logObj.account" placeholder="请输入账号"></cube-input>
            <cube-validator v-model="valid" :model="logObj.account" :rules="accountRules" :messages="messages"></cube-validator>
          </div>
          <div class="password">
            <cube-input v-model="logObj.password" type='password' placeholder="请输入密码"></cube-input>
            <cube-validator v-model="valid1" :model="logObj.password" :rules="passwordRules" :messages="messages"></cube-validator>
          </div>
          <cube-button @click="signIn" type="submit">Submit Button</cube-button>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'login',
  data () {
    return {
      valid: undefined,
      valid1: undefined,
      accountRules: {
        required: true,
        type: 'email',
        pattern: /.com$/,
        custom: (val) => {
          return val.length >= 12
        }
      },
      passwordRules: {
        required: true,
        type: 'password',
        // pattern: /.com$/,
        custom: (val) => {
          return val.length >= 6
        }
      },
      messages: {
        pattern: 'The E-mail suffix need to be com.',
        custom: 'The E-mail need contain at least 12 characters.'
      },
      logObj: {},
      showAD: true
    }
  },
  mounted () {
    setTimeout(() => {
      this.showAD = false
    }, 3000)
  },
  methods: {
    signIn () {
      this.$router.push('home')
    }
  }

}

</script>
<style lang='stylus' scoped>
.loginPage
  width 100%
  height 100%
  .card
    height 100%
    &.ad
      background-color $color-project-blue
      text-align center
      color #ffffff
      font-size 18px
      padding-top 100px
    &.loginCenter
      background-color #ffffff
      padding 0 5vw
      .logForm
        margin 20vh auto 0
        .account
          margin-bottom 15px
        .password
          margin-bottom 60px
</style>
