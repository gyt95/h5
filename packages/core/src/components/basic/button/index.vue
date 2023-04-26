<template>
  <Button v-bind="$attrs">
    <slot></slot>
  </Button>
</template>

<script lang="ts" setup>
import { Button } from 'vant'
</script>

<style scoped></style>
