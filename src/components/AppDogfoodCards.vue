<script>
    export default {
        data() {
            return {
                dogfoodTipes: [
                    {
                        name: "Kibble",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-18.png",
                        type: "Dry",
                    },
                    {
                        name: "Moist",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-17.png",
                        type: "Canned",
                    },
                    {
                        name: "Frozen",
                        image: "https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/05/food-transparent-16.png",
                        type: "Freeze-dried",
                    },
                ]
            }
        }
    }
</script>

<template>

    <div class="ms_container">

        <div class="ms_background" v-for="(Foodcards, index) in dogfoodTipes">

            <div class="ms_card" >

                <!-- TITLE -->
                <div class="title"> {{ Foodcards.name }} </div>

                <!-- SUBTITLE -->
                <div></div>

                <!-- IMG -->
                <div></div>

                <!-- BTN -->
                <div></div>
                
            </div>
        
        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        display: flex;
        justify-content: space-around;
        width: 100%;
        height: 200px;
    }

    .ms_background {
        width: 20%;
        background-color: rgb(1, 39, 13);
    }

    .ms_card {
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        border: 1px solid black;
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
    }

</style>
