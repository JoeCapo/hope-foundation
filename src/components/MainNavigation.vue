<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-xl p-0 m-0">
    <div class="container-fluid mx-3">
      <router-link to="/" class="navbar-brand">
        <img src="@/assets/images/logo-hope-white.png" alt="" width="100" />
      </router-link>
      <button
        class="navbar-toggler bg-white"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end p-4" id="navbarSupportedContent">
        <router-link to="/bored-of-trustees" class="nav-link mb-3 mb-md-0">Board of Trustees</router-link>
        <a class="nav-link mb-3 mb-md-0" href="#contact">Contact</a>
      </div>
    </div>
  </nav>
</template>

<style>

.navbar {
  background-color: #7119f4;
}

.navbar .nav-link {
  font-size: 20px;
  line-height: normal;
  color: white;
  margin-right: 2rem;
}
</style>
