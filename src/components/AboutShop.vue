<script>

</script>

<template>

    <section class="sticky-background-section">

        <!-- subtitle -->
        <h4>Find the best animal supplies</h4>

        <!-- title -->
            <h2>New arrivals every week</h2>

        <!-- button -->
        <button>Visit our shop</button>

    </section>
</template>


<style>
    .sticky-background-section {
        position: sticky; 
        background-image: url('../assets/img/HomepageHeroBigImg.jpg'); 
        background-size: cover; 
        background-attachment: fixed; 
        color: white;
        text-align: center; 
        padding: 10vw 0; 
        z-index: 10; 
        width: 100%; 

        h2 {
            margin-bottom: 5vw;
        }

        h4 {
            margin-bottom: 5vw;
        }

        button {
            padding: 1.2vw;
            background-color: #3d6f42;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            color: white;
        }
    }   
</style>