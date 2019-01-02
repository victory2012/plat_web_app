<template>
  <div>
    <cube-tab-bar v-model="selectedLabelDefault" @change="chooseMenu" :inline='false' show-slider>
      <cube-tab v-for="(item) in tabs" :label="item.link" :key="item.label">
        <i slot="icon" class="tabIcon" :class="item.icon"></i>
        <router-link :to="item.link">{{item.label}}</router-link>
      </cube-tab>
    </cube-tab-bar>
  </div>
</template>

<script>

export default {
  name: '',
  props: [''],
  data () {
    return {

    };
  },

  components: {},

  mounted () { },

  methods: {}

}

</script>
<style lang='' scoped>
</style>
