<template>
  <div>
    <router-view></router-view>
    <div class="footerBar">
      <batteryFooter :tabs="tabs" :defaultValue="selectedLabelDefault"></batteryFooter>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import batteryFooter from '@/components/footer/footer'
export default {
  name: '',
  props: [''],
  data() {
    return {
      selectedLabelDefault: ''
    };
  },
  computed: {
    ...mapGetters({
      tabs: 'getMonitorOperateFooter'
    })
  },
  components: {
    batteryFooter
  },

  mounted() {
    this.selectedLabelDefault = this.$route.name
  },

  methods: {
    tabIndex(index) {
      console.log(index)
    }
  }

}

</script>
<style lang='stylus' scoped>
.footerBar
  box-shadow $footer-shadow
  position fixed
  left 0
  right 0
  bottom 0
  height $footer-height
  font-size 12px
  z-index 100
  background-color $btn-primary-color
</style>
