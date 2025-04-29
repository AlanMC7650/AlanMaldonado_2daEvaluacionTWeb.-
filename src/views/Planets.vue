<template>
  <div class="p-6">
    <h1 class="text-2xl font-bold mb-4">Planets</h1>
    <div v-if="loading" class="text-center text-gray-500">Loading...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div v-for="planet in planets" :key="planet.name" class="bg-white p-4 rounded shadow">
        <h2 class="text-xl font-semibold mb-2">{{ planet.name }}</h2>
        <p><strong>Climate:</strong> {{ planet.climate }}</p>
        <p><strong>Terrain:</strong> {{ planet.terrain }}</p>
        <p><strong>Population:</strong> {{ planet.population }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const planets = ref([])
const loading = ref(true)

onMounted(async () => {
  try {
    const res = await fetch('https://swapi.py4e.com/api/p/ ')
    const data = await res.json()
    planets.value = data.results
  } catch (error) {
    console.error('Error loading planets:', error)
  } finally {
    loading.value = false
  }
})
</script>
