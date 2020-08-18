<template>
      <div class="d-flex align-content-center justify-content-center main">
            <div class="inputs">
              <label for="email">Email address:</label><br>
              <input type="email" name="email" placeholder="name@example.com" v-model="email"><br>
              <label for="password">Password:</label><br>
              <input type="password" name="password" v-model="password"><br><br>
              <button class="submiter" @click="register">Registry!</button>
            </div>
        </div>
</template>

<script>
export default {
    name: 'Registryp',
    data () {
      return{
        email: '',
        password: ''
      }
    },

    methods: {
      register() {
       console.log(this.email, this.password)
      }
    }
}
</script>

<style>

.select
{
    margin-bottom:10px;
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
.submiter{
  margin-right: auto;
  margin-left: auto;
}
</style>
