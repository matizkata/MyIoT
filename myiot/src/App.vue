<template>
  <div id="app">
    <topBar></topBar>
    <div class="content">
      <router-view></router-view>

    </div>
    <ftr></ftr>
  </div>
</template>

<script>

import topBar from './components/topBar';
import ftr from './components/ftr';

export default {
  name: 'App',
  components: {
   topBar,
   ftr
  }
}
</script>

<style>
#app {/*style ktore byly w templatce pokazowej vue*/
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  position:relative;
}
body{
    background-image: url("/images/zdj2.jpg");
    background-attachment: fixed;
    background-size: 100% auto;
    margin:0;
}
html{
  max-height: 100%;
}
.content{
  min-height: calc(100vh - 60px);
}
/* .placehold{
  width: 100px;
  height:400px;
} */
</style>
