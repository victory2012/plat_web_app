<template>
  <div>
    <alarm-list></alarm-list>
  </div>
</template>

<script>
import alarmList from './alarmList/alarmlist'

export default {
  name: '',
  props: [''],
  data() {
    return {
      componentId: 'alarm-list'
    };
  },

  components: {
    alarmList
  },

  mounted() { },

  methods: {}

}

</script>
<style lang='' scoped>
</style>
