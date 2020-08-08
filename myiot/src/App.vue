<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <topBar></topBar>
    <router-view></router-view>
  </div>
</template>

<script>

import topBar from './components/topBar';

export default {
  name: 'App',
  components: {
   topBar
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #151b20;
  margin-top: 60px;
}
body{
  background-image: url("/images/cup-of-coffee-1280537_1920.jpg");
}
</style>
