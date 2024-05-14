<script>

export default {
  name: 'AppHeader'
}

</script>

<template>
    <div class="header">
    <div class="header-top">
        <div class="logo">
          <img src="../assets/img/logo.svg" alt="Logo">
          <span>Avada Pet Supplies</span>
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
            <li><a href="/">Home</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="/shop">Shop</a><i class="fa-solid fa-chevron-down"></i></li>
            <li><a href="/about">About</a></li>
            <li><a href="/blog">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
             <li><a href="/brand">Shop by brand</a><i class="fa-solid fa-chevron-down"></i></li>
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
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.search-bar input {
  padding: 5px;
  font-size: 14px;
}

.contact-info {
  font-size: 14px;
}

.icons {
  display: flex;
  align-items: center;
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
  color: rgb(168 156 149);
  text-decoration: none;
  font-size: 16px;
}




.nav-bar ul li a:hover {
  text-decoration: underline;
}

.header-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
  color: white;
  padding: 20px;
  background-color: rgb(30 49 32);
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