<template>
  <Header class="header"></Header>
  <Search class="search" v-if="isSearch"></Search> 
  <br>
  <VesselInfo clase="vessel-info" v-if="!isSearch"></VesselInfo>
  <Footer class="footer"></Footer>
</template>

<script lang="ts">
  import Search from './components/search/search.vue';
  import VesselInfo from './components/vessel/vessel_info.vue';
  import Header from './components/header/header.vue';
  import Footer from './components/footer/footer.vue';

  import {ref} from 'vue'

  export default {
    name: 'App',
    components: {Search, VesselInfo, Header, Footer},

    setup() {
      let isSearch = ref(true);

      return {isSearch}
    }
  }
</script>

<style scoped>
.header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  background-color: #EEEDED;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.4); /* 下方阴影效果 */
  text-align: center;
  line-height: 80px;
  z-index: 1000;
}

.search {
  position: absolute;
  top: 80px;
  left: 0%;
  height: calc(100vh - 80px);
  width: 100vw;
  background-color: #EEEDED;
  background-image: radial-gradient(circle, #aaadb3 2px, transparent 2px);
  background-size: 40px 40px; /* 控制点阵的密集程度 */
}

.vessel-info {
  padding-top: 80px;
  height: calc(100vh - 80px);
}

</style>
