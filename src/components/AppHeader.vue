<script>
export default {
  name: 'AppHeader',
  data() {
    return {
      routes: [
        { title: "Home", name: "Home" },
        { title: "About", name: "About" },
        { title: "Contact", name: "Contact" },
      ]
    }
  },
}
</script>

<template>
  <!-- Header container -->
  <div class="header">
    <!-- Header top -->
    <div class="header-top"> 
      <div class="logo sticky">
        <img src="../assets/img/logo.svg" alt="Logo">
      </div>
      <div class="search-bar">
        <i class="fas fa-search"></i>
        <input type="text" placeholder="Search...">
      </div>
      <div class="contact-info">
        <span><strong>Questions?</strong> Call us: 1.800.123.4567</span>
      </div>
      <div class="icons sticky">
        <i class="fas fa-shopping-cart"></i>
        <i class="fas fa-user"></i>
      </div>
    </div>
    <!-- Navbar -->
    <nav class="nav-bar sticky">
      <ul>
        <li v-for="route in routes" :key="route.name">
          <router-link :to="{ name: route.name }">{{ route.title }}</router-link>
        </li>
      </ul>     
    </nav>
    <!-- Header Bottom -->
    <div class="header-bottom">
      <div class="feature">
        <i class="fas fa-globe"></i>
        <span>International Shipping Services</span>
      </div>
      <div class="feature">
        <i class="fas fa-clock"></i>
        <span>See our store hours and services</span>
      </div>
      <div class="feature">
        <i class="fas fa-check"></i>
        <span>We price match to give you the best deal</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.sticky {
  position: sticky;
  top: 0;
  background-color: #ffffff;
  z-index: 1000;
}

.header {
  background-color: #ffffff;
  padding-top: 1%;
}

.header-top {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.logo {
  flex: 1;
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.search-bar {
  position: relative;
  margin: 0 100px;
}

.search-bar input {
  width: 100%;
  padding: 8px 10px 8px 30px;
  font-size: 1vw;
  border: 1px solid #ccc;
  border-radius: 20px;
  background-color: #f5f5f5;
  color: #333;
  box-shadow: inset 0 1px 2px rgba(0,0,0,0.075);
}

.search-bar i {
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #ccc;
  pointer-events: none;
}

.contact-info {
  flex: 1;
  font-size: 1vw;
  padding-left: 40px;
}

.icons {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.icons i {
  font-size: 20px;
  margin-left: 20px;
  cursor: pointer;
}

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

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: white;
  padding: 20px;
  background-color: rgb(30, 49, 32);
}

.feature {
  display: flex;
  align-items: center;
}

.feature i {
  font-size: 20px;
  margin-right: 10px;
}
</style>