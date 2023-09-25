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
}
.objective-item .image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: linear-gradient(to bottom right, #7119f4, #6eff1a);
  box-shadow:
    0 0 10px rgba(0, 0, 0, 0.2),
    /* Inner shadow for depth */ 0 0 20px rgba(0, 0, 0, 0.3),
    /* Inner shadow for depth */ 0 0 30px rgba(0, 0, 0, 0.4); /* Inner shadow for depth */
  transform: translateZ(10px);
}

.objective-item .description {
  font-size: clamp(18px, 5vw, 20px);
  padding: 0 2rem;
}
</style>
