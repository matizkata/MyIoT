<template>
    <div class="d-flex align-content-center justify-content-center main">
        <div class="Homes">
           <div class="pages">
               <h4>Technologie</h4> 
               <button class="hamburger" v-on:click="Menu()">
                   <span class="hamburger_box">
                       <span class="hamburger_inner"></span>
                   </span>  
               </button>
           </div>
           <div class="pages" >
               <h4>Lorem ipsum1</h4>
               <button class="hamburger2" v-on:click="Menu2() ">
                   <span class="hamburger_box">
                       <span class="hamburger_inner"></span>
                   </span>  
               </button>
           </div>
           <div class="pages">
               <h4>Lorem ipsum 2</h4>
               <button class="hamburger3" v-on:click="Menu3()">
                   <span class="hamburger_box">
                       <span class="hamburger_inner"></span>
                   </span>  
               </button>
           </div>
           <div class="pages" >
               <h4>Lorem ipsum 3S</h4>
               <button class="hamburger4" v-on:click="Menu4()">
                   <span class="hamburger_box">
                       <span class="hamburger_inner"></span>
                   </span>  
               </button>
           </div>
           <div class="info">
               <h1>Lorem ipsum1</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, justo vel dignissim ultrices, est diam egestas lectus, vel malesuada ex turpis sed libero. Proin vel hendrerit quam. In vitae libero urna. Pellentesque varius, tortor a posuere luctus, odio erat volutpat risus, porttitor tempus elit ligula id orci. Etiam semper molestie sodales. Ut efficitur quam quis nunc ultricies, vel imperdiet arcu rutrum. Cras nec mi non nulla porttitor elementum.

Mauris posuere enim odio, quis aliquet ante accumsan eu. Donec id mattis sem, sed dignissim lectus. Morbi quis nibh eget enim tempus iaculis. Curabitur efficitur viverra semper. Nulla quis elementum tellus. In hac habitasse platea dictumst. Curabitur ex tellus, malesuada id porta nec, pellentesque id lorem. Sed id pretium massa, vel ultrices sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a sapien ac ligula tempus semper eu vitae dui.

Suspendisse imperdiet sed enim quis pharetra. Sed vitae congue lectus, in luctus nisl. Fusce luctus ac nisi in fringilla. Duis sit amet odio non nulla laoreet maximus eu a magna. Sed blandit mattis ex eget ullamcorper. Maecenas non tincidunt metus. Ut id libero vestibulum lacus molestie tincidunt quis vel nibh. Nam gravida in ante ut fringilla. Proin venenatis faucibus lectus, interdum auctor dolor. Curabitur ultrices nulla vitae suscipit facilisis.</p>
           </div>
             <div class="info2">
               <h1>Lorem ipsum2</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, justo vel dignissim ultrices, est diam egestas lectus, vel malesuada ex turpis sed libero. Proin vel hendrerit quam. In vitae libero urna. Pellentesque varius, tortor a posuere luctus, odio erat volutpat risus, porttitor tempus elit ligula id orci. Etiam semper molestie sodales. Ut efficitur quam quis nunc ultricies, vel imperdiet arcu rutrum. Cras nec mi non nulla porttitor elementum.

Mauris posuere enim odio, quis aliquet ante accumsan eu. Donec id mattis sem, sed dignissim lectus. Morbi quis nibh eget enim tempus iaculis. Curabitur efficitur viverra semper. Nulla quis elementum tellus. In hac habitasse platea dictumst. Curabitur ex tellus, malesuada id porta nec, pellentesque id lorem. Sed id pretium massa, vel ultrices sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a sapien ac ligula tempus semper eu vitae dui.

Suspendisse imperdiet sed enim quis pharetra. Sed vitae congue lectus, in luctus nisl. Fusce luctus ac nisi in fringilla. Duis sit amet odio non nulla laoreet maximus eu a magna. Sed blandit mattis ex eget ullamcorper. Maecenas non tincidunt metus. Ut id libero vestibulum lacus molestie tincidunt quis vel nibh. Nam gravida in ante ut fringilla. Proin venenatis faucibus lectus, interdum auctor dolor. Curabitur ultrices nulla vitae suscipit facilisis.</p>
           </div>
             <div class="info3">
               <h1>Lorem ipsum3</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, justo vel dignissim ultrices, est diam egestas lectus, vel malesuada ex turpis sed libero. Proin vel hendrerit quam. In vitae libero urna. Pellentesque varius, tortor a posuere luctus, odio erat volutpat risus, porttitor tempus elit ligula id orci. Etiam semper molestie sodales. Ut efficitur quam quis nunc ultricies, vel imperdiet arcu rutrum. Cras nec mi non nulla porttitor elementum.

Mauris posuere enim odio, quis aliquet ante accumsan eu. Donec id mattis sem, sed dignissim lectus. Morbi quis nibh eget enim tempus iaculis. Curabitur efficitur viverra semper. Nulla quis elementum tellus. In hac habitasse platea dictumst. Curabitur ex tellus, malesuada id porta nec, pellentesque id lorem. Sed id pretium massa, vel ultrices sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a sapien ac ligula tempus semper eu vitae dui.

