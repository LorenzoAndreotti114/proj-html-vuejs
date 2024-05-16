<script>

  import AppHeaderTop from './components/AppHeaderTop.vue';
  import AppHeaderNavBar from './components/AppHeaderNavBar.vue';
  import AppFooter from './components/AppFooter.vue';
  

  export default {

    components: {
      AppHeaderTop,
      AppHeaderNavBar,
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
 
  <AppHeaderNavBar :routes="headerRoutes"/>

  <router-view></router-view>

  <AppFooter />

</template>

<style scoped>

</style>
