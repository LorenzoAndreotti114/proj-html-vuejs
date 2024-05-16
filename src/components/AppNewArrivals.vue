<script>
import { RouterLink } from 'vue-router';

    export default {
        data() {
            return {
            
            }
        }
    }
</script>

<template>
    
    <div class="ms_container">
    
        <div class="inner-container">

            <div class="dark-bg">

                <!-- TITLE -->
                <div class="title">FIND THE BEST ANIMAL SUPPLIES</div>

                <!-- SUBTITLE -->
                <div class="subtitle">New arrivals weekly</div>

                <!-- BUTTON -->
                <RouterLink to="/about-us" class="btn-container"><input type="button" value="Learn more about us" class="btn"></RouterLink>

            </div>

        </div>    

    </div>

</template>

<style scoped>

 .ms_container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 2%;
 }

 .dark-bg {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    padding: 10%;
 }

 .inner-container {
    display: flex;
    flex-direction: column;
    width: 80%;
    background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-3@2x-scaled.jpg");
    background-size: cover;
    color: white;
 }

 .title {
    display: flex;
    justify-content: center;
    font-size: 1vw;
    width: 100%;
    font-weight: 500;
 }

 .subtitle {
    display: flex;
    justify-content: center;
    width: 100%;
    font-size: 4vw
 }

 .btn-container {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 5%;
    text-decoration: none;
 }

 .btn {
    background-color: white;
    border-radius: 50px;
    font-size: 1vw;
    padding: 1% 2%;
 }

 .btn:hover {
   color: white;
 }

 .btn:hover {
    background-color: #3d6f42;
 }

</style>