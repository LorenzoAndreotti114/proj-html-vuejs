<script>

  import AppHeaderTop from './components/AppHeaderTop.vue';
  import AppHeaderNavBar from './components/AppHeaderNavBar.vue';
  import AppHeaderFooter from './components/AppHeaderFooter.vue';
  import AppFooter from './components/AppFooter.vue';
  

  export default {

    components: {
      AppHeaderTop,
      AppHeaderNavBar,
      AppHeaderFooter,
      AppFooter,
    },

    data() {
      return {
        headerRoutes: [
        { title: "Home", name: "Home" },
        { title: "About", name: "About" },
        { title: "Shop", name: "Shop" },
        { title: "Contact", name: "Contact" },
        
      ]
        
      }
    },
  }
</script>

<template>

  <AppHeaderTop />
 
  <AppHeaderNavBar class="sticky" :routes="headerRoutes"/>

  <AppHeaderFooter />

  <router-view></router-view>
  
  <AppFooter />

</template>

<style scoped>

    .sticky {
      position: sticky;
      top: 0;
      z-index: 20;
    }

</style>
