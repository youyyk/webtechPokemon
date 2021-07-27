<template>
  <div>
    Pokemon List
    <pokedex-create-form></pokedex-create-form>     
    <pokedex-table></pokedex-table>
  </div>
</template>

<script>
import PokedexTable from '@/components/PokedexTable'
import PokedexCreateForm from '@/components/PokedexCreateForm.vue'
export default {
    components: {
        PokedexTable,
        PokedexCreateForm 
    }
}
</script>
<style>

</style>