<template>
  <!-- <div class="view-wrapper">
  </div> -->
  <cube-scroll class="userList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="userItem" v-for="testObj in data" :key="testObj.id">
      <div class="companyName">
        <span class="tit">企业名称</span>
        <span>{{testObj.companyName}}</span>
        <span class="userRole">{{testObj.userRole}}</span>
        <span>{{testObj.userName}}</span>
      </div>
      <div class="companyRole">
        <span class="tit">企业身份</span>
        <span>{{testObj.companyRole}}</span>
        <span>{{testObj.phone}}</span>
        <span>用户名</span>
      </div>
      <div class="nikeName">
        <span class="tit">昵称</span>
        <span>{{testObj.nikeName}}</span>
        <span class="tit">邮箱</span>
        <span>{{testObj.Email}}</span>
      </div>
      <div class="handle">
        <p>删除</p>|
        <p>修改权限</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>

export default {
  name: '',
  props: [''],
  data() {
    return {
      threshold: 20,
      pullUpLoad: true,
      pullDownRefreshObj: {
        threshold: 500,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50
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
      ]
    };
  },
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    }
  },
  mounted() { },

  methods: {
    pullingDown() {
      console.log('pullDownRefreshObj')
    },
    pullingUp() {
      console.log('pullUpLoadObj')
    },
    handleClick(e) {
      e.stopPropagation();
    }
  }

}

</script>
<style lang='stylus' scoped>
.userList {
  // background-color $boder-coloGray
  .userItem {
    padding: 5px 15px;
    box-sizing: border-box;
    background-color: #ffffff;
    // margin-bottom 5px
    border-bottom: 8px solid $boder-coloGray;

    .handle {
      padding: 15px 0;

      p {
        flex: 1;
        text-align: center;
        color: #FF0000;
      }
    }

    &>div {
      display: flex;

      span {
        padding: 10px 0;
        flex: 1;
        text-align: center;

        &.tit {
          text-align: left;
          color: $subText-color;
          flex: 0 0 65px;
        }

        &.userRole {
          border-bottom: 1px solid #cacaca;
        }
      }
    }
  }
}
</style>
