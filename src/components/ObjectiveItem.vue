<script setup>
import ItemSphere from './ItemSphere.vue'
defineProps(['objectiveDescription'])
</script>

<template>
  <div class="objective-item d-flex align-items-center">
    <div class="flex-shrink-0">
      <ItemSphere />
    </div>
    <div class="description flex-grow-1 ms-3">
      {{ objectiveDescription }}
    </div>
  </div>
</template>

<style>
.objective-item {
  margin-bottom: 1rem;
  padding: 0 2rem;
  background-color: #e0e0e0;
  border-radius: 20px;
}

.objective-item .description {
  font-size: clamp(18px, 5vw, 20px);
  padding: 0 2rem;
}
</style>
