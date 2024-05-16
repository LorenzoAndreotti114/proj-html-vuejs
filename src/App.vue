<script>

  import AppHeader from './components/AppHeader.vue';
  import AppFooter from './components/AppFooter.vue';

  export default {

    components: {
      AppHeader,
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
 
  <AppHeader :routes="headerRoutes"/>

  <router-view></router-view>

  <AppFooter />

</template>

<style scoped>

</style>
