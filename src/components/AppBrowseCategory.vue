<script>
import { RouterLink } from 'vue-router';

    export default {
        data() {
            return {
                browseItems: [
                    {
                        name: "Transport",
                        quantity: "(7)",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-4.jpg",
                    },
                    {
                        name: "Toys",
                        quantity: "(6)",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-2.jpg",
                    },
                    {
                        name: "Food",
                        quantity: "(6)",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-3.jpg",
                    },
                    {
                        name: "Bed",
                        quantity: "(1)",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-9.jpg",
                    },
                    
                ]
            }
        }
    }
</script>

<template>
    <div class="ms_container">

        <div class="inner-title-container">
            <!-- TITLE -->
            <h2>Browse by category</h2>

            <!-- SUBTITLE -->
            <div class="subtitle">I nostri prodotti si dividono in varie categorie che puoi trovare disponibili tramite click qua sotto, ti raccomandiamo di dargli un'occhiata prima possibile!</div>

        </div>

        <!-- LITTLE CARDS -->
        <div class="ms_card-container">

            <RouterLink to="/shop" class="ms_card" v-for="(Cards, index) in browseItems">
                
                <!-- IMG -->
                <div class="card-img"><img :src="Cards.image" alt=""></div>

                <div class="card-text">
                    <!-- TITLE -->
                    <div> {{ Cards.name }} </div>

                    <!-- LITTLE NUMBER -->
                    <div class="upper-text"> {{ Cards.quantity }}</div>
                </div>

            </RouterLink>

        </div>

    </div>
</template>

<style scoped>

    h2 {
        font-size: 2.2vw;
        padding: 3% 0;
    }

    img {
        height: 100%;
        width: 100%;
    }

    .ms_container {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        width: 100%;
    }

    .inner-title-container {
        width: 50%;
        display: flex;
        flex-direction: column;
        text-align: center;
        align-items: center;
        padding-top: 6%;
    }

    .subtitle {
        font-size: 1.2vw;
        padding-bottom: 5%;
    }

    .ms_card-container {
        display: flex;
        justify-content: space-between;
        width: 80%;
        padding-top: 3%;
        padding-bottom: 6%;
    }

    .ms_card {
        width: 23%;
        text-decoration: none;
        color: black;
    }

    .card-img {
        height: 90%;
        width: 100%;
    }

    .card-text {
        display: flex;
        justify-content: center;
        font-size: 1.4vw;
        padding-top: 5%;
    }

    .upper-text {
        font-size: 1vw;
        margin-left: 2%;
    }

</style>