<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})


</script>

<template>
  <h1>{{ msg }}</h1>
  
</template>

<style scoped>
a {
  color: #42b983;
}
</style>
