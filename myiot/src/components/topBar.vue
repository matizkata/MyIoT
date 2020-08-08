<template>
  <div>
  <span><router-link to="/">HOME</router-link></span>
   <span><router-link to="about">ABOUT</router-link></span>
   <span><router-link to="/login">LOGIN</router-link></span>
   <span><router-link to="/registry">SIGN UP</router-link></span>
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
</style>
