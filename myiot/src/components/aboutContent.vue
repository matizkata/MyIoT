<template>
  <div class="d-flex align-content-center justify-content-center mainBlock">
   <div class="d-flex window">
      <div class="homeItem">
       <img class="itemIcon" src="/images/team.png">
        <div class="itemText">
          <h5>Kim jesteśmy?</h5>
          <p>Jesteśmy grupą 3 ambitnych studentów 3 roku z Politechniki Rzeszowskiej. Strona służy nam do sprawdzenia się oraz nauki nowych technologii.</p>
          <p>Chcemy rozwijać nasze umiejętności.Jesteśmy  otwarci na pomysły i projekty urządzeń które możnaby dodać do obsługi poprzez stronę  .</p>
        </div>
     </div>


      <div class="homeContents" v-bind:class="{contentIsVisible2:isVisible}">
        <div class="homeItem">
            <img class="itemIcon" src="/images/usb.png">
            <div class="itemText">
              <h5>Oprogramowanie wykorzystywane na stronie</h5>
              <p>Strona jest tworzona na bieżąco. Uczymy się  nowych technologii i wykorzystujemy zdobytą wiedzę w celu usprawnienia działania naszej strony.</p>
              <p>Podstawą działania strony jest framework do JavaScriptu o nazwie Vue.Dodatkowo wykorzystujemy  HTML 5 , CSS 3 , Javascript oraz biblioteki Bootstrap.</p>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/phone.png">
            <div class="itemText">
              <h5>Kontakt z nami </h5>
              <p>Skontaktować z nami możecie się poprzez nasze konta na Facebooku:</p>
              <a href="https://www.facebook.com/tomek.grzebieniak.3">
                     Tomasz,
              </a>
              <a href="https://www.facebook.com/mateusz.kata.9">
                     Mateusz, 
              </a>
              <a href="https://www.facebook.com/profile.php?id=100011826368288">
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
.contentIsVisible2{
  height: 550px;
  /* display: block; */
}
</style>