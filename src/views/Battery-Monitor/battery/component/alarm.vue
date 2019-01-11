<template>
  <div class="batteryAlarm">
    <top-header>
      <div class="searchWarper" slot="mainTab">
        ajdsadsjalksdja
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div>
      askjdhasdjakjsdhjkhkj
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import Mixins from '@/mixins/mixins'
export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },
  mixins: [Mixins],
  components: {
    topHeader
  },

  mounted () {},

  methods: {}

}

</script>
<style lang='stylus' scoped>
.batteryAlarm
  width 100%
  height calc(100vh - 45px)
</style>
