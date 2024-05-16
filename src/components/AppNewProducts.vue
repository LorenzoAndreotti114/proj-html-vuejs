<script>
    export default {
        data() {
            return {

                numBeforeDiscount: "",
                numAfterDiscount: [],

                itemsArray: [
                    {
                        name: "Transport cage",
                        image: "01",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        name: "Dog leash",
                        image: "02",
                        onSale: true,
                        discount: 30,
                        price: "25.00",
                    },
                    {
                        name: "Animal transport cage",
                        image: "03",
                        onSale: true,
                        discount: 29,
                        price: "35.00",
                    },
                    {
                        name: "Colorful cat leash",
                        image: "04",
                        onSale: false,
                        discount: 0,
                        price: "12.00",
                    },
                    {
                        name: "Animal transport cage",
                        image: "05",
                        onSale: false,
                        discount: 0,
                        price: "35.00",
                    },
                    {
                        name: "Animal transport bag",
                        image: "06",
                        onSale: false,
                        discount: 0,
                        price: "29.00",
                    },
                ]
            }
        },

        created() {

            console.log("TEST");

            for (let x = 0; x < this.itemsArray.length; x++) {

                if ( this.itemsArray[x].onSale === true) {

                    this.numBeforeDiscount = parseInt(this.itemsArray[x].price);

                    this.numAfterDiscount.push(this.numBeforeDiscount - ((this.numBeforeDiscount * this.itemsArray[x].discount) / 100));

                }
                else {

                }
                
            };

            console.log(this.numAfterDiscount);
                
        }
        
    }
</script>

<template>
    
    <div class="ms_container">
        
        <div class="inner-container">
            
            <div class="inner-top">

                <!-- TITLE -->
                <div class="top-title">New products arrival</div>

                <!-- SUBTITLE -->
                <div class="top-subtitle">Latest products</div>

            </div>

            <!-- CARD SECTION -->
            <div class="inner-bottom">

                <div class="ms_card" v-for="(cards, index) in itemsArray">

                    <!-- IMG -->
                    <div class="img-container">

                        <!-- NO SALE -->
                        <div><img :src="`../src/assets/img/new-product${cards.image}.jpg`" alt=""></div>

                        <!-- ON SALE -->
                        <div v-if="cards.onSale === true" class="sale">Sale!</div>

                    </div>

                    <!-- TITLE -->
                    <div class="title-bottom"> {{ cards.name }} </div>

                    <!-- PRICE -->
                    <div v-if="cards.onSale ? false : true" class="price-container">

                        <div class="price">${{ cards.price }} </div>

                    </div>

                    <div v-else class="price-container">

                        <!-- NEW PRICE -->
                        <div class="new-price">${{ numAfterDiscount[index - 1] }}</div>

                        <!-- PRICE NOT AVIABLE -->
                        <div class="price-onsale">${{ cards.price }}</div>

                        <!-- DISCOUNT -->
                        <div class="discount"> {{ cards.discount }}%Off </div>

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
        width: 100%;
        padding: 5% 0;
    }

    .inner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
    }

    .inner-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .top-title {
        font-size: 3vw;
    }

    .top-subtitle {
        font-size: 1.2vw;
    }

    .inner-bottom {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .ms_card {
        width: 32%;
        padding: 3% 0;
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