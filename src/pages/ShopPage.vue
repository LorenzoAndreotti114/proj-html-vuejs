<script>
import AppBestSellers from '../components/AppBestSellers.vue';
import AppDogfoodCards from '../components/AppDogfoodCards.vue';
import AppIconsBanner from '../components/AppIconsBanner.vue';
import AppNewArrivals from '../components/AppNewArrivals.vue';
import AppNewProducts from '../components/AppNewProducts.vue';
import AppNewProductsTitle from '../components/AppNewProductsTitle.vue';
import AppBrowseCategory from '../components/AppBrowseCategory.vue';
import AppDoubleBanner from '../components/AppDoubleBanner.vue';

    export default {

        components: {
            AppNewArrivals,
            AppBestSellers,
            AppIconsBanner,
            AppNewProductsTitle,
            AppNewProducts,
            AppDogfoodCards,
            AppBrowseCategory,
            AppDoubleBanner,
        },

        data() {
            return {

                numAfterDiscount: [],

                productsArrayFirst: [
                    {
                        id: 1,
                        name: "Chewable weight",
                        image: "07",
                        onSale: false,
                        discount: 0,
                        price: "11.00",
                    },
                    {
                        id: 2,
                        name: "Chewable toy",
                        image: "08",
                        onSale: true,
                        discount: 52,
                        price: "25.00",
                    },
                    {
                        id: 3,
                        name: "Transport cage",
                        image: "01",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        id: 4,
                        name: "Dog leash",
                        image: "02",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        id: 5,
                        name: "Pink bone toy",
                        image: "09",
                        onSale: true,
                        discount: 38,
                        price: "8.00",
                    },
                    {
                        id: 6,
                        name: "Dog treats",
                        image: "10",
                        onSale: false,
                        discount: 0,
                        price: "5.00",
                    },
                ],

                productsArraySecond: [
                    {
                        id: 1,
                        name: "Chewable weight",
                        image: "07",
                        onSale: false,
                        discount: 0,
                        price: "11.00",
                    },
                    {
                        id: 2,
                        name: "Chewable toy",
                        image: "08",
                        onSale: true,
                        discount: 52,
                        price: "25.00",
                    },
                    {
                        id: 3,
                        name: "Pink bone toy",
                        image: "09",
                        onSale: true,
                        discount: 38,
                        price: "8.00",
                    },
                    {
                        id: 4,
                        name: "Chewable toy",
                        image: "11",
                        onSale: false,
                        discount: 0,
                        price: "8.00",
                    },
                    {
                        id: 5,
                        name: "Closable cat litter",
                        image: "12",
                        onSale: true,
                        discount: 38,
                        price: "16.00",
                    },
                    {
                        id: 6,
                        name: "Colorful ball set",
                        image: "13",
                        onSale: false,
                        discount: 0,
                        price: "29.00",
                    },
                ],

                productsArrayTerth: [
                    {
                        id: 1,
                        name: "Transport cage",
                        image: "01",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        id: 2,
                        name: "Dog leash",
                        image: "02",
                        onSale: false,
                        discount: 0,
                        price: "25.00",
                    },
                    {
                        id: 3,
                        name: "Animal transport cage",
                        image: "03",
                        onSale: true,
                        discount: 29,
                        price: "35.00",
                    },
                    {
                        id: 4,
                        name: "Colorful cat leash",
                        image: "04",
                        onSale: false,
                        discount: 0,
                        price: "12.00",
                    },
                    {
                        id: 5,
                        name: "Animal transport cage",
                        image: "05",
                        onSale: false,
                        discount: 0,
                        price: "35.00",
                    },
                    {
                        id: 6,
                        name: "Animal transport bag",
                        image: "06",
                        onSale: false,
                        discount: 0,
                        price: "29.00",
                    },
                ],

                doubleBannerArray: [
                    {
                        id: 1,
                        title: "View all food products",
                        subtitle: "FIND THE BEST ANIMAL SUPPLIES",
                        type: "food products",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-19@2x-scaled.jpg",
                    },
                    {
                        id: 2,
                        title: "Popular toys accessories",
                        subtitle: "FIND THE BEST FOOD",
                        type: "toys",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-9@2x.jpg",
                    },
                ],

            }
        }
    }
</script>

<template>

    <div class="ms_container">

        <AppNewArrivals />
        <AppBestSellers />
        <AppIconsBanner />

        <!-- NEW PRODUCTS FIRST -->
        <div class="new-products-container">

            <AppNewProductsTitle />

            <div  class="new-products-inner">

                <div class="new-inner-inner" v-for="products in productsArrayFirst">

                    <AppNewProducts :itemsShopArray="products"/>

                </div>

            </div>

                
        </div>

        <AppDogfoodCards />

        <!-- NEW PRODUCTS SECOND -->
        <div class="new-products-container">

            <AppNewProductsTitle />

            <div  class="new-products-inner">

                <div class="new-inner-inner" v-for="products in productsArraySecond">

                    <AppNewProducts :itemsShopArray="products"/>

                </div>

            </div>

                
        </div>

        <AppBrowseCategory />

        <!-- DOUBLE-BANNER -->
        <div class="double-banner">
            <AppDoubleBanner v-for="banner in doubleBannerArray" :key="banner.id" :doubleBannerArrays="banner"/>
        </div>

        <!-- NEW PRODUCTS TERTH -->
        <div class="new-products-container">

            <AppNewProductsTitle />

            <div  class="new-products-inner">

                <div class="new-inner-inner" v-for="products in productsArrayTerth">

                    <AppNewProducts :itemsShopArray="products"/>

                </div>

            </div>

                
        </div>

    </div>

</template>

<style scoped>
    .ms_container {
        width: 100%;
    }

    /* NEW PRODUCTS */
    .new-products-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 5% 0;
    }

    .new-products-inner {
        width: 80%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 5%;
    }

    .new-inner-inner {
        width: 30%;
    }

    .double-banner {
        width: 100%;
        display: flex;
    }
</style>