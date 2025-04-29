<template>
  <div class="card h-100 shadow-sm hover:scale-105 transition-transform bg-white">
    <div class="card-body">
      <h5 class="card-title text-dark">{{ title }}</h5>
      <slot/>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: String
})
</script>

<style scoped>
.card {
  transition: transform 0.2s;
}
.card:hover {
  transform: scale(1.05);
}
</style>
