<template>
<form action="" method="">
<div class="back">
  <h3>Log in to page</h3>
   <div class="inputs">
     <label for="email">Email address:</label><br>
    <input type="email" id="email" class="form" placeholder="name@example.com"><br>
     <label for="password">Password:</label><br>
    <input type="password" id="password" class="form"><br>
    <button type="submit" class="btn btn-secondary">Submit</button>
    
   </div> 
</div>
</form>
</template>


<script>
export default {
name: 'Logins'
}
</script>

<style>
.back
{
    width:500px;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height:300px;
    padding:10px;  
  
}
.form
{
   margin-bottom: 10px;
}

</style>
