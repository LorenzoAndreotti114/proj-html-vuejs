<script>

import ContactHero from '../components/ContactHero.vue';
import ContactForm from '../components/ContactForm.vue';
import AboutTeam from '../components/AboutTeam.vue';
import NewsLetter from '../components/NewsLetter.vue';
import TestimonialCard from '../components/TestimonialCard.vue';

export default {

    components: {
        ContactHero,
        ContactForm,
        AboutTeam,
        NewsLetter,
        TestimonialCard,
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
            ]
        }
    },
};

</script>

<template>
    <ContactHero />

    <ContactForm />

    <div class="testimonials-container">
        <h1 class="testimonials-title">Users Testimonials</h1>
        <div class="testimonials-section">
            <TestimonialCard v-for="testimonial in testimonials" :key="testimonial.id" :testimonial="testimonial" />
        </div>
    </div>

    <NewsLetter />

    <AboutTeam />

</template>

<style scoped lang="scss">
.testimonials-container {
    background-color: rgb(30, 49, 32);
    background-image: linear-gradient(to bottom, rgba(30, 49, 32, 0.1), rgb(30, 49, 32)),
        url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");

    width: 100%;
    min-height: 600px;

    .testimonials-section,
    .testimonials-title {
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        width: 100%;
        display: flex;
        color: white;
        margin: 0 auto;
    }
}
</style>