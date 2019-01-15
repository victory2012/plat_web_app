
<script>
import { mainFooterBar } from '@/config/footerTab';

export default {
  name: 'mixins',
  data () {
    return {
      routerIndex: 0
    };
  },
  methods: {
    goBackToHome () {
      this.$router.push('/home')
      this.$store.commit('setMainTabBar', mainFooterBar())
    },
    getOffsetHeight (el) {
      return this.$refs[el].offsetHeight
    },
    goBack () {
      this.$router.push('/monitor')
    }
  }

};

</script>
