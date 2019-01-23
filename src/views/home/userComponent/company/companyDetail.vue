<template>
  <div class="content">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab">企业详情</div>
      <div slot="right">
        <span @click="editCompanyInfo" v-show="!editInfo">编辑</span>
        <span @click="saveEdit" v-show="editInfo">保存</span>
      </div>
    </top-header>
    <div class="message">
      <upload-img @urlCallback="getUserAvtar" :status="editInfo" class="userAvtar" :imgSrc="company.logo" label="企业logo"></upload-img>
      <div class="personalData_title">
        <p>企业名称</p>
        <input class="input" placeholder="企业名称" :disabled="!editInfo" v-model="company.name" type="text">
      </div>
      <div class="personalData_title">
        <p>企业管理员密码</p>
        <input class="input" placeholder="企业管理员密码" :disabled="!editInfo" v-model="company.password" type="password">
      </div>

      <div class="personalData_title">
        <p>企业地址</p>
        <input class="input" placeholder="企业地址" :disabled="!editInfo" v-model="company.address" type="text">
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import topHeader from '@/components/header/header';
import uploadImg from '@/components/upload/upload'
export default {
  data() {
    return {
      editInfo: false,
      userArr: {}
    };
  },
  components: {
    topHeader,
    uploadImg
  },
  computed: {
    ...mapGetters({
      company: 'getCompanyDetail'
    })
  },
  mounted() { },
  methods: {
    back() {
      this.$router.push({
        path: '/home/user',
        query: {
          show: 'company'
        }
      })
    },
    getUserAvtar(url) {
      this.userAvtar = url
      console.log(url)
    },
    editCompanyInfo() {
      this.editInfo = true
    },
    saveEdit() { }
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
      padding-bottom 10px
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
