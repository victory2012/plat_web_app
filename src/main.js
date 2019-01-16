import Vue from 'vue';
import '@/cube-ui';
import App from '@/App.vue';
import router from '@/router/index';
import store from '@/store/store';
import 'amfe-flexible';
import './assets/icon/iconfont.css';
import {
    Dialog
} from 'cube-ui';

Vue.use(Dialog);
Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');