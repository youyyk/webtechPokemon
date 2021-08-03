<template>
  <div>
    <h1>Pokemon List</h1>
    
    <router-link to="/pokedex/create">Add New Pokemon</router-link>
    <pokedex-table></pokedex-table>
  </div>
</template>

<script>
import PokedexTable from '@/components/PokedexTable'
export default {
    components: {
        PokedexTable,
    }
}
</script>
<style>

</style>