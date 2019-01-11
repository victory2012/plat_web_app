<template>
  <div>
    <cube-slide :loop=false :auto-play=false :show-dots=false :initialIndex='initialIndex' :threshold='0.2' ref='slide'>
      <cube-slide-item>
        <running></running>
      </cube-slide-item>
    </cube-slide>
    <div>
      <subFooter :tabs="tabs" :defaultValue="tabs[1].label"></subFooter>
    </div>
  </div>
</template>

<script>
import running from './component/running'
import subFooter from '@/components/subFooter/subFooter'

export default {
  data () {
    return {
      selectedLabelDefault: 'run',
      tabs: [
        {
          label: 'alarm',
          name: '告警'
        },
        {
          label: 'run',
          name: '运行'
        },
        {
          label: 'ratio',
          name: '对比'
        }
      ],
      initialIndex: 0
    };
  },
  components: {
    running,
    subFooter
  },
  mounted () { },

  methods: {
    clickHandler () {}
  }

}

</script>
<style lang='stylus' scoped>

</style>
