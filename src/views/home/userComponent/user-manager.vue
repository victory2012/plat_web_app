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
        <span>{{item.nickName}}</span>
        <span class="tit">邮箱</span>
        <span>{{item.email}}</span>
      </div>
      <div class="handle">
        <p>删除</p>|
        <p>修改权限</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import { mapGetters } from 'vuex';
import utils from '@/utils/utils';
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
      data: [
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }, {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '15866559988',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        },
        {
          id: Math.random(),
          companyName: '摩融科技',
          userRole: '管理员',
          userName: '某某人',
          companyRole: '生产企业',
          phone: '158665118',
          nikeName: '张王李赵',
          Email: 'aaacc@126.com'
        }
      ],
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
        scrollbar: true
      }
    }
  },
  mounted() {
    this.tableData = this.data
    // this.loading = ToastWithLoading()
    // this.getUserList()
  },

  methods: {
    pullingUp() {
      // console.log('pullUpLoadObj')
      this.currentPage++
      if (this.currentPage > this.totalPage) {
        this.$refs.scroll.forceUpdate();
      } else {
        this.getUserList()
      }
    },
    getUserList() {
      let pageObj = {
        pageSize: '15',
        pageNum: this.currentPage
      };
      this.loading.show()
      this.$api.getUserList(pageObj).then(res => {
        this.loading.hide()
        if (res.data && res.data.code === 0) {
          let result = res.data;
          // this.tableData = [];
          // this.total = result.data.total;
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
    border-bottom 8px solid $boder-coloGray
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
</style>
