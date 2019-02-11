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
          <div class="tit">电池编号</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" placeholder="请输入电池编号" v-model="regForm.batteryCode"></cube-input>
          </div>
        </li>
        <li>
          <div class="tit">额定电压</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" placeholder="请输入额定电压" v-model="regForm.voltage"></cube-input>
          </div>
        </li>
        <li>
          <div class="tit">额定容量</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" placeholder="请输入额定容量" v-model="regForm.capacity"></cube-input>
          </div>
        </li>
        <!-- <li>
          <div class="tit">生产企业</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择生产企业" v-model="regForm.production" />
          </div>
        </li> -->
        <li>
          <div class="tit">客户企业</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择客户企业' v-model="regForm.customer" :options="selectComponentOption.customer">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.customer" />
          </div>
        </li>
        <li>
          <div class="tit">电池型号</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择电池型号' v-model="regForm.model" :options="selectComponentOption.model">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.model" />
          </div>
        </li>
        <li>
          <div class="tit">电池规格</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择电池规格' v-model="regForm.specifications" :options="selectComponentOption.specifications">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.specifications" />
          </div>
        </li>
        <li>
          <div class="tit">单体型号</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择单体型号' v-model="regForm.singleModel" :options="selectComponentOption.singleModel">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.singleModel" />
          </div>
        </li>
        <li>
          <div class="tit">生产日期</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择生产日期' v-model="regForm.productionDate" :options="selectComponentOption.productionDate">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.productionDate" />
          </div>
        </li>
        <li>
          <div class="tit">出厂日期</div>
          <div class="inputContent">
            <!-- <cube-select title='请选择出厂日期' v-model="regForm.factoryDate" :options="selectComponentOption.factoryDate">
            </cube-select> -->
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.factoryDate" />
          </div>
        </li>
        <li>
          <div class="tit">质保期</div>
          <div class="inputContent">
            <cube-input class="BatteryDetailInput" readonly placeholder="请选择质保期" v-model="regForm.warranty" />
          </div>
        </li>
      </ul>
      <p class="addBatteryBtn">添加</p>
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
      selectComponentOption: {}
    };
  },
  computed: {
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

  mounted() { },

  methods: {
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
    margin 30px auto 0
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
    .inputContent
      flex 1
</style>
