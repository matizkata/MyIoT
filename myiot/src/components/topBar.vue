<template>
  <nav class="navbar navbar-expand-lg navbar-light pasek">
    <div class="navbar-brand ml-4">
      <router-link class="menuLink" to="/">
        <span class="titleLogo">ezIoT</span>
      </router-link>
    </div>
    <div class="navbar-brand">
      <div class="menu"><iframe src="http://free.timeanddate.com/clock/i7entjlf/n1460/fn16/tcf0f8ff/pct/ftb/th2" frameborder="0" width="86" height="18" allowTransparency="true"></iframe></div>
    </div>
    <button class="navbar-toggler" data-toggle="collapse" data-target="#navbarMenu">
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarMenu">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item"><router-link class="nav-link menuLink" to="/">HOME</router-link></li>
        <li class="nav-item"><router-link class="nav-link menuLink" to="about">ABOUT</router-link></li>
        <!-- <li class="nav-item" v-if="(!$store.state.isUserLoggedIn)"><router-link class="nav-link menuLink" to="/login">LOGIN</router-link></li> -->
        <li class="nav-item"><router-link class="nav-link menuLink" to="/login">LOGIN</router-link></li>
        <li class="nav-item"><router-link class="nav-link menuLink" to="/registry">SIGN UP</router-link></li>
        <!-- <li class="nav-item" v-if="(!$store.state.isUserLoggedIn)"><router-link class="nav-link menuLink" to="/registry">SIGN UP</router-link></li> -->
        <li class="nav-item" v-if="($store.state.isUserLoggedIn)"><router-link class="nav-link menuLink" to="/">MY PANNEL</router-link></li>
        <li class="nav-item" v-if="($store.state.isUserLoggedIn)" @click="logout"><router-link class="nav-link menuLink" to="/">LOG OUT</router-link></li>

      </ul>
    </div>

  </nav>
</template>

<script>
export default {
name: 'topBar',
methods: {
  logout(){
    this.$store.dispatch('setToken', null)
    this.$store.dispatch('setUser', null)
  }
}
}
</script>

<style>
span{
  padding: 10px;
}

/* .logo{//nie usuwac, moze sie przydac jakbysmy jednak chcieli logo
  max-width: 70%;
  max-height: 150px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .5);
} */

/* SELEKTOR CSS MENU JEST POTRZEBNY ZE WZGLEDU NA ZEGAR NA PASKU, JAK SIE TO USUNIE TO STOPKA PRZY LOGOWANIU SIE WYSYPUJE BO NIE ZGADZA SIE WYSOKOSC CONTENT - PRZEZ ATRYBUT LINE-HEIGHT */
/* MOZNA USUNAC SELEKTOR CSS .MENU JESLI SIE USUNIE ZEGAR Z MENU */
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

 .menuLink:hover{
  text-decoration: none;
  color: black;
  font-size: 18px;
  transition: font-size 0.1s ;
}
.pasek{
  background-color: aliceblue;
  border-radius: 10px;
  padding:0;
}
li{
  margin-left: 15px;
}
.titleLogo{
  font-family: 'Lemonada', cursive;
  font-size: 30px;
}

button{
  margin-right: 20px;
}

</style>
