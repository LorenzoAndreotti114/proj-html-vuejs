<script>
export default {
  name: 'AppHeader',
  props: {
    routes: {
      type: Array,
      default: () => []
    }
  },
}
</script>

<template>


      <!-- Header Bottom -->
      <div class="header-bottom">

          <div class="header-bottom-background">
            
              <!-- feature 1 -->
              <div class="feature">

                <!-- globe icon -->
                <i class="fas fa-globe"></i>

                <!-- text -->
                <span>International Shipping Services</span>

              </div>

              <!-- feature 2 -->
              <div class="feature">

                  <!-- clock icon  -->
                <i class="fas fa-clock"></i>

                <!-- text -->
                <span>See our store hours and services</span>

              </div>

              <!-- feature 3 -->
              <div class="feature">

                <!-- check icon -->
                <i class="fas fa-check"></i>

                <!-- text -->
                <span>We price match to give you the best deal</span>

              </div>

          </div>

      </div>

  </div>

</template>

<style scoped lang="scss">




.header-bottom {
  color: white;
  background-color: rgb(30, 49, 32);
  padding: 2vw;
  background-image: url("https://avada.website/pet-supplies/wp-content/uploads/sites/139/2020/04/bg-transparent-3.png");
}

.header-bottom-background {
  display: flex;
  justify-content: space-between;
  align-items: center;  
}

.feature i {
  font-size: 20px;
  margin-right: 10px;
}
</style>