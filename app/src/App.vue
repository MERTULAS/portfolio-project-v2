<script setup>
import { RouterView } from 'vue-router'
import TopNavbar from './components/layouts/TopNavbar.vue';
import NavigationMenu from './components/layouts/NavigationMenu.vue';
</script>

<template>
  <!-- <NavigationMenu /> -->
  <TopNavbar />
  <RouterView />
</template>

<style scoped>
  #app {
    display: block;
    position: relative;
  }
</style>
