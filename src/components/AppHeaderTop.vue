<script>

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
 </div>



</template>

<style scoped>
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
</style>