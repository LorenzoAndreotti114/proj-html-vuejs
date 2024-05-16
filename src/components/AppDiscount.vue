<script>
import { RouterLink } from 'vue-router';


</script>

<template>
    <div class="ms_container">

        <div class="ms_inner-container">

            <!-- IMG -->
            <div class="ms_img-container">
                <img src="../assets/img/DogFoodDiscount.webp" alt="">
            </div>

            <!-- TITLE -->
            <div class="ms_title">Get $25 OFF your first purchase of our homemade pet food!</div>

            <!-- LINK -->
            <RouterLink to="/shop" class="ms_link">Visit the shop</RouterLink>

        </div>

    </div>
</template>

<style scoped>

    img {
        width: 100%;
        height: 100%;
    }

    .ms_container {
        width: 100%;
        background-color: rgb(30, 49, 32);
        position: sticky;
        top: 7.5%;
        z-index: 100;
    }

    .ms_inner-container {
        display: flex;
        justify-content: center;
        width: 100%;
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
        background-position: center;
    }

    .ms_img-container {
        width: 12%;
    }

    .ms_title {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 1.2vw;
        width: 35%;
        color: white;
    }

    .ms_link {
        display: flex;
        font-size: 1.2vw;
        align-items: center;
        color: lightgrey;
        width: 14%;
    }

</style>