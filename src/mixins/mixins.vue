
<script>
import { mapGetters } from 'vuex';
import { mainFooterBar, monitorFooterBar } from '@/config/footerTab';

export default {
  name: 'mixins',
  data () {
    return {
      routerIndex: 0
    };
  },
  computed: {
    ...mapGetters({
      footerBar: 'getMainTabBar'
    })
  },
  created () {
    const current = this.$route.fullPath.split('/')[1];
    console.log('current =>>', current)
    if (current === 'home') {
      this.$store.commit('setMainTabBar', mainFooterBar())
    }
    if (current === 'monitor') {
      this.$store.commit('setMainTabBar', monitorFooterBar())
    }
    this.defaultLable = this.footerBar[0].link;
    this.getTabIndex(this.$route.name);
  },
  methods: {
    // '接收 footer emit 的当前激活tab的索引'
    tabIndex (index) {
      this.routerIndex = index
    },
    getTabIndex (name) {
      let Index = this.footerBar.findIndex((item) => {
        return item.link === name
      })
      if (Index < 0) {
        Index = 0
      }
      this.routerIndex = Index
      this.defaultLable = this.footerBar[Index].link
    },
    /**
     * @function touchstart
     * @desc 当前手指按在屏幕时 获取当前点在屏幕中的位置
     * @param {e} event对象 从中获取当前点击的页面位置 并保存
     */
    touchstart (e) {
      this.touchPointerX = e.touches[0].pageX;
      this.touchPointerY = e.touches[0].pageY;
    },
    /**
     * @function touchend
     * @desc 当前手指离开屏幕时 获取当前点在屏幕中的位置
     * @desc 根据touchstart 获取的点 跟 手指离开的点做比较，来判断是左滑还是右滑
     * @param {e} event对象 从中获取当前手指离开的页面位置 并保存
     */
    touchend (e) {
      this.touchendPointerX = e.changedTouches[0].pageX
      this.touchendPointerY = e.changedTouches[0].pageY
      const moveY = Math.abs(this.touchendPointerY - this.touchPointerY)
      const moveX = Math.abs(this.touchendPointerX - this.touchPointerX)
      const len = this.footerBar.length;
      if (moveY > moveX + 10) return
      if (this.touchendPointerX - this.touchPointerX < -80) {
        this.routerIndex++
        if (this.routerIndex === len) {
          this.routerIndex = len - 1
        }
      }
      if (this.touchendPointerX - this.touchPointerX > 80) {
        this.routerIndex--
        if (this.routerIndex < 0) {
          this.routerIndex = 0;
        }
      }
      let link = this.footerBar[this.routerIndex].link;
      this.$router.push({ name: link })
      this.defaultLable = link
    },
    goBackToHome () {
      this.$router.push('/home')
      this.$store.commit('setMainTabBar', mainFooterBar())
    }
  }

};

</script>
