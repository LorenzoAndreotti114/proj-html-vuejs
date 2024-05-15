<script>

</script>

<template>

    <div class="banner">
        <div class="banner-overlay"></div>
        <div class="banner-text">
            <h1 class="text-white">Contact</h1>
        </div>
    </div>

</template>

<style scoped lang="scss">

.banner {
    background-image: url('https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-14@2x-scaled.jpg');
    background-size: cover;
    background-position: top;
    height: 400px;
    position: relative;
}

.banner-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.banner-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 20px;
}

.text-white {
    font-size: 3.5rem;
    color: white;
}

</style>