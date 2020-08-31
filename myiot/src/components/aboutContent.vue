<template>
  <div class="d-flex align-content-center justify-content-center mainBlock">
   <div class="d-flex window">
      <div class="homeItem">
       <img class="itemIcon" src="/images/team.png">
        <div class="itemText">
          <h5>Kim jesteśmy?</h5>
          <p>Jesteśmy studentami 3 roku informatyki na Politechnice Rzeszowskiej. Ucząc się postanowiliśmy stworzyć projekt łączący różne dziedziny informatyczne</p>
          <p>Chcemy rozwijać nasze umiejętności. Jesteśmy  otwarci na pomysły i projekty urządzeń które możnaby dodać do obsługi poprzez stronę  .</p>
        </div>
     </div>


      <div class="homeContents" v-bind:class="{contentIsVisible:isVisible}">
        <div class="homeItem">
            <img class="itemIcon" src="/images/usb.png">
            <div class="itemText">
              <h5>Technologie</h5>
              <p>Projekt utworzono z wykorzystaniem Vue.js oraz środowiska node.js.</p>
              <p>Obecnie serwis jest w fazie budowy.</p>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/phone.png">
            <div class="itemText">
              <h5>Kontakt z nami </h5>
              <p>Skontaktować z nami możecie się poprzez nasze konta na Facebooku:</p>
              <a target="blank" href="https://www.facebook.com/tomek.grzebieniak.3">
                     Tomasz,
              </a>
              <a target="blank" href="https://www.facebook.com/mateusz.kata.9">
                     Mateusz,
              </a>
              <a target="blank" href="https://www.facebook.com/profile.php?id=100011826368288">
                     Łukasz
              </a>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/document.png">
            <div class="itemText">
              <h5>Wykorzystane ikony:</h5>
              Icons made by: <br>
              <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a><br>
              <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a><br>
              <a href="https://www.flaticon.com/authors/becris" title="Becris">Becris</a> from <a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com</a>
            </div>
        </div>

      </div>
      <div class="slideDownArrow" v-on:click="isVisible=!isVisible" v-if="!isVisible">
        <img class="arrowIcon" src="/images/down.png">
        <div class="itemText"><p>Zabierz mnie dalej!</p></div>
      </div>
      <div class="slideDownArrow" v-on:click="isVisible=!isVisible" v-else>
        <img class="arrowIcon" src="/images/up.png">
        <div class="itemText"><p>Zwiń</p></div>
      </div>


   </div>
 </div>
</template>

<script>
  export default {
    name: 'aboutWindow',
    data: function() {
      return {
        isVisible:false,
      }
    },

  }
</script>
<style>
</style>
