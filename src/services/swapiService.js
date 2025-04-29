import axios from 'axios'

const API_BASE_URL = 'https://swapi.py4e.com/api/'

export const getPeople = () => {
  return axios.get(`${API_BASE_URL}people/`)
}

export const getPlanets = () => {
  return axios.get(`${API_BASE_URL}planets/`)
}
