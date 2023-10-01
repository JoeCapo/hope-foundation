<script setup>
import ItemSphere from './ItemSphere.vue'
defineProps(['objectiveDescription', 'stamp-image'])
</script>

<template>
  <div class="objective-item d-flex flex-column flex-md-row align-items-center p-3 p-md-4 mx-md-5 my-2">
    <div class="flex-shrink-0">
      <slot name="stamp-image"></slot>
    </div>
    <div class="bg-grey">
    <div class="description flex-grow-1 ms-md-3 px-md-3">
      {{ objectiveDescription }}
    </div>
    </div>
  </div>
</template>

<style>
.objective-item {
  margin-bottom: 1rem;
  border-radius: 20px;
  background-color: #ededed;
}

.objective-item img {
  width: 90px;
  height: 90px;
}

.objective-item .description {
  font-size: clamp(16px, 5vw, 20px);
  height: 100%;
}
</style>
