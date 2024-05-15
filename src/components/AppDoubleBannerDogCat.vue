<script>

</script>

<template>

    <div class="ms_container">

        <!-- CONTAINER LEFT -->
        <div class="container-left">
            
            <div class="black-bg">

                <div class="subtitle">FIND THE BEST ANIMAL SUPPLIES</div>

                <div class="title">Popular accessories</div>

                <div class="btn-container"><input type="button" class="ms_btn" value="View all toys accessories"></div>

            </div>

        </div>

        <!-- CONTAINER RIGHT -->
        <div class="container-right">

            <div class="black-bg">

                <div class="subtitle">FIND THE BEST FOOD</div>

                <div class="title">New food arrivals</div>

                <div class="btn-container"><input type="button" class="ms_btn" value="View all food products"></div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        display: flex;
        width: 100%;
        color: white;
    }

    .black-bg {
        background-color: rgba(0, 0, 0, 0.3);
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        padding: 15% 0;
    }

    /* LEFT */
    .container-left {
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-8@2x.jpg");
        background-size: cover;
        width: 50%;
        transition-duration: 0.2s;
    }

    .container-left:hover {
        transform: scale(1.05) translate(2.4%, 0);
    }

    /* RIGHT */
    .container-right {
        width: 50%;
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-9@2x.jpg");
        background-size: cover;
        transition-duration: 0.2s;
    }

    .container-right:hover {
        transform: scale(1.05) translate(-2.4%, 0 );
    }

    /* ALL */
    .subtitle {
        font-size: 1vw;
        font-weight: 500;
    }

    .title {
        font-size: 3vw;
        padding: 4% 0;
    }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .ms_btn {
        background-color: white;
        border: 0;
        font-size: 0.8vw;
        padding: 1.5% 4%;
        border-radius: 50px;
    }

</style>


<!-- {
    title: "Popular accessories",
    subtitle: "FIND THE BEST ANIMAL SUPPLIES",
    type: "toys accessories",
    image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-8@2x.jpg",
},
{
    title: "New food arrivals",
    subtitle: "FIND THE BEST FOOD",
    type: "food products",
    image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-9@2x.jpg",
}, -->