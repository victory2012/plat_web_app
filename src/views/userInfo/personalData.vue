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
      <div v-for="(values,index) in list" :key="index" class="personalData_title">
        <p>{{values.title}}</p>
        <cube-input v-model="values.value" :disabled='values.checked ? values.checked : saveChecked ' class="input"></cube-input>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';

export default {
  components: {
    topHeader
  },
  data () {
    return {
      list: [{
        title: '昵称',
        test: 'true',
        value: '测试111',
        checked: false
      }, {
        title: '账户身份',
        test: 'true',
        value: '测试2222222222222',
        checked: true
      }, {
        title: '企业身份',
        test: 'true',
        value: '测试22266',
        checked: true
      }, {
        title: '企业名称',
        test: 'true',
        value: '测试2224',
        checked: true
      }, {
        title: '手机号码',
        test: 'true',
        value: '测试22233',
        checked: false
      }, {
        title: '邮箱',
        test: 'true',
        value: '测试33',
        checked: false
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
    handleBack () {
      this.$router.push({ name: 'HomeMe' })
    },
    redactMessage () {
      if (this.redact === '编辑') {
        this.redact = '保存';
      } else if (this.redact === '保存') {
        this.redact = '编辑';
      }
      this.saveChecked = !this.saveChecked;
    },
    processFile (file, next) {
      // compress(file, {
      //   compress: {
      //     width: 1600,
      //     height: 1600,
      //     quality: 0.5
      //   }
      // }, next)
    },
    fileSubmitted (file) {
      file.base64Value = file.file.base64
    }
  }
}
</script>

<style lang='stylus' scoped>
.content {
  box-sizing: border-box;
  padding-top: $header-height;
  padding-bottom: $footer-height;
  height: 100vh;
  width: 100%;

  .message {
    width: 100%;
    margin: 15px auto 0;

    .personalData_title {
      display: flex;
      border-bottom: 2px solid #f2f2f2;
      line-height: 50px;

      p {
        flex: 0 0 70px;
        text-align: left;
        margin-left: 10px;
      }

      .input, upload {
        width: 4.52rem;
        height: 50px;
        left: 3.2rem;
      }

      .upload {
        left: 5rem;
      }
    }

    .photo {
      line-height: 80px;
    }
  }
}
</style>
