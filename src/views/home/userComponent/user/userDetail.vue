<template>
  <div class="content">
    <top-header fixed>
      <div @click="handleBack" slot="left">
        <i class="cubeic-back"></i>
      </div>
      <div slot="mainTab">
        <p>{{title}}</p>
      </div>
      <div slot="right">
        <span @click="editUserInfo" v-show="!editInfo">编辑</span>
        <span @click="saveEdit" v-show="editInfo">保存</span>
      </div>
    </top-header>
    <div class="message">
      <upload-img @urlCallback="getUserAvtar" :status="!editInfo" :imgSrc="userArr.photoUrl" class="userAvtar" label="用户头像"></upload-img>
      <div class="personalData_title">
        <p>昵称</p>
        <input class="input" :disabled="!editInfo" v-model="userArr.nickName" type="text">
      </div>
      <div class="personalData_title">
        <p>账户身份</p>
        <input class="input" :disabled="true" v-model="userArr.accountType" type="text">
      </div>
      <div class="personalData_title">
        <p>企业身份</p>
        <input class="input" :disabled="true" v-model="userArr.layerName" type="text">
      </div>
      <div class="personalData_title">
        <p>企业名称</p>
        <input class="input" :disabled="true" v-model="userArr.companyName" type="text">
      </div>
      <div class="personalData_title">
        <p>手机号码</p>
        <input class="input" :disabled="!editInfo" v-model="userArr.phone" type="text">
      </div>
      <div class="personalData_title">
        <p>邮箱</p>
        <input class="input" :disabled="!editInfo" v-model="userArr.email" type="text">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import topHeader from '@/components/header/header';
import uploadImg from '@/components/upload/upload'
import utils from '@/utils/utils'
import { phoneNumCheck, emailCheck } from '@/utils/check'
export default {
  components: {
    topHeader,
    uploadImg
  },
  data() {
    return {
      editInfo: false,
      userArr: {},
      title: '用户详情'
    }
  },
  computed: {
    ...mapGetters({
      saveObj: 'getUserDetail'
    })
  },
  mounted() {
    this.userArr = Object.assign({}, this.saveObj)
    this.userArr.accountType = utils.accountType(this.userArr.type);
  },
  methods: {
    handleBack() {
      this.$router.push({ name: 'HomeUser' })
    },
    getUserAvtar(url) {
      this.userAvtar = url
      console.log(url)
    },
    saveEdit() {
      let { nickName, phone, email } = this.userArr
      let userNickname = this.saveObj.nickName;
      let userPhone = this.saveObj.phone;
      let userEmail = this.saveObj.email;
      if (!nickName) {
        this.$Toast('nickName')
        return
      }
      if (email && !emailCheck(email)) {
        this.$Toast('email')
        return
      }
      if (!phone || !phoneNumCheck(phone)) {
        this.$Toast('phone')
        return
      }
      const editMsg = {};
      if (nickName !== userNickname) {
        editMsg.nickName = nickName
      }
      if (phone !== userPhone) {
        editMsg.phone = phone
      }
      if (email !== userEmail) {
        editMsg.email = email
      }
      if (this.userAvtar) {
        editMsg.photo = this.userAvtar
      }
      if (JSON.stringify(editMsg) !== '{}') {
        this.changeUserFun(editMsg)
      } else {
        this.editInfo = false
      }
    },
    changeUserFun(editMsg) {
      this.$api.modifyUserPwd(this.saveObj.id, editMsg).then(({ data }) => {
        if (data.code === 0) {
          this.$Toast('修改成功')
        }
      });
    },
    editUserInfo() {
      this.editInfo = true
    }
  }
}
</script>

<style lang='stylus' scoped>
.content
  box-sizing border-box
  padding-top $header-height
  padding-bottom $footer-height
  height 100vh
  width 100%
  .message
    margin 15px auto 0
    padding 0 15px
    .userAvtar
      border-bottom 1px solid #f2f2f2
      margin-bottom 15px
    .personalData_title
      display flex
      border-bottom 1px solid #f2f2f2
      line-height 40px
      justify-content space-between
      margin-bottom 15px
      p
        flex 0 0 130px
        height 34px
      .input
        flex 1
        height 34px
        outline none
        text-align right
        &.edit
          SetAllBorder(1px)
    .photo
      line-height 80px
</style>
