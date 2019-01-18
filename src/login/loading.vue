<template>
  <div class="wraper">
    <transition name='slide-fade'>
      <div class="card ad">
        <!-- 摩融电池检测管理平台 -->
        <img :src="LogoSrc" alt="">
        电池智能监控
        <!-- <div class="adinfo">
         摩融电池检测管理平台
        </div> -->
      </div>
    </transition>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data() {
    return {
      LogoSrc: require('../assets/img/logo.png')
    };
  },

  components: {},

  mounted() {
    setTimeout(() => {
      // const storageAccPwd = localStorage.getItem('accPwd');
      // if (storageAccPwd) {
      //   const local = JSON.parse(storageAccPwd);
      //   this.doAccountLogin(local)
      // } else {
      //   this.$router.push({ name: 'login' })
      this.$router.push({ name: 'login' })
      // }
    }, 3000)
  },

  methods: {
    doAccountLogin(local) {
      this.$api.login(local).then(res => {
        const data = res.data;
        if (data.code === 0) {
          localStorage.setItem('accPwd', JSON.stringify(local))
          sessionStorage.setItem('token', res.headers.token);
          sessionStorage.setItem('loginData', JSON.stringify(data.data));
          this.$store.commit('setUserLoginData', data.data)
          const result = data.data;
          const { companyId, id } = result;
          this.getCompanyPermissions(companyId, id);
        }
      })
    },
    /* 获取公司权限 */
    getCompanyPermissions(companyId, userId) {
      this.$api.getCompanyRole(companyId).then(({ data }) => {
        console.log('CompanyPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('CompanyPermissions', data.data)
          this.getUserPermissions(userId)
        }
      })
    },
    /* 获取个人权限 */
    getUserPermissions(userId) {
      this.$api.permissions(userId).then(({ data }) => {
        console.log('UserPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('UserPermissions', data.data)
          this.$router.push({ name: 'Home' })
        }
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.wraper
  height 100%
.card
  height 100%
  &.ad
    background-color $color-project-blue
    text-align center
    color #ffffff
    font-size 18px
    box-sizing border-box
    padding-top 100px
    img
      display block
      margin 0 auto
      width 160px
      height auto
      margin-bottom 100px
</style>