Suspendisse imperdiet sed enim quis pharetra. Sed vitae congue lectus, in luctus nisl. Fusce luctus ac nisi in fringilla. Duis sit amet odio non nulla laoreet maximus eu a magna. Sed blandit mattis ex eget ullamcorper. Maecenas non tincidunt metus. Ut id libero vestibulum lacus molestie tincidunt quis vel nibh. Nam gravida in ante ut fringilla. Proin venenatis faucibus lectus, interdum auctor dolor. Curabitur ultrices nulla vitae suscipit facilisis.</p>
           </div>
             <div class="info4">
               <h1>Lorem ipsum4</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed aliquam, justo vel dignissim ultrices, est diam egestas lectus, vel malesuada ex turpis sed libero. Proin vel hendrerit quam. In vitae libero urna. Pellentesque varius, tortor a posuere luctus, odio erat volutpat risus, porttitor tempus elit ligula id orci. Etiam semper molestie sodales. Ut efficitur quam quis nunc ultricies, vel imperdiet arcu rutrum. Cras nec mi non nulla porttitor elementum.

Mauris posuere enim odio, quis aliquet ante accumsan eu. Donec id mattis sem, sed dignissim lectus. Morbi quis nibh eget enim tempus iaculis. Curabitur efficitur viverra semper. Nulla quis elementum tellus. In hac habitasse platea dictumst. Curabitur ex tellus, malesuada id porta nec, pellentesque id lorem. Sed id pretium massa, vel ultrices sem. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut a sapien ac ligula tempus semper eu vitae dui.

Suspendisse imperdiet sed enim quis pharetra. Sed vitae congue lectus, in luctus nisl. Fusce luctus ac nisi in fringilla. Duis sit amet odio non nulla laoreet maximus eu a magna. Sed blandit mattis ex eget ullamcorper. Maecenas non tincidunt metus. Ut id libero vestibulum lacus molestie tincidunt quis vel nibh. Nam gravida in ante ut fringilla. Proin venenatis faucibus lectus, interdum auctor dolor. Curabitur ultrices nulla vitae suscipit facilisis.</p>
           </div>
        </div>
    </div>
</template>


<script>
export default {
     name: 'Homep',
   
   
    methods:
    {
        Menu()
        {
            const hamburger = document.querySelector('.hamburger')
            const info=document.querySelector('.info')
            const handleClick = () =>
            {
                hamburger.classList.toggle('hamburger--active');
                info.classList.toggle('info--active');
            }
            hamburger.addEventListener('click',handleClick);
            info.addEventListener('click',handleClick);
           
        },
        Menu2()
        {
            const hamburger = document.querySelector('.hamburger2')
            const info=document.querySelector('.info2')
            const handleClick = () =>
            {
                hamburger.classList.toggle('hamburger--active');
                info.classList.toggle('info--active');
            }
            hamburger.addEventListener('click',handleClick);
             info.addEventListener('click',handleClick);
        },
        Menu3()
        {
            const hamburger = document.querySelector('.hamburger3')
             const info=document.querySelector('.info3')
            const handleClick = () =>
            {
                hamburger.classList.toggle('hamburger--active');
                info.classList.toggle('info--active');
            }
            hamburger.addEventListener('click',handleClick);
             info.addEventListener('click',handleClick);
        },
        Menu4()
        {
            const hamburger = document.querySelector('.hamburger4')
             const info=document.querySelector('.info4')
            const handleClick = () =>
            {
                hamburger.classList.toggle('hamburger--active');
                info.classList.toggle('info--active');
            }
            hamburger.addEventListener('click',handleClick);
             info.addEventListener('click',handleClick);
        }
    }
}
</script>

<style>

.Homes{
margin-top:50px;
padding:30px;
text-align: center;
position:relative;
}
.pages
{
    background-color:aliceblue;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    margin-right: 10px;
     display:inline-block;
}
.hamburger2,
.hamburger3,
.hamburger4,
.hamburger
{
    
    padding:5px;
    display:inline-block;
    background-color:aliceblue;
    cursor:pointer;
    border:0;
    margin:0;
}
.hamburger_box
{
    width:40px;
    height:24px;
    display:inline-block;
    position:relative;
    background-color:aliceblue;
}
.hamburger_inner
{   
  
    width:100%;
    height:25px;
    background-color: black;
    position:absolute;
    left:0;
    top:0;
    transition:background-color .1s ease-in-out;
}

.hamburger_inner::before
{
    content:'';
    width:100%;
    height:3px;
    background-color:aliceblue;
    position:absolute;
    left:0;
    top:15px;
    transition: transform .3s ease-in-out;
}
.hamburger_inner::after
{   
    content:'';
     width:100%;
    height:3px;
    background-color:aliceblue;
    position:absolute;
    left:0;
    top:6px;
    transition: transform .3s ease-in-out;
}
.hamburger--active .hamburger_inner
{
    background-color: aliceblue;
}
.hamburger--active .hamburger_inner::before
{
    transform:translateY(-5px) rotate(45deg) ;
    background-color:black;
}
.hamburger--active .hamburger_inner::after
{
      transform:translateY(4px) rotate(-45deg);
      background-color:black;
}
.info2,
.info3,
.info4,
.info
{
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    padding:10px;
    height:500px;
    width:1125px;
    margin-top:10px;
    border-radius:10px;
    position: absolute;
    transform:translateY(-2500px);
    background-color: aliceblue;
    transition:transform .3s .1s ease-in-out;
}
.info2--active,
.info3--active,
.info4--active,
.info--active
{
    transform:translateY(0px);
}
</style>

