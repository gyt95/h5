<script setup lang="ts">
import { onMounted } from 'vue'
import { userInfoUrl } from './api'
import WebAppButton from '@/components/Button.vue'

onMounted(async () => {
  await userInfoUrl()
})
</script>

<template>
  <span>webapp2</span>
  <WebAppButton></WebAppButton>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
