<template>
  <cube-scroll :data="randerData" class="batteryList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div v-for="item in randerData" :key='item.id' class="deviceList">
      <div class="deviceTop">
        <div class="batteryCode">
          <p>{{item.code}}</p>
          <p class="subTsxt">设备编号</p>
        </div>
        <div class="bindStatus">
          <p :class="{'active': item.hostId}">{{item.bindState}}</p>
        </div>
        <div class="deviceCode">
          <p>{{item.hostCode || '暂无'}}</p>
          <p class="subTsxt">电池编号</p>
        </div>
      </div>
      <div class="second">
        <div>
          <span>电池型号:{{item.model}}</span>
          <span>电池组规格:{{item.specification}}</span>
          <span>额定电压:{{item.pressure}}V</span>
        </div>
      </div>
      <div class="third" v-show="item.checked">
        <div>
          <span>{{item.activation}}</span>
          <span>{{item.onLine}}</span>
          <span>{{item.binding}}</span>
          <p>创建时间:{{item.time}}</p>
        </div>
        <div>
          <cube-button class="btn" @click="realData">查看</cube-button>
        </div>
      </div>
      <div class="fourth" v-show="item.checked">
        <span>删除</span>
        <span>激活</span>
        <span>拉黑</span>
      </div>
      <div :class="{'down': item.checked}" @click="pullDown(item)" class="rightIcon">
        <span class="iconfont icon-right"></span>
      </div>
    </div>
    <p v-if="randerData.length === 0" class="noData">暂无数据</p>
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
      totalPage: 0,
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
    this.getDeviceList()
  },
  methods: {
    pullDown(list) {
      list.checked = !list.checked;
    },
    pullingUp() {
      this.pageNum++
      if (this.pageNum > this.totalPage) {
        this.pageNum = this.totalPage
        this.$refs.scroll.forceUpdate();
      } else {
        // this.doGetBatteryList(this.cacheParams)
      }
    },
    /* 获取设备列表 */
    getDeviceList() {
      const pageObj = {
        pageSize: 20,
        pageNum: this.pageNum,
        // registerStatus: this.regState,
        status: 0
        // topLayerCompanyId: this.manufactur,
        // bindingStatus: this.bindState,
      };
      // if (this.content || this.content === 0) {
      //   pageObj.code = this.content;
      // }
      this.$api.deviceList(pageObj).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.totalPage = result.totalPage
          if (result.pageData.length === 0) {
            return
          }
          result.pageData.forEach((key) => {
            key.online = key.onlineStatus === 0;
            key.blackStatus = key.status === -1;
            key.checked = false
            key.subCompanyName = key.subCompanyName
              ? key.subCompanyName
              : '-';
            key.registerCode =
              key.registerCode === null ? t('device.noregist') : t('device.registed');// "未注册" : "已注册";
            // key.bindStatus = key.hostId === null;
            // key.canlook = key.hostId === null;
            // key.delete = !key.bindStatus;
            key.bindState = key.hostId === null ? t('batteryList.noBind') : t('batteryList.hasBind'); // "未绑定" : "已绑定";
            // if (this.userData.type !== 1 && this.userData.layerName !== '平台') {
            //   key.blackStatus = true;
            //   key.delete = true;
            //   key.uplevels = true;
            // }
            this.randerData.push(key);
          });
          console.log(this.randerData);
        }
      });
    },
    realData() {
      this.$router.push({ name: 'realData' })
    }
  }
}
</script>

<style lang='stylus' scoped>
.noData
  height 30px
  line-height 30px
  text-align center
  color $icon-color-gray
.deviceList
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
  .deviceTop
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
