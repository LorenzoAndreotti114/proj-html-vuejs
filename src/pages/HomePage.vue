<script>

    import AppHero from '../components/AppHero.vue';
    import AppDiscount from '../components/AppDiscount.vue';
    import AppBrowseCategory from '../components/AppBrowseCategory.vue';
    import AppDogfoodCards from '../components/AppDogfoodCards.vue';
    import AppNewArrivals from '../components/AppNewArrivals.vue';
    import AppBestSellers from '../components/AppBestSellers.vue';
    import AppTipsAndTricks from '../components/AppTipsAndTricks.vue';
    

    export default {

        components: {
            AppHero,
            AppDiscount,
            AppBrowseCategory,
            AppDogfoodCards,
            AppNewArrivals,
            AppBestSellers,
            AppTipsAndTricks,
        },

        data() {
            return {

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

        <!-- ARTICLES -->
        <div>

            <!-- LEFT -->
            <div>

            </div>

            <!-- RIGHT -->
            <div>

            </div>

        </div>

        <!-- LITTLE BANNER -->
        <div>

        </div>

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

</style>