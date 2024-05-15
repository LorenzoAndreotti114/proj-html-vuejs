<script>



</script>

<template>

    <div class="container">
        <div class="row">
            <!-- Contenuto a sinistra -->
            <div class="col-md-6">
                <div class="mb-3">
                    <p>Amet pulvinar dignissim sapien massa amet, ac orci rutrum. Quam in sed leo mauris etiam ut diam
                        id. Metus viverra parturient montes, purus condimentum quis non sit amet. Euismod ligula.</p>
                </div>
                <div class="mb-3">
                    <h2>We are passionnate about taking care of your animals</h2>
                </div>
                <div class="mb-3">
                    <p>1234 Avada Avenue
                        Avadaville, 11221</p>

                    <p>info@your-company.com
                        Call us: (1) 234 5678</p>
                </div>
            </div>
            <!-- Form a destra -->
            <div class="col-md-6">
                <form>
                    <div class="mb-3">
                        <label for="name" class="form-label">Nome</label>
                        <input type="text" class="form-control" id="name" placeholder="Inserisci il tuo nome">
                    </div>
                    <div class="mb-3">
                        <label for="email" class="form-label">Email</label>
                        <input type="email" class="form-control" id="email" placeholder="Inserisci la tua email">
                    </div>
                    <div class="mb-3">
                        <label for="subject" class="form-label">Oggetto</label>
                        <input type="text" class="form-control" id="subject" placeholder="Inserisci l'oggetto">
                    </div>
                    <div class="mb-3">
                        <label for="message" class="form-label">Messaggio</label>
                        <textarea class="form-control" id="message" rows="5"
                            placeholder="Inserisci il tuo messaggio"></textarea>
                    </div>
                    <button type="submit" class="btn btn-primary">Invia</button>
                </form>
            </div>
        </div>
    </div>

</template>

<style scoped lang="scss"></style>