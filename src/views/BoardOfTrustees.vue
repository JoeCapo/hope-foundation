<script setup>
import MainNavigation from '../components/MainNavigation.vue'
import HeaderMain from '../components/HeaderMain.vue'
import FooterMain from "@/components/FooterMain.vue";
</script>

<template>
  <MainNavigation />
  <main>
    <HeaderMain :has-divider="true" />
  </main>
  <FooterMain :has-divider="true"/>
</template>
