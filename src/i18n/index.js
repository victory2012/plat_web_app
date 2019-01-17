import Vue from 'vue';
import VueI18n from 'vue-i18n';
// import enLocale from 'cube-ui/src/locale/lang/en-US';
// import zhLocale from 'cube-ui/src/locale/lang/zh-CN';
import zh from './lang/LangZh';
import en from './lang/LangEn';

Vue.use(VueI18n);
// const messages = {
//   zh: Object.assign(zh, zhLocale),
//   en: Object.assign(en, enLocale)
// };
const messages = {
  zh: zh,
  en: en
};

const i18n = new VueI18n({
  locale: localStorage.getItem('locale') || 'zh',
  // fallbackLocale: 'CN',
  messages
});
export default i18n;
