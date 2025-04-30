<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <div class="container">
      <router-link class="navbar-brand" to="/">Star Wars Portal</router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/people">People</router-link>
          </li>
          <!--<li class="nav-item">
            <router-link class="nav-link" to="/planets">Planets</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/starships">Starships</router-link>
          </li>-->
        </ul>
      </div>
    </div>
  </nav>
</template>
<style scoped>
.navbar {
  transition: background-color 0.3s; /* Suaviza la transición del color de fondo */
}

.navbar:hover {
  background-color: #0056b3; /* Color más oscuro al pasar el ratón */
}
</style>