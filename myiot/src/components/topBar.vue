<template>
  <div class="topMenu">
    <div class="container top">
      <div class="row">
          <div class="col-3 mr-3"><span><router-link class="menuLink" to="/"><img class="logo" src="/images/logo_03.gif"></router-link></span></div>
          <div class="col menu"><span><router-link class="menuLink" to="/">HOME</router-link></span></div>
          <div class="col menu"><span><router-link class="menuLink" to="about">ABOUT</router-link></span></div>
          <div class="col menu"><span><router-link class="menuLink" to="/login">LOGIN</router-link></span></div>
          <div class="col mr-5 menu"><span><router-link class="menuLink" to="/registry">SIGN UP</router-link></span></div>
          <div class="col menu"><iframe src="http://free.timeanddate.com/clock/i7entjlf/n1460/fn16/tcf0f8ff/pct/ftb/th2" frameborder="0" width="86" height="18" allowTransparency="true"></iframe>




</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
name: 'topBar'
}
</script>

<style>
span{
  padding: 10px;
}

.topMenu{
  position:relative;
  height: 60px;
  background-color: #f0f8ff;
  padding-top: 0;
  overflow: visible;
  margin:0;
  z-index: 100;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
  scroll-padding-bottom: 130px;
  border-radius: 10px;
}

.logo{
  max-width: 85%;
  max-height: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);


}
.menu{
  line-height: 60px;
  text-align: center;
  white-space: nowrap;
}

.menuLink{
  /* font-family: 'Lemonada', cursive; */
  font-family: 'Pangolin', cursive;
  color: black;
  font-size: 15px;
}
.top{
  max-width: 80%;
}

 .menuLink:hover{
  text-decoration: none;
  color: black;
  font-size: 18px;
  transition: font-size 0.1s ;
}
</style>
