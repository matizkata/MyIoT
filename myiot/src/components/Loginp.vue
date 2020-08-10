<template>
    <div class="d-flex align-content-center justify-content-center main">
        <div class="inputs">
            <form action="" method="">
                <h4><span class='one'>L</span><span class='two'>o</span><span class='three'>g</span> <span class='four'>i</span><span class='five'>n</span></h4>
                <label for="email">Email address:</label><br>
                <input type="email" id="email" class="form" placeholder="name@example.com"><br>
                <label for="password">Password:</label><br>
                <input type="password" id="password" class="form"><br>
                <button type="submit" class="btn btn-secondary">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Loginp'
}
</script>

<style>
.inputs{
/* margin-left:50%; */
background-color: aliceblue;
margin-top:50px;
padding:30px;
text-align: center;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.main{
    margin-bottom: 50px;
}

</style>
