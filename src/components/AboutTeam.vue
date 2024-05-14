<script>
export default {
  name: 'TeamSection',
  props: {
    teamMembers: {
      type: Array,
      default: () => [
        {   name: 'Cheryl Dobson', 
            image: '../assets/img/staff1.jpg',              
            description: 'lorem lorem lorem lorem lorem lorem lorem lore lorem loreme lorem lorem', 
            social: { fb: '#', tw: '#', ig: '#' } },
        {   name: 'Andrew McNiel', 
            image: '../assets/img/staff2.jpg',              
            description: 'lorem lorem lorem lorem lorem lorem lorem lore lorem loreme', 
            social: { fb: '#', tw: '#', ig: '#' } },
        {   name: 'Sarah Green', 
            image: '../assets/img/staff3.jpg',              
            description: 'lorem lorem lorem lorem lorem lorem lorem lore lorem loreme', 
            social: { fb: '#', tw: '#', ig: '#' } }
      ]
    }
  }
}
</script>

<template>


    <!-- staff section -->
    <div class="team-section">

        <!-- title -->
        <h2>Meet our awesome staff</h2>

        <!-- subtitle -->
        <h3>Passionate about animals</h3>

        <!-- members -->
        <div class="team-members">

            <!-- member card -->
            <div class="team-member" v-for="member in teamMembers" :key="member.name">

                <!-- member card img -->
                    <img :src="member.image" :alt="member.name">

                <!-- member card name -->
                    <h4>{{ member.name }}</h4>

                <!-- member card description -->
                    <p>{{ member.description }}</p>

                <!-- social icons container -->
                <div class="social-icons">

                    <!-- social icons -->
                        <a href="#" class="social-icon"><i class="fab fa-facebook-f"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-twitter"></i></a>
                        <a href="#" class="social-icon"><i class="fab fa-instagram"></i></a>
                </div>
            </div>
        </div>
    </div>

</template>

<style scoped>

.team-section {
        text-align: center;
        padding: 20vw 10vw;
        background-color: #fff;

        h2 {
            color: lightgrey;
            margin-bottom: 1vw;
            font-size: 1.5vw;
        }

        h3 {
            
        }
    }


   

    .team-members {
        display: flex;
        justify-content: space-around;
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
        color: #3d6f42;
    }
</style>