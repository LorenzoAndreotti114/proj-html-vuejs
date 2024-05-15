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
                        onSale: false,
                        discount: 0,
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
                
        }
        
    }
</script>

<template>
    
    <div class="ms_container">
        
        <div class="inner-container">
            
            <div class="inner-top">

                <!-- TITLE -->
                <div>New products arrival</div>

                <!-- SUBTITLE -->
                <div>Latest products</div>

            </div>

            <!-- CARD SECTION -->
            <div class="inner-bottom">

                <div class="ms_card">

                    <!-- IMG -->
                    <div class="img-container">

                        <!-- NO SALE -->

                        <!-- ON SALE -->

                    </div>

                    <!-- TITLE -->
                    <div class="title-bottom"></div>

                    <!-- PRICE -->
                    <div class="price-container">

                        <div class="price"></div>

                    </div>

                    <div class="price-container">

                        <div class="new-price"></div>

                        <div class="price-onsale"></div>

                        <div class="discount"></div>

                    </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        display: flex;
        justify-content: center;
        width: 100%;
    }

    .inner-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 80%;
        border: 1px solid black;
    }

    .inner-top {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .inner-bottom {
        display: flex;
        justify-content: center;
    }

    .ms_card {
        width: 30%;
    }

</style>