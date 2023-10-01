<script setup>
defineProps(['hasDivider'])
</script>

<template>
  <div class="container-fluid">
    <hr v-if="hasDivider" class="hr">
    <footer>
      <section class="socials d-flex flex-column flex-md-row justify-content-center p-4 text-white">
        <div class="mb-2 mb-md-0 me-4">
          Get connected with us on social networks:
        </div>
        <div class="d-flex">
          <a href="" class="me-4">
            <img src="@/assets/images/icons/fa-facebook.svg" class="social-icon" alt="Focial Facebook"/>
          </a>
          <a href="" class="me-4">
            <img src="@/assets/images/icons/fa-x-twitter.svg" class="social-icon" alt="Social X Twitter"/>
          </a>
          <a href="" class=" me-4">
            <img src="@/assets/images/icons/fa-instagram.svg" class="social-icon" alt="Social Instagram"/>
          </a>
          <a href="" class="me-4">
            <img src="@/assets/images/icons/fa-linkedin.svg" class="social-icon" alt="Social LinkedIn"/>

          </a>
        </div>
      </section>

      <section class="footer-content">
        <div class="container text-md-start my-md-5">
          <div class="row my-4 d-flex justify-content-around">
            <div class="col-md-3 col-lg-4 d-flex flex-column align-items-start mb-4 mb-md-0">
              <h6 class="text-uppercase fw-bold">HOPE Foundation</h6>
              <hr class="mb-3 mt-0"/>
              <div>
                Our mission is to improve the lives of underserved people by supporting health education and medical care from the local to global levels
              </div>
            </div>
            <div class="col-md-3 col-lg-2 d-flex flex-column align-items-start mb-4 mb-md-0">
              <h6 class="text-uppercase fw-bold">Useful links</h6>
              <hr class="mb-3 mt-0"/>
              <div class="d-flex flex-column">
                <a href="#" class="text-dark">Footer Link</a>
                <a href="#" class="text-dark">Footer Link</a>
                <a href="#" class="text-dark">Footer Link</a>
              </div>
            </div>
            <div class="col-md-3 d-flex flex-column align-items-start">
              <h6 class="text-uppercase fw-bold">Contact</h6>
              <hr class="mb-3 mt-0"/>
              <div class="d-flex">
                <img src="@/assets/images/icons/fa-location-dot.svg" class="icon" alt="Icon Location"/>
                <span>New York, NY 10012, US</span>
              </div>
              <div class="d-flex">
                <img src="@/assets/images/icons/fa-envelope.svg" class="icon" alt="Icon Email"/>
                <span>info@example.com</span>
              </div>
              <div class="d-flex">
                <img src="@/assets/images/icons/fa-phone.svg" class="icon" alt="Icon Phone"/>
                <span>555-555-5555</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="copyright text-center p-3">
        © 2023 Copyright: HOPE Foundation
      </div>
    </footer>
  </div>
</template>
<style>
footer {
  margin-top: -60px;
  font-size: 14px;
  color: #333333;
}

footer .socials {
  background-color: #7119f4;
  border-radius: 30px 30px 0 0;
}

footer .footer-content hr{
  width: 60px;
  background-color: #7119f4;
  height: 2px;
}

footer .copyright {
  background-color: #333333;
  color: white;
}

footer .icon {
  width: 1rem;
  margin-right: 10px;
}

footer .social-icon {
  width: 1.25rem;
}

@media (max-width: 76px) {
  font-size: 12px;
}
</style>
