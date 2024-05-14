<script>

    import AboutHero from '../components/AboutHero.vue';
    import AboutPassionate from '../components/AboutPassionate.vue';
    import AboutShop from '../components/AboutShop.vue';
    import AboutTeam from '../components/AboutTeam.vue';
    import TestimonialCard from '../components/TestimonialCard.vue';

   
    

    export default {

        components: {
             AboutHero,
             AboutPassionate,
             AboutShop,
             AboutTeam,
             TestimonialCard
        },

        data() {
            return {

                testimonials: [
                    {   
                        id: 1, 
                        name: 'Lisa Smith', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-3-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    },
                    {   
                        id: 2, 
                        name: 'Melissa Green', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-1-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    },
                    {   
                        id: 3, 
                        name: 'Sam Lewis', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-4-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    },
                    {   
                        id: 4, 
                        name: 'Ben Springer', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-7-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    },
                    {   
                        id: 5, 
                        name: 'Hannah McLean', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-6-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    },
                    {   
                        id: 6, 
                        name: 'Sarah Roberts', 
                        affiliation: 'ThemeFusion', 
                        image: 'https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/avatar-5-200x200.jpg', 
                        text: 'blablalblallblalblalblalblsalblalblslvlbldlalvlalcls...' 
                    }
                ]
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

        <div class="testimonials-section">
            <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
        </div>
        


    </div>
</template>

<style>
 

</style>