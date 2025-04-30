<template>
  <div class="container p-5">
    <h1 class="text-center text-primary mb-4">Personajes de Star Wars</h1>

    <input
      type="text"
      v-model="searchQuery"
      placeholder="Buscar personaje..."
      class="form-control mb-4"
    />
    <div v-if="loading" class="text-center text-muted">
      <div class="spinner-border" role="status">
        <span class="visually-hidden">Cargando...</span>
      </div>
    </div>
    <div v-else class="row">
      <Card
  v-for="(person, index) in filteredPeople"
  :key="index"
  :name="person.name"
  :height="person.height"
  :mass="person.mass"
  :hairColor="person.hair_color"
  :skinColor="person.skin_color"
  :eyeColor="person.eye_color"
  :birthYear="person.birth_year"
  :gender="person.gender"
  v-bind="person"
/>

    <!--<div v-for="(person, index) in filteredPeople" :key="index" class="col-md-4 mb-4">
        <div class="card h-100 shadow-sm">
          <div class="card-body">
            <h5 class="card-title text-dark">{{ person.name }}</h5>
            <p class="card-text"><strong>Altura:</strong> {{ person.height }} cm</p>
            <p class="card-text"><strong>Masa:</strong> {{ person.mass }} kg</p>
            <p class="card-text"><strong>Color de cabello:</strong> {{ person.hair_color }}</p>
            <p class="card-text"><strong>Color de piel:</strong> {{ person.skin_color }}</p>
            <p class="card-text"><strong>Color de ojos:</strong> {{ person.eye_color }}</p>
            <p class="card-text"><strong>Año de nacimiento:</strong> {{ person.birth_year }}</p>
            <p class="card-text"><strong>Género:</strong> {{ person.gender }}</p>
          </div>


        </div> 
      </div>-->

      <!-- Si no hay resultados después de filtrar -->
      <div v-if="!loading && filteredPeople.length === 0" class="text-center text-danger">
        No se encontró ningún personaje.
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { getPeople } from '../services/swapiService'
import Card from '../components/Card.vue'
const people = ref([])
const loading = ref(true)
const searchQuery = ref('')

onMounted(async () => {
  try {
    const response = await getPeople()
    people.value = response.data.results
  } catch (error) {
    console.error('Error al cargar personajes:', error)
  } finally {
    loading.value = false
  }
})
const filteredPeople = computed(() => {
  return people.value.filter(person =>
    person.name.toLowerCase().includes(searchQuery.value.toLowerCase())
  )
})
</script>


<style scoped>
.container {
  background-color: #f8f9fa;
}
</style>
