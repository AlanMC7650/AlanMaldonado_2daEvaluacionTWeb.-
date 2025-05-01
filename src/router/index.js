import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import People from '../views/People.vue'
/*import Planets from '../views/Planets.vue'
import Starships from '../views/Starships.vue'*/
//se esperaba hacer una aplicacion que consuma people, planets y starship
//pero se opto por solo consumir "People" de SWAPI
const routes = [
  { path: '/', component: Home },
  { path: '/people', component: People },
  /*{ path: '/planets', component: Planets },
  { path: '/starships', component: Starships },*/
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
