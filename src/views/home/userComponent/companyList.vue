<template>
  <cube-scroll class="companyList" ref="scroll" :options="options" @pulling-up="pullingUp">
    <div v-for="key in companyArr" :key="key.id" class="companyItem">
      <img class="companyLogo" :src="key.logos" alt="" srcset="">
      <div class="companyInfo">
        <p class="companyName">{{key.name}}</p>
        <p class="address">地址：{{key.address}}</p>
        <p @click="lookDetail(key)" class="detail">详情</p>
      </div>
    </div>
  </cube-scroll>
</template>

<script>
import photoSagema from '@/api/photoSagma'

export default {
  data() {
    return {
      pullDownRefreshObj: {
        threshold: 50,
        stop: 20
      },
      pullUpLoadObj: {
        threshold: 50,
        txt: {
          more: '上拉加载更多',
          noMore: '没有更多数据'
        }
      },
      currentPage: 1,
      companyArr: []
    };
  },
  computed: {
    options() {
      return {
        // pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: false
      }
    }
  },
  components: {
    // 'pop-company': Popup
  },

  mounted() {
    this.getCompanyListFun()
  },

  methods: {
    lookDetail(item) {
      this.$router.push('/home/company-detail')
      this.$store.commit('setCompanyDetail', item)
    },
    pullingUp() {
      this.currentPage++
      if (this.currentPage > this.totalPage) {
        this.$refs.scroll.forceUpdate();
      } else {
        this.getCompanyListFun()
      }
    },
    getCompanyListFun() {
      let pageObj = {
        pageSize: '15',
        pageNum: this.currentPage
      };
      this.$api.getCompanyList(pageObj).then(({ data }) => {
        console.log('company list', data)
        if (data.code === 0) {
          this.totalPage = data.data.totalPage;
          const result = data.data.pageData;
          result.forEach(key => {
            key.logos = key.logo ? `${photoSagema}/${key.logo}` : require('@/assets/img/default_avatar.png')
          });
          this.companyArr = result
        }
      })
    }
  }

}

</script>
<style lang='stylus' scoped>
.animation
  -webkit-animation mint-zoom 0.5s ease-in-out
  animation mint-zoom 0.5s ease-in-out
.companyList
  // background-color $boder-coloGray
  // min-height bodyMinHeight(100vh, $header-height, $footer-height)
  .companyItem
    padding 10px 15px
    box-sizing border-box
    background-color #ffffff
    border-bottom 3px solid $boder-coloGray
    display flex
    .companyLogo
      display block
      width 60px
      height 60px
    .companyInfo
      position relative
      flex 1
      box-sizing border-box
      padding-left 10px
      overflow hidden
      text-overflow ellipsis
      white-space nowrap
      p
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        line-height 30px
      .address
        box-sizing border-box
        padding-right 30px
        width 100%
      .detail
        position absolute
        right 0px
        bottom 0px
        color #ff5050
</style>
