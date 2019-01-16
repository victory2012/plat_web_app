<template>
  <div>
    <top-header fixed>
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
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div class="slide-wrapper">
      <!-- <cube-slide :loop=false :auto-play=false :show-dots=false :initialIndex='initialIndex' :threshold='0.2' ref='slide'>
        <cube-slide-item>
          <overview></overview>
        </cube-slide-item>
      </cube-slide> -->
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import Mixins from '@/mixins/mixins'
import topHeader from '@/components/header/header';

export default {
  data () {
    return {
      selectedLabelDefault: 'overview',
      componentId: 'overview',
      tabs: [{
        label: 'overview',
        name: '概览'
      }, {
        label: 'mainMap',
        name: '地图'
      }],
      initialIndex: 0
    };
  },
  mixins: [Mixins],
  components: {
    topHeader,
    'overview': () => import('./components/overview'),
    'mainMap': () => import('./components/map')
  },
  mounted () {
  },

  methods: {
    clickHandler (name) {
      this.componentId = name
    }
  }

}

</script>
<style lang='stylus' scoped>
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

.CloseIcon {
  height: 100%;

  .iconfont {
    font-size: 14px;
  }
}

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
</style>
