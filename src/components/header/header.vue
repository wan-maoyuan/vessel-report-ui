<template>
  <div class="header-container">
    <div class="logo">
      <img src="../../../public/navgreen_logo.png" alt="Logo">
    </div>
    <div class="share-btn">
      <button>分享到微信</button>
    </div>
  </div>
</template>

<script lang="ts">
  export default{
    name: 'header'
  }
</script>

<style scoped>
.header-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  width: 40%;
  padding: 10px;
  box-sizing: border-box;
}

.logo img {
  height: 25px;
  margin-right: 10px;
}

.share-btn {
  width: 40%;
  padding: 10px;
  box-sizing: border-box;
}

.share-btn button {
  background-color: red;
  color: white;
  font-size: 18px;
  padding: 5px 10px;
  border: none;
  border-radius: 30px;
}
</style>