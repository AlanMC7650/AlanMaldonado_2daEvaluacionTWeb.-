<template>
  <div class="container text-center p-5">
    <div class="jumbotron bg-light rounded shadow-sm">
      <h1 class="display-4 text-primary">Bienvenido al portal de StarWars</h1>
      <p class="lead text-muted">Descubre cada detalle de los personajes de StarWars</p>
      <hr class="my-4">
      <p>Sumérgete en el universo de Star Wars y descubre todo lo que tiene para ofrecer</p>
      <a class="btn btn-primary btn-lg" href="/People" role="button">Comenzar a explorar</a>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f8f9fa; /* Color de fondo suave */
}

.jumbotron {
  background-color: #ffffff; /* Fondo blanco para el jumbotron */
  border-radius: 0.5rem; /* Bordes redondeados */
}

.btn-primary {
  transition: background-color 0.3s, transform 0.2s; /* Suaviza la transición del botón */
}

.btn-primary:hover {
  background-color: #0056b3; /* Color más oscuro al pasar el ratón */
  transform: scale(1.05); /* Escala al pasar el ratón */
}
</style>