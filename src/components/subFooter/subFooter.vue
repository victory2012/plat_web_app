<template>
  <cube-tab-bar class="subFooter" v-model="defaultlabel" @change="cubeTabClick" show-slider>
    <cube-tab v-for="(item) in tabs" :label="item.label" :key="item.label">
      {{item.name}}
      <!-- <router-link :to="item.link">{{item.label}}</router-link> -->
    </cube-tab>
  </cube-tab-bar>
</template>

<script>

export default {
  name: '',
  props: {
    tabs: {
      type: Array,
      default: () => []
    },
    defaultValue: {
      type: String,
      required: true
    }
  },
  data () {
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
  mounted () {
    // const routeName = this.$route.name;
    // this.getTabIndex(routeName)
  },
  methods: {
    getTabIndex (name) {
      let Index = this.tabs.findIndex((item) => {
        return item.link === name
      })
      if (Index < 0) {
        Index = 0
      }
      return Index
    },
    cubeTabClick (item) {
      // this.$router.push({ name: item })
      const tabIndex = this.getTabIndex(item)
      this.$emit('tabIndex', tabIndex)
    }
  }

}

</script>
<style lang='stylus' scoped>
.subFooter
  height 40px
</style>
