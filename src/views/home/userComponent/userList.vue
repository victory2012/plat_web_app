<template>
  <!-- <div class="view-wrapper">
  </div> -->
  <cube-scroll class="userList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="userItem" v-for="item in tableData" :key="item.id+Math.random()">
      <div class="companyName">
        <span class="tit">企业名称</span>
        <span>{{item.companyName}}</span>
        <span class="userRole">{{item.role}}</span>
        <span>{{item.userName}}</span>
      </div>
      <div class="companyRole">
        <span class="tit">企业身份</span>
        <span>{{item.companyRole}}</span>
        <span>{{item.phone}}</span>
        <span>用户名</span>
      </div>
      <div class="nikeName">
        <span class="tit">昵称</span>
        <span class="infos">{{item.nickName}}</span>
        <span class="tit">邮箱</span>
        <span class="infos">{{item.email}}</span>
      </div>
      <div class="handle">
        <p @click="doleteUser(item)">删除</p>|
        <p @click="changePermission(item)">修改权限</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import { mapGetters } from 'vuex';
import t from '@/utils/translate';
import utils from '@/utils/utils';
import { ToastWithLoading } from '@/utils/Toast'
export default {
  name: '',
  props: [''],
  data() {
    return {
      threshold: 20,
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
            // console.log(this.AdminRoles);
            result.data.pageData.forEach(key => {
              key.role = utils.accountType(key.type);
              // key.userType = this.AdminRoles.deleteAdmin;
              key.email = key.email || '-';
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
    padding 5px 15px
    box-sizing border-box
    background-color #ffffff
    // margin-bottom 5px
    border-bottom 5px solid $boder-coloGray
    .handle
      padding 15px 0
      p
        flex 1
        text-align center
        color #FF0000
    &>div
      display flex
      span
        padding 10px 0
        flex 1
        text-align center
        &.tit
          text-align left
          color $subText-color
          flex 0 0 65px
        &.userRole
          border-bottom 1px solid #cacaca
        &.infos
          text-align left
</style>
