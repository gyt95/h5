<script setup lang="ts">
import { checkPhoneNumber } from '@h5/core'
import { defineAsyncComponent, onMounted } from 'vue'
import { userInfoUrl } from './api'
const RemoteButton = defineAsyncComponent(() => import('@webapp2/Button'))
const RemoteFooter = defineAsyncComponent(() => import('@webapp2/Footer'))

console.log('检查 10086 是否为手机号：', checkPhoneNumber('10086')) // false
console.log('检查 19866004816 是否为手机号：', checkPhoneNumber('19866004816')) // true

onMounted(async () => {
  await userInfoUrl()
})
</script>

<template>
  <p class="title">webapp1</p>
  <RemoteButton />
  <RemoteFooter />
</template>

<style lang="less" scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.title {
  font-size: 16px;
  font-weight: bold;
}
</style>
