<script setup>
import { ref } from 'vue'

const count = ref(0)
</script>

<template>
  <h1>Counter</h1>
  <button @click="count++">Count: {{ count }}</button>
</template>
