<script setup></script>

<template>
  <nav class="navbar navbar-expand-xl p-0">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <img src="@/assets/images/logo-hope.png" alt="" width="100" />
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
        <a class="nav-link" href="#our-beneficiaries">Our Beneficiaries</a>
        <a class="nav-link" href="#our-team">Our Team</a>
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
