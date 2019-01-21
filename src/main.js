import Vue from 'vue';
import '@/cube-ui';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/store';
import 'amfe-flexible';
import './assets/icon/iconfont.css';
import api from './api/index';
import i18n from './i18n';
import Toast from '@/components/Toast/toast';

Vue.config.productionTip = false;
Vue.prototype.$api = api;
Vue.prototype.$Toast = Toast;
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount('#app');
