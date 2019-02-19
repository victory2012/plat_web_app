<template>
  <div class="userContent">
    <top-header fixed>
      <div slot="mainTab">
        <p>{{title}}</p>
      </div>
    </top-header>
    <div class="userAvats">
      <div class="userInfo">
        <div>
          <img :src="userInfomation.photo || defaultAvata">
        </div>
        <div>
          <p>{{userInfomation.nickName}}</p>
        </div>
      </div>
      <div class="operate">
        <div class="item" @click="personalData">
          <p>
            <span class="iconfont icon-iconfontzhizuobiaozhun0252"></span>
            <span>个人资料</span>
          </p>
          <span class="iconfont icon-right"></span>
        </div>
        <div @click="changePassword" class="item">
          <p>
            <span class="iconfont icon-xiugaimima"></span>
            <span>修改密码</span>
          </p>
          <span class="iconfont icon-right"></span>
        </div>
        <!-- <div>
          <cube-button icon="cubeic-close" @click="logout" outline>退出登录</cube-button>
        </div> -->
      </div>
      <div class="logout">
        <p @click="logout"><span class="iconfont icon-close"></span>退出登录</p>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import topHeader from '@/components/header/header';
import photoSagema from '@/api/photoSagma'
export default {
  components: {
    topHeader
  },
  data() {
    return {
      defaultAvata: require('@/assets/img/user.png'),
      items: [],
      nickname: '昵称',
      title: '个人资料'
    };
  },
  computed: {
    ...mapGetters({
      userInfomation: 'getLoginData'
    })
  },
  mounted() {
    if (this.userInfomation.photo && this.userInfomation.photo.toString().indexOf(photoSagema) < 0) {
      this.userInfomation.photo = `${photoSagema}/${this.userInfomation.photo}`
    }
  },

  methods: {
    getUserInfo() {
      this.$api.getUserMsg().then(({ data }) => {
        if (data.code === 0) {
          this.$store.commit('setUserLoginData', data.data)
        }
      })
    },
    personalData() {
      this.$router.push({ name: 'personalData' });
    },
    changePassword() {
      this.$router.push({ name: 'changePassword' });
    },
    logout() {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: '确定退出此账号码？',
        confirmBtn: {
          text: '确定',
          active: true,
          disabled: false,
          href: 'javascript:;'
        },
        cancelBtn: {
          text: '取消',
          active: false,
          disabled: false,
          href: 'javascript:;'
        },
        onConfirm: () => {
          console.log('11');
          this.$api.logOut().then(({ data }) => {
            if (data.code === 0) {
              this.$router.push('/login')
              localStorage.removeItem('accPwd')
              this.$store.commit('setRouterIndex', 0)
              sessionStorage.clear()
            }
          })
        }
      }).show();
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../theme.styl'

.userContent
  box-sizing border-box
  padding-top $header-height
  padding-bottom $footer-height
  height 100vh
  // overflow hidden
  .userAvats
    overflow auto
    .userInfo
      width 100%
      height 4.5rem
      background #f2f2f2
      position relative
      div:nth-child(2)
        line-height 2.7rem
      div
        float left
        margin-left 0.8rem
        margin-top 1rem
        img
          width 100px
          height 100px
    .operate
      padding 20px 15px
      margin-bottom 60px
      .item
        line-height 40px
        padding 0 10px
        SetBorder(1px, bottom)
        display flex
        justify-content space-between
        &:nth-child(1)
          SetBorder(1px, top)
        p
          .iconfont
            color $color-project-blue
            margin-right 10px
          span
            vertical-align middle
    .logout
      padding 0 60px
      p
        line-height 40px
        height 40px
        background #ff5050
        color #ffffff
        text-align center
        border-radius 5px
        .iconfont
          margin-right 10px
</style>
