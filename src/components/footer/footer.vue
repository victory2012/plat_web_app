<template>
  <cube-tab-bar v-model="defaultlabel" @change="cubeTabClick" show-slider>
    <cube-tab v-for="(item) in tabs" :label="item.link" :key="item.label">
      <i v-if="item.icon" slot="icon" class="tabIcon iconfont" :class="item.icon"></i>
      <span class="tabText">{{item.label}}</span>
      <!-- <router-link :to="item.link">{{item.label}}</router-link> -->
    </cube-tab>
  </cube-tab-bar>
</template>

<script>
export default {
  name: '',
  props: {
    isSubTab: {
      type: Boolean,
      default: false
    },
    tabs: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      defaultlabel: this.defaultValue
    };
  },
  watch: {
    defaultValue: {
      handler: function (val) {
        console.log('footer defaultValue', val);
        this.defaultlabel = val;
      }
    }
    // '$route.name': {
    //   handler: function (val) {
    //     console.log('footer defaultValue', val);
    //     this.defaultlabel = val;
    //   }
    // }
  },
  mounted() {
    // const routeName = this.$route.name;
    // this.getTabIndex(routeName)
  },
  methods: {
    getTabIndex(name) {
      let Index = this.tabs.findIndex((item) => {
        return item.link === name
      })
      if (Index < 0) {
        Index = 0
      }
      return Index
    },
    cubeTabClick(item) {
      if (!this.isSubTab) {
        this.$router.push({ name: item })
      }
      const tabIndex = this.getTabIndex(item)
      this.$emit('tabIndex', tabIndex)
    }
  }

}

</script>
<style lang='stylus' scoped>
.tabText
  font-size 15px
.tabIcon
  display block
  font-size 22px
  margin-bottom 2px
</style>
