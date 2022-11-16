<template>
  <Button v-bind="$attrs">
    <slot></slot>
  </Button>
</template>

<script setup lang="ts">
import { Button } from 'vant'
</script>

<style scoped></style>
