<script>
export default {
    name: 'AppFooter'
}
</script>

<template>
    <footer class="footer">
        <div class="container">
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
                    <ul>
                        <li>Bed</li>
                        <li>Food</li>
                        <li>Toys</li>
                        <li>Transport</li>
                    </ul>
                </div>
                <!-- /Shop -->
                <!-- Useful Links -->
                <div class="col-md-3">
                    <h2>Useful Links</h2>
                    <ul>
                        <li>My Account</li>
                        <li>Orders</li>
                        <li>Checkout</li>
                        <li>Cart</li>
                    </ul>
                </div>
                <!-- /Useful Links -->
                <!-- Newsletter -->
                <div class="col-md-3">
                    <div class="card text-white"
                        style="background-image: url('https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png'); background-size: cover;">
                        <div class="card-overlay" style="background-color: #273F29;">
                            <div class="card-body">
                                <h1>Subscribe to Our Newsletter</h1>
                                <input type="email" class="form-control mb-2" placeholder="Inserisci la tua email...">
                                <button type="submit" class="btn btn-primary">Iscriviti</button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /Newsletter -->
            </div>
        </div>
    </footer>
</template>


<style scoped lang="scss">
a {
    text-decoration: none;
    color: white;
}

ul {
    list-style-type: none;
}

.footer {
    background-color: #1E3120;
    padding: 2rem 0;
    font-size: 0.8rem;
    color: white;
}
</style>