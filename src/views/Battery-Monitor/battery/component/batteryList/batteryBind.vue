<template>
  <div class="bindWraper">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">
        <div class="searchIcon"><i class="iconfont icon-Search"></i></div>
        <div class="inputPart">
          <input type="text" v-model="searchDeviceCode" placeholder="请输入设备编号" />
        </div>
      </div>
      <div slot="right" class="CloseIcon">绑定</div>
    </top-header>
    <cube-scroll class="deviceList">
      <ul class="listWraper">
        <li v-for="item in deviceList" :key="item.id" @click="doBindDeviceCode(item)"><span>设备编号：</span>{{item.code}}</li>
        <li v-show="deviceList.length === 0" class="noDate">暂无未绑定的设备数据</li>
      </ul>
    </cube-scroll>
  </div>
</template>

<script>
import { ToastOnlyText } from '@/utils/Toast'
import t from '@/utils/translate';
import topHeader from '@/components/header/header';
export default {
  data() {
    return {
      searchDeviceCode: '',
      deviceList: []
    };
  },
  components: {
    topHeader
  },
  watch: {
    searchDeviceCode: {
      handler: function (code) {
        console.log(code)
        this.getDeviceListByCode(code);
      }
    }
  },
  mounted() {
    this.bindBattery = this.$route.query;
    this.getDeviceListByCode()
  },
  methods: {
    back() {
      this.$router.push({
        name: 'MonitorBattery'
      })
    },
    getDeviceListByCode(deviceCode = '') {
      this.deviceList = []
      this.$api.DeviceListByCode(deviceCode).then(res => {
        if (res.data && res.data.code === 0) {
          const result = res.data.data;
          this.deviceList = result
        }
      })
    },
    doBindDeviceCode(item) {
      this.$createDialog({
        type: 'confirm',
        title: '电池绑定',
        content: `确定要电池(编号:${this.bindBattery.code})与设备(编号:${item.code})绑定吗？`,
        confirmBtn: {
          text: '确定',
          active: true
        },
        cancelBtn: {
          text: '取消',
          active: false
        },
        onConfirm: () => {
          const bindObj = {
            hostId: this.bindBattery.id,
            deviceId: item.id,
            hostCode: this.bindBattery.code,
            deviceCode: item.code
          };
          this.$api.betteryBind(bindObj).then((res) => {
            console.log(res)
            if (res.data && res.data.code === 0) {
              ToastOnlyText(t('successTips.bindSuccess'))
              // const message = new Paho.MQTT.Message(`k:${this.bindBattery.code}`);
              // message.destinationName = `cmd/${item.code}`;
              // this.mqttClient.send(message);
              this.getDeviceListByCode(this.searchDeviceCode);
            }
          });
        }
      }).show()
    }
  }

}

</script>
<style lang='stylus' scoped>
.bindWraper
  width 100%
  height 100vh
  box-sizing border-box
  padding-top 45px
  .searchWarper
    width 80%
    display flex
    box-sizing border-box
    height 34px
    margin 3px auto
    SetAllBorder(1px)
    line-height 34px
    .searchIcon
      flex 0 0 30px
    .inputPart
      position relative
      padding 0 10px
      input
        outline none
        width 100%
        height 30px
  .deviceList
    height 100%
    .listWraper
      padding 0 15px
      .noDate
        text-align center
        color $subText-color
        border none
      li
        text-indent 1em
        padding 15px 0
        SetBorder(1px, bottom)
</style>
