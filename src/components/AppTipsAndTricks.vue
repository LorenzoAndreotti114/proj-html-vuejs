<script>
    export default {
        data() {
            return {
                tipsAndTricksArray: [
                    {
                        title: "How to 'loose leash walk' your dog",
                        date: "April 21st, 2020",
                        image: "01",
                    },
                    {
                        title: "Stop cats from scratching furniture",
                        date: "April 19th, 2020",
                        image: "02",
                    },
                    {
                        title: "Where to buy the best pet food",    
                        date: "April 18th, 2020",
                        image: "03",
                    },
                    {
                        title: "Proper care for your pet toys",
                        date: "April 17th, 2020",
                        image: "04",
                    },
                ]
            }
        }
    }
</script>

<template>

    <div class="ms_container">

        <div class="inner-container">

            <!-- TITLE -->
            <div class="title">Get the best tips & tricks</div>

            <!-- SUBTITLE -->
            <div class="subtitle">Recent articles</div>

            <!-- CARDS -->
            <div class="card-container">

                <div class="ms_card" v-for="(Cards, index) in tipsAndTricksArray">
                    

                    <!-- CARD IMG -->
                    <div class="card-img">
                        <img :src=" `../src/assets/img/tips--tricks-${Cards.image}.jpg` " alt="">
                    </div>

                    <!-- CARD DATE -->
                    <div class="card-date">{{ Cards.date }}</div>

                    <!-- CARD TITLE -->
                    <div class="card-title">{{ Cards.title }}</div>

                    <!-- CARD CONTINUE READING -->
                    <div class="continue-reading">Continue Reading</div>

                </div>

            </div>

            <!-- BTN -->
            <div class="btn-container"><input type="button" class="btn" value="Read all articles"></div>

        </div>

    </div>

</template>

<style scoped>

    img {
        width: 100%;
        object-fit: contain;
    }

    .ms_container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        width: 100%;
        padding: 2%;
    }

    .inner-container {
        width: 80%;
    }
    
    .title {
        width: 100%;
        text-align: center;
        font-size: 3vw;
        padding-top: 6%;
    }

    .subtitle {
        width: 100%;
        text-align: center;
        font-size: 1.5vw;
        padding-bottom: 4%;
        padding-top: 1%;
    }


    /* CARD */
    .card-container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    .ms_card {
        border: 1px solid gray;
        display: flex;
        flex-direction: column;
        align-items: start;
        justify-content: center;
        width: 23%;
        height: 100%;
        padding: 1.5%;
    }

    .card-img {
        border: 1px solid black;
        height: 10vw;
        overflow: hidden;
    }

    .card-date {
        font-size: 1vw;
        padding-top: 10%;
    }

    .card-title {
        font-size: 1.6vw;
        padding: 5% 0;
    }

    .continue-reading {
        font-size: 1vw;
        padding-bottom: 8%;
        padding-top: 3%;
    }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 4% 0;
    }

    .btn {
        color: white;
        background-color: #3d6f42;
        border-radius: 50px;
        padding: 1% 3%;
    }

    .btn:hover {
        background-color: rgb(43 79 47);
    }

</style>