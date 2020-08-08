<template>
    <form action="" method="">
        <div class="back">
            <h3>Sign in</h3>
            <div class="inputs">
                 <label for="email" class="labels">Email address:</label><br>
                 <input type="email" id="email" class="form" placeholder="name@example.com"><br>
                 <label for="username" class="labels">Username:</label><br>
                 <input type="text" id="username" class="form"><br>
                 <label for="name" class="labels">Name:</label><br>
                 <input type="name" id="text" class="form"><br>
                 <label for="surname" class="labels">Surname:</label><br>
                 <input type="text" id="surname" class="form"><br>
                 <label for="password" class="labels">Password:</label><br>
                 <input type="password" id="password" class="form"><br>
                 <label for="birthday" class="labels">Birthday:</label><br>
                 <input type="date" id="birthday"><br>
                 <label for="country" class="labels">Country:</label><br>
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
    padding:10px;

}
.form
{
   margin-bottom: 10px;
   margin-left:auto;
   margin-right:auto;
}
.select
{
    margin-bottom:10px;
}
.inputs
{
    padding:10px;
    width:300px;
    text-align:center;
    background-color: white;
    box-shadow: 0 0 10px rgba(0, 0, 0, .5);
    position:relative;
    left:20%;
}
</style>
