<script>

import ContactHero from '../components/ContactHero.vue';
import ContactForm from '../components/ContactForm.vue';
import AboutTeam from '../components/AboutTeam.vue';
import NewsLetter from '../components/NewsLetter.vue';

export default {

    components: {
        ContactHero,
        ContactForm,
        AboutTeam,
        NewsLetter,
    },

    data() {
        return {

        }
    },
};

</script>

<template>
    <ContactHero />

    <ContactForm />

    <!-- USERS TESTIMONIALS -->

    <NewsLetter />

    <AboutTeam />

</template>

<style scoped lang="scss"></style>