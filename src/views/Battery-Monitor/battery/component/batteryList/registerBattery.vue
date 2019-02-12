<template>
  <div class="addwraper">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">电池登记</div>
      <div slot="right" @click="addMore" class="CloseIcon">
        <i class="iconfont icon-more"></i>
      </div>
    </top-header>
    <cube-scroll class="itemList" ref="scroll" :options="options">
      <ul class="addwraperinfo">
        <li>
          <div class="tit"><span>*</span>电池编号</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" autofocus clearable placeholder="请输入电池编号" v-model="regForm.batteryCode"></cube-input>
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>额定电压</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" type='number' clearable placeholder="请输入额定电压" v-model="regForm.voltage"></cube-input>
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>额定容量</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" type='number' clearable placeholder="请输入额定容量" v-model="regForm.capacity"></cube-input>
          </div>
        </li>
        <!-- <li>
          <div class="tit">生产企业</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择生产企业" v-model="regForm.production" />
          </div>
        </li> -->
        <li>
          <div class="tit"><span>*</span>客户企业</div>
          <div class="inputContent" @click="companyPickers">
            <!-- <cube-select title='请选择客户企业' v-model="regForm.customer" :options="selectComponentOption.customer">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择客户企业" v-model="regForm.customer" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>电池型号</div>
          <div class="inputContent" @click="modelPickers('model')">
            <!-- <cube-select title='请选择电池型号' v-model="regForm.model" :options="selectComponentOption.model">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择电池型号" v-model="regForm.model" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>电池规格</div>
          <div class="inputContent" @click="spifPickers('specifications')">
            <!-- <cube-select title='请选择电池规格' v-model="regForm.specifications" :options="selectComponentOption.specifications">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择电池规格" v-model="regForm.norm" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>单体型号</div>
          <div class="inputContent" @click="singlePickers('singleModel')">
            <!-- <cube-select title='请选择单体型号' v-model="regForm.singleModel" :options="selectComponentOption.singleModel">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择单体型号" v-model="regForm.singleModel" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>生产日期</div>
          <div class="inputContent" @click="showProductDatePicker('productionDate')">
            <!-- <cube-select title='请选择生产日期' v-model="regForm.productionDate" :options="selectComponentOption.productionDate">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择生产日期" v-model="regForm.productionDate" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>出厂日期</div>
          <div class="inputContent" @click="showManufacturerDatePicker('manufacturerDate')">
            <!-- <cube-select title='请选择出厂日期' v-model="regForm.factoryDate" :options="selectComponentOption.factoryDate">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择出厂日期" v-model="regForm.manufacturerDate" />
          </div>
        </li>
        <li>
          <div class="tit"><span>*</span>质保期</div>
          <div class="inputContent" @click="showQualityGuaranteeDatePicker('qualityGuaranteeDate')">
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.qualityGuaranteeDate" />
          </div>
        </li>
        <li>
          <div class="tit">设备编号</div>
          <div class="inputContent" @click="selectDevice">
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择设备编号" v-model="regForm.deviceCode" />
          </div>
        </li>
      </ul>
      <p class="addBatteryBtn" @click="addBatteryHandle">添加</p>
    </cube-scroll>
    <moreOptions @onchange="changeHandle" :showComponent="showMore">
      <div slot="options">
        <ul class="moreOptionWraper">
          <li @click="addModelOrNormOrsingle(item)" v-for="item in moreOptions" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </moreOptions>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import topHeader from '@/components/header/header';
