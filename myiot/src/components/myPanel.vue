<template>
  <div class="d-flex align-content-center justify-content-center mainBlock">
   <div class="d-flex window">
      <div class="homeItem">
       <img class="itemIcon" src="/images/team.png">
        <div class="itemText">
          <h5>Witaj {{ username }}! </h5>
          Poniżej zobaczysz swoje urządzenia!
        </div>
     </div>

      <div class="homeItem">
       <!-- <img class="itemIcon" src="/images/team.png"> -->
        <div class="itemText">
          <h5>Panel sterowania urządzeniem </h5>
          <h6>Przełączniki:</h6>
          <div class="panelsection">Funkcjonalnosc pod GPIO1: <button class="btn btn-secondary panelbutton" @click="gp1=!gp1;control()">GPIO1</button></div>
          <div class="panelsection">Funkcjonalnosc pod GPIO2: <button class="btn btn-secondary panelbutton" @click="gp2=!gp2;control()">GPIO2</button></div>
          <div class="panelsection">Funkcjonalnosc pod GPIO3: <button class="btn btn-secondary panelbutton" @click="gp3=!gp3;control()">GPIO3</button></div>
          <div class="panelsection">LCD String: <input type="text" v-model="lcdString"/></div>
          <div class="panelsection">Value1:{{ value1 }} </div>
          <div class="panelsection">Value2: {{ value2 }} </div>
          <h6>Stany:</h6>
          <div class="panelsection">GPIO1: {{ gpio1 }},</div>
          <div class="panelsection">GPIO2: {{ gpio2 }},</div>
          <div class="panelsection">GPIO3: {{ gpio2 }},</div>
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
        username: this.$store.state.user.email,
        value1: null,
        value2: null,
        lcdString: null,
        gpio1: 'OFF',
        gpio2: 'OFF',
        gpio3: 'OFF',
        gp1:false,
        gp2:false,
        gp3:false
      }
    },
    methods: {
      control() {
        if(this.gp1){
        this.gpio1 = 'ON'
       }
       else{
         this.gpio1 = 'OFF'
       }
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
.panelbutton{
  margin:10px;
}

.panelsection{
  margin:10px;
  display: inline-block;
}
</style>
