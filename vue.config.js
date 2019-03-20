const path = require('path');

// const proxyURL = 'http://192.168.1.143:8000';
const proxyURL = 'http://47.96.8.239:8000';
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  baseUrl: process.env.NODE_ENV === 'production' ? 'test/app/' : '',
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
  }
};
