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
        <div>

        </div>

        <!-- NEWSLETTER -->
        <div>

        </div>

        <!-- TIPS AND TRICKS -->
        <AppTipsAndTricks />

        <!-- DOUBLE-BANNER-DOG/CAT -->
        <div class="double-banner">
            <AppDoubleBanner v-for="banner in doubleBannerArray" :key="banner.id" :doubleBannerArrays="banner"/>
        </div>
        

        <!-- ICONS BANNER -->
        <AppIconsBanner />

        <!-- NEW PRODUCTS -->
        <div>

            <!-- LITTLE CARDS -->
            <div>
                
            </div>

        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        width: 100%;
        border: 1px solid black;
    }

    .double-banner {
        width: 100%;
        display: flex;
    }

</style>