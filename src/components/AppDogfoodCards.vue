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

            <div class="ms_card">

                <!-- TITLE -->
                <div class="title"> {{ Foodcards.name }} </div>

                <!-- SUBTITLE -->
                <div class="subtitle"> {{ Foodcards.type }} dog food</div>

                <!-- IMG -->
                <div class="ms_img"><img :src="Foodcards.image" alt=""></div>

                <!-- BTN -->
                <div class="btn-container"><input type="button" class="btn" :value=" `shop ${Foodcards.name} Food` "></div>

            </div>
        
        </div>

    </div>

</template>

<style scoped>

    img {
        height: 100%;
        width: 100%;
        object-fit: contain;
    }

    .ms_container {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 2% 8%;
    }

    .ms_background {
        width: 30%;
        background-color: rgb(30, 49, 32);
        margin: 0 0.5%;
        transition-duration: 0.2s;
    }

    .ms_background:hover {
        transform: scale(1.03);
    }

    .ms_card {
        color: white;
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
    }

    .title {
        font-size: 2.5vw;
        padding-top: 15%;
    }

    .subtitle {
        font-size: 1vw;
        color: #447a49;
        padding-top: 2%;
    }

    .ms_img {
        width: 80%;
        height: 100%;
        padding-top: 5%;
    }

    .btn-container {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 10% 0;
    }

    .btn {
        color: white;
        font-size: 1.2vw;
        background-color: #3d6f42;
        border-radius: 50px;
        padding: 2% 4%;
    }

</style>

