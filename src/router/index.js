import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import  NumberList from '@/views/NumberList'
import  PokemonList from '@/views/PokemonList'
import Pokedex from '@/views/pokedex/Index'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  {
    path: '/numbers',
    name: "NumberList",
    component: NumberList
  },
  {
    path: '/pokemons',
    name: "PokemonList",
    component: PokemonList
  },
  {
    path: '/pokedex',
    name: "Pokedex",
    component: Pokedex
  },
  {
    path: '/pokedex/create',
    name: 'PokedexCreate',
    component: () => import('../views/pokedex/Create')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/auth/Login')
  },
  {
    path: '/logout',
    name: 'Logout',
    component: () => import('../views/auth/Logout')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
