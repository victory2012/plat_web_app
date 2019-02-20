<template>
  <div class="thresholdCenter">
    <top-header fixed>
      <div slot="left" class="backIcon">
        <i @click="goBack" class="backIcon iconfont icon-back1"></i>
      </div>
      <div slot="mainTab" class="thresholdHeader">
        <div class="searchWarper">
          <div @click="selectByModel" :class="{'active': activeByModel}">电池型号分类</div>
          <div @click="selectByCompany" :class="{'active': !activeByModel}">企业全局分类</div>
        </div>
        <div @click="selectBatteryModel" v-show="activeByModel" class="batteryModel">{{modelTit}} <i class="iconfont icon-downarrow1"></i></div>
      </div>
      <div slot="right" class="CloseIcon">
        <i @click="goBackToHome" class="iconfont icon-Close"></i>
      </div>
    </top-header>
    <div class="thresholdWraper">
      <cube-scroll :options="options">
        <ul class="thresholdInfo">
          <li v-for="item in thresholdArr" :key="item.id">
            <div class="tit">{{item.name}}</div>
            <div class="inputContent">
              <cube-input placeholder="请输入电池编号" clearable type="number" v-model="item.value"></cube-input>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
    <div class="bottomBtn">
      <div @click="modifyThreshold" class="active">修改阈值</div>
      <div @click="getTemplate">恢复全局</div>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import mixins from '@/mixins/monitor-mixin'
