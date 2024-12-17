<template>
  <div>
    <div class="report">
      <div class="vessel_info">
        <div class="title">vessel archives</div>
        <div class="vessel_main_info">
          <img class="vessel_img" src="http://192.168.1.128:5244/p/local_files/cosco-vessels-pictures/9561332-419000160-1442917.jpg?sign=V5lDyqUaGImjEy2c9-pEMoFysNdXpijsPbqmp5AXiHQ=:0" alt="">
          <div class="main_info">
            <div>IMO:</div>
            <div>MMSI:</div>
            <div>Name:</div>
            <div>Callsign:</div>
          </div>
        </div>
        <!-- http://123.60.34.146:10100/local_files/cosco-vessels-pictures/9561332-419000160-1442917.jpg -->
      </div>

      <div class="berthing_info">
        <div class="title">vessel berthing</div>
      </div>

      <div class="mooring_info">
        <div class="title">vessel mooring</div>
      </div>

      <div class="sailing_info">
        <div class="title">vessel sailing</div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  export default{
    name: 'vessel_info'
  }
</script>

<style scoped>
.report {
  position: absolute;
  top: 0%;
  left: 20%;
  width: 60%;
  height: 100vh;
  background-color: aliceblue;
}

.title {
  position: relative;
  text-align: center;
  margin-top: 2%;
  font-size: 35px;
  font-weight: bold;
}

.vessel_main_info {
  height: 400px;
}

.vessel_img {
  width: 40%;
  height: 400px;
}
</style>