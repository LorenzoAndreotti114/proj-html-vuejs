<script>    
    export default {
        data() {
            return {
                iconsArray: [
                    {
                        name: "Truck",
                        icon: "fa-solid fa-truck",
                        subtitle: "Free worldwide deliveries"
                    },
                    {
                        name: "Map",
                        icon: "fa-regular fa-map",
                        subtitle: "Find stores near you"
                    },
                    {
                        name: "Dollar",
                        icon: "fa-solid fa-dollar-sign",
                        subtitle: "Best prices guarranteed"
                    },
                    {
                        name: "Credit card",
                        icon: "fa-regular fa-credit-card",
                        subtitle: "All credit card accepted"
                    },
                ], 
            }
        }
    }
</script>

<template>

    <div class="ms_container">

        <div class="black-bg">

            <div class="inner-container">

                <div class="ms_card" v-for="(card, index) in iconsArray">
                    
                    <div class="icon"><i :class="card.icon"></i></div>

                    <div class="subtitle"> {{ card.subtitle }} </div>

                </div>

            </div>

        </div>

    </div>

</template>

<style scoped>

    .ms_container {
        display: flex;
        justify-content: center;
        width: 100%;
        background-color: rgb(30, 49, 32);
        background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
    }

    .black-bg {
        display: flex;
        justify-content: center;
        width: 100%;
        padding: 5% 2%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.3);
    }

    .inner-container {
        display: flex;
        justify-content: space-between;
        width: 80%;
    }

    .ms_card {
        width: 23%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: white;
    }

    .icon {
        font-size: 3vw;
        padding: 5% 0;
    }

    .subtitle {
        font-size: 1vw;
        color: lightgray;
    }

</style>