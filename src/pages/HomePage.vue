<script>

    import AppHero from '../components/AppHero.vue';
    import AppDiscount from '../components/AppDiscount.vue';
    import AppBrowseCategory from '../components/AppBrowseCategory.vue';
    import AppDogfoodCards from '../components/AppDogfoodCards.vue';
    import AppNewArrivals from '../components/AppNewArrivals.vue';
    import AppBestSellers from '../components/AppBestSellers.vue';
    import AppTipsAndTricks from '../components/AppTipsAndTricks.vue';
    import AppDoubleBanner from '../components/AppDoubleBanner.vue';
    import AppIconsBanner from '../components/AppIconsBanner.vue';
    import AppNewProducts from '../components/AppNewProducts.vue';
    import AppNewProductsTitle from '../components/AppNewProductsTitle.vue';
    import TestimonialCard from '../components/TestimonialCard.vue';
    import NewsLetter from '../components/NewsLetter.vue';
    

    export default {

        components: {
            AppHero,
            AppDiscount,
            AppBrowseCategory,
            AppDogfoodCards,
            AppNewArrivals,
            AppBestSellers,
            AppTipsAndTricks,
            AppDoubleBanner,
            AppIconsBanner,
            AppNewProductsTitle,
            AppNewProducts,
            TestimonialCard,
            NewsLetter,
        },

        data() {
            return {
                doubleBannerArray: [
                    {
                        id: 1,
                        title: "Popular accessories",
                        subtitle: "FIND THE BEST ANIMAL SUPPLIES",
                        type: "toys accessories",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-8@2x.jpg",
                    },
                    {
                        id: 2,
                        title: "New food arrivals",
                        subtitle: "FIND THE BEST FOOD",
                        type: "food products",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-9@2x.jpg",
                    },
                ],

                testimonials: [
                    {   
                        id: 1, 
                        name: 'Lisa Smith', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-3-200x200.jpg', 
                        text: 'Auctor est habitasse amet nunc, interdum vel mattis sodales cras. Ut nulla quis nunc, tincidunt eu. Eu.'
                    },
                    {   
                        id: 2, 
                        name: 'Melissa Green', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-1-200x200.jpg', 
                        text: 'Donec sollicitudin molestie malesuada. Vivamus suscipit tortor eget felis porttitor volutpat vestibulum ac diam sit.' 
                    },
                    {   
                        id: 3, 
                        name: 'Sam Lewis', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-4-200x200.jpg', 
                        text: 'Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Proin eget tortor risus vestibulum ante ipsum.' 
                    },
                ],

                numBeforeDiscount: "",
                numAfterDiscount: [],

                productsArray: [
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
                        onSale: true,
                        discount: 30,
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
                ]
            }
        },

        created() {

            for (let x = 0; x < this.productsArray.length; x++) {

                if ( this.productsArray[x].onSale === true) {

                    this.numBeforeDiscount = parseInt(this.productsArray[x].price);

                    this.numAfterDiscount.push(this.numBeforeDiscount - ((this.numBeforeDiscount * this.productsArray[x].discount) / 100));

                }
                else {

                }

            };

        }
    }
</script>

<template>

    <div class="ms_container">
        
        <!-- HERO -->
        <AppHero />

        <!-- DISCOUNT -->
        <AppDiscount />

        <!-- BROWSE BY CATEGORY -->
        <AppBrowseCategory />

        <!-- DOG FOOD CARDS -->
        <AppDogfoodCards />

        <!-- NEW ARRIVALS BANNER -->
        <AppNewArrivals />

        <!-- BEST SELLERS -->
        <AppBestSellers />

        <!-- TESTIMONIALS -->
        <h1 class="testimonials-title">Users Testimonials</h1>
        <div class="testimonials-section">
            <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
        </div>

        <!-- NEWSLETTER -->
        <NewsLetter />

        <!-- TIPS AND TRICKS -->
        <AppTipsAndTricks />

        <!-- DOUBLE-BANNER-DOG/CAT -->
        <div class="double-banner">
            <AppDoubleBanner v-for="banner in doubleBannerArray" :key="banner.id" :doubleBannerArrays="banner"/>
        </div>
        
        <!-- ICONS BANNER -->
        <AppIconsBanner />

        <!-- NEW PRODUCTS -->
        <div class="new-products-container">

            <AppNewProductsTitle />

            <div  class="new-products-inner">

                <div class="new-inner-inner" v-for="products in productsArray">

                    <AppNewProducts :itemsShopArray="products"/>

                </div>

            </div>

                
        </div>

    </div>

</template>

<style scoped>

    .testimonials-section {
        padding-bottom: 10%;
    }

    .testimonials-title {
        padding-top: 5%;
    }

    .testimonials-section, .testimonials-title {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
        background-color: rgb(30, 49, 32);
        background-image: linear-gradient(to bottom, rgba(30, 49, 32, 0.1), rgb(30, 49, 32)), url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
        position: relative;   
        color: white; 
        margin: 0 auto;
    } 

    .ms_container {
        width: 100%;
    }

    .double-banner {
        width: 100%;
        display: flex;
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
        border: 1px solid black;
    }

    .new-inner-inner {
        width: 30%;
    }

</style>