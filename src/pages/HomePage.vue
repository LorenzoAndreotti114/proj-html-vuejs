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
                ]
            }
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
        <AppNewProducts />

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

</style>