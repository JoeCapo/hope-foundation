<script setup>
defineProps(['sectionId', 'title', 'sectionDescription', 'btnName', 'showButton'])
</script>

<template>
  <section :id="sectionId">
    <div class="section-title">
      <h2>{{ title }}</h2>
      <p class="fs-3">{{ sectionDescription }}</p>
    </div>

    <slot name="section-content"></slot>

    <button name="section-button" type="button" class="btn btn-primary" v-if="showButton">
      {{ btnName }}
    </button>
  </section>
</template>

<style>
section {
  margin: 3rem 0;
}
</style>
