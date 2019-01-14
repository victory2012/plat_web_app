<template>
  <div>
    <div ref="filterPart" class="filterPart">
      <div @click="companyClick" :class="{'selcetBy': showPopup.company}" class="select">
        <span>客户企业</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="showBatteryList" class="select">
        <span>电池型号</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <div @click="companyStatusClick" :class="{'selcetBy': showPopup.status}" class="select">
        <span>状态</span>
        <span class="iconfont icon-downarrow1"></span>
      </div>
      <span @click="swichMapOrList" class="iconfont icon-map">
      </span>
    </div>
    <div class="popupWraper" v-show="showPopup.wrap">
      <div class="company" v-show="showPopup.company">
        <div class="production">
          <h2>生产企业</h2>
          <cube-scroll class="productionList" ref="productionscroll" :options="options">
            <ul>
              <li v-for="item in testCompany" :key="item.id" @click="chooseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
            </ul>
          </cube-scroll>
        </div>
        <div class="purchase">
          <h2>采购企业</h2>
          <cube-scroll class="productionList" ref="purchasescroll" :options="options">
            <ul>
              <li v-for="item in testCompany" :key="item.id" @click="chooseItem(item)" :class="{'choosed': item.choose}">{{item.name}}</li>
            </ul>
          </cube-scroll>
        </div>
        <section class="companyBtn">
          <p @click="companyCancelHandle">取消</p>
          <p class="sure">确定</p>
        </section>
      </div>
      <div class="allStatus" v-show="showPopup.status">
        <div class="status" v-for="item in status" :key="item.id">
          <h2>{{item.title}}</h2>
          <ul>
            <li v-for="info in item.data" @click="choosStatuItem(info, item.data)" :key="info.id" :class="{'active': info.choose}">{{info.label}}</li>
          </ul>
        </div>
        <section class="companyBtn">
          <p @click="statusCancelHandle">取消</p>
          <p class="sure">确定</p>
        </section>
      </div>
    </div>
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
