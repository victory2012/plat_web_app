<template>
  <div class="userContent">
    <top-header fixed>
      <div slot="mainTab">
        <p>{{title}}</p>
      </div>
    </top-header>
    <div class="userAvats">
      <cube-scroll ref="scroll" :data="items">
      </cube-scroll>
      <div class="userInfo">
        <div>
          <img src="../../assets/img/user.png">
        </div>
        <div>
          <p>{{nickname}}</p>
        </div>
      </div>
      <div class="operate">
        <div>
          <cube-button icon="cubeic-smile" @click="personalData" outline><span>个人资料</span><i class="cubeic-arrow"></i></cube-button>
        </div>
        <div>
          <cube-button icon="cubeic-vip" @click="changePassword" outline><span>修改密码</span><i class="cubeic-arrow"></i></cube-button>
        </div>
        <div>
          <cube-button icon="cubeic-close" @click="logout" outline>退出登录</cube-button>
        </div>
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
  name: '',
  props: [''],
  data() {
    return {
      items: [],
      nickname: '昵称',
      title: '个人资料'
    };
  },

  mounted() { },

  methods: {
    handleBack(e) {
      console.log('handleBack');
      e.stopPropagation();
    },
    right(e) {
      console.log('right');
      e.stopPropagation();
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
        confirmBtn: {
          text: '确定退出',
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
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: '退出成功'
          }).show();
        }
      }).show();
    }
  }
};
</script>
<style lang='stylus' scoped>
@import '../../theme.styl';

.userContent {
  box-sizing: border-box;
  padding-top: $header-height;
  padding-bottom: $footer-height;
  height: 100vh;

  // overflow hidden
  .userAvats {
    overflow: auto;

    .userInfo {
      width: 100%;
      height: 4.5rem;
      background: #f2f2f2;
      position: relative;

      div:nth-child(2) {
        line-height: 2.7rem;
      }

      div {
        float: left;
        margin-left: 0.8rem;
        margin-top: 1rem;

        img {
          width: 100px;
          height: 100px;
        }
      }
    }

    .item {
      height: 50px;
    }

    .operate {
      div {
        .cube-btn {
          text-align: left;
        }

        .cubeic-arrow {
          margin-left: 6rem;
        }
      }
    }
  }
}
</style>
