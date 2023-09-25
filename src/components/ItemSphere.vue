<script></script>

<template>
  <div class="sphere">
    <div class="main-sphere">
      <div class="inner-sphere"></div>
    </div>
  </div>
</template>

<style>
.main-sphere {
  background: radial-gradient(#7119f4 20%, #2e86fb 50%, #6eff1a 100%);
  border-radius: 9999px;
  height: 100px;
  margin-bottom: 1rem;
  position: relative;
  width: 100px;
  z-index: 0;
}
.main-sphere:before,
.main-sphere:after {
  border-radius: 50%;
  bottom: -10px;
  content: '';
  filter: blur(20px);
  height: 40px;
  position: absolute;
  z-index: 1;
}
.main-sphere:before {
  background: rgba(0, 0, 0, 0.4);
  left: 7.5%;
  width: 85%;
}
.main-sphere:after {
  background: rgba(0, 0, 0, 0.7);
  left: 20%;
  width: 60%;
}

.inner-sphere {
  background: linear-gradient(#fff 0%, #2e86fb 60%, #7119f4 100%);
  border-radius: 50%;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  height: 50px;
  filter: blur(15px);
  left: 15px;
  position: absolute;
  top: 5px;
  width: 50px;
}
</style>
