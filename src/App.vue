<template>
  <div id="app">
    <div class="main-content">
      <router-view></router-view>
    </div>
    <FooterNav></FooterNav>
  </div>
</template>

<script>
import FooterNav from '@/components/FooterNav.vue';

export default {
  name: 'App',
  components: {
    FooterNav,
  },
};
</script>

<style type="less">
  @import "./assets/style/reset.less";
  .main-content {
    height: calc(100% - 3rem);
    overflow-y: auto;
  }
</style>
