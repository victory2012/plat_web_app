const path = require('path');

// const proxyURL = 'http://192.168.1.143:8000';
const proxyURL = 'http://47.96.8.239:8000';
function resolve(dir) {
  return path.join(__dirname, dir);
}
// cdn预加载使用
const externals = {
  'vue': 'Vue',
  'vue-router': 'VueRouter',
  'vuex': 'Vuex',
  'echarts': 'echarts',
  'axios': 'axios',
  'AMap': 'AMap'
}
const cdn = {
  // 开发环境
  dev: {
    css: [
      'https://unpkg.com/cube-ui/lib/cube.min.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/cube-ui/lib/cube.min.js',
      'https://webapi.amap.com/maps?v=1.3&key=67bf6ce73a8b047fb81fa0893189b417&plugin=AMap.Geocoder',
      'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts-en.min.js',
      'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11'
    ]
  },
  // 生产环境
  build: {
    css: [
      'https://unpkg.com/cube-ui/lib/cube.min.css'
    ],
    js: [
      'https://cdn.jsdelivr.net/npm/vue@2.5.17/dist/vue.min.js',
      'https://cdn.jsdelivr.net/npm/vue-router@3.0.1/dist/vue-router.min.js',
      'https://cdn.jsdelivr.net/npm/vuex@3.0.1/dist/vuex.min.js',
      'https://cdn.jsdelivr.net/npm/axios@0.18.0/dist/axios.min.js',
      'https://unpkg.com/cube-ui/lib/cube.min.js',
      'https://webapi.amap.com/maps?v=1.3&key=67bf6ce73a8b047fb81fa0893189b417&plugin=AMap.Geocoder',
      'https://cdnjs.cloudflare.com/ajax/libs/echarts/4.1.0/echarts-en.min.js',
      'https://webapi.amap.com/ui/1.0/main.js?v=1.0.11'
    ]
  }
}

module.exports = {
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        import: ['./src/theme']
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  devServer: {
    before(app) {
      // 模拟数据接口，以及返回模拟数据
      app.get('/api/seller', function(req, res) {
        res.json({
          error: 0,
          data: [{ id: '11225daas', info: 'asdjajsdkjakls' }]
        });
      });
    },
    proxy: {
      '/api': {
        target: proxyURL,
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {
          '^/api': '/'
        }
      }
    }
  },
  chainWebpack(config) {
    config.resolve.alias.set('@', resolve('src')); // 配置路径
    /**
     * 添加CDN参数到htmlWebpackPlugin配置中， 详见public/index.html 修改
     */
    config.plugin('html').tap(args => {
      if (process.env.NODE_ENV === 'production') {
        args[0].cdn = cdn.build
      }
      if (process.env.NODE_ENV === 'development') {
        args[0].cdn = cdn.dev
      }
      return args
    })
  },
  // 修改webpack config, 使其不打包externals下的资源
  configureWebpack: config => {
    const myConfig = {}
    if (process.env.NODE_ENV === 'production') {
      // 1. 生产环境npm包转CDN
      myConfig.externals = externals
    }
    if (process.env.NODE_ENV === 'development') {
      /**
       * 关闭host check，方便使用ngrok之类的内网转发工具
       */
      myConfig.devServer = {
        disableHostCheck: true
      }
    }
    return myConfig
  }
};
