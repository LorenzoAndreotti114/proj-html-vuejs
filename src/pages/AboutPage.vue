<script>

</script>

<template>
    <div class="about-page">
       

        <!-- Introduction Section -->
        <section class="intro">
            <h1>About</h1>
             <p>Learn more about our business philosophy</p>
        </section>

        <!-- Image and Text Section -->
        <section class="content-section">
              <img src="../assets/img/wearepassionate.jpg" alt="Team Image">
              <div>
                <h2>We are passionate about taking care of your animals</h2>
                <p class="two-columns">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non voluptates temporibus eligendi eius beatae dignissimos cupiditate est nam possimus inventore consequuntur accusamus quae labore culpa exercitationem, ea quas? Harum, ut. Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum amet aliquid, reprehenderit eum doloribus nemo rerum maiores, quisquam ducimus provident nihil l ullam veritatis! Consectetur quisquam non expedita vero Lorem ipsum, dolor sit amet consectetur adipisicing elit. A quasi fuga neque exercitationem autem, illum maxime doloremque in, fugit laboriosam nihil! Voluptate, asperiores! Velit repudiandae rem veritatis! Nesciunt, aut ad.lorem Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nemo suscipit ea reprehenderit ipsam vel nulla, consequatur officia quam soluta autem sapiente officiis nostrum totam rerum aliquam temporibus deleniti perspiciatis?</p>
                
            </div>
            
        </section>
        <div class="signature">
                <img src="../assets/img/signature.jpg" alt="Signature">
        </div>
        <section class="sticky-background-section">
            <h4>Find the best animal supplies</h4>
            <h2>New arrivals every week</h2>
            <button>Visit our shop</button>
        </section>
    </div>
</template>

<style>
.about-page {
    .intro {
      text-align: center;
      padding: 7vw;
      background-color: #131f14;
      color: white;
      display: flex;
      justify-content: center;
    }

    .content-section {
      display: flex;
      align-items: center;
      padding: 5vw 2vw;
      background-color: #fff;
        img {
                width: 25%;
        }
        div {
                width: 60%; 
            h2 {
            margin: 5vw; 
            }

            .two-columns {
                column-count: 2;
                column-gap: 1vw;
                text-align: justify;
                margin: 5vw;
            }

            
        }
        .signature {
                margin-top: 5vw;               
                                
        }
    }
    .sticky-background-section {
  position: sticky;
  top: 0; 
  background-image: url('../assets/img/signature.jpg'); 
  background-size: cover; 
  background-attachment: fixed; 
  color: white;
  text-align: center; 
  padding: 10vw 0; 
  z-index: 10; 
  width: 100%; 

  h2 {
    margin-bottom: 5vw;
  }

  h4 {
    margin-bottom: 5vw;
  }

  button {
    padding: 1.2vw;
    background-color: #3d6f42;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    color: white;
  }
}
    
}

</style>