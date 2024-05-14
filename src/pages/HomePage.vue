<script>

    import AppHero from '../components/AppHero.vue';
    import AppDiscount from '../components/AppDiscount.vue';
    import AppBrowseCategory from '../components/AppBrowseCategory.vue';
    import AppDogfoodCards from '../components/AppDogfoodCards.vue';
    

    export default {

        components: {
            AppHero,
            AppDiscount,
            AppBrowseCategory,
            AppDogfoodCards,
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
        <div>

        </div>

        <!-- BEST SELLERS -->
        <div>

            <!-- LITTLE CARDS RANDOM -->
            <div>

            </div>

        </div>

        <!-- TESTIMONIALS -->
        <div>

        </div>

        <!-- NEWSLETTER -->
        <div>

        </div>

        <!-- TIPS AND TRICKS -->
        <div>

            <!-- TIPS CARDS -->
            <div>

            </div>

        </div>

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