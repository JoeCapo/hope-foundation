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
  background: linear-gradient(#fff 0%, #6eff1a 20%, #2e86fb 50%, #7119f4 100%);
  border-radius: 9999px;
  height: 100px;
  margin: 1rem auto;
  position: relative;
  width: 100px;
}
.main-sphere:before,
.main-sphere:after {
  border-radius: 50%;
  bottom: -10px;
  content: '';
  filter: blur(20px);
  height: 40px;
  position: absolute;
  z-index: -1;
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
  border-radius: 9999px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.5);
  height: 60px;
  filter: blur(15px);
  left: 20px;
  position: absolute;
  top: 15px;
  width: 60px;
}
</style>
