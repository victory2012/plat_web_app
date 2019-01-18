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
      <div class="personalData_title photo">
        <p>头像</p>
        <cube-upload ref="upload" :action="action" :simultaneous-uploads="1" :process-file="processFile" @file-submitted="fileSubmitted" class="upload" />
      </div>
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
      <!-- <cube-form :model="model" @validate="validateHandler" @submit="submitHandler">
        <cube-form-group>
          <cube-form-item v-for="item in fields" :key="item.modelKey" :field="item"></cube-form-item>
          <cube-form-item :field="fields[1]"></cube-form-item>
        </cube-form-group>
        <cube-form-group>
          <cube-button type="submit">Submit</cube-button>
        </cube-form-group>
      </cube-form> -->
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import topHeader from '@/components/header/header';
// import utils from '@/utils/utils'
import { ToastOnlyText } from '@/utils/Toast'
import { phoneNumCheck, emailCheck } from '@/utils/check'
export default {
  components: {
    topHeader
  },
  data() {
    return {
      editInfo: false,
      userArr: {},
      model: {},
      // fields: [
      //   {
      //     type: 'input',
      //     modelKey: 'nickName',
      //     label: '昵称',
      //     props: {
      //       placeholder: '请输入昵称'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   },
      //   {
      //     type: 'input',
      //     modelKey: 'accountIden',
      //     label: '账户身份',
      //     props: {
      //       placeholder: '请输入账户身份'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   },
      //   {
      //     type: 'input',
      //     modelKey: 'companyIden',
      //     label: '企业身份',
      //     props: {
      //       placeholder: '请输入企业身份'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   },
      //   {
      //     type: 'input',
      //     modelKey: 'companyName',
      //     label: '企业名称',
      //     props: {
      //       placeholder: '请输入企业名称'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   },
      //   {
      //     type: 'input',
      //     modelKey: 'phone',
      //     label: '手机号码',
      //     props: {
      //       placeholder: '请输入手机号码'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   },
      //   {
      //     type: 'input',
      //     modelKey: 'email',
      //     label: '邮箱',
      //     props: {
      //       placeholder: '请输入邮箱'
      //     },
      //     rules: {
      //       required: true
      //     }
      //   }
      // ],
      value: '123',
      action: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      },
      redact: '编辑',
      title: '个人信息'
    }
  },
  computed: {
    ...mapGetters({
      saveObj: 'getLoginData'
    })
  },
  mounted() {
    // this.userArr = Object.assign({}, this.saveObj)
    // this.userArr.accountType = utils.accountType(this.userArr.type);
  },
  methods: {
    handleBack() {
      this.$router.push({ name: 'HomeMe' })
    },
    saveEdit() {
      let { nickName, phone, email } = this.userArr
      let userNickname = this.saveObj.nickName;
      let userPhone = this.saveObj.phone;
      let userEmail = this.saveObj.email;
      if (!nickName) {
        return
      }
      if (!email || emailCheck(email)) {
        return
      }
      if (!phone || !phoneNumCheck(phone)) {
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
      if (JSON.stringify(editMsg) !== '{}') {
        this.changeUserFun(editMsg)
      } else {
        this.editInfo = false
      }
      // this.changeUserFun()
      console.log('this.list', editMsg)
    },
    changeUserFun(userObj) {
      this.$api.changeUserMsg(userObj).then(({ data }) => {
        if (data.code === 0) {
          this.editInfo = false
          ToastOnlyText('修改成功')
        }
      });
    },
    editUserInfo() {
      this.editInfo = true
    },
    validateHandler(data) {
      console.log('validateHandler', data)
    },
    submitHandler(data) {
      console.log('submitHandler', data)
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
