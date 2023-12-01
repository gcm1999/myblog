<template>
  <Header></Header>
  <router-view></router-view>
  <Footer v-show="!($route.meta.hidden)"></Footer>
  <!-- 测试2 -->
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer
}
}
</script>

<style>

</style>
