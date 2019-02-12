<template>
  <div>
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">电池详情</div>
      <div slot="right" class="CloseIcon">
        <span @click="doEditDetail" v-show="!edit">编辑</span>
        <span @click="doSaveEdit" v-show="edit">保存</span>
      </div>
    </top-header>
    <div class="batteryItem">
      <cube-scroll class="batteryList" ref="scroll">
        <ul class="detailWraper">
          <li>
            <div class="tit">电池编号</div>
            <div class="inputContent">
              <cube-input class="BatteryDetailInput" :disabled="true" placeholder="电池编号" v-model="detailForm.hostId"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">额定电压</div>
            <div class="inputContent">
              <cube-input class="BatteryDetailInput" clearable :disabled="!edit" placeholder="额定电压" v-model="detailForm.voltage"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">额定容量</div>
            <div class="inputContent">
              <cube-input class="BatteryDetailInput" clearable :disabled="!edit" placeholder="额定容量" v-model="detailForm.capacity"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">客户企业</div>
            <div class="inputContent">
              <!-- <cube-select title='请选择生产企业' v-model="detailForm.companyName" :options="selectComponentOption.production">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" :disabled="true" placeholder="生产企业" v-model="detailForm.companyName"></cube-input>
            </div>
          </li>
          <!-- <li>
            <div class="tit">客户企业</div>
            <div class="inputContent">
              <cube-input class="BatteryDetailInput" :disabled="true" placeholder="客户企业" v-model="detailForm.customer"></cube-input>
            </div>
          </li> -->
          <li>
            <div class="tit">电池型号</div>
            <div class="inputContent" @click="modelPickers('model')">
              <!-- <cube-select title='请选择电池型号' v-model="detailForm.model" :options="selectComponentOption.model">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="电池型号" v-model="detailForm.model"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">电池规格</div>
            <div class="inputContent" @click="spifPickers('specifications')">
              <!-- <cube-select title='请选择电池规格' v-model="detailForm.norm" :options="selectComponentOption.specifications">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="电池规格" v-model="detailForm.norm"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">单体型号</div>
            <div class="inputContent" @click="singlePickers('singleModel')">
              <!-- <cube-select title='请选择单体型号' v-model="detailForm.singleModel" :options="selectComponentOption.singleModel">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="单体型号" v-model="detailForm.singleModel"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">生产日期</div>
            <div class="inputContent" @click="showProductDatePicker('productionDate')">
              <!-- <cube-select title='请选择生产日期' v-model="detailForm.productionDate" :options="selectComponentOption.productionDate">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="生产日期" v-model="detailForm.productionDate"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">出厂日期</div>
            <div class="inputContent" @click="showManufacturerDatePicker('manufacturerDate')">
              <!-- <cube-select title='请选择出厂日期' v-model="detailForm.manufacturerDate" :options="selectComponentOption.factoryDate">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="出厂日期" v-model="detailForm.manufacturerDate"></cube-input>
            </div>
          </li>
          <li>
            <div class="tit">质保期</div>
            <div class="inputContent" @click="showQualityGuaranteeDatePicker('qualityGuaranteeDate')">
              <!-- <cube-select title='请选择质保期' v-model="detailForm.qualityGuaranteeDate" :options="selectComponentOption.warranty">
              </cube-select> -->
              <cube-input class="BatteryDetailInput" readonly :disabled="!edit" placeholder="质保期" v-model="detailForm.qualityGuaranteeDate"></cube-input>
            </div>
          </li>
        </ul>
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { ToastOnlyText } from '@/utils/Toast'
import t from '@/utils/translate';
import topHeader from '@/components/header/header';
export default {
  data() {
    return {
      detailForm: {},
      selectComponentOption: {},
      edit: false,
      numberReg: /^[0-9]+.?[0-9]*$/
    };
  },

  components: {
    topHeader
  },
  computed: {
    ...mapState(['batterySingleModelList', 'batterySpecifList', 'batteryModelList'])
  },
  mounted() {
    const batteryId = this.$route.query.id
    this.getBatteryDetail(batteryId)
    this.batteryModel()
    this.batterySpecif()
    this.batterySingleModel()
  },

  methods: {
    ...mapActions({
      batteryModel: 'getBatteryModelList',
      batterySpecif: 'getBatterySpecif',
      batterySingleModel: 'getBatterySingleModel'
    }),
    /**
    * @param {string} [id] 电池id
    * 根据电池id 获取电池详情
    */
    getBatteryDetail(id) {
      this.$api.betteryDetails(id).then(res => {
        console.log('betteryDetails', res.data)
        if (res.data && res.data.code === 0) {
          this.detailForm = res.data.data
        }
      })
    },
    doEditDetail() {
      this.edit = true
    },
    /* 保存修改 */
    doSaveEdit() {
      if (!this.detailForm.voltage) {
        ToastOnlyText(t('batteryList.warn.batteryVoltage'))
        return
      }
      if (!this.detailForm.capacity) {
        ToastOnlyText(t('batteryList.warn.batteryCapacity'))
        return
      }
      if (!this.numberReg.test(Number(this.detailForm.voltage))) {
        ToastOnlyText(t('batteryList.warn.voltageNumber'));
        return;
      }
      if (!this.numberReg.test(Number(this.detailForm.capacity))) {
        ToastOnlyText(t('batteryList.warn.capacityNumber'));
        return;
      }
      if (new Date(this.detailForm.productionDate) > new Date(this.detailForm.manufacturerDate)) {
        ToastOnlyText(t('batteryList.warn.CheckmanufactureDate'));
        return
      }
      if (new Date(this.detailForm.manufacturerDate) > new Date(this.detailForm.qualityGuaranteeDate)) {
        ToastOnlyText(t('batteryList.warn.CheckWarrantyDate'));
        return
      }
      let options = {
        normId: this.detailForm.normId,
        norm: this.detailForm.norm,
        modelId: this.detailForm.modelId,
        model: this.detailForm.model,
        singleModelId: this.detailForm.singleModelId,
        singleModel: this.detailForm.singleMode,
        voltage: this.detailForm.voltage,
        capacity: this.detailForm.capacity,
        productionDate: this.detailForm.productionDate,
        manufacturerDate: this.detailForm.manufacturerDate,
        qualityGuaranteeDate: this.detailForm.qualityGuaranteeDate
      };
      console.log(options);
      this.$api.changeBatteryDetail(this.detailForm.id, options).then(res => {
        console.log(res);
        this.edit = false
        if (res.data && res.data.code === 0) {
          ToastOnlyText(t('successTips.changeSuccess'))
        }
      });
    },
    /* 返回 */
    back() {
      this.$router.push({
        name: 'MonitorBattery'
      })
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showProductDatePicker(type) {
      if (!this.edit) return
      this.timeType = type
      if (!this.datePicker) {
        this.ProductDatePicker = this.$createDatePicker({
          title: '生产日期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          value: new Date(this.detailForm.productionDate),
          onSelect: this.selectDateHandle
        })
      }
      this.ProductDatePicker.show()
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showManufacturerDatePicker(type) {
      if (!this.edit) return
      this.timeType = type
      if (!this.datePicker) {
        this.ManufacturerDatePicker = this.$createDatePicker({
          title: '出厂日期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          min: this.detailForm.productionDate ? new Date(this.detailForm.productionDate) : new Date(),
          value: new Date(this.detailForm.manufacturerDate),
          onSelect: this.selectDateHandle
        })
      }
      this.ManufacturerDatePicker.show()
    },
    /**
     * @param {string} [type] 日期类型 {生产日期、出厂日期、质保期}
     */
    showQualityGuaranteeDatePicker(type) {
      if (!this.edit) return
      this.timeType = type
      if (!this.datePicker) {
        this.QualitydatePicker = this.$createDatePicker({
          title: '质保期',
          format: {
            year: 'YYYY',
            month: 'MM',
            date: 'DD'
          },
          min: this.detailForm.manufacturerDate ? new Date(this.detailForm.manufacturerDate) : new Date(),
          value: new Date(this.detailForm.qualityGuaranteeDate),
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
      if (this.timeType === 'productionDate') {
        this.$set(this.detailForm, 'productionDate', value)
      }
      if (this.timeType === 'manufacturerDate') {
        this.$set(this.detailForm, 'manufacturerDate', value)
      }
      if (this.timeType === 'qualityGuaranteeDate') {
        this.$set(this.detailForm, 'qualityGuaranteeDate', value)
      }
    },
    /**
     * @param {string} [type] 选择的类型，型号、单体型号、规格
     */
    modelPickers(type) {
      if (!this.edit) return
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
      if (!this.edit) return
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
      if (!this.edit) return
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
        this.detailForm.model = selectedText[0]
        this.detailForm.modelId = selectedVal[0]
      }
      if (this.selectType === 'specifications') {
        this.detailForm.norm = selectedText[0]
        this.detailForm.normId = selectedVal[0]
      }
      if (this.selectType === 'singleModel') {
        this.detailForm.singleModel = selectedText[0]
        this.detailForm.singleModelId = selectedVal[0]
      }
    }
  }
}

</script>
<style lang='stylus' scoped>
.backIcon
  font-size 20px
.batteryItem
  padding-top $header-height
  height calc(100vh - 40px)
  .batteryList
    height 100%
    .detailWraper
      padding 10px
      li
        display flex
        padding 5px 0
        .tit
          flex 0 0 100px
          line-height 40px
        .inputContent
          flex 1
</style>
