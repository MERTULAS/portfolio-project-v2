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

<style>
  #app {
    display: flex;
    position: relative;
    flex-direction: column;
  }

  .page {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>
