<script>
import { RouterLink } from 'vue-router';

    export default {

        data() {
            return {

                numBeforeDiscount: "",
                numAfterDiscount: [],

                bestSellers: [
                    {
                        name: "Chewable weight",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-23-400x400.jpg",
                        onSale: false,
                        discount: 0,
                        price: "11.00",
                    },
                    {
                        name: "Chewable toy",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-22-400x400.jpg",
                        onSale: true,
                        discount: 52,
                        price: "25.00",
                    },
                    {
                        name: "Transport cage",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-21-400x400.jpg",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        name: "Dog leash",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/product-20-400x400.jpg",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                ]
            }
        },

        created() {
            console.log("APE VS CONSTANTIN");
            console.log("VINCE APE");

            for (let x = 0; x < this.bestSellers.length; x++) {

                if ( this.bestSellers[x].onSale === true) {

                    this.numBeforeDiscount = parseInt(this.bestSellers[x].price);

                    this.numAfterDiscount.push(this.numBeforeDiscount - ((this.numBeforeDiscount * this.bestSellers[x].discount) / 100));

                }
                else {

                }
                
            };
                
        }

    }
</script>

<template>
    
    <div class="ms_container">

        <div class="inner-container">

            <div class="inner-top">

                <div>

                    <!-- TITLE -->
                    <div class="title-top">All-time best sellers</div>

                    <!-- SUBTITLE -->
                    <div class="subtitle">Items everyone loves</div> 

                </div>

                <!-- BTN -->
                <RouterLink to="/shop" class="btn-container"><input type="button" value="View all products" class="btn"></RouterLink>

            </div>

            <div class="inner-bottom">

                <div class="ms_card" v-for="(cardItem, index) in bestSellers">
                    
                    <!-- IMG -->
                    <div class="img-container">

                        <img :src="cardItem.image" alt="">

                        <!-- ON SALE -->
                        <div v-if="cardItem.onSale === true" class="sale">Sale!</div>

                    </div>

                    <!-- TITLE -->
                    <div class="title-bottom"> {{ cardItem.name }} </div>

                    <!-- PRICE -->

                    <div v-if="cardItem.onSale ? false : true" class="price-container">

                        <div class="price">${{ cardItem.price }} </div>

                    </div>

                    <div v-else class="price-container">

                        <!-- NEW PRICE -->
                        <div class="new-price">${{ numAfterDiscount[index - 1] }}</div>

                        <!-- PRICE NOT AVIABLE -->
                        <div class="price-onsale">${{ cardItem.price }}</div>

                        <!-- DISCOUNT -->
                        <div class="discount"> {{ cardItem.discount }}%Off </div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    img {
        height: 100%;
        width: 100%;
    }

    .ms_container {
        display: flex;
        justify-content: center;
        padding: 2%;
        width: 100%;
    }

    .inner-container {
        width: 80%;
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

    .title-top {
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
        text-decoration: none;
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
        display: flex;
        justify-content: space-between;
        padding: 5% 0;
    }

    .ms_card {
        width: 23%;
    }

    .img-container {
        position: relative;
    }

    .sale {
        position: absolute;
        top: 5%;
        left: 5%;
        background-color: #3d6f42;
        color: white;
        border-radius: 100%;
        padding: 3% 2%;
    }

    .title-bottom {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 3% 0;
        font-size: 1.4vw;
    }

    .price-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .price {
        display: flex;
        justify-content: center;
        align-items: start;
    }

    .new-price {
        display: flex;
        align-items: start;
    }

    .price-onsale {
        display: flex;
        justify-content: center;
        align-items: start;
        text-decoration: line-through;
        padding-left: 2.5%;
    }

    .discount {
        margin-left: 5%;
        color: white;
        padding: 0 1%;
        background-color: #3d6f42;
        border-radius: 5px;
    }

</style>