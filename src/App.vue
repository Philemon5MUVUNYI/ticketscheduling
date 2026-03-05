<script setup>
import Navbar from "./components/Navbar.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>

  <!-- Hide navbar on landing and login -->
  <Navbar v-if="route.path !== '/' && route.path !== '/login'" />

  <router-view />

</template>