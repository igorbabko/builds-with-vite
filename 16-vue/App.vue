<script setup>
import { ref } from 'vue'

const counter = ref(0)
</script>

<template>
  <h1>App component</h1>
  <button @click="counter++">Count: {{ counter }}</button>
</template>

<style scoped>
h1 {
  color: indigo;
}
</style>
