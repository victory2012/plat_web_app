<template>
  <div class="uploadWraper">
    <p class="label">{{label}}</p>
    <div class="imgPreview">
      <div class="upload-btn-def">
        <i></i>
      </div>
      <img v-if="srcUrl" class="imgView" :src="srcUrl" alt="">
      <input :disabled='status' class="inputFile" type="file" @change="upload">
    </div>
  </div>
</template>

<script>
import OSS from 'ali-oss'
export default {
  props: {
    label: {
      type: String
    },
    status: {
      type: Boolean
    }
  },
  data() {
    return {
      srcUrl: ''
    };
  },
  mounted() {
    this.client = new OSS({
      region: 'oss-cn-hangzhou',
      accessKeyId: 'LTAImQ5M3rsgRZHT',
      accessKeySecret: 'vXAOOfdDT9FCuFN9ZdTScUFBhB4Buu',
      bucket: 'mrd-img-bucket'
    })
  },

  methods: {
    upload(event) {
      const target = event.target
      let file = target.files[0];
      let val = target.value;
      let suffix = val.substr(val.indexOf('.'));
      let obj = `${new Date().getTime()}${this.MathRand()}`; // 这里是生成文件名
      let name = `${obj}${suffix}` // 'upload-file/'+"/"+obj+suffix; //命名空间
      this.client.put(name, file)
        .then(res => {
          this.srcUrl = res.url
          if (res.res.status === 200) {
            this.$emit('urlCallback', res.name)
          }
        }).catch(err => {
          console.log(err)
        })
    },
    MathRand() {
      var Num = '';
      for (let i = 0; i < 6; i++) {
        Num += Math.floor(Math.random() * 10);
      }
      return Num
    }
  }

}

</script>
<style lang='stylus' scoped>
.uploadWraper
  display flex
  justify-content space-between
  height 80px
  line-height 80px
  .label
    flex 1
  .imgPreview
    width 80px
    height 80px
    position relative
    .upload-btn-def
      width 80px
      height 80px
      box-sizing border-box
      background-color #fff
      box-shadow 0 0 6px 2px rgba(0, 0, 0, 0.08)
      border-radius 2px
      position absolute
      top 0px
      right 0px
      i
        &:before
          content ''
          position absolute
          top 50%
          left 50%
          width 20px
          height 2px
          -webkit-transform translate(-50%, -50%)
          transform translate(-50%, -50%)
          background-color #666
        &:after
          content ''
          position absolute
          top 50%
          left 50%
          width 20px
          height 2px
          -webkit-transform translate(-50%, -50%)
          transform translate(-50%, -50%)
          background-color #666
          transform translate(-50%, -50%) rotate(90deg)
      &:after
        content ''
        pointer-events none
        display block
        position absolute
        left 0
        top 0
        -webkit-transform-origin 0 0
        transform-origin 0 0
        border 1px solid #e5e5e5
        border-radius 2px
        box-sizing border-box
        width 100%
        height 100%
    .imgView
      position absolute
      top 0px
      right 0px
      width 80px
      height 80px
      background-color #ffffff
      z-index 5
    .inputFile
      position absolute
      top 0px
      right 0px
      width 80px
      height 80px
      opacity 0
      font-size 0
      z-index 6
</style>
