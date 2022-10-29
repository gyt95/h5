<script setup lang="ts">
import { defineAsyncComponent } from 'vue'
const RemoteButton = defineAsyncComponent(() => import('@webapp2/Button'))
const RemoteFooter = defineAsyncComponent(() => import('@webapp2/Footer'))
</script>

<template>
  webapp1
  <RemoteButton />
  <RemoteFooter />
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
