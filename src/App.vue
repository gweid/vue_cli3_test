<template>
  <div id="app">
    <div>
      <router-link to="/home">home</router-link>
      <router-link :to="'/mine/'+'123'">   |  mine</router-link>
      <router-link to="/news">   |  news</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
}
</style>
