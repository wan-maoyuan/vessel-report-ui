<template>
  <div v-if="isSearch" >
    <Header class="header"></Header>
    <Search class="search" @event="showVesselInfo"></Search>
  </div>

  <VesselInfo class="vessel-info" v-if="!isSearch" @event="showSearch"></VesselInfo>
</template>

<script lang="ts">
import Search from './components/search/search.vue';
import VesselInfo from './components/vessel/vessel_info.vue';
import Header from './components/header/header.vue';

import { ref } from 'vue'

export default {
  name: 'App',
  components: { Search, VesselInfo, Header },

  setup() {
    let isSearch = ref(true);
    // localStorage.setItem('mmsi', '352004507');

    function showSearch() {
      isSearch.value = true;
    }

    function showVesselInfo() {
      isSearch.value = false;
    }

    return { isSearch, showSearch, showVesselInfo }
  }
}
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 6vh;
  background-color: #EEEDED;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4);
  text-align: center;
  line-height: 80px;
  z-index: 1000;
}

.search {
  position: absolute;
  top: 6vh;
  left: 0%;
  height: 94vh;
  width: 100vw;
  background-color: #EEEDED;
  background-image: radial-gradient(circle, #aaadb3 2px, transparent 2px);
  background-size: 40px 40px;
}

.vessel-info {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100vw;
  height: 500vh;
  background-color: #EEEDED;
  background-image: radial-gradient(circle, #aaadb3 2px, transparent 2px);
  background-size: 40px 40px;
}
</style>
