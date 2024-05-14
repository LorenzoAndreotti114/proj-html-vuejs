<script>
export default {
  name: 'TestimonialCard',
  props: {
    testimonial: {
      type: Object,
      required: true
    }
  }
}
</script>

<template>


    <!-- card container -->
    <div class="testimonial-card">

        

        <!-- card img -->
        <img :src="testimonial.image" :alt="testimonial.name">

        <!-- testimonial description -->
        <p>{{ testimonial.text }}</p>

        <!-- name -->
        <span>{{ testimonial.name }},{{ testimonial.affiliation }}</span>

    </div>

</template>

<style scoped>

.testimonial-card {
    border-radius: 10px;
    text-align: center;
    background-color: rgb(30, 49, 32);
    
}

.testimonial-card:hover {
    transform: scale(1.05);
}

.testimonial-card img {
    width: 8vw; 
    height: 8vw; 
    border-radius: 50%;    
}

.testimonial-card p {
    font-size: 1.3vw;
    margin: 10px 0;
    color: white; 
}

.testimonial-card span {
    font-weight: bold;
    color: grey; /* Darker color for names */
    
}
</style>