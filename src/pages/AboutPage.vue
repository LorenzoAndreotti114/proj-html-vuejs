<script>

    import AboutHero from '../components/AboutHero.vue';
    import AboutPassionate from '../components/AboutPassionate.vue';
    import AboutShop from '../components/AboutShop.vue';
    import AboutTeam from '../components/AboutTeam.vue';
    import TestimonialCard from '../components/TestimonialCard.vue';
    import AppDoubleBanner from '../components/AppDoubleBanner.vue';
    import AppTipsAndTricks from '../components/AppTipsAndTricks.vue';

   
    

    export default {

        components: {
             AboutHero,
             AboutPassionate,
             AboutShop,
             AboutTeam,
             TestimonialCard,
             AppDoubleBanner,
             AppTipsAndTricks

        },

        data() {
            return {
                doubleBannerArray: [
                {
                    id: 1,
                    title: "Popular accessories",
                    subtitle: "FIND THE BEST ANIMAL SUPPLIES",
                    type: "toys accessories",
                    image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-12@2x-scaled.jpg",
                },
                {
                    id: 2,
                    title: "New food arrivals",
                    subtitle: "FIND THE BEST FOOD",
                    type: "food products",
                    image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-13@2x-scaled.jpg",
                },
                ],

                testimonials: [
                    {   
                        id: 1, 
                        name: 'Lisa Smith', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-3-200x200.jpg', 
                        text: 'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls'
                    },
                    {   
                        id: 2, 
                        name: 'Melissa Green', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-1-200x200.jpg', 
                        text: 'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls' 
                    },
                    {   
                        id: 3, 
                        name: 'Sam Lewis', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-4-200x200.jpg', 
                        text: 'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls' 
                    },
                    {   
                        id: 4, 
                        name: 'Ben Springer', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-7-200x200.jpg', 
                        text: 'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls' 
                    },
                    {   
                        id: 5, 
                        name: 'Hannah McLean', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-6-200x200.jpg', 
                        text: 'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls'
                    },
                    {   
                        id: 6, 
                        name: 'Sarah Roberts', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-5-200x200.jpg', 
                        text:'blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls blab lalbl allblalblal blalblsalb lalblslvlbldl alvlalcls' 
                    }
                ], 
                
            }
        },
    }
</script>

<template>
    <div>
       

        <!-- Hero -->
        <AboutHero />

        <!-- Passionate -->

        <AboutPassionate />

        <!-- visit our shop -->

        <AboutShop />

        <!-- Team staff -->

        <AboutTeam />

        <!-- Users testimonials section -->
        <h1 class="testimonials-title">Users Testimonials</h1>
        <div class="testimonials-section">
            <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
        </div>
        
        <!-- DOUBLE-BANNER-DOG/CAT -->
        <div class="double-banner">
            <AppDoubleBanner v-for="banner in doubleBannerArray" :key="banner.id" :doubleBannerArrays="banner"/>
        </div>

        <!-- tips and tricks section -->
        <AppTipsAndTricks />



        


    </div>
</template>

<style>

.double-banner {
    display: flex;
    width: 100%;
}

.testimonials-section, .testimonials-title {
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    display: flex;
    background-color: rgb(30, 49, 32);
    background-image: linear-gradient(to bottom, rgba(30, 49, 32, 0.1), rgb(30, 49, 32)), url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
    padding: 2vw;
    position: relative;   
    color: white; 
    margin: 0 auto;
} 

</style>
