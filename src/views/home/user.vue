<template>
  <div class="user-wrapper">
    <top-header>
      <div slot="mainTab">
        <!-- <div class="userTab">
          <p @click="toUserManager" :class="{'active': userManager}">用户管理</p>
          <p @click="toCompanyManager" :class="{'active': !userManager}">企业管理</p>
        </div> -->
        <div class="userTab">
          <cube-tab-bar v-model="selectedLabelDefault" @click="clickHandler">
            <cube-tab class="userSetClass" v-for="item in tabs" :label="item.label" :key="item.label">
              <!-- 默认插槽 -->
              {{item.name}}
            </cube-tab>
          </cube-tab-bar>
        </div>
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
  </div>
</template>

<script>
import topHeader from '@/components/header/header'

export default {
  data() {
    return {
      selectedLabelDefault: 'User',
      showComponent: 'User',
      tabs: [{
        label: 'User',
        name: '用户管理'
      }, {
        label: 'Company',
        name: '企业管理'
      }],
      initialIndex: 0
    };
  },
  components: {
    topHeader,
    'User': () => import('./userComponent/user-manager'),
    'Company': () => import('./userComponent/company-manager')
  },

  mounted() {
  },
  methods: {
    clickHandler(name) {
      console.log('clickHandler name', name);
      this.showComponent = name
      // this.initialIndex = this.tabs.findIndex(item => {
      //   return item.label === name
      // })
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
.user-wrapper {
  width: 100%;
  height: 100%;

  .slide-wrapper {
    position: fixed;
    top: contentFixedTop(5);
    left: 0;
    bottom: contentFixedBottom(0);
    -webkit-overflow-scrolling: touch;
    overflow: scroll;
    overflow-scrolling: touch;
    width: 100%;
  }

  .userTab {
    margin: 3px auto;
    width: 80%;
    overflow: hidden;
    height: 32px;
    border: 1px solid $color-project-blue;
    border-radius: 3px;

    .userSetClass {
      &.cube-tab_active {
        color: #ffffff;
        background-color: $color-project-blue;
      }
    }
  }
}
</style>
