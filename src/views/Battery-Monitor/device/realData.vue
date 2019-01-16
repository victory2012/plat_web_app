<template>
  <div>
    <top-header fixed>
      <div slot="left">
        <div>
          <i class="cubeic-back" @click="goBack"></i>
        </div>
      </div>
      <div slot="mainTab">
        <div>实时数据</div>
      </div>
    </top-header>
    <div class="realMain">
      <div class="realTitles">
        <div>
          <img src="../../../assets/img/user.png">
          <span>摩融科技</span>
          <img class="img2" src="../../../assets/img/address.png">
        </div>
        <div class="message">
          <div>
            <img src="../../../assets/img/battery.png">
            <p>123123</p>
          </div>
          <div>
            <img src="../../../assets/img/set.png">
            <p>123123</p>
          </div>
          <div>
            <img src="../../../assets/img/battery.png">
            <p>1231232</p>
          </div>
        </div>
      </div>
      <div class="data">
        <div v-for="(item) in list" :key="item.title">
          <div>
            <img :src="item.src">
            <h2>{{item.main}}</h2>
            <p>{{item.title}}</p>
          </div>
        </div>
      </div>
      <div class="realBtn">
        <span>数据更新时间和主动查询</span>
        <cube-button>主动查询</cube-button>
      </div>
      <p class="tit">电压</p>
      <div class="realFrom">
        <e-chacts></e-chacts>
      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '../../../components/header/header.vue';
import eChacts from './echacts'
export default {
  components: { topHeader, eChacts },
  data() {
    return {
      list: [{
        title: '液位',
        main: '异常',
        src: require('../../../assets/img/temp.png')
      }, {
        title: '温度',
        main: '24.2C',
        src: require('../../../assets/img/level.png')
      }, {
        title: '电压',
        main: '32.33V',
        src: require('../../../assets/img/voltage.png')
      }, {
        title: '单体电压',
        main: '0.021V',
        src: require('../../../assets/img/voltage_total.png')
      }, {
        title: '电流',
        main: '0A',
        src: require('../../../assets/img/current.png')
      }, {
        title: '电量',
        main: '0%',
        src: require('../../../assets/img/capacity.png')
      }]
    }
  },
  methods: {
    goBack() {
      this.$router.push({ name: 'MonitorDevice' });
    }
  }
}
</script>

<style lang='stylus' scoped>
.realMain {
  position: fixed;
  top: contentFixedTop(5);
  left: 0;
  height: 100%;
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  overflow-scrolling: touch;
  width: 100%;

  .tit {
    font-weight: bold;
    font-size: 0.4rem;
    margin-left: 0.5rem;
  }

  .realTitles {
    width: 9.5rem;
    height: 2.4rem;
    border-radius: 0.3rem;
    border: 1px solid #a9a9a9;
    margin: 0 auto;
    margin-top: 0.2rem;
    box-shadow: 0.1rem 0.1rem 0.1rem #888888;

    .message {
      display: flex;

      div {
        display: flex;

        p {
          line-height: 1.1rem;
        }
      }
    }

    div {
      margin-top: 0.1rem;

      img {
        width: 1rem;
        height: 1rem;
        margin-left: 0.5rem;
      }

      .img2 {
        width: 0.8rem;
        height: 0.8rem;
        margin-left: 2.7rem;
        margin-bottom: 0.1rem;
      }

      span {
        margin-left: 0.2rem;
      }
    }
  }

  .data {
    margin-top: 0.5rem;
    display: flex;
    flex-wrap: wrap;

    div {
      display: flex;
      flex: 1;
      width: 3rem;
      margin-bottom: 0.2rem;

      div {
        display: flex;
        flex-direction: column;
        text-align: center;

        h2 {
          text-align: center;
          font-size: 0.35rem;
          padding: 0.3rem 0 0.1rem;
        }

        img {
          width: 0.8rem;
          height: 0.8rem;
          margin: 0 auto;
        }
      }
    }
  }

  .realBtn {
    display: flex;
    padding: 0.3rem 0;

    .cube-btn {
      height: 0.95rem;
      width: 2.6rem;
      border-radius: 0.2rem;
      line-height: 0.1rem;
      background: white;
      border: 1px solid black;
      color: black;
      margin-right: 0.5rem;
    }
  }

  .realFrom {
    width: 9.8rem;
    margin: 0 auto;
    margin-top: -0.8rem;
  }
}

.realBtn {
  display: flex;
  line-height: 1rem;
  margin: 0.3rem 0 0.4rem 0.55rem;

  span {
    font-size: 0.48rem;
    width: 6rem;
  }

  .cube-btn {
    margin-left: 0.5rem;
    height: 0.8rem;
  }
}
</style>
