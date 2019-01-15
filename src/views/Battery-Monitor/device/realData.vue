<template>
  <div>
    <top-header fixed>
      <div slot="left">
        <div>
          <i class="cubeic-back"></i>
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
          <i class="cubeic-location"></i>
        </div>
        <div>
          <div>
            <img src="../../../assets/img/battery.png">
            <span>123123</span>
          </div>
          <div>
            <img src="../../../assets/img/set.png">
            <span>123123</span>
          </div>
          <div>
            <img src="../../../assets/img/battery.png">
            <span>1231232</span>
          </div>
        </div>
      </div>
      <div class="data">
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
        <div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </div>
      </div>
      <div class="realBtn">
        <span>数据更新时间和主动查询</span>
        <cube-button>主动查询</cube-button>
      </div>
      <div class="realFrom">

      </div>
    </div>
  </div>
</template>

<script>
import topHeader from '../../../components/header/header.vue';
export default {
  components: { topHeader },
  data() {
    return {
      list: [
        {
          manufacturing: [
            {
              text: '生产企业1', click: true
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }
          ],
          ourcing: [
            {
              text: '生产企业1', click: true
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }, {
              text: '生产企业1', click: false
            }
          ]
        }, {
          model: [
            {
              text: 'test1', click: true
            }, {
              text: 'test1', click: false
            }, {
              text: 'test1', click: false
            }, {
              text: 'test1', click: false
            }, {
              text: 'test1', click: false
            }, {
              text: 'test1', click: false
            }, {
              text: 'test1', click: false
            }
          ]
        }, {
          state: [
            {
              text: '全部', click: true
            }, {
              text: '已绑定', click: false
            }, {
              text: '未绑定', click: false
            }
          ],
          onLine: [
            {
              text: '全部', click: true
            }, {
              text: '在线', click: false
            }, {
              text: '离线', click: false
            }
          ],
          running: [
            {
              text: '全部', click: true
            }, {
              text: '已激活', click: false
            }, {
              text: '未激活', click: false
            }, {
              text: '激活中', click: false
            }, {
              text: '取消警告中', click: false
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang='stylus' scoped>
.realMain {
  position: fixed;
  top: contentFixedTop(5);
  left: 0;
  bottom: contentFixedBottom(0);
  -webkit-overflow-scrolling: touch;
  overflow: scroll;
  overflow-scrolling: touch;
  width: 100%;

  .realTitles {
    width: 9.5rem;
    height: 2.4rem;
    border-radius: 0.3rem;
    border: 1px solid #a9a9a9;
    margin: 0 auto;
    margin-top: 0.5rem;
    box-shadow: 0.1rem 0.1rem 0.1rem #888888;

    div {
      img {
        width: 0.8rem;
        height: 0.8rem;
      }
    }
  }

  .data {
    display: flex;
    flex-direction: column;
    margin-top: 0.8rem;

    div {
      display: flex;
      flex: 1;

      div {
        border: 1px solid black;
      }
    }
  }

  .realBtn {
    display: flex;

    .cube-btn {
      height: 1rem;
      width: 2.6rem;
      border-radius: 0.2rem;
      line-height: 0.2rem;
    }
  }

  .realFrom {
    margin: 0 auto;
    width: 9rem;
    height: 5rem;
    border: 1px solid black;
  }
}
</style>
