<script setup>
defineProps(['objectiveDescription'])
</script>

<template>
  <div class="d-flex">
    <div class="flex-shrink-0">
      <img src="..." alt="..." />
    </div>
    <div class="flex-grow-1 ms-3">
      {{ objectiveDescription }}
    </div>
  </div>
</template>

<style></style>
