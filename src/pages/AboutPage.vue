<script>

    import AboutHero from '../components/AboutHero.vue';
    import AboutPassionate from '../components/AboutPassionate.vue';
    import AboutShop from '../components/AboutShop.vue';

   
    

    export default {

        components: {
             AboutHero,
             AboutPassionate,
             AboutShop,
        },

        data() {
            return {

            }
        }
    }
</script>

<template>
    <div class="about-page">
       

        <!-- Hero -->
        <AboutHero />

        <!-- Passionate -->

        <AboutPassionate />

        <!-- visit our shop -->

        <AboutShop />


        <div class="team-section">
                <h2 class="section-title">Meet our awesome staff</h2>
                <h3>Passionate about animals</h3>
            <div class="team-members">
                <div class="team-member" v-for="member in teamMembers" :key="member.name">
                        <img :src="member.image" :alt="member.name">
                        <h4>{{ member.name }}</h4>
                        <p>{{ member.description }}</p>
                    <div class="social-icons">
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                    </div>
                </div>
             </div>
        </div>
    </div>
</template>

<style>
    .about-page {
        


    .team-section {
        text-align: center;
        padding: 20vw 10vw;
        background-color: #fff;
    }

    .section.title {
        margin-bottom: 3vw;
        font-size: 3vw;
    }

    .team-members {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    .team-member {
        width: 30%;
        padding: 5vw;
        margin: 3vw;
        transition: transform 0.3s ease;

    }

    .team-member:hover {
        transform: translateY(-10px);
    }

    .team-member img {
        width: 100%;
        height: auto;
    }

    .social-icons {
        margin-top: 2vw;
    }

    .social-icon {
        margin-right: 2vw;
        color: black;
    }
    

}

</style>