import { ToastOnlyText } from '@/utils/Toast'
import t from '@/utils/translate';
export default {
  mixins: [mixins],
  data() {
    return {
      activeByModel: true,
      modelTit: '电池型号',
      regForm: {},
      BatteryModel: [],
      thresholdArr: [
        {
          id: 'singleMaxChargeVoltage',
          name: '单体充电电压上限阈值(V)',
          value: '0'
        },
        {
          id: 'singleMinDischargeVoltage',
          name: '单体放电电压下限阈值(V)',
          value: '0'
        },
        {
          id: 'maxChargeVoltage',
          name: '整组充电电压上限阈值(V)',
          value: '0'
        },
        {
          id: 'minDischargeVoltage',
          name: '整组放电电压下限阈值(V)',
          value: '0'
        },
        {
          id: 'maxChargeCurrent',
          name: '充电电流上限阈值系数',
          value: '0'
        },
        {
          id: 'maxDischargeCurrent',
          name: '放电电流上限阈值系数',
          value: '0'
        },
        {
          id: 'maxChargeTemperature',
          name: '充电温度上限阈值(℃)',
          value: '0'
        },
        {
          id: 'minChargeTemperature',
          name: '充电温度下限阈值(℃)',
          value: '0'
        },
        {
          id: 'maxDischargeTemperature',
          name: '放电温度上限阈值(℃)',
          value: '0'
        },
        {
          id: 'minDischargeTemperature',
          name: '放电温度下限阈值(℃)',
          value: '0'
        },
        {
          id: 'maxFluidOverDays',
          name: '补水超限天数',
          value: '0'
        },
        {
          id: 'maxChargeCapacity',
          name: '充电容量上限阈值系数',
          value: '0'
        },
        {
          id: 'minChargeCapacity',
          name: '充电容量下限阈值系数',
          value: '0'
        }
      ],
      selectModel: {},
      batteryForm: {}
    };
  },
  computed: {
    options() {
      return {
        scrollbar: false,
        click: true
      }
    }
  },
  components: {
    topHeader
  },

  mounted() {
    this.getBatteryModel()
  },

  methods: {

    selectByModel() {
      this.activeByModel = true
    },
    selectByCompany() {
      this.activeByModel = false
      this.modelTit = '电池型号'
      this.selectModel = {}
    },
    modifyThreshold() {
      if (this.activeByModel) {
        if (!this.selectModel.modelId) {
          ToastOnlyText(t('threshold.warn.selectBatModel')) // "请选择电池型号",
          return;
        }
      }
      this.thresholdArr.forEach(key => {
        this.batteryForm[key.id] = key.value
      })
      const params = {
        modelId: this.selectModel.modelId,
        singleMaxChargeVoltage: this.batteryForm.singleMaxChargeVoltage,
        singleMinDischargeVoltage: this.batteryForm
          .singleMinDischargeVoltage,
        maxChargeVoltage: this.batteryForm.maxChargeVoltage,
        minDischargeVoltage: this.batteryForm.minDischargeVoltage,
        maxChargeCurrent: this.batteryForm.maxChargeCurrent,
        maxDischargeCurrent: this.batteryForm.maxDischargeCurrent,
        maxChargeTemperature: this.batteryForm.maxChargeTemperature,
        minChargeTemperature: this.batteryForm.minChargeTemperature,
        maxDischargeTemperature: this.batteryForm.maxDischargeTemperature,
        minDischargeTemperature: this.batteryForm.minDischargeTemperature,
        maxFluidOverDays: this.batteryForm.maxFluidOverDays,
        maxChargeCapacity: this.batteryForm.maxChargeCapacity,
        minChargeCapacity: this.batteryForm.minChargeCapacity
      };
      console.log(params);
      if (this.hasTemp) {
        params.id = this.batteryModelTempId;
        this.modifyFunction(params);
      } else {
        this.addFunction(params);
      }
    },
    /* 添加 */
    addFunction(data) {
      this.$api.batteryAddPolicy(data).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          ToastOnlyText(t('successTips.addSuccess')) // "添加成功",
        }
      });
    },
    /* 修改 */
    modifyFunction(data) {
      this.$api.batteryChangePolicy(data).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          ToastOnlyText(t('successTips.changeSuccess')) // "修改成功",
        }
      });
    },
    /* 获取电池型号 */
    getBatteryModel() {
      this.$api.batteryModelList().then((res) => {
        // console.log("获取电池型号列表", res);
        if (res.data && res.data.code === 0) {
          console.log(res.data);
          this.BatteryModel = res.data.data;
        }
      });
    },
    selectBatteryModel() {
      if (!this.picker) {
        this.picker = this.$createPicker({
          title: '电池型号',
          alias: {
            text: 'dicKey',
            value: 'id'
          },
          data: [this.BatteryModel],
          onSelect: (id, index, selectedText) => {
            this.selectModel = {
              model: selectedText[0],
              modelId: id[0]
            }
            this.modelTit = selectedText[0]
            this.getByModelId(this.selectModel.modelId)
          },
          onCancel: () => { }
        })
      }
      this.picker.show()
    },
    /* 获取电池型号 */
    getByModelId(modelId) {
      this.$api.getBatteryPolicy(modelId).then((res) => {
        if (res.data && res.data.code === 0) {
          const result = res.data;
          console.log(result)
          if (result.data === null) {
            ToastOnlyText(t('threshold.warn.modelNoThres'))
            this.thresholdArr.forEach(key => {
              key.value = 0
            })
            this.batteryForm = {}
            this.hasTemp = false;
          } else {
            this.hasTemp = true;
            this.batteryForm = result.data;
            this.batteryModelTempId = result.data.id;
            this.thresholdArr.forEach(item => {
              for (let key in this.batteryForm) {
                if (item.id === key) {
                  item.value = this.batteryForm[key]
                }
              }
            })
          }
        }
      });
    },
    /* 恢复全局 */
    getTemplate() {
      if (!this.selectModel.modelId) {
        ToastOnlyText(t('threshold.warn.selectBatModel')) // "请选择电池型号",
        return;
      }
      this.$api.getTempPolicy().then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          const result = res.data;
          if (result.data === null) {
            ToastOnlyText(t('threshold.warn.NOverall')) // "暂未设置全局阈值",
          } else {
            this.batteryForm = result.data;
          }
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.thresholdCenter
  position relative
  width 100%
  height 100%
  .thresholdHeader
    display flex
    .batteryModel
      flex 0 0 80px
      font-size 12px
      border 1px solid #f0f2f5
      height 30px
      line-height 30px
      margin 3px 0
      .iconfont
        font-size 22px
        vertical-align middle
    .searchWarper
      flex 1
      overflow hidden
      height 32px
      margin 3px 10px 3px 30px
      border 1px solid $color-project-blue
      border-radius 3px
      display flex
      font-size 12px
      &>div
        flex 1
        text-align center
        line-height 32px
        color $color-project-blue
        &.active
          color #ffffff
          background-color $color-project-blue
  .thresholdWraper
    height calc(100% - 40px)
    padding-top $header-height
    box-sizing border-box
    .thresholdInfo
      padding-top 15px
      li
        margin-bottom 5px
        padding 0 20px 10px
        border-bottom 5px solid #f0f2f5
        .tit
          line-height 20px
          margin 10px 0
  .bottomBtn
    position absolute
    bottom 0
    right 0px
    left 0
    height 45px
    background #ffffff
    z-index 99
    text-align right
    SetBorder(1px, top)
    box-sizing border-box
    padding-top 5px
    padding-right 10px
    &>div
      padding 5px 10px
      display inline-block
      line-height 20px
      color $color-project-blue
      border 1px solid $color-project-blue
      margin-right 10px
      &.active
        color #ffffff
        background-color $color-project-blue
</style>
