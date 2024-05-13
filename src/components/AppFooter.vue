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
                    <p>
                        <strong>Avada Pet Supplies</strong>
                    </p>
                    <p>
                        1234 Avada Avenue, Avadaville | <a href="mailto:info@your-company.com">info@your-company.com</a>
                        |
                        Chiama: (1) 234 5678
                    </p>
                </div>
                <!-- /Info -->
                <!-- Shop -->
                <div class="col-md-3">
                    <h1>Shop My Brand</h1>
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
                    <h1>Useful Links</h1>
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
                    <div class="card bg-transparent">
                        <div class="card-body">
                            <h1>Subscribe to Our Newsletter</h1>
                            <input type="email" class="form-control mb-2" placeholder="Inserisci la tua email...">
                            <button type="submit" class="btn btn-primary">Iscriviti</button>
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

li {
    text-decoration: none;
}

.footer {
    background-color: #1E3120;
    padding: 2rem 0;
    font-size: 0.8rem;
    color: white;
}
</style>