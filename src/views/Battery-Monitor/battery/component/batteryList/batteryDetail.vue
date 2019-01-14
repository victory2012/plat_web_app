<template>
  <div>
    <top-header fixed>
      <div slot="left" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">电池详情</div>
      <div slot="right" class="CloseIcon">
        <span>编辑</span>
      </div>
    </top-header>
    <div class="batteryItem">
      <cube-scroll class="batteryList" ref="scroll">
        <ul class="detailWraper">
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
      </cube-scroll>
    </div>
  </div>
</template>

<script>
import topHeader from '@/components/header/header';
export default {
  data () {
    return {
    };
  },

  components: {
    topHeader
  },

  mounted () { },

  methods: {}

}

</script>
<style lang='stylus' scoped>
.batteryItem
  padding-top $header-height
  height calc(100vh - $header-height)
  .batteryList
    height 100%
    .detailWraper
      padding 10px
      li
        display flex
        .tit
          flex 0 0 100px
        .inputContent
          flex 1
</style>
