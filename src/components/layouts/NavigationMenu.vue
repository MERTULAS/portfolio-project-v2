<template>
  <nav>
    <ul>
      <li v-for="menuItem in menu" :key="menuItem.title">
        <RouterLink :to="menuItem.to">{{ menuItem.title }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

const menu = [
  {
    title: 'Home',
    icon: null,
    to: '/'
  },
  {
    title: 'about',
    icon: null,
    to: '/about'
  },
]

</script>

<style scoped>

</style>
