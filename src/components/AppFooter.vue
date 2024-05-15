<script>
export default {
    name: 'AppFooter',
    data() {
        return {
            routes: [
                { title: "Home", name: "Home" },
                { title: "About", name: "About" },
                { title: "Contact", name: "Contact" },
            ]
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
    <footer class="footer">
        <div class="container">
            <!-- PRIMA PARTE DEL FOOTER -->
            <div class="row">
                <!-- Info -->
                <div class="col-md-3">
                    <div class="logo">
                        <img src="../assets/img/logo.svg" alt="Logo" style="filter: invert(100%); color: white;">
                    </div>
                    <p>
                        1234 Avada Avenue, Avadaville | <a href="mailto:info@your-company.com">info@your-company.com</a>
                        |
                        Chiama: (1) 234 5678
                    </p>
                </div>
                <!-- /Info -->
                <!-- Shop -->
                <div class="col-md-3">
                    <h2>Shop My Brand</h2>
                    <ul class="ps-0">
                        <li class="pt-4">Bed</li>
                        <li class="pt-3">Food</li>
                        <li class="pt-3">Toys</li>
                        <li class="pt-3">Transport</li>
                    </ul>
                </div>
                <!-- /Shop -->
                <!-- Useful Links -->
                <div class="col-md-3">
                    <h2>Useful Links</h2>
                    <ul class="ps-0">
                        <li class="pt-4">My Account</li>
                        <li class="pt-3">Orders</li>
                        <li class="pt-3">Checkout</li>
                        <li class="pt-3">Cart</li>
                    </ul>
                </div>
                <!-- /Useful Links -->
                <!-- Newsletter -->
                <div class="col-md-3">
                    <div class="card text-white" style="background-color: #273F29;">
                        <div class="card-overlay" style="background-image: url('https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png');
                                    background-size: cover;">
                            <div class="card-body">
                                <h3 class="pb-4">Subscribe to Our Newsletter ...*</h3>
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
            <div class="row">
                <div class="col-md-1 text-center">
                    <p class="">
                        <!-- da cambiare col router-link -->
                        <a href="">Home</a>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <!-- da cambiare col router-link -->
                        <a href="">About</a>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <!-- da cambiare col router-link -->
                        <a href="">Blog</a>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <!-- da cambiare col router-link -->
                        <a href="">Contact</a>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <!-- da cambiare col router-link -->
                        <a href="">Shop</a>
                    </p>
                </div>
            </div>
            <!-- /SECONDA PARTE DEL FOOTER -->
            <br>
            <!-- TERZA PARTE DEL FOOTER -->
            <div class="row">
                <div class="col-md-1 text-center">
                    <p>
                        <i class="fab fa-facebook"></i>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <i class="fab fa-twitter"></i>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <i class="fab fa-instagram"></i>
                    </p>
                </div>
                <div class="col-md-1 text-center">
                    <p>
                        <i class="fab fa-youtube"></i>
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

            <div class="content has-text-centered">
                <!-- Altri contenuti del footer -->
                <button @click="scrollToTop" class="scroll-top-btn">
                    <i class="fas fa-chevron-up"></i> <!-- Icona per tornare all'inizio -->
                </button>
            </div>
        </div>
    </footer>
    <!-- /BLACK FOOTER -->

</template>


<style scoped lang="scss">

input,
textarea {
    border: none;
    padding: 15px;
    border-radius: 25px;
    background-color: #f8f5f2;
}

.card-body {
    button {
    background-color: #3d6f42;
    color: white;
    border: none;
    border-radius: 50px;
    font-size: 16px;
    cursor: pointer;
    margin-top: 10px;
    padding: 15px;
    padding-left: 25px;
    padding-right: 25px;
}

button:hover {
    background-color: #305732;
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

.footer {
    background-color: #1E3120;
    padding: 2rem 0;
    font-size: 0.8rem;
    color: white;
}

.scroll-top-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    position: absolute;
    right: 2rem;
    background-color: #8888886c;
}

.scroll-top-btn i {
    color: white;
    font-size: 25px;
}

</style>