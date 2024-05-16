<script>
export default {
  name: 'AppHeader',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
}

</script>

<template>
    <!-- Navbar -->
    <nav class="nav-bar">

        <!-- router connected Navbar menu -->
        <ul>
        
            <li v-for="route in routes" :key="route.name">

                <router-link :to="{ name: route.name }">{{ route.title }}</router-link>
            
            </li>

        </ul>     

    </nav>


</template>

<style>

    .nav-bar {
    margin-top: 10px;
    }

    .nav-bar ul {
    list-style: none;
    display: flex;
    justify-content: space-evenly;
    padding: 20px 50px;
    margin: 0;
    }

    .nav-bar ul li a {
    color: rgb(168, 156, 149);
    text-decoration: none;
    font-size: 16px;
    }

    .nav-bar ul li a:hover {
    color: #000000;
    }

</style>