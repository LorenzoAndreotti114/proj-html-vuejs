<script>

</script>

<template>
    <div class="ms_container">

        <!-- DARK BACKGROUND -->
        <div class="ms_dark-background">

            <div class="ms_inner-container">

                <!-- LITTLE TITLE -->
                <div class="ms_lil-title">FIND THE BEST ANIMAL SUPPLIES</div>

                <!-- PARAGRAPH -->
                <div class="ms_big-paragraph">We know animals are a part of your family, let us help take care of them.</div>

                <!-- BUTTON -->
                <RouterLink to="/about-us" class="btn-container"><input type="button" class="btn" value="Learn more about us"></RouterLink>
                
            </div>

        </div>

    </div>
</template>

<style scoped>

    .ms_container {
        width: 100%;
        background-image: url("../assets/img/HomepageHeroBigImg.jpg");
        background-size: cover;
    }

    .ms_dark-background {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.4);
        color: white;
    }

    .ms_inner-container {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 5% 0;
        width: 70%;
        height: 80%;
    }

    .ms_lil-title {
        font-size: 1vw;
        padding-bottom: 1%;
        padding-top: 5%;
        font-weight: 500;
    }

    .ms_big-paragraph {
        width: 50%;
        font-size: 3vw;
        padding: 2% 0;
    }

    .btn-container {
        width: 100%;
        padding-bottom: 5%;
        padding-top: 1%;
    }

    .btn {
        background-color: white;
        border-radius: 50px;
        font-size: 1vw;
        padding: 0.8% 1.5%;
    }

    .btn:hover {
        background-color: #3d6f42;
        color: white;
    }

</style>