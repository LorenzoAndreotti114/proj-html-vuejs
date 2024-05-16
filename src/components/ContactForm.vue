<script>



</script>

<template>

    <div class="container">
        <div class="row">
            <!-- Contenuto a sinistra -->
            <div class="col-md-4">
                <div class="mb-5 pb-3">
                    <p>Amet pulvinar dignissim sapien massa amet, ac orci rutrum. Quam in sed leo mauris etiam ut diam
                        id. Metus viverra parturient montes, purus condimentum quis non sit amet. Euismod ligula.</p>
                </div>
                <div class="mb-5 pb-3">
                    <h2>We are passionnate about taking care of your animals</h2>
                </div>
                <div class="mb-3">
                    <p class="mb-3">1234 Avada Avenue <br>
                        Avadaville, 11221</p>

                    <p class="mb-5">info@your-company.com <br>
                        Call us: (1) 234 5678</p>

                    <p style="color: #3d6f42;">
                        <i class="fab fa-facebook"></i>
                        <i class="fab fa-x-twitter"></i>
                        <i class="fab fa-instagram"></i>
                        <i class="fab fa-youtube"></i>
                    </p>
                </div>
            </div>
            <!-- Form a destra -->
            <div class="col-md-7">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Your name *</label>
                        <input type="text" class="form-control" id="name">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Your email *</label>
                        <input type="email" class="form-control" id="email">
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Subject *</label>
                        <input type="text" class="form-control" id="subject">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Message *</label>
                        <textarea class="form-control" id="message" rows="5"></textarea>
                    </div>
                    <button type="submit">Send your message</button>
                </form>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss">
.container {
    font-size: 1.25rem;
    margin-top: 5rem;
    margin-bottom: 6rem;

    .col-md-7 {
        margin-left: 5rem;
    }

    input,
    textarea {
        border: none;
        padding: 15px;
        border-radius: 25px;
        background-color: #f8f5f2;
    }

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

    i {
        cursor: pointer;
        margin-right: 1rem;
    }
}
</style>