<script>
    export default {

        data() {
            return {
                bestSellers: [
                    {
                        name: "Chewable weight",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-23-400x400.jpg",
                        onSale: false,
                        price: 11.00,
                    },
                    {
                        name: "Chewable toy",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-22-400x400.jpg",
                        onSale: true,
                        price: 12.00,
                    },
                    {
                        name: "Transport cage",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-21-400x400.jpg",
                        onSale: false,
                        price: 25.00,
                    },
                    {
                        name: "Dog leash",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-20-400x400.jpg",
                        onSale: false,
                        price: 25.00,
                    },
                ]
            }
        },

        created() {
            console.log("APE VS CONSTANTIN");
            console.log("VINCE APE");
        }

    }
</script>

<template>
    
    <div class="ms_container">

        <div class="inner-container">

            <div class="inner-top">

                <div>

                    <!-- TITLE -->
                    <div class="title">All-time best sellers</div>

                    <!-- SUBTITLE -->
                    <div class="subtitle">Items everyone loves</div> 

                </div>

                <!-- BTN -->
                <div class="btn-container"><input type="button" value="View all products" class="btn"></div>

            </div>

            <div class="inner-bottom">

                <div class="ms_card">

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        display: flex;
        justify-content: center;
        padding: 2%;
        width: 100%;
    }

    .inner-container {
        width: 80%;
        border: 1px solid black;
        display: flex;
        flex-direction: column;
    }

    /* TOP */
    .inner-top {
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
    }

    .title {
        font-size: 1.3vw;
        color: #767043;
    }

    .subtitle {
        font-size: 3vw;
    }

    .btn-container {
        display: flex;
        align-items: center;
        justify-content: end;
        height: 100%;
        width: 30%;
    }

    .btn {
        background-color: #3d6f42;
        color: white;
        font-size: 1.2vw;
        padding: 2% 4%;
        border-radius: 50px;
    }

    .btn:hover {
        background-color: rgb(43 79 47);
    }


    /* BOTTOM */
    .inner-bottom {
        width: 100%;
    }

</style>