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
        <p>账号:</p>
        <cube-input class="input" placeholder="请输入账号" v-model="submit.account"></cube-input>
      </div>
      <div class="password flex">
        <p>密码:</p>
        <cube-input class="input" type='password' placeholder="请输入密码" v-model="submit.password"></cube-input>
      </div>
    </div>
    <cube-button type="submit" class="SubmitBtn" @click="submitFrom()">Submit Button</cube-button>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'

export default {
  data () {
    return {
      submit: { account: '123', password: 'iii' },
      title: '修改密码'
    }
  },
  components: {
    topHeader
  },
  methods: {
    handleBack () {
      this.$router.push({ name: 'HomeMe' });
    },
    submitFrom () {
      this.$createDialog({
        type: 'alert',
        title: '修改成功',
        icon: 'cubeic-good'
      }).show()
    }
  }
}
</script>

<style lang='stylus' scoped>
@import './personalData.styl';

.changes {
  box-sizing: border-box;
  padding-top: $header-height;
  padding-bottom: $footer-height;
  height: 100vh;
}

.changePassword {
  margin: 60px auto 0;

  .flex {
    display: flex;

    p {
      flex: 0 0 55px;
      text-align: center;
      line-height: 40px;
    }

    .input {
      width: 7.5rem;
    }
  }

  .account {
    margin-bottom: 15px;
  }

  .password {
    margin-bottom: 40px;
  }
}

.SubmitBtn {
  width: 7.5rem;
  margin: 0 auto;
}
</style>
