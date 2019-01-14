<template>
  <div>
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">电池登记</div>
      <div slot="right" @click="addMore" class="CloseIcon">
        <i class="iconfont icon-more"></i>
      </div>
    </top-header>
    <ul class="addwraper">
      <li>
        <div class="tit">电池编号</div>
        <div class="inputContent">
          <cube-input placeholder="请输入电池编号" v-model="regForm.batteryCode"></cube-input>
        </div>
      </li>
      <li>
        <div class="tit">额定电压</div>
        <div class="inputContent">
          <cube-input placeholder="请输入额定电压" v-model="regForm.voltage"></cube-input>
        </div>
      </li>
      <li>
        <div class="tit">额定容量</div>
        <div class="inputContent">
          <cube-input placeholder="请输入额定容量" v-model="regForm.capacity"></cube-input>
        </div>
      </li>
      <li>
        <div class="tit">生产企业</div>
        <div class="inputContent">
          <cube-select title='请选择生产企业' v-model="regForm.production" :options="selectComponentOption.production">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">客户企业</div>
        <div class="inputContent">
          <cube-select title='请选择客户企业' v-model="regForm.customer" :options="selectComponentOption.customer">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">电池型号</div>
        <div class="inputContent">
          <cube-select title='请选择电池型号' v-model="regForm.model" :options="selectComponentOption.model">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">电池规格</div>
        <div class="inputContent">
          <cube-select title='请选择电池规格' v-model="regForm.specifications" :options="selectComponentOption.specifications">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">单体型号</div>
        <div class="inputContent">
          <cube-select title='请选择单体型号' v-model="regForm.singleModel" :options="selectComponentOption.singleModel">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">生产日期</div>
        <div class="inputContent">
          <cube-select title='请选择生产日期' v-model="regForm.productionDate" :options="selectComponentOption.productionDate">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">出厂日期</div>
        <div class="inputContent">
          <cube-select title='请选择出厂日期' v-model="regForm.factoryDate" :options="selectComponentOption.factoryDate">
          </cube-select>
        </div>
      </li>
      <li>
        <div class="tit">质保期</div>
        <div class="inputContent">
          <cube-select title='请选择质保期' v-model="regForm.warranty" :options="selectComponentOption.warranty">
          </cube-select>
        </div>
      </li>
    </ul>
    <moreOptions v-on:onchange="changeHandle" :showComponent="showMore">
      <div slot="options">
        <ul class="moreOptionWraper">
          <li @click="showAlert(item)" v-for="item in moreOptions" :key="item.id">{{item.name}}</li>
        </ul>
      </div>
    </moreOptions>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
import moreOptions from '@/components/moreOptions/moreOptions'
export default {
  name: '',
  props: [''],
  data () {
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

  components: {
    topHeader,
    moreOptions
  },

  mounted () { },

  methods: {
    back () {
      this.$router.push({
        name: 'MonitorBattery'
      })
    },
    addMore () {
      this.showMore = !this.showMore
    },
    changeHandle ({ showOrhide }) {
      this.showMore = showOrhide
    },
    showAlert (item) {
      this.dialog = this.$createDialog({
        type: 'prompt',
        title: item.name,
        prompt: {
          value: '',
          placeholder: '请输入'
        },
        onConfirm: (e, promptValue) => {
          this.$createToast({
            type: 'warn',
            time: 1000,
            txt: `Prompt value: ${promptValue || ''}`
          }).show()
        }
      }).show()
    }
  }

}

</script>
<style lang='stylus' scoped>
.backIcon
  font-size 20px
.moreOptionWraper
  padding 10px
  border-radius 5px
  background-color #868686
  li
    line-height 30px
.addwraper
  padding-top $header-height
  li
    display flex
    padding 5px 10px
    .tit
      flex 0 0 100px
      line-height 40px
    .inputContent
      flex 1
</style>
