<template>
  <cube-scroll class="userList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="userItem" v-for="item in tableData" :key="item.id+Math.random()">
      <div class="userPhoto">
        <div class="photo">
          <img :src="item.photoUrl" />
        </div>
        <div class="infoMsg">
          <div class="name">
            <p>{{item.account}}</p>
            <p>用户名</p>
          </div>
          <div class="role">
            <p class="userRole">{{item.role}}</p>
            <p>{{item.phone}}</p>
          </div>
          <div class="companyName">
            <p>{{item.companyName}}</p>
            <p>企业名称</p>
          </div>
        </div>
      </div>
      <div class="companyInfo">
        <p>企业身份: {{item.layerName}}</p>
        <p>昵称: {{item.nickName}}</p>
        <p>邮箱: {{item.email}}</p>
      </div>
      <div class="handle">
        <p @click="doleteUser(item)">删除</p>|
        <p @click="changePermission(item)">权限</p>|
        <p @click="lookDetails(item)">详情</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import { mapGetters } from 'vuex';
import t from '@/utils/translate';
import utils from '@/utils/utils';
import photoSagema from '@/api/photoSagma'
import { ToastWithLoading } from '@/utils/Toast'
export default {
  name: '',
  props: [''],
  data() {
    return {
      pullUpLoadObj: {
        threshold: 50,
        txt: {
          more: '上拉加载更多',
          noMore: '没有更多数据'
        }
      },
      tableData: [],
      currentPage: 1
    };
  },
  computed: {
    ...mapGetters({
      storge: 'getLoginData'
    }),
    options() {
      return {
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: false
      }
    }
  },
  mounted() {
    this.getUserList()
  },

  methods: {
    /* 上拉加载更多 */
    pullingUp() {
      this.currentPage++
      if (this.currentPage > this.totalPage) {
        this.$refs.scroll.forceUpdate();
      } else {
        this.getUserList()
      }
    },
    /* 获取用户列表 */
    getUserList() {
      let pageObj = {
        pageSize: '15',
        pageNum: this.currentPage
      };
      ToastWithLoading().show()
      this.$api.getUserList(pageObj).then(res => {
        ToastWithLoading().hide()
        console.log(res)
        if (res.data && res.data.code === 0) {
          let result = res.data;
          // this.tableData = [];
          this.totalPage = result.data.totalPage;
          if (result.data.pageData.length > 0) {
            result.data.pageData.forEach(key => {
              key.role = utils.accountType(key.type);
              key.email = key.email || '-';
              key.photoUrl = key.photo ? `${photoSagema}/${key.photo}` : require('@/assets/img/default_avatar.png');
              if (this.storge.companyId === key.companyId && this.storge.type === key.type) {
                key.canNotDelete = false;
                key.changePermison = false;
              } else {
                key.changePermison = false;
                key.canNotDelete = false;
                if (key.layerName === '平台') {
                  key.changePermison = false;
                  key.canNotDelete = false;
                }
                if (this.storge.layerName === '平台' && key.type === 2 && key.layerName === '生产企业') {
                  key.canNotDelete = true;
                  key.changePermison = false;
                }
                if (this.storge.type === 2 && this.storge.layerName === '生产企业' && key.type === 2 && key.layerName === '采购企业') {
                  key.canNotDelete = true;
                  key.changePermison = true;
                }
                if (this.storge.type === 2 && this.storge.layerName === '生产企业' && key.type === 3 && key.layerName === '生产企业') {
                  key.canNotDelete = true;
                  key.changePermison = true;
                }
                if (this.storge.type === 2 && this.storge.layerName === '生产企业' && key.type === 2 && key.layerName === '采购企业') {
                  key.canNotDelete = true;
                  key.changePermison = true;
                }
                if (this.storge.type === 2 && this.storge.layerName === '采购企业' && key.type === 3 && key.layerName === '采购企业') {
                  key.changePermison = true;
                  key.canNotDelete = true;
                }
                if (this.storge.type === 3 && this.storge.layerName !== '生产企业' && key.type === 3 && key.layerName === '采购企业') {
                  key.changePermison = false;
                  key.canNotDelete = false;
                }
                if (this.storge.type === 3 && this.storge.layerName !== '平台') {
                  key.changePermison = false;
                  key.canNotDelete = false;
                }
              }
              this.tableData.push(key);
            });
          }
        }
      });
    },
    /* 查看权限 */
    changePermission(item) {
      this.$router.push({
        path: '/home/user-permission',
        query: {
          type: item.type,
          layerName: item.layerName,
          id: item.id
        }
      })
    },
    /* 查看详情 */
    lookDetails(item) {
      this.$store.commit('setUserDetail', item)
      this.$router.push({
        name: 'UserDetail'
      })
    },
    /* 删除用户 */
    doleteUser(item) {
      this.$createDialog({
        type: 'confirm',
        icon: 'cubeic-alert',
        title: t('useMsg.delUserWarn'),
        confirmBtn: {
          text: t('timeBtn.sure')
        },
        cancelBtn: {
          text: t('timeBtn.cancle')
        },
        onConfirm: () => {
          this.$api.deleteUser(item.id).then(({ data }) => {
            console.log(data);
            if (data.code === 0) {
              this.$Toast(t('successTips.delSuccess'))
              this.getUserList();
            }
          });
        }
      }).show();
    }
  }

}

</script>
<style lang='stylus' scoped>
.userList
  // background-color $boder-coloGray
  .userItem
    padding 5px 10px
    box-sizing border-box
    background-color #ffffff
    // margin-bottom 5px
    border-bottom 3px solid $boder-coloGray
    .userPhoto
      display flex
      margin-bottom 12px
      .photo
        width 60px
        height 60px
        img
          width 60px
          height 60px
          border-radius 50%
          box-shadow $footer-shadow
      .infoMsg
        flex 1
        display flex
        padding-left 8px
        &>div
          flex 1
          text-align center
          overflow hidden
          text-overflow ellipsis
          white-space nowrap
          p
            color #676767
            font-weight 700
            line-height 30px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            &.userRole
              border-bottom 1px solid #e5e5e5
    .companyInfo
      display flex
      p
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        flex 1
        font-size 12px
        margin 0 3px
    .handle
      padding 15px 0
      display flex
      p
        flex 1
        text-align center
        color #FF0000
</style>
