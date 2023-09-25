<script setup>
defineProps(['sectionId', 'title', 'sectionDescription', 'btnName', 'showButton'])
</script>

<template>
  <div id="{{ sectionId }}">
    <div class="section-title">
      <h2>{{ title }}</h2>
      <p>{{ sectionDescription }}</p>
    </div>

    <slot name="section-content"></slot>

    <button name="section-button" type="button" class="btn btn-primary" v-if="showButton">
      {{ btnName }}
    </button>
  </div>
</template>

<style></style>
