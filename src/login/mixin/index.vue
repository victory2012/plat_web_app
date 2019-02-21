
<script>
import Toast from '@/components/Toast/toast';
import { ToastWithLoading } from '@/utils/Toast';
import { phoneNumCheck } from '@/utils/check.js';
import t from '@/utils/translate';
export default {
  name: '',
  props: [''],
  data() {
    return {
      logObj: {}
    };
  },
  methods: {
    phoneSignIn() {
      this.phoneLogon()
    },
    accoundSignIn() {
      this.doAccountLogin()
    },
    doAccountLogin() {
      if (!this.logObj.account) {
        Toast(t('loginMsg.errorMsg.account'))
        return
      }
      if (!this.logObj.password) {
        Toast(t('loginMsg.errorMsg.password'))
        return
      }
      const person = {
        account: this.logObj.account,
        password: this.logObj.password
      };
      ToastWithLoading().show('登录中...')
      this.$api.login(person).then(res => {
        ToastWithLoading().hide()
        const data = res.data;
        if (data.code === 0) {
          localStorage.setItem('accPwd', JSON.stringify(person))
          sessionStorage.setItem('token', res.headers.token);
          sessionStorage.setItem('loginData', JSON.stringify(data.data));
          this.$store.commit('setUserLoginData', data.data)
          const result = data.data;
          const { companyId, id } = result;
          this.getCompanyPermissions(companyId, id);
        }
      })
    },
    /* 获取公司权限 */
    getCompanyPermissions(companyId, userId) {
      this.$api.getCompanyRole(companyId).then(({ data }) => {
        console.log('CompanyPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('CompanyPermissions', data.data)
          this.getUserPermissions(userId)
        }
      })
    },
    /* 获取个人权限 */
    getUserPermissions(userId) {
      this.$api.permissions(userId).then(({ data }) => {
        console.log('UserPermissions', data)
        if (data.code === 0) {
          sessionStorage.setItem('UserPermissions', JSON.stringify(data.data))
          this.$router.push({ name: 'Home' })
          this.$store.commit('setRouterIndex', 0);
        }
      })
    },
    /* 获取验证码 */
    getSmsCode() {
      if (this.hasGetSms) {
        return
      }
      if (!this.logObj.phone) {
        Toast(t('loginMsg.errorMsg.phoneNub'))
        return
      }
      if (!phoneNumCheck(this.logObj.phone)) {
        Toast(t('loginMsg.errorMsg.checkPhone'))
        return
      }
      let conut = 60;
      this.$api.SMScode({ phone: this.logObj.phone }).then((res) => {
        console.log(res);
        if (res.data && res.data.code === 0) {
          this.hasGetSms = true;
          const Timer = setInterval(() => {
            conut--;
            this.smsCode = `${conut}s`;
            if (conut < 1) {
              this.smsCode = t('loginMsg.getSmsCode');
              this.hasGetSms = false;
              clearInterval(Timer);
            }
          }, 1000);
          Toast(t('loginMsg.smsSuccess'))
        }
      });
    },
    phoneLogon() {
      if (!this.logObj.phone) {
        Toast(t('loginMsg.errorMsg.phoneNub'))
        return
      }
      if (!phoneNumCheck(this.logObj.phone)) {
        Toast(t('loginMsg.errorMsg.checkPhone'))
        return
      }
      if (!this.logObj.smscode) {
        Toast(t('loginMsg.errorMsg.smsCodeErr'))
        return
      }
      const phoneObj = {
        phone: this.logObj.phone,
        code: this.logObj.smscode
      };
      ToastWithLoading().show('登录中...')
      this.$api.SMSVertify(phoneObj).then((res) => {
        console.log(res);
        ToastWithLoading().hide()
        const data = res.data;
        if (data.code === 0) {
          sessionStorage.setItem('token', res.headers.token);
          sessionStorage.setItem('loginData', JSON.stringify(data.data));
          this.$store.commit('setUserLoginData', data.data)
          const result = data.data;
          const { companyId, id } = result;
          this.getCompanyPermissions(companyId, id);
        }
      });
    },
    showActive() {
      this.$createActionSheet({
        data: [
          {
            content: '中文',
            local: 'zh'
          },
          {
            content: 'English',
            local: 'en'
          }
        ],
        onSelect: (item) => {
          console.log(item)
          this.localLanguge = item.content
        }
      }).show()
    }
  }

}

</script>
<style lang='' scoped>
</style>
