<script setup>
defineProps(['hasDivider'])
</script>

<template>
  <div class="container-fluid mb-5">
    <div class="header">
      <!--Content before waves-->
      <div class="inner-header flex">
        <div class="image">
          <img
            src="@/assets/images/hope-header.jpg"
            alt="HOPE Foundation logo"
          />
        </div>
        <hr v-if="hasDivider" class="hr">
        <div class="header-description">
          Our mission is to improve the lives of underserved people by supporting health education
          and medical care from the local to global levels
        </div>
        <!--Waves Container-->
        <div>
          <svg
              class="waves"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              viewBox="0 24 150 28"
              preserveAspectRatio="none"
              shape-rendering="auto"
          >
            <defs>
              <path
                  id="gentle-wave"
                  d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              />
            </defs>
            <g class="parallax">
              <use xlink:href="#gentle-wave" x="48" y="0" fill="rgba(255,255,255,0.7" />
              <use xlink:href="#gentle-wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
              <use xlink:href="#gentle-wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
              <use xlink:href="#gentle-wave" x="48" y="7" fill="#fff" />
            </g>
          </svg>
        </div>
        <!--Waves end-->
      </div>
    </div>
  </div>
</template>

<style>
.header {
  text-align: center;
  background: linear-gradient(#7119f4 0, #3f55fc 50%, #6eff1a);
  color: white;
}

.header .inner-header {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.header .inner-header img {
  width: 100%;
  max-width: 100%;
  height: auto;
  border-radius: 30px;
}

.header .header-description {
  font-size: 2rem;
  font-weight: 300;
  line-height: 1.5;
  margin: 0 auto;
  max-width: 70vw;
  padding: 0 0 2rem;
}

.inner-header {
  width: 100%;
}

.flex {
  /*Flexbox for containers*/
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.waves {
  position: relative;
  width: 100vw;
  height: 15vh;
  margin-bottom: -7px; /*Fix for safari gap*/
  min-height: 100px;
  max-height: 150px;
  bottom: 0;
}

/* Animation */

.parallax > use {
  animation: move-forever 25s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
}
.parallax > use:nth-child(1) {
  animation-delay: -2s;
  animation-duration: 7s;
}
.parallax > use:nth-child(2) {
  animation-delay: -3s;
  animation-duration: 10s;
}
.parallax > use:nth-child(3) {
  animation-delay: -4s;
  animation-duration: 13s;
}
.parallax > use:nth-child(4) {
  animation-delay: -5s;
  animation-duration: 20s;
}
@keyframes move-forever {
  0% {
    transform: translate3d(-90px, 0, 0);
  }
  100% {
    transform: translate3d(85px, 0, 0);
  }
}
/*Shrinking for mobile*/
@media (max-width: 768px) {
  .header .header-description {
    font-size: 1rem;
    max-width: 100%;
  }

  .waves {
    height: 40px;
    min-height: 40px;
  }
  .content {
    height: 30vh;
  }
  h1 {
    font-size: 24px;
  }
}

/* Desktop Styles */
@media (min-width: 768px) {
  .header .inner-header img {
    width: clamp(25vw, 100%, 100%);
  }
}
</style>
