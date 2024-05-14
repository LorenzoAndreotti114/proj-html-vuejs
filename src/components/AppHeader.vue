<script>

export default {
  name: 'AppHeader',
  data() {
    return {
      showDropdown: false
    }
  }
}

</script>

<template>
    <div class="header">
        <div class="header-top">
            <div class="logo">
                <img src="../assets/img/logo.svg" alt="Logo">
            </div>
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Search...">
            </div>

            <div class="contact-info">
                <span>
                 <strong>Questions?</strong> Call us: 1.800.123.4567
                </span>
            </div>
            <div class="icons">
                <i class="fas fa-shopping-cart"></i>
                <i class="fas fa-user"></i>
            </div>
        </div>
        <nav class="nav-bar">
            <ul>
                <li @mouseover="showDropdown = true" @mouseleave="showDropdown = false">
                        <a href="/">Home</a><i class="fa-solid fa-chevron-down"></i>
                    <ul v-show="showDropdown" class="dropdown">
                        <li><a href="/">Home-Alternate</a></li>
                    </ul>
                </li>
                <li><a href="/shop">Shop</a><i class="fa-solid fa-chevron-down chevron-icon"></i></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/brand">Shop by brand</a><i class="fa-solid fa-chevron-down chevron-icon"></i></li>
            </ul>   
        </nav>
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
.header {
  background-color: #ffffff;
  padding: 10px 20px;
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
  font-size: 16px;
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
  font-size: 14px;
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

.nav-bar ul li {
  margin: 0 10px;
}

.nav-bar ul li a {
  color: rgb(168, 156, 149);
  text-decoration: none;
  font-size: 16px;
}

.nav-bar ul li a:hover {
  color: #000000;
}

.nav-bar ul li .chevron-icon {
  color: rgb(168, 156, 149);
  margin-left: 5px;
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

.dropdown {
  display: none; 
  position: absolute;
  background-color: #fff;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  z-index: 100;
}

.dropdown li a {
  color: black;
  padding: 8px 16px;
  display: block;
  text-decoration: none;
}

.dropdown li a:hover {
  background-color: #3d6f42; 
  color: white; 
}
</style>