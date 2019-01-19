<template>
  <div>
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">创建用户</div>
    </top-header>
    <div class="creteWraper">
      <cube-scroll>
        <div class="personalData_title photo">
          <p>企业Logo</p>
          <cube-upload ref="upload" :action="action" :simultaneous-uploads="1" :process-file="processFile" @file-submitted="fileSubmitted" class="upload" />
        </div>
        <div class="personalData_title">
          <p>昵称</p>
          <input class="input" v-model="userArr.companyName" type="text">
        </div>
        <div class="personalData_title">
          <p>用户名</p>
          <input class="input" v-model="userArr.companyName" type="text">
        </div>
        <div class="personalData_title">
          <p>企业名称</p>
          <input class="input" v-model="userArr.nickName" type="text">
        </div>
        <div class="personalData_title">
          <p>手机号码</p>
          <input class="input" v-model="userArr.phone" type="text">
        </div>
        <div class="personalData_title">
          <p>企业地址</p>
          <input class="input" v-model="userArr.accountType" type="text">
        </div>
        <div class="personalData_title">
          <p>企业区域</p>
          <input class="input" v-model="userArr.layerName" type="text">
        </div>
        <div class="personalData_title">
          <p>邮箱</p>
          <input class="input" v-model="userArr.email" type="text">
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  name: '',
  props: [''],
  data() {
    return {
      userArr: {},
      action: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      }
    };
  },
  components: {
    topHeader
  },
  mounted() { },

  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    },
    processFile(file, next) {
      // compress(file, {
      //   compress: {
      //     width: 1600,
      //     height: 1600,
      //     quality: 0.5
      //   }
      // }, next)
    },
    fileSubmitted(file) {
      file.base64Value = file.file.base64
    }
  }

}

</script>
<style lang='' scoped>
</style>
