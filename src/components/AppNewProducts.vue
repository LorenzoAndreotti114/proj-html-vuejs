<script>
    export default {
        data() {
            return {

                discountedPrice: this.itemsShopArray.price,

            }
        },

        props:{

            itemsShopArray: Object,

        },

        created() {  

            this.faiLoSconto();     

        },
        methods:{
            faiLoSconto(){

                this.discountedPrice = (this.itemsShopArray.price - ((this.itemsShopArray.price * this.itemsShopArray.discount) / 100));
                
            }
        }
        
    }
</script>

<template>

    <!-- CARD SECTION -->
    <div class="ms_card">
        
        <div class="img-container">

            <img :src="` ../src/assets/img/new-product${itemsShopArray.image}.jpg `" alt="">

            <!-- ON SALE -->
            <div v-if="itemsShopArray.onSale === true" class="sale">Sale!</div>

        </div>

        <!-- TITLE -->
        <div class="title-bottom"> {{ itemsShopArray.name }} </div>

        <!-- PRICE -->

        <div v-if="itemsShopArray.onSale ? false : true" class="price-container">

            <div class="price">${{ itemsShopArray.price }} </div>

        </div>

        <div v-else class="price-container">

            <!-- NEW PRICE -->
            <div class="new-price">${{ discountedPrice }} </div>

            <!-- PRICE NOT AVIABLE -->
            <div class="price-onsale">${{ itemsShopArray.price }}</div>

            <!-- DISCOUNT -->
            <div class="discount"> {{ itemsShopArray.discount }}%Off </div>

        </div>

    </div>


</template>

<style scoped>

    img {
        height: 100%;
        width: 100%;
    }

    .ms_card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
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
        padding-bottom: 10%;
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