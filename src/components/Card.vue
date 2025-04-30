<!-- src/components/Card.vue -->
<template>
  <div class="card h-100 shadow-sm">
    <div class="card-body">
      <h5 class="card-title text-dark">{{ name }}</h5>
      <p class="card-text"><strong>Altura:</strong> {{ height }} cm</p>
      <p class="card-text"><strong>Masa:</strong> {{ mass }} kg</p>
      <p class="card-text"><strong>Color de cabello:</strong> {{ hair_color }}</p>
      <p class="card-text"><strong>Color de piel:</strong> {{ skin_color }}</p>
      <p class="card-text"><strong>Color de ojos:</strong> {{ eye_color }}</p>
      <p class="card-text"><strong>Año de nacimiento:</strong> {{ birth_year }}</p>
      <p class="card-text"><strong>Género:</strong> {{ gender }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  name: String,
  height: String,
  mass: String,
  hair_color: String,
  skin_color: String,
  eye_color: String,
  birth_year: String,
  gender: String
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
