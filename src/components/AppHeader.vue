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
  <!-- Header container -->
  <div class="header">

      <!-- Header top -->
      <div class="header-top"> 

        <!-- header logo -->
          <div class="logo">
              <img src="../assets/img/logo.svg" alt="Logo">
          </div>

          <!-- header search bar -->
          <div class="search-bar">

            <!-- search icon -->
              <i class="fas fa-search"></i>

              <!-- search input -->
              <input type="text" placeholder="Search...">

          </div>

          <!-- contact info -->
          <div class="contact-info">
              <span><strong>Questions?</strong> Call us: 1.800.123.4567</span>
          </div>

          <!-- user/cart icons -->
          <div class="icons">
              <i class="fas fa-shopping-cart"></i>
              <i class="fas fa-user"></i>
          </div>

      </div>

      <!-- Navbar -->
      <nav class="nav-bar">

        <!-- router connected Navbar menu -->
        <ul>
          <li v-for="route in routes" :key="route.name">
            <router-link :to="{ name: route.name }">{{ route.title }}</router-link>
          </li>
        </ul>     
      </nav>


      <!-- Header Bottom -->
      <div class="header-bottom">

          <div class="header-bottom-background">
            
              <!-- feature 1 -->
              <div class="feature">

                <!-- globe icon -->
                <i class="fas fa-globe"></i>

                <!-- text -->
                <span>International Shipping Services</span>

              </div>

              <!-- feature 2 -->
              <div class="feature">

                  <!-- clock icon  -->
                <i class="fas fa-clock"></i>

                <!-- text -->
                <span>See our store hours and services</span>

              </div>

              <!-- feature 3 -->
              <div class="feature">

                <!-- check icon -->
                <i class="fas fa-check"></i>

                <!-- text -->
                <span>We price match to give you the best deal</span>

              </div>

          </div>

      </div>

  </div>

</template>

<style scoped lang="scss">

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
  color: white;
  background-color: rgb(30, 49, 32);
  padding: 3vw;
  background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
}

.header-bottom-background {
  display: flex;
  justify-content: space-between;
  align-items: center;  
}

.feature i {
  font-size: 20px;
  margin-right: 10px;
}
</style>