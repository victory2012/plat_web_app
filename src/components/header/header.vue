<template>
  <header class="mint-header" :class="{ 'is-fixed': fixed }">
    <div class="header-button is-left">
      <slot name="left"></slot>
    </div>
    <div class="header-title">
      <slot name="mainTab"></slot>
    </div>
    <div class="header-button is-right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
/**
 * mt-header
 * @module components/header
 * @desc 顶部导航
 * @param {boolean} [fixed=false] - 固定顶部
 * @param {string} [title] - 标题
 * @param {slot} [left] - 显示在左侧区域
 * @param {slot} [right] - 显示在右侧区域
 *
 * @example
 * <top-header title="我是标题" fixed>
 *   <button slot="left" icon="back" @click="handleBack">返回</button>
 *   <button slot="right" icon="more"></button>
 * </top-header>
 */
export default {
  name: 'top-header',
  props: {
    fixed: Boolean,
    title: String
  }
};
</script>
<style lang="stylus" scoped>
@import '../../theme.styl';

.mint-header {
  display: flex;
  height: $header-height;
  line-height: $header-height;
  // font-size 16px
  text-align: center;
  background-color: $header-bg-color;
  box-shadow: $header-shadow;

  &.is-fixed {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
  }

  .header-title {
    flex: 1;
  }

  .header-button {
    flex: 0 0 35px;
  }
}
</style>
