<template>
  <div class="user-wrapper">
    <top-header>
      <div slot="mainTab">
        <div class="userTab">
          <cube-tab-bar v-model="selectedLabelDefault" @click="clickHandler">
            <cube-tab class="userSetClass" v-for="item in tabs" :label="item.label" :key="item.label">
              <!-- 默认插槽 -->
              {{item.name}}
            </cube-tab>
          </cube-tab-bar>
        </div>
      </div>
      <div @click="showAddOptions" class="addUser" slot='right'>
        <i class="iconfont icon-create_customer"></i>
      </div>
    </top-header>
    <div class="slide-wrapper">
      <!-- <cube-slide :loop=false :auto-play=false :show-dots=false :initialIndex='initialIndex' :threshold='0.2' ref='slide'>
        <cube-slide-item>
          <user-manager></user-manager>
        </cube-slide-item>
        <cube-slide-item>
          <company-manager></company-manager>
        </cube-slide-item>
      </cube-slide> -->
      <component :is="showComponent"></component>
    </div>
    <moreOptions @onchange="changeHandle" :showComponent="showMore">
      <div slot="options">
        <ul class="moreOptionWraper">
          <li @click.stop="toAddUser(item)" v-for="item in moreOptions" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </moreOptions>
  </div>
</template>

<script>
import topHeader from '@/components/header/header'
import moreOptions from '@/components/moreOptions/moreOptions'
export default {
  data() {
    return {
      selectedLabelDefault: 'User',
      showComponent: 'User',
      showMore: false,
      tabs: [{
        label: 'User',
        name: '用户管理'
      }, {
        label: 'Company',
        name: '企业管理'
      }],
      initialIndex: 0,
      moreOptions: [
        {
          id: 'productAdmin',
          name: '生产企业管理员'
        },
        {
          id: 'customer',
          name: '采购企业管理员'
        },
        {
          id: 'user',
          name: '创建本企业用户'
        }
      ]
    };
  },
  components: {
    topHeader,
    moreOptions,
    'User': () => import('./userComponent/user-manager'),
    'Company': () => import('./userComponent/company-manager'),
    'createAdmin': () => import('./userComponent/creareAdmin')
  },

  mounted() {
  },
  methods: {
    showAddOptions() {
      this.showMore = !this.showMore
    },
    clickHandler(name) {
      // console.log('clickHandler name', name);
      this.showComponent = name
      // this.initialIndex = this.tabs.findIndex(item => {
      //   return item.label === name
      // })
    },
    changeHandle({ showOrhide }) {
      this.showMore = showOrhide
    },
    toAddUser(item) {
      console.log(item)
      switch (item.id) {
        case 'productAdmin':
          this.showComponent = 'createAdmin'
          this.showMore = false
          break;

        default:
          break;
      }
    },
    toUserManager() {
      this.userManager = true;
      this.$router.push({
        name: 'HomeUser'
      })
    },
    toCompanyManager() {
      this.userManager = false;
      this.$router.push({
        name: 'companyManager'
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.moreOptionWraper
  padding 10px
  border-radius 5px
  background-color #868686
  li
    line-height 30px
.addUser
  .iconfont
    font-size 22px
    color $color-project-blue
.user-wrapper
  width 100%
  height 100%
  .slide-wrapper
    position fixed
    top contentFixedTop(5)
    left 0
    bottom contentFixedBottom(0)
    -webkit-overflow-scrolling touch
    overflow scroll
    overflow-scrolling touch
    width 100%
  .userTab
    margin 3px auto
    width 80%
    overflow hidden
    height 32px
    border 1px solid $color-project-blue
    border-radius 3px
    .userSetClass
      &.cube-tab_active
        color #ffffff
        background-color $color-project-blue
</style>
