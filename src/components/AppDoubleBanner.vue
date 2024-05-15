<script>
    export default {
        data() {
            return {
                
            }
        },
        props: {
            doubleBannerArrays: {
                type: Object,
                required: true,
            }
        }
    }
</script>

<template>

    <div class="ms_container">

        <div class="container-inner">


            <div class="z-index">

                <div class="subtitle">{{ doubleBannerArrays.subtitle }}</div>

                <div class="title">{{ doubleBannerArrays.title }}</div>

                <div class="btn-container"><input type="button" class="ms_btn" :value="`view all ${doubleBannerArrays.type}`"></div>

            </div>

            <div class="img-container"><img :src="doubleBannerArrays.image" alt=""></div>

        </div>

    </div>

</template>

<style scoped>

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

    .z-index {
        display: flex;
        z-index: 10;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        height: 100%;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.3);
        padding: 15% 0;
    }

    .ms_container {
        display: flex;
        width: 50%;
        color: white;
        position: relative;
        transition-duration: 0.2s;
    }

    .container-inner {
        display: flex;
        width: 100%;
    }

    .ms_container:hover {
        transform: scale(1.05);
        z-index: 15;
    }

    .img-container {
        width: 100%;
        height: 100%;
        position: absolute;
        z-index: 0;
    }

    .subtitle {
        font-size: 1vw;
        font-weight: 500;
    }

    .title {
        font-size: 3vw;
        padding: 4% 0;
    }

    .btn-container {
        width: 100%;
        display: flex;
        justify-content: center;
    }

    .ms_btn {
        background-color: white;
        border: 0;
        font-size: 0.8vw;
        padding: 1.5% 4%;
        border-radius: 50px;
    }

</style>