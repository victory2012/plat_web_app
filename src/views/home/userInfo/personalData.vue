<template>
  <div class="content">
    <top-header title="个人资料" fixed>
      <div @click="handleBack" slot="left">
        <i class="cubeic-back"></i>
      </div>
      <div slot="mainTab">
        <p>{{title}}</p>
      </div>
      <div @click="redactMessage()" slot="right">
        <span>{{redact}}</span>
      </div>
    </top-header>
    <div class="message">
      <div class="personalData_title photo">
        <p>头像</p>
        <cube-upload ref="upload" :action="action" :simultaneous-uploads="1" :process-file="processFile" @file-submitted="fileSubmitted" class="upload" />
      </div>
      <div v-for="values in list" :key="values.id" class="personalData_title">
        <p>{{values.title}}</p>
        <input class="input" v-model="values.value" type="text">
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
import topHeader from '@/components/header/header';

export default {
  components: {
    topHeader
  },
  data() {
    return {
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
      list: [{
        id: Math.random(),
        title: '昵称',
        test: 'true',
        value: '测试111',
        edit: false
      }, {
        id: Math.random(),
        title: '账户身份',
        test: 'true',
        value: '测试2222222222222',
        edit: true
      }, {
        id: Math.random(),
        title: '企业身份',
        test: 'true',
        value: '测试22266',
        edit: true
      }, {
        id: Math.random(),
        title: '企业名称',
        test: 'true',
        value: '测试2224',
        edit: true
      }, {
        id: Math.random(),
        title: '手机号码',
        test: 'true',
        value: '测试22233',
        edit: false
      }, {
        id: Math.random(),
        title: '邮箱',
        test: 'true',
        value: '测试33',
        edit: false
      }],
      value: '123',
      action: {
        target: '//jsonplaceholder.typicode.com/photos/',
        prop: 'base64Value'
      },
      saveChecked: true,
      redact: '编辑',
      title: '个人信息'
    }
  },
  methods: {
    handleBack() {
      this.$router.push({ name: 'HomeMe' })
    },
    redactMessage() {
      if (this.redact === '编辑') {
        this.redact = '保存';
      } else if (this.redact === '保存') {
        this.redact = '编辑';
      }
      this.saveChecked = !this.saveChecked;
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
      // border-bottom 1px solid #f2f2f2
      line-height 40px
      margin-bottom 15px
      p
        flex 0 0 130px
        height 34px
        border-bottom 1px solid #f2f2f2
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
