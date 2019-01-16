<template>
  <div>
    <div v-for="(list,index) in list" :key='index' class="list">
      <div class="first">
        <div>
          <h2>{{list.equipment}}</h2>
          <h2>设备编号</h2>
        </div>
        <div class="bindingState">
          <span class="binding">已绑定</span>
        </div>
        <div>
          <h2>{{list.serial}}</h2>
          <h2>电池编号</h2>
        </div>
        <div class="selectBtn">
          <span :class="list.checked ? 'cubeic-select' : 'cubeic-arrow'" ref="pull" @click="pullDown(list)"></span>
        </div>
      </div>
      <div class="second">
        <div>
          <span>电池型号:{{list.model}}</span>
          <span>电池组规格:{{list.specification}}</span>
          <span>额定电压:{{list.pressure}}V</span>
        </div>
      </div>
      <div class="third" v-show="list.checked">
        <div>
          <span>{{list.activation}}</span>
          <span>{{list.onLine}}</span>
          <span>{{list.binding}}</span>
          <p>创建时间:{{list.time}}</p>
        </div>
        <div>
          <cube-button class="btn" @click="realData">查看</cube-button>
        </div>
      </div>
      <div class="fourth" v-show="list.checked">
        <span>删除</span>
        <span>激活</span>
        <span>拉黑</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checked: true,
      item: null,
      list: [{
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }, {
        equipment: '1230099111',
        serial: '48',
        model: '123456789',
        specification: '48',
        pressure: '13',
        activation: '激活中',
        onLine: '在线',
        binding: '已绑定',
        time: '2018-01-20 01:11',
        checked: false
      }]
    }
  },
  methods: {
    pullDown(list) {
      list.checked = !list.checked;
      if (list.checked) {
        this.$refs.pull.className = 'cubeic-select';
      } else {
        this.$refs.pull.className = 'cubeic-arrow';
      }
    },
    realData() {
      this.$router.push({ name: 'realData' })
    }
  }
}
</script>

<style lang='stylus' scoped>
.list {
  border-bottom: 2px solid #bcbcbc;
  margin: 0.2rem 0 0.2rem 0;
}

.first {
  display: flex;
  height: 1.4rem;

  .selectBtn {
    margin-top: 0.4rem;
  }

  div {
    margin-left: 0.5rem;

    h2 {
      font-weight: bold;
      font-size: 0.3 0.5rem;
    }
  }

  .bindingState {
    width: 1.2rem;
    height: 0.5rem;
    background: #519af2;
    border-radius: 0.3rem;
    margin-top: 0.35rem;
    line-height: 0.5rem;

    .binding {
      color: white;
      line-height: 0.5rem;
    }
  }

  div {
    flex-grow: 1;
    height: 1.3rem;
    line-height: 0.6rem;
    text-align: center;
  }
}

.second {
  display: flex;

  div {
    height: 0.8rem;
    line-height: 0.6rem;
    text-align: center;
    padding-left: 0.1rem;
    margin-bottom: 0.2rem;

    span {
      padding: 0 0.2rem;
      flex: 1;
      text-align: center;
      color: #666666;
    }
  }
}

.third {
  display: flex;
  margin: -0.2rem 0 0.2rem -0.11rem;

  div {
    height: 1.6rem;
    line-height: 0.8rem;
    text-align: center;

    span {
      padding: 0 0.4rem;
      flex: 1;
      text-align: left;
    }

    p {
      padding: 0 0.4rem;
      text-align: left;
    }

    .btn {
      width: 2rem;
      height: 0.5rem;
      line-height: 0.1rem;
      margin-left: 1.8rem;
      margin-top: 0.2rem;
    }
  }
}

.fourth {
  display: flex;
  margin-bottom: 0.2rem;

  span {
    flex: 1;
    text-align: center;
    color: red;
    font-weight: bold;
  }
}
</style>
