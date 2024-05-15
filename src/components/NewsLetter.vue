<script>
export default {
    data() {
        return {

        }
    }
}
</script>

<template>
    <div class="container mt-5">
        <div class="card">
            <div class="card-body">
                <div class="row align-items-center">
                    <div class="col-md-7">
                        <div class="row">
                            <h2 class="card-title">Join our Newsletter</h2>
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <br>
                                <p>Volutpat vel turpis nulla lorem sed semper. Aliquam sagittis sem libero viverra
                                    vehicula
                                    nullam ut nisl.</p>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-7">
                                <br>
                                <input type="email" class="form-control" placeholder="Insert your Email ...*"
                                    aria-label="Inserisci la tua email" aria-describedby="button-addon2">
                            </div>
                            <div class="col-md-5">
                                <br>
                                <button id="button-addon2">Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.card {
    background-image: url('https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/banner-7@2x-scaled.jpg');
    border: 0;
    border-radius: 0px;
    background-size: cover;
    background-position: top;
    height: 500px;
    width: 100%;

    .card-body {
        margin-top: 100px;
        margin-left: 60px;

        input {
            border: none;
            border-radius: 20px;
            background-color: rgba(128, 128, 128, 0.137);
        }

        button {
            background-color: #3d6f42;
            color: white;
            padding: 6px 20px;
            border: none;
            border-radius: 50px;
            font-size: 16px;
            cursor: pointer;
        }

        button:hover {
            background-color: #305732;
        }
    }
}
</style>