<template>
  <div>
    <div class="account flex">
      <p>{{$t('loginMsg.accountPlace')}}:</p>
      <cube-input class="input" v-model="logObj.account" :placeholder="$t('loginMsg.errorMsg.account')"></cube-input>
    </div>
    <div class="password flex">
      <p>{{$t('loginMsg.passwordPlace')}}:</p>
      <cube-input class="input" v-model="logObj.password" type='password' :placeholder="$t('loginMsg.errorMsg.password')"></cube-input>
    </div>
    <cube-button @click="accoundSignIn" type="submit">{{$t('loginMsg.loginBtn')}}</cube-button>
  </div>
</template>

<script>
import mixin from '../mixin'
export default {
  data() {
    return {
    };
  },
  mixins: [mixin],
  methods: {
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
.tagWarp
  display flex
  margin-top 30px
</style>