import { ToastOnlyText } from '@/utils/Toast'
import moreOptions from '@/components/moreOptions/moreOptions'
import t from '@/utils/translate';
export default {
  data() {
    return {
      moreOptions: [
        {
          id: 'model',
          name: '添加型号'
        },
        {
          id: 'spec',
          name: '添加规格'
        },
        {
          id: 'singleSpec',
          name: '添加单体型号'
        }
      ],
      showMore: false,
      regForm: {},
      selectComponentOption: {},
      numberReg: /^[0-9]+.?[0-9]*$/
    };
  },
  computed: {
    ...mapState(['batterySingleModelList', 'batterySpecifList', 'batteryModelList', 'customCompanyList', 'unbindDeviceList']),
    options() {
      return {
        scrollbar: false, // 是否显示滚动条
        click: true
      }
    }
  },
  components: {
    topHeader,
    moreOptions
  },
  mounted() {
    this.batteryModel()
    this.batterySpecif()
    this.batterySingleModel()
    this.custormCompanyList()
    this.unbindDevice()
  },
  methods: {
    ...mapActions({
      batteryModel: 'getBatteryModelList',
      batterySpecif: 'getBatterySpecif',
      batterySingleModel: 'getBatterySingleModel',
      custormCompanyList: 'getCompanyList',
      unbindDevice: 'getUnbindDeviceList'
    }),
    back() {
      this.$router.push({
        name: 'MonitorBattery'
      })
    },
    addMore() {
      this.showMore = !this.showMore
    },
    changeHandle({ showOrhide }) {
      this.showMore = showOrhide
    },
    addModelOrNormOrsingle(item) {
      this.$createDialog({
        type: 'prompt',
        title: item.name,
        prompt: {
          value: '',
          clearable: true,
          placeholder: '请输入'
        },
        onConfirm: (e, promptValue) => {
          this.addModelOrSipficOrSingle(item.id, promptValue)
        }
      }).show()
    },
    addModelOrSipficOrSingle(addType, value) {
      let params = {
        dicKey: value,
        categoryId: 2
      };
      if (addType === 'model') {
        params.type = 'Model'; // 电池组型号
      }
      if (addType === 'spec') {
        params.type = 'Norm'; // 电池组规格
      }
      if (addType === 'singleSpec') {
        params.type = 'SingleModel'; // 单体规格
      }
      this.$api.batteryADDALL(params).then(res => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          ToastOnlyText(t('successTips.addSuccess'))
        }
      });
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showProductDatePicker(type) {
      this.timeType = type
      if (!this.datePicker) {
        this.ProductDatePicker = this.$createDatePicker({
          title: '生产日期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          value: new Date(),
          onSelect: this.selectDateHandle
        })
      }
      this.ProductDatePicker.show()
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showManufacturerDatePicker(type) {
      this.timeType = type
      if (!this.datePicker) {
        this.ManufacturerDatePicker = this.$createDatePicker({
          title: '出厂日期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          min: this.regForm.productionDate ? new Date(this.regForm.productionDate) : new Date(),
          value: new Date(this.regForm.manufacturerDate),
          onSelect: this.selectDateHandle
        })
      }
      this.ManufacturerDatePicker.show()
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showQualityGuaranteeDatePicker(type) {
      this.timeType = type
      if (!this.datePicker) {
        this.QualitydatePicker = this.$createDatePicker({
          title: '质保期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          max: new Date('2100-12-30'),
          min: this.regForm.manufacturerDate ? new Date(this.regForm.manufacturerDate) : new Date(),
          value: new Date(this.regForm.qualityGuaranteeDate),
          onSelect: this.selectDateHandle
        })
      }
      this.QualitydatePicker.show()
    },
    /**
     * @param date selectedVal selectedText 时间确认后的处理函数 具体参数见cube-ui文档
     */
    selectDateHandle(date, selectedVal, selectedText) {
      const value = selectedText.join('-')
      console.log('value', value)
      if (this.timeType === 'productionDate') {
        this.$set(this.regForm, 'productionDate', value)
      }
      if (this.timeType === 'manufacturerDate') {
        this.$set(this.regForm, 'manufacturerDate', value)
      }
      if (this.timeType === 'qualityGuaranteeDate') {
        this.$set(this.regForm, 'qualityGuaranteeDate', value)
      }
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    modelPickers(type) {
      this.selectType = type
      if (!this.modelPicker) {
        this.modelPicker = this.$createPicker({
          title: '电池型号',
          data: [this.batteryModelList],
          alias: {
            value: 'id',
            text: 'dicKey'
          },
          onSelect: this.selectHandles
        })
      }
      this.modelPicker.show()
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    spifPickers(type) {
      this.selectType = type
      if (!this.spifPicker) {
        this.spifPicker = this.$createPicker({
          title: '电池规格',
          data: [this.batterySpecifList],
          alias: {
            value: 'id',
            text: 'dicKey'
          },
          onSelect: this.selectHandles
        })
      }
      this.spifPicker.show()
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    singlePickers(type) {
      this.selectType = type
      if (!this.singlePicker) {
        this.singlePicker = this.$createPicker({
          title: '单体型号',
          data: [this.batterySingleModelList],
          alias: {
            value: 'id',
            text: 'dicKey'
          },
          onSelect: this.selectHandles
        })
      }
      this.singlePicker.show()
    },
    /**
     * @param selectedVal selectedVal selectedText picker确认后的处理函数 具体参数见cube-ui文档
     */
    selectHandles(selectedVal, selectedIndex, selectedText) {
      if (this.selectType === 'model') {
        this.$set(this.regForm, 'modelId', selectedVal[0])
        this.$set(this.regForm, 'model', selectedText[0])
      }
      if (this.selectType === 'specifications') {
        this.$set(this.regForm, 'normId', selectedVal[0])
        this.$set(this.regForm, 'norm', selectedText[0])
      }
      if (this.selectType === 'singleModel') {
        this.$set(this.regForm, 'singleModelId', selectedVal[0])
        this.$set(this.regForm, 'singleModel', selectedText[0])
      }
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    companyPickers() {
      if (!this.modelPicker) {
        this.companyPicker = this.$createPicker({
          title: '客户企业',
          data: [this.customCompanyList],
          alias: {
            value: 'id',
            text: 'name'
          },
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.$set(this.regForm, 'companyId', selectedVal[0])
            this.$set(this.regForm, 'customer', selectedText[0])
          }
        })
      }
      this.companyPicker.show()
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    selectDevice() {
      if (!this.modelPicker) {
        this.DevicePicker = this.$createPicker({
          title: '设备编号',
          data: [this.unbindDeviceList],
          alias: {
            value: 'id',
            text: 'code'
          },
          onSelect: (selectedVal, selectedIndex, selectedText) => {
            this.$set(this.regForm, 'deviceId', selectedVal[0])
            this.$set(this.regForm, 'deviceCode', selectedText[0])
          }
        })
      }
      this.DevicePicker.show()
    },
    addBatteryHandle() {
      console.log(this.regForm)
      const {
        batteryCode,
        modelId,
        model,
        normId,
        norm,
        companyId,
        customer,
        voltage,
        capacity,
        singleModelId,
        singleModel,
        productionDate,
        manufacturerDate,
        qualityGuaranteeDate,
        deviceCode,
        deviceId
      } = this.regForm
      if (
        !batteryCode ||
        !model ||
        !norm ||
        !customer ||
        !voltage ||
        !capacity ||
        !singleModel ||
        !productionDate ||
        !manufacturerDate ||
        !qualityGuaranteeDate
      ) {
        ToastOnlyText('请填写完整')
        return
      }
      if (!this.numberReg.test(Number(voltage))) {
        ToastOnlyText(t('batteryList.warn.voltageNumber'));
        return;
      }
      if (!this.numberReg.test(Number(capacity))) {
        ToastOnlyText(t('batteryList.warn.capacityNumber'));
        return;
      }
      if (new Date(productionDate) > new Date(manufacturerDate)) {
        ToastOnlyText(t('batteryList.warn.CheckmanufactureDate'));
        return
      }
      if (new Date(manufacturerDate) > new Date(qualityGuaranteeDate)) {
        ToastOnlyText(t('batteryList.warn.CheckWarrantyDate'));
        return
      }
      let params = {
        code: batteryCode,
        modelId: modelId,
        model: model,
        normId: normId,
        norm: norm,
        companyId: companyId,
        companyName: customer,
        voltage: Number(voltage),
        capacity: Number(capacity),
        singleModelId: singleModelId,
        singleModel: singleModel,
        productionDate: productionDate,
        manufacturerDate: manufacturerDate,
        qualityGuaranteeDate: qualityGuaranteeDate
      };
      if (deviceCode) {
        params.deviceId = deviceId;
        params.deviceCode = deviceCode;
      }
      console.log(params);
      this.$api.batteryAddGroup(params).then(res => {
        console.log('添加电池组', res);
        if (res.data && res.data.code === 0) {
          ToastOnlyText(t('successTips.regBattery'))
          this.regForm = {}
        }
      });
    }
  }

}

</script>
<style lang='stylus' scoped>
.addwraper
  padding-top 40px
  padding-bottom 40px
.itemList
  height calc(100vh - 45px)
  .addBatteryBtn
    margin 30px auto 50px
    width 80%
    height 40px
    line-height 40px
    text-align center
    background-color $color-project-blue
    color #fff
.backIcon
  font-size 20px
.moreOptionWraper
  padding 10px
  border-radius 5px
  background-color #868686
  li
    line-height 30px
.addwraperinfo
  li
    display flex
    padding 5px 10px
    .tit
      flex 0 0 100px
      line-height 40px
      span
        color red
        font-size 16px
        margin-right 5px
    .inputContent
      flex 1
</style>
