<template>
  <div>
    <div class="describe">
      <h1>Ship performance analysis</h1>
      <h1>Let you have a better understanding of ships</h1>
    </div>

    <div class="search-container">
      <input type="text" class="search-input" v-model="searchKey" placeholder="Enter vessel name、imo or mmsi">
      <div class="search-icon">
        <img src="/search-icon.svg" alt="Search" style="width: 30px; height: 30px;">
      </div>
    </div>
    <div class="search-results" v-if="searchResultShow">
      <ul>
        <li v-for="vessel in vesselList">
          <span v-bind:class="vessel.flag_country" style="font-size:24px"></span>
          {{ vessel.name_cn }}
          ({{ vessel.name_en }})
          MMSI: {{ vessel.mmsi }}
        </li>
      </ul>
    </div>

    <div class="message-info">archives / berthing / mooring / sailing / performance</div>

    <div class="usage-info">
      <span class="total-report">&nbsp;&nbsp;Total of 1024 reports completed&nbsp;&nbsp;</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="today-report">&nbsp;&nbsp;Today's 100 reports&nbsp;&nbsp;</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { queryVesselFuzzy, VesselFuzzy } from '../../api/vesselFuzzy/vesselFuzzy.ts'

let searchKey = ref('');
let searchResultShow = ref(false);
const vesselList = ref<VesselFuzzy[]>();

watch(searchKey, async (newKey) => {
  if (newKey.length >= 2) {
    const result = await queryVesselFuzzy(newKey);

    for (let i = 0; i < result.data.length; i++) {
      result.data[i].flag_country = "flag-icon flag-icon-" + result.data[i].flag_country.toLowerCase();
    }

    vesselList.value = result.data;
    searchResultShow.value = true;
  } else {
    searchResultShow.value = false;
    vesselList.value = [];
  }
})

</script>

<style scoped>
.describe {
  position: relative;
  text-align: center;
  top: 0vh;
  height: 180px;
  font-size: 25px;
  font-weight: bold;
}

.search-container {
  position: relative;
  top: 2vh;
  left: 30%;
  width: 40%;
  height: 5vh;
  display: flex;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.search-input {
  flex: 1;
  height: 5vh;
  border: none;
  outline: none;
  font-size: 22px;
  padding-left: 10px;
}

.search-icon {
  width: 4vh;
  height: 4vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.search-results {
  position: absolute;
  top: calc(11vh + 180px);
  left: 30%;
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #FFF;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
  z-index: 1;
}

.search-results ul {
  width: 100%;
  list-style-type: none;
  padding: 0;
}

.search-results li {
  padding: 8px;
}

.search-results li:hover {
  background-color: rgb(6, 116, 243);
  cursor: pointer;
}

.message-info {
  position: relative;
  text-align: center;
  top: 9%;
  font-size: 18px;
  font-weight: bold;
}

.usage-info {
  position: relative;
  text-align: center;
  top: 12%;
  font-size: 18px;
}

.total-report {
  background-color: #FFAF45;
  border-radius: 10px;
}

.today-report {
  background-color: #FFAF45;
  border-radius: 10px;
}
</style>