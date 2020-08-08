<template>
    <form action="" method="">
        <div class="back">
            <div class="inputs">
                 <h4><span class='one'>S</span><span class='two'>I</span><span class='three'>G</span><span class='four'>N</span> <span class='five'>U</span><span class='six'>P</span></h4>
                 <label for="email">Email address:</label><br>
                 <input type="email" id="email" class="form" placeholder="name@example.com"><br>
                 <label for="username">Username:</label><br>
                 <input type="text" id="username" class="form"><br>
                 <label for="name">Name:</label><br>
                 <input type="name" id="text" class="form"><br>
                 <label for="surname">Surname:</label><br>
                 <input type="text" id="surname" class="form"><br>
                 <label for="password">Password:</label><br>
                 <input type="password" id="password" class="form"><br>
                 <label for="birthday" >Birthday:</label><br>
                 <input type="date" id="birthday"><br>
                 <label for="country">Country:</label><br>
                 <select id="country" class="select">
                     <option value="Poland">Poland</option>
                     <option value="UK">UK</option>
                     <option value="Deutschland">Deutschland</option>
                 </select><br>
                 <button type="submit" class="btn btn-secondary">Submit</button>
            </div>
        </div>
    </form>
</template>

<script>
export default {
    name: 'Registryp'
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
    padding:15px;

}

.select
{
    margin-bottom:10px;
}
.inputs
{
    padding:10px;
    text-align:center;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    position:relative;
}

 h4 {
    margin: 0;
    padding-bottom: 0.7rem;
    grid-column: 1;
    grid-row: 1;
    z-index: 1;
    font-family: 'Teko', sans-serif;
    font-size: 3rem;
    text-transform: uppercase;
    animation: glow 2s ease-in-out infinite alternate;
    text-align: center;
  }
  a {
    font-family: 'Teko', sans-serif;
    color: #4db1bc;
    grid-column: 1;
    grid-row: 1;
    align-self: end;
    justify-self: center;
    padding-bottom: 0.7rem;
  }
  
  @keyframes glow {
    from {
      text-shadow: 0 0 20px #2d9da9;
    }
    to {
      text-shadow: 0 0 30px #34b3c1, 0 0 10px #4dbbc7;
    }
  }
.form
{
    margin-bottom:10px;
}
</style>
