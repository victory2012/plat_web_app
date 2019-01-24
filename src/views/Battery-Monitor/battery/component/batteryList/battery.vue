<template>
  <cube-scroll :data="randerData" class="batteryList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div class="batteryItem" v-for="item in randerData" :key="item.id">
      <div class="itemTop">
        <div class="batteryCode">
          <p>{{item.batteryCode}}</p>
          <p class="subTsxt">电池编号</p>
        </div>
        <div class="bindStatus">
          <p>已绑定</p>
        </div>
        <div class="deviceCode">
          <p>{{item.deviceCode}}</p>
          <p class="subTsxt">设备编号</p>
        </div>
      </div>
      <div class="itemMid">
        <p><span class="subTsxt">电池型号：</span><span>{{item.model}}</span></p>
        <p><span class="subTsxt">电池规格：</span><span>{{item.norm}}</span></p>
        <p><span class="subTsxt">额定电压：</span><span>{{item.voltage}}</span></p>
      </div>
      <div v-show="item.showBtn" class="itemHandle">
        <p>解绑</p>|
        <p>删除</p>|
        <p @click="DolookDetail(item)">详情</p>
      </div>
      <p @click="showHandleBtn(item)" :class="{'down': item.showBtn}" class="rightIcon">
        <span class="iconfont icon-right"></span>
      </p>
    </div>
  </cube-scroll>
</template>

<script>
import t from '@/utils/translate.js'
export default {
  data() {
    return {
      pullUpLoadObj: {
        threshold: 50
      },
      pageNum: 1,
      randerData: []
    };
  },
  computed: {
    options() {
      return {
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true,
        click: true
      }
    }
  },
  mounted() {
  },
  methods: {
    jisuan(a, b, c) {
      console.log(a + b + c)
    },
    pullingUp() {
      console.log('pullingUp')
      this.pageNum++
      if (this.pageNum > this.totalPage) {
        this.pageNum = this.totalPage
        this.$refs.scroll.forceUpdate();
      } else {
        this.doGetBatteryList(this.cacheParams)
      }
    },
    DolookDetail(item) {
      this.$router.push({
        name: 'MonitorBatteryDetail'
      })
    },
    doGetBatteryList(data) {
      const { model, purchase, prod, status } = data
      this.cacheParams = data;
      let params = {
        pageNum: this.pageNum,
        pageSize: 15,
        // batteryGroupOrDeviceCode: '',
        modelId: model.id || '',
        companyName: purchase.name || '',
        parentCompanyId: prod.id || '',
        bindingStatus: status.id || '',
        status: 0
      }
      this.$api.batteryList(params).then(res => {
        console.log('batteryList', res);
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.totalPage = result.totalPage
          if (result.pageData === 0) {
            return
          }
          result.pageData.forEach(key => {
            key.batteryCode = key.code;
            key.showBtn = false
            key.bindStatus = key.deviceId ? t('batteryList.hasBind') : t('batteryList.noBind');
            this.randerData.push(key)
          });
        }
      })
    },
    showHandleBtn(item) {
      console.log(item)
      item.showBtn = !item.showBtn
    }
  }

}

</script>
<style lang='stylus' scoped>
.batteryItem
  position relative
  padding 10px
  &>.rightIcon
    position absolute
    top 36px
    right 10px
    display inline-block
    transition all 0.25s ease
    .iconfont
      font-size 22px
    &.down
      transition all 0.25s ease
      transform rotate(90deg)
  SetBorder(5px, bottom)
  .itemTop
    padding-right 25px
    .bindStatus
      flex 0 0 80px
      p
        height 20px
        line-height 20px
        color #ffffff
        background $handle-text-btn-color
        border-radius 10px
        &.active
          background #0099cc
    &>div > p
      font-weight bolder
      line-height 30px
      font-size 14px
  .itemMid
    padding-right 25px
    margin 15px 0
    justify-content space-between
    &>p
      margin-right 5px
      font-size 12px
      color #464646
  .itemHandle
    margin 30px 0 10px
    justify-content space-between
    p
      flex 1
      text-align center
      color $handle-text-btn-color
  &>div
    display flex
    justify-content center
    align-items center
    &> div
      flex 1
      text-align center
</style>
