
<script>
import { mainFooterBar } from '@/config/footerTab';

export default {
  name: 'mixins',
  data() {
    return {
      defaultLable: ''
    };
  },

  mounted() {
    // this.defaultLable = this.footerBarTabs[this.routerIndex].link;
  },
  methods: {
    goBackToHome() {
      this.$store.commit('setRouterIndex', 0)
      this.$router.push('/home')
      this.$store.commit('setMainTabBar', mainFooterBar())
    },
    getOffsetHeight(el) {
      return this.$refs[el].offsetHeight
    },
    goBack() {
      this.$store.commit('setRouterIndex', 0)
      this.$router.push('/monitor')
    }
  }

};

</script>
