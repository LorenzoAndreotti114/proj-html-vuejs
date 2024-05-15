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
    
    width: 350px;
    text-align: center;
    background-color: transparent;
    padding: 2vw;
  
}

.testimonial-card:hover {
    transform: scale(1.05);
}

.testimonials-title {
    color: white;
    
}


.testimonial-card img {    
    width: 8vw; 
    height: 8vw; 
    border-radius: 50%;    
}

.testimonial-card p {   
    margin: 10px 0;
    color: white;
    overflow: hidden;  
}

.testimonial-card span {
    font-weight: bold;
    color: grey; 
}
</style>