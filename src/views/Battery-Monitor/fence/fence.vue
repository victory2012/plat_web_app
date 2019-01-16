<template>
  <div>
    <div class="body">
      <router-view></router-view>
    </div>
    <div class="footerBar">
      <batteryFooter @tabIndex="tabIndex" :tabs="tabs" :defaultValue="selectedLabelDefault"></batteryFooter>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import batteryFooter from '@/components/footer/footer'
export default {
  name: '',
  props: [''],
  data () {
    return {
      selectedLabelDefault: ''
    };
  },
  computed: {
    ...mapGetters({
      tabs: 'getMonitorFenceFooter'
    })
  },
  components: {
    batteryFooter
  },

  mounted () {
    this.selectedLabelDefault = this.tabs[0].link
  },

  methods: {
    tabIndex (index) {
      console.log(index)
    }
  }

}

</script>
<style lang='stylus' scoped>
.body
  width 100%
  height calc(100vh - 45px)
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
