<template>
  <div class="d-flex align-content-center justify-content-center mainBlock">
   <div class="d-flex window">
      <div class="homeItem">
       <img class="itemIcon" src="/images/idea.png">
        <div class="itemText">
          <h5>Witamy na stronie ezIoT</h5>
          <p>Dzięki tej stronie możesz po prostu stworzyć swoje własne urządzenie IoT, którego potrzebujesz, bądź zacząć przygodę z Internetem Rzeczy.</p>
          <p>Prezentowane i użyte technologie bazują na licencjach opensource. Celem tej strony jest samorozwój jej autorów oraz stworzenia innym wygodnego narzędzia do zagłębienia się w świat elektroniiki.</p>
        </div>
     </div>


      <div class="homeContents" v-bind:class="{contentIsVisible:isVisible}">
        <div class="homeItem">
            <img class="itemIcon" src="/images/chip.png">
            <div class="itemText">
              <h5>Wszystko zaczyna sie od mikrokontrolera!</h5>
              <p>Do utworzenia urządzenia sterowalnego za pośrednictwem panelu na naszej stronie potrzebujesz płytki z mikrokontrolerem oraz modułem łączności w standardzie WiFi. Możesz też dołączyć taki moduł do posiadanej płytki</p>
              <p>W proponowanych i zoptymalizowanych przez nas projektach użyto urządzeń zgodnych z Arduino IDE oraz modułu ESP8266.</p>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/signal.png">
            <div class="itemText">
              <h5>Urządzenie jest podłączone do lokalnej sieci WiFi!</h5>
              <p>Dzięki podłączeniu urządzenia do lokalnej sieci WiFi możliwa będzie nieustanna komunikacja ze zdalnym serwerem w celu wymiany danych</p>
              <p>Ważnym czynnikiem jest zasięg sieci bezprzewodowej w miejscu, gdzie urządzenie będzie pracować</p>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/cloud.png">
            <div class="itemText">
              <h5>Urządzenie Internetu Rzeczy - Internet of Things!</h5>
              <p>W ten sposób stworzysz własne urządzenie IoT, zdobędziesz wiedzę na temat funkcjonowania takich rozwiązań, bądź po prostu wykonasz spersonalizowane i funkcjonalne urządzenie, którego potrzebujesz</p>
              <p>IoT jest obecnie bardzo szybko rozwijającym się trendem w informatyce.</p>
            </div>
        </div>
          <div class="homeItem">
          <img class="itemIcon" src="/images/code.png">
            <div class="itemText">
              <h5>Nie bój się kodu, udostępniamy gotowe programy do umieszczenia na płytce zgodnej z Arduino IDE</h5>
              <p>Wstępne przygotowanie urządzenia od strony kodowej pozwoli Ci podpatrzeć i zrozumieć jak to działa.</p>
              <p>Jeśli masz pomysł na własne urządzenie, skontaktuj się z nami, zależy nam na samorozwoju.</p>
            </div>
        </div>
          <div class="homeItem">
          <img class="itemIcon" src="/images/internet.png">
            <div class="itemText">
              <h5>Steruj urządzeniem za pomocą panelu w aplikacji</h5>
              <p>Gotowe zoptymalizowane przez nas urządzenia posiadają również gotowe panele administracyjne dostępne z Twojego konta, na którym dodano urządzenie.</p>
              <p>Pozostaje tylko korzystać i cieszyć się z wygody jaką oferuje urządzenie sterowane bezprzewodowo. W ten łatwy sposób możesz wprowadzić trochę technologii do swojego domu, garażu lub nawet małego biznesu. Możesz też po prostu dobrze się bawić!</p>
            </div>
        </div>
        <div class="homeItem">
          <img class="itemIcon" src="/images/document.png">
            <div class="itemText">
              <h5>Wykorzystane ikony:</h5>
              Icons made by: <br>
              <div>Icons made by <a href="https://www.flaticon.com/authors/good-ware" title="Good Ware">Good Ware</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/free-icon/cpu_667012" title="Vitaly Gorbachev">Vitaly Gorbachev</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/ultimatearm" title="ultimatearm">ultimatearm</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
              <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
            <div>Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
    name: 'homeWindow',
    data: function() {
      return {
        isVisible:false,
      }
    },

  }
</script>

<style>
  .mainBlock{
     margin-bottom: 50px;
     margin-top:50px;
  }

  .window{
    background-color: aliceblue;
    margin-top:50px;
    padding:20px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    width: 80%;
    flex-direction: column;
  }

  .homeItem{
    min-width: 50%;
    margin-bottom: 90px;
    transition-duration: 500ms;
  }

  .homeItem:hover{
    min-width: 50%;
    margin-bottom: 80px;
    transform:translateX(10px);
  }


  .itemIcon{
    width:10%;
    float:left;
    margin-right: 20px;
  }
  .socialIcon{
    width:3%;
    float:left;
    margin-right: 5px;
  }
  .arrowIcon{
     width:20%;
     float: left;
     margin-right: 10px;
  }

  h5{
    margin:0;
  }
  .itemText{
    text-align: left;
  }

 .slideDownArrow{
   margin-right: auto;
   margin-left: auto;
   min-width: 200px;
   line-height: 40px;
   transition-duration: 100ms;
 }

 .slideDownArrow:hover{
   transform: scaleX(1.1);

 }

 .homeContents{
   height: 0;
   /* display: none; */
   transition-duration: 500ms;
   overflow: hidden;
 }
.contentIsVisible{
  height: auto;
  /* display: block; */
}


</style>
