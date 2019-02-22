<template>
  <div class="permissionWraper">
    <top-header fixed>
      <div slot="left" @click="back" class="backIcon">
        <i class="backIcon iconfont icon-back1"></i>
      </div>
      <div class="searchWarper" slot="mainTab">用户权限</div>
      <div slot="right">
        <span @click="editPermiss">编辑</span>
      </div>
    </top-header>
    <div v-for="key in permissionArr" :key="key.id">
      <cube-checkbox v-model="key.value" :disabled='!key.edit' position="right" shape="square" :hollow-style="true">
        {{key.label}}
      </cube-checkbox>
      <!-- <p>{{key.label}}</p>
      <cube-switch v-model="key.value"></cube-switch> -->
    </div>
    <div v-show="saveChanges" class="submitBtn">
      <p @click="changePermission">确定</p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import topHeader from '@/components/header/header';
import defaultList from '@/permission/permissiones'
import t from '@/utils/translate';
export default {
  data() {
    return {
      permissionArr: [],
      saveChanges: false
    }
  },
  computed: {
    ...mapGetters({
      userData: 'getLoginData'
    })
  },
  components: {
    topHeader
  },
  mounted() {
    const { query } = this.$route
    const permissionObj = defaultList(query)
    for (let key in permissionObj) {
      let obj = {}
      obj.value = permissionObj[key]
      obj.label = t(`defaultRole.${key}`)
      obj.id = key
      obj.edit = false
      this.permissionArr.push(obj)
    }
    this.userId = query.id
    this.getUserPermission(this.userId);
  },
  methods: {
    back() {
      this.$router.push({ name: 'HomeUser' })
    },
    editPermiss() {
      this.permissionArr.forEach(item => {
        item.edit = true
      })
      this.saveChanges = true
    },
    getUserPermission(userId) {
      this.$api.permissions(userId).then(({ data }) => {
        // console.log(data);
        if (data && data.code === 0) {
          const permissiones = data.data
          if (permissiones) {
            const permissionInfo = JSON.parse(permissiones)
            this.permissionArr.forEach(item => {
              for (let key in permissionInfo) {
                if (item.id === key) {
                  item.value = permissionInfo[key]
                  item.label = t(`defaultRole.${key}`)
                  item.id = key
                }
              }
            })
          }
        }
      })
    },
    changePermission() {
      let roleObj = {};
      this.permissionArr.forEach(key => {
        roleObj[key.id] = !!key.value
      })
      let parmas = {
        userId: this.userId,
        permission: JSON.stringify(roleObj)
      };
      this.$api.ChangePermissions(parmas).then(({ data }) => {
        if (data.code === 0) {
          sessionStorage.setItem('UserPermissions', JSON.stringify(roleObj))
          this.$Toast({
            message: t('successTips.changeSuccess') // "修改成功"
          });
        }
      })
    }
  }
}
</script>
<style lang="stylus" scoped>
.permissionWraper
  height 100%
  box-sizing border-box
  padding $header-height + 5px 15px $footer-height
  .submitBtn
    padding 0 60px
    margin-top 30px
    height 120px
    p
      line-height 40px
      height 40px
      background $color-project-blue
      color #ffffff
      text-align center
      border-radius 5px
</style>
