<template>
  <div class="loginPage">
    <transition name='slide-fade'>
      <div class="card ad" v-show="showAD">
        <!-- 摩融电池检测管理平台 -->
        <img :src="LogoSrc" alt="">
        电池智能监控
        <!-- <div class="adinfo">
         摩融电池检测管理平台
        </div> -->
      </div>
    </transition>
    <transition name='slide-fade'>
      <div class="card loginCenter" v-show="!showAD">
        <div @click="showActive" class="languageWarp">
          <p class="languageCenter">{{localLanguge}}<i class="iconfont icon-downarrow"></i></p>
        </div>
        <div class="logo">
          <img :src="LogoSrc" alt="">
        </div>
        <div class="logForm">
          <div v-show="accountLogin" class="account flex">
            <p>账号:</p>
            <cube-input class="input" v-model="logObj.account" placeholder="请输入账号"></cube-input>
          </div>
          <div v-show="accountLogin" class="password flex">
            <p>密码:</p>
            <cube-input class="input" v-model="logObj.password" type='password' placeholder="请输入密码"></cube-input>
          </div>
          <div v-show="!accountLogin" class="account flex">
            <p>手机号:</p>
            <cube-input class="input" v-model="logObj.account" placeholder="请输入手机号"></cube-input>
          </div>
          <div v-show="!accountLogin" class="password flex">
            <p>验证码:</p>
            <cube-input class="input" v-model="logObj.password" type='password' placeholder="请输入验证码"></cube-input>
            <div class="getSmsBtn">{{getSmsCode}}</div>
          </div>
          <cube-button @click="signIn" type="submit">Submit Button</cube-button>
          <div class="tagWarp">
            <p @click="changeLoginWay('account')" :class="{'active': !accountLogin}">账号密码登录</p>
            <p @click="changeLoginWay('sms')" :class="{'active': accountLogin}" class="smsCode">验证码登录</p>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>
<script>

export default {
  name: 'login',
  data() {
    return {
      LogoSrc: require('../assets/img/logo.png'),
      localLanguge: '中文',
      accountLogin: true,
      getSmsCode: '获取验证码',
      logObj: {},
      showAD: true
    }
  },
  mounted() {
    setTimeout(() => {
      this.showAD = false
    }, 2000)
  },
  methods: {
    signIn() {
      this.$router.push('home')
    },
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
.loginPage {
  width: 100%;
  height: 100%;
  // position relative
  background-color: #ffffff;

  .card {
    height: 100%;

    &.ad {
      background-color: $color-project-blue;
      text-align: center;
      color: #ffffff;
      font-size: 18px;
      box-sizing: border-box;
      padding-top: 100px;

      img {
        display: block;
        margin: 0 auto;
        width: 160px;
        height: auto;
        margin-bottom: 100px;
      }
    }

    &.loginCenter {
      background-color: #ffffff;
      padding: 0 5vw;

      .languageWarp {
        // position absolute
        padding: 20px;
        font-size: 14px;
        text-align: right;

        .languageCenter {
          font-size: 15px;
        }

        .iconfont {
          margin-left: 5px;
          font-size: 12px;
        }
      }

      .logo {
        padding-top: 20px;
        text-align: center;

        img {
          width: 160px;
          height: auto;
        }
      }

      .logForm {
        margin: 40px auto 0;

        .flex {
          display: flex;

          p {
            flex: 0 0 80px;
            text-align: center;
            line-height: 40px;
          }

          .input {
            flex: 1;
          }

          .getSmsBtn {
            text-align: center;
            line-height: 40px;
            margin-left: 20px;
            background-color: $color-project-blue;
            color: #fff;
            padding: 0 10px;
            border-radius: 5px;
          }
        }

        .account {
          margin-bottom: 15px;
        }

        .password {
          margin-bottom: 40px;
        }

        .tagWarp {
          display: flex;
          margin-top: 30px;

          p {
            flex: 1;
            color: #9e9e9e;

            &.active {
              color: $color-project-blue;
            }

            &.smsCode {
              text-align: right;
            }
          }
        }
      }
    }
  }
}
</style>
