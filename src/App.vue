<template>
  <component :is="currentView" />
</template>

<script setup lang="ts">
import Search from './components/search/search.vue';
import VesselInfo from './components/vessel/vesselInfo.vue';

import { ref, computed } from 'vue'

const routes = {
  '/': Search,
  '/vessel_info': VesselInfo
}
const currentPath = ref(window.location.hash);

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  if (currentPath.value.includes('vessel_info')) {
    return routes['/vessel_info'];
  }

  return routes['/'];
})
</script>

<style scoped>
</style>
