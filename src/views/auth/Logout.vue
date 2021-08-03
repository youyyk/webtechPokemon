<template>
  <div>
      <h1>LOGOUT</h1>
  </div>
</template>

<script>
import AuthService from "@/services/AuthService"
export default {
    created() {
        AuthService.logout()
        this.$router.push('/pokedex')
    }
}
</script>

<style>

</style>