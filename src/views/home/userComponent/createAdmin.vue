<template>
  <div class="add">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">创建管理员</div>
    </top-header>
    <div class="creteWraper">
      <cube-scroll>
        <upload-img @urlCallback="getCompanyAvtar" class="userAvtar" label="公司logo"></upload-img>
        <div class="personalData_title">
          <p>昵称</p>
          <input class="input" placeholder='请填写昵称' v-model="companyArr.nickName" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>账号</p>
          <input class="input" placeholder='请填写账号' v-model="companyArr.account" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>密码</p>
          <input class="input" placeholder='请填写密码' v-model="companyArr.password" type="password">
        </div>
        <div class="personalData_title">
          <p><span>*</span>企业名称</p>
          <input class="input" placeholder='请填写企业名称' v-model="companyArr.companyName" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>手机号码</p>
          <input class="input" placeholder='请填写手机号码' v-model="companyArr.phone" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>企业地址</p>
          <input class="input" placeholder='请填写企业地址' v-model="companyArr.address" type="text">
        </div>
        <div class="personalData_title">
          <p><span>*</span>企业区域</p>
          <div class="input">
            <cube-select placeholder='请选择企业区域' v-model="companyArr.mapType" :options="options" />
          </div>
          <!-- <input class="input" v-model="companyArr.mapType" type="text"> -->
        </div>
        <div class="personalData_title">
          <p>邮箱</p>
          <input class="input" placeholder='请填写邮箱' v-model="companyArr.email" type="text">
        </div>
        <div class="submitBtn">
          <p @click="doCreateAdmin">确定</p>
        </div>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import uploadImg from '@/components/upload/upload'
import { mapGetters } from 'vuex';
import topHeader from '@/components/header/header';
import t from '@/utils/translate';
import { phoneNumCheck, emailCheck, passwordCheck, accountCheck, spaceCheck } from '@/utils/check.js'

export default {
  name: '',
  props: [''],
  data() {
    return {
      companyArr: {},
      companyAvtar: '', // 公司头像
      options: [
        {
          value: 1,
          text: '国内'
        },
        {
          value: 2,
          text: '国际'
        }
      ]
    };
  },
  components: {
    topHeader,
    uploadImg
  },
  computed: {
    ...mapGetters({
      userData: 'getLoginData'
    })
  },
  mounted() {
  },
  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    },
    getCompanyAvtar(url) {
      console.log('getCompanyAvtar', url);
      this.companyAvtar = url
    },
    doCreateAdmin() {
      const { account, password, phone, email, companyName, mapType, nickName, address } = this.companyArr
      if (
        !account ||
        !password ||
        !phone ||
        !companyName ||
        !mapType ||
        !address) {
        this.$Toast('请填写完整');
        return
      }
      if (!spaceCheck(password)) {
        this.$Toast('密码中含有空格');
        return
      }
      if (!phoneNumCheck(phone)) {
        this.$Toast('手机号有误');
        return
      }
      if (!accountCheck(account)) {
        this.$Toast('账号格式有误，由4-20位数字、字母组成');
        return
      }
      if (!passwordCheck(phone)) {
        this.$Toast('密码格式有误，由6-20位数字、字母、特殊符号组成');
        return
      }
      if (email && !emailCheck(email)) {
        this.$Toast('邮箱格式不正确');
        return
      }
      const params = {
        account,
        password,
        phone,
        companyName,
        mapType,
        address,
        isCreator: 1,
        permissions: '{}'
      }
      if (nickName) {
        params.nickName = nickName
      }
      if (email) {
        params.email = email
      }
      if (this.companyAvtar) {
        params.photo = this.companyAvtar
      }
      console.log(params)
      if (this.userData.layerName === '平台') {
        this.createManufacturerFun(params)
      }
      if (this.userData.type === 2 && this.userData.layerName === '生产企业') {
        this.createPurchaserFun(params)
      }
    },
    /* 添加生产企业管理员 方法 */
    createManufacturerFun(params) {
      this.$api.createCompany(params).then(({ data }) => {
        console.log(data);
        if (data.code === 0) {
          this.$Toast({
            message: t('successTips.addSuccess') // "创建成功"
          });
        }
      });
    },
    /* 添加采购企业管理员 方法 */
    createPurchaserFun(params) {
      this.$api.createPurchaser(params).then(({ data }) => {
        console.log(data);
        if (data.code === 0) {
          this.$Toast({
            message: t('successTips.addSuccess') // "创建成功"
          });
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.add
  height 100%
  box-sizing border-box
  padding $header-height + 5px 15px $footer-height
  .creteWraper
    // padding-top 10px
    height 100%
    box-sizing border-box
    .userAvtar
      border-bottom 1px solid #f2f2f2
      padding-bottom 10px
    .personalData_title
      display flex
      justify-content space-between
      height 30px
      line-height 30px
      padding 15px 0 10px
      border-bottom 1px solid #f2f2f2
      &>p
        flex 0 0 120px
        span
          color red
          font-size 18px
          vertical-align middle
      input
        outline none
      .input
        flex 1
        .cube-select
          padding-left 0
          padding-right 0
        .cube-select::after
          border none
      &.photo
        height 80px
        line-height 80px
        padding-bottom 10px
    .submitBtn
      padding 0 60px
      margin-top 30px
      height 120px
      p
        line-height 40px
        height 40px
        background $color-project-blue
        color #ffffff
        text-align center
        border-radius 5px
</style>
