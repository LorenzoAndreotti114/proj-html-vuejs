<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            routes: [
                { title: "Home", name: "/" },
                { title: "About", name: "about-us" },
                { title: "Contact", name: "contact" },
                { title: "Shop", name: "shop" },
            ],
            socialMedia: [
                { id: 1, iconClass: 'fab fa-facebook' },
                { id: 2, iconClass: 'fab fa-x-twitter' },
                { id: 3, iconClass: 'fab fa-instagram' },
                { id: 4, iconClass: 'fab fa-youtube' }
            ],
        }
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    },
};
</script>

<template>
    <footer class="top-footer pt-5 pb-5">
        <div class="container">
            <!-- PRIMA PARTE DEL FOOTER -->
            <div class="row">
                <!-- Info -->
                <div class="col-md-3">
                    <div class="logo">
                        <img src="../assets/img/logo.svg" alt="Logo">
                    </div>
                    <div class="info">
                        <p>
                            1234 Avada Avenue, Avadaville <br>
                            <a href="mailto:info@your-company.com">info@your-company.com</a> <br>
                            Chiama: (1) 234 5678
                        </p>
                    </div>

                </div>
                <!-- /Info -->
                <!-- Shop -->
                <div class="col-md-3">
                    <h2>Shop My Brand</h2>
                    <ul class="ps-0">
                        <!-- DA SOSTITUIRE CON ROUTER-LINK IN FUTURO -->
                        <li class="pt-4"><a href="">Bed</a></li>
                        <li class="pt-3"><a href="">Food</a></li>
                        <li class="pt-3"><a href="">Toys</a></li>
                        <li class="pt-3"><a href="">Transport</a></li>
                    </ul>
                </div>
                <!-- /Shop -->
                <!-- Useful Links -->
                <div class="col-md-3">
                    <h2>Useful Links</h2>
                    <ul class="ps-0">
                        <!-- DA SOSTITUIRE CON ROUTER-LINK IN FUTURO -->
                        <li class="pt-4"><a href="">My account</a></li>
                        <li class="pt-3"><a href="">Orders</a></li>
                        <li class="pt-3"><a href="">Checkout</a></li>
                        <li class="pt-3"><a href="">Cart</a></li>
                    </ul>
                </div>
                <!-- /Useful Links -->
                <!-- Newsletter -->
                <div class="col-md-3">
                    <div class="card text-white">
                        <div class="card-overlay">
                            <div class="card-body">
                                <h4 class="pb-4">Subscribe to Our Newsletter ...*</h4>
                                <input type="email" class="form-control mb-2" placeholder="Insert your email">
                                <button type="submit"> <strong>Subscribe</strong> </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Newsletter -->
            </div>
            <!-- /PRIMA PARTE DEL FOOTER -->
            <hr>
            <!-- SECONDA PARTE DEL FOOTER -->
            <div class="row justify-content-center margin-top">
                <div v-for="route in routes" :key="route.name" class="col-md-1 text-center bottom-links" @click="scrollToTop">
                    <p>
                        <!-- Cambia con router-link -->
                        <router-link :to="route.name">{{ route.title }}</router-link>
                    </p>
                </div>
            </div>
            <!-- /SECONDA PARTE DEL FOOTER -->
            <br>
            <!-- TERZA PARTE DEL FOOTER -->
            <div class="row justify-content-center mt-4">
                <div v-for="socialMedia in socialMedia" :key="socialMedia.id"
                    class="col-md-1 text-center bottom-socials">
                    <p>
                        <i :class="socialMedia.iconClass"></i>
                    </p>
                </div>
            </div>

            <!-- /TERZA PARTE DEL FOOTER -->
        </div>
    </footer>
    <!-- BLACK FOOTER -->
    <footer class="footer bg-black text-white text-center py-4">
        <div class="container">
            <p class="mb-0">© Copyright 2012 - 2024 | Avada Website Builder by ThemeFusion | All Rights Reserved |
                Powered by WordPress</p>

            <div class="content">
                <!-- Altri contenuti del footer -->
                <button @click="scrollToTop" class="scroll-top-btn">
                    <i class="fas fa-chevron-up"></i>
                </button>
            </div>
        </div>
    </footer>
    <!-- /BLACK FOOTER -->

</template>


<style scoped lang="scss">
.logo {
    filter: invert(100%);
    color: white;
    margin-bottom: 50px;
}

.info {
    font-size: 1rem;

    p {
        font-size: 1rem;
    }
}

.card {
    padding-top: 20px;
    padding-bottom: 20px;
    background-color: #273F29;

    .card-overlay {
        background-image: url('https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png');
        background-size: cover;
    }
}

.card-body {

    button {
        width: 70%;
        background-color: #3d6f42;
        color: white;
        border: none;
        border-radius: 50px;
        font-size: 16px;
        cursor: pointer;
        margin: 20px auto 0;
        padding: 15px 25px;
        display: block;
    }


    button:hover {
        background-color: #305732;
    }

    input {
        margin: 0 auto;
        width: 70%;
        border: none;
        padding: 15px;
        border-radius: 25px;
        background-color: #f8f5f2;
    }
}

i {
    cursor: pointer;
    margin-right: 1rem;
}

a {
    text-decoration: none;
    color: white;
}

ul {
    list-style-type: none;

    li {
        text-align: left;
        font-size: 1rem;
        padding-top: 2rem;
    }
}

.top-footer {
    background-color: #1E3120;
    padding: 2rem 0;
    font-size: 0.8rem;
    color: white;
    height: 700px;

    .container {
        padding-top: 5rem;
    }
}

    .scroll-top-btn {
        background-color: transparent;
        border: none;
        cursor: pointer;
        position: absolute;
        right: 3rem;
    }

    .scroll-top-btn i {
        color: white;
        font-size: 1rem;
    }

.margin-top {
    margin-top: 4rem;
}

.bottom-links {
    font-size: 1rem;
}

.bottom-socials {
    margin: 0;
    font-size: 1rem;
}
</style>