<template>
<div class="stopka">
   <p id="footerText"> Copyright &copy; 2020, Łukasz K. Tomasz G, Mateusz K.</p>
</div>
</template>



<script>
export default {
name: 'ftr'
}
</script>


<style>


.stopka{
  height: 50px;
  width: 100%;
  position: absolute;
  bottom: 0;
  z-index: 80;
  background-color:rgb(44, 53, 61);
  text-align:center;

  }

  #footerText{
    padding-top: 10px;
    color: white;
  }
</style>
