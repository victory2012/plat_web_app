// const option = {
//   tooltip: {
//     formatter: '{a} <br/>{c} {b}'
//   },
//   // toolbox: {
//   //   show: true,
//   //   feature: {
//   //     restore: { show: true },
//   //     saveAsImage: { show: true }
//   //   }
//   // },
//   series: [
//     {
//       name: '速度',
//       type: 'gauge',
//       z: 3,
//       min: 0,
//       max: 220,
//       splitNumber: 11,
//       radius: '50%',
//       axisLine: {
//         // 坐标轴线
//         lineStyle: {
//           // 属性lineStyle控制线条样式
//           width: 10
//         }
//       },
//       axisTick: {
//         // 坐标轴小标记
//         length: 15, // 属性length控制线长
//         lineStyle: {
//           // 属性lineStyle控制线条样式
//           color: 'auto'
//         }
//       },
//       splitLine: {
//         // 分隔线
//         length: 20, // 属性length控制线长
//         lineStyle: {
//           // 属性lineStyle（详见lineStyle）控制线条样式
//           color: 'auto'
//         }
//       },
//       axisLabel: {
//         backgroundColor: 'auto',
//         borderRadius: 2,
//         color: '#eee',
//         padding: 3,
//         textShadowBlur: 2,
//         textShadowOffsetX: 1,
//         textShadowOffsetY: 1,
//         textShadowColor: '#222'
//       },
//       title: {
//         // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//         fontWeight: 'bolder',
//         fontSize: 20,
//         fontStyle: 'italic'
//       },
//       // detail: {
//       //   // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//       //   formatter: function (value) {
//       //     value = (value + '').split('.');
//       //     value.length < 2 && value.push('00');
//       //     return (
//       //       ('00' + value[0]).slice(-2) + '.' + (value[1] + '00').slice(0, 2)
//       //     );
//       //   },
//       //   fontWeight: 'bolder',
//       //   borderRadius: 3,
//       //   backgroundColor: '#444',
//       //   borderColor: '#aaa',
//       //   shadowBlur: 5,
//       //   shadowColor: '#333',
//       //   shadowOffsetX: 0,
//       //   shadowOffsetY: 3,
//       //   borderWidth: 2,
//       //   textBorderColor: '#000',
//       //   textBorderWidth: 2,
//       //   textShadowBlur: 2,
//       //   textShadowColor: '#fff',
//       //   textShadowOffsetX: 0,
//       //   textShadowOffsetY: 0,
//       //   fontFamily: 'Arial',
//       //   width: 100,
//       //   color: '#eee',
//       //   rich: {}
//       // },
//       data: [{ value: 40, name: 'km/h' }]
//     },
//     {
//       name: '转速',
//       type: 'gauge',
//       center: ['20%', '55%'], // 默认全局居中
//       radius: '35%',
//       min: 0,
//       max: 7,
//       endAngle: 45,
//       splitNumber: 7,
//       axisLine: {
//         // 坐标轴线
//         lineStyle: {
//           // 属性lineStyle控制线条样式
//           width: 8
//         }
//       },
//       axisTick: {
//         // 坐标轴小标记
//         length: 12, // 属性length控制线长
//         lineStyle: {
//           // 属性lineStyle控制线条样式
//           color: 'auto'
//         }
//       },
//       splitLine: {
//         // 分隔线
//         length: 20, // 属性length控制线长
//         lineStyle: {
//           // 属性lineStyle（详见lineStyle）控制线条样式
//           color: 'auto'
//         }
//       },
//       pointer: {
//         width: 5
//       },
//       title: {
//         offsetCenter: [0, '-30%'] // x, y，单位px
//       },
//       detail: {
//         // 其余属性默认使用全局文本样式，详见TEXTSTYLE
//         fontWeight: 'bolder'
//       },
//       data: [{ value: 1.5, name: 'x1000 r/min' }]
//     }
//   ]
// };
// export default option;

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
  tooltip: {
    trigger: 'item',
    formatter: '{b}: {d}%'
  },
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
