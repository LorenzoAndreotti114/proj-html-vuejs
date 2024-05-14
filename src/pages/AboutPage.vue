<script>

    import AboutHero from '../components/AboutHero.vue';
    import AboutPassionate from '../components/AboutPassionate.vue';
    import AboutShop from '../components/AboutShop.vue';
    import AboutTeam from '../components/AboutTeam.vue';

   
    

    export default {

        components: {
             AboutHero,
             AboutPassionate,
             AboutShop,
             AboutTeam
        },

        data() {
            return {

            }
        }
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
        


    </div>
</template>

<style>
 

</style>