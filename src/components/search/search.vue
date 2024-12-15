<template>
  <div>
    <div class="describe">
      <h1>船舶性能分析</h1>
      <h1>让你对船舶更了解</h1>
    </div>
  
    <div class="search-container">
      <input type="text" class="search-input" placeholder="请输入船舶名称、imo号或mmsi">
      <div class="search-icon">
          <img src="../../../public/search-icon.svg" alt="Search" style="width: 30px; height: 30px;">
      </div>
    </div>

    <div class="message-info">
      船舶档案信息 / 船舶锚泊信息 / 船舶靠泊信息 / 船舶航行信息 / 船舶性能信息
    </div>
    
    <div class="usage-info">
      <span class="total-report">&nbsp;&nbsp;共完成 1024 条分析报告&nbsp;&nbsp;</span>
      &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <span class="today-report">&nbsp;&nbsp;今日新增 1024 条分析报告&nbsp;&nbsp;</span>
    </div>
  
    <div class="sample-list">
  
    </div>
  </div>
</template>

<script setup lang="ts">

</script>

<style scoped>
.describe{
  position: relative;
  text-align: center;
  top: 9%;
  font-size: 25px;
  font-weight: bold;
}

.search-container {
  position: relative;
  top: 10%;
  left: 30%;
  width: 40%;
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 10px;
  padding: 0 10px;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.2);
}

.search-input {
  flex: 1;
  height: 60px;
  border: none;
  outline: none;
  font-size: 22px;
  padding-left: 10px;
}

.search-icon {
  width: 45px;
  height: 45px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  cursor: pointer;
}

.message-info{
  position: relative;
  text-align: center;
  top: 11%;
  font-size: 18px;
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