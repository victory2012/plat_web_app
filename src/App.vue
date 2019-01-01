<template>
  <div id="app" class="mainApp">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div> -->
    <router-view />
  </div>
</template>
<style lang="stylus">
@require './theme.styl';

html, body {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: $btn-active-bdc;
  background: $bg-white-color; // 背景色  待修改
  width: 100%;
  height: 100%;
}

.mainApp {
  width: 100%;
  height: 100%;
}
.cube-tab-bar
  height 100%
.cube-slide-item {
  a {
    img {
      width: 100%;
      height: $banner-height;
    }
  }
}

.slide-fade-enter-active {
  transition: all 0.3s ease;
}

.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
