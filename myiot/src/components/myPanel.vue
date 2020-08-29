<template>
  <div class="d-flex align-content-center justify-content-center mainBlock">
   <div class="d-flex window">
      <div class="homeItem">
       <img class="itemIcon" src="/images/team.png">
        <div class="itemText">
          <h5>Witaj {{ username }}! </h5>

        </div>
     </div>
   </div>
 </div>
</template>

<script>
  export default {
    name: 'myPanel',
    data() {
      return {
        username: this.$store.state.user.email
      }
    }

}


  // var username = this.$store.state.user.email
</script>
<style>
.contentIsVisible2{
  height: 550px;
  /* display: block; */
}
</style>
