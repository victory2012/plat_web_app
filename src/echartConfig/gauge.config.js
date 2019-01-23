const data = {
  title: {
    text: '',
    subtext: '',
    textStyle: {
      color: '#484848'
    },
    subtextStyle: {
      color: '#484848'
    }
  },
  tooltip: [
    {
      trigger: 'item',
      formatter: '{b}: {d}%'
    },
    {
      trigger: 'item',
      formatter: '{b}: {d}%'
    }
  ],
  series: [
    {
      type: 'gauge',
      center: ['25%', '65%'], // 默认全局居中
      radius: '86%', // 仪表大小
      // startAngle: 200, // 开始角度
      endAngle: 45, // 结束角度
      data: [
        {
          value: 1.5,
          name: 'x1000 r/min'
        }
      ],
      splitNumber: 10,
      fontsize: 12,
      axisLine: {
        lineStyle: {
          color: [[0.2, '#ff4500'], [0.8, '#48b'], [1, '#228b22']],
          width: 5
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        show: true,
        length: 20,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        width: 5
      },
      detail: {
        formatter: '{value}%',
        textStyle: {
          color: 'auto',
          fontWeight: 'bolder'
        }
      }
    },
    {
      type: 'gauge',
      center: ['69%', '58%'], // 仪表位置
      radius: '110%', // 仪表大小
      z: 3,
      data: [
        {
          value: 1.5,
          name: '1000 r/min'
        }
      ],
      fontsize: 12,
      splitNumber: 10,
      axisLine: {
        lineStyle: {
          color: [[0.2, '#ff4500'], [0.8, '#48b'], [1, '#228b22']],
          width: 5
        }
      },
      axisTick: {
        splitNumber: 10,
        length: 12,
        lineStyle: {
          color: 'auto'
        }
      },
      splitLine: {
        show: true,
        length: 20,
        lineStyle: {
          color: 'auto'
        }
      },
      pointer: {
        width: 8
      },
      title: {
        show: true,
        offsetCenter: [0, '-40%'],
        textStyle: {
          fontWeight: 'bolder'
        }
      },
      detail: {
        formatter: '{value}%',
        textStyle: {
          color: 'auto',
          fontWeight: 'bolder'
        }
      }
    }
  ]
};

export default data;
