<template>
    <div class="d-flex align-content-center justify-content-center main">
       <div class="inputs">
           <h4> LOGIN</h4>
            <form>
              <label for="email">Email address:</label><br>
              <input type="email" name="email" placeholder="name@example.com" v-model="email"><br>
              <label for="password">Password:</label><br>
              <input type="password" name="password" autocomplete="password" v-model="password"><br><br>
              <div class="error" v-html="error"/>
              <button class="btn btn-secondary submiter" @click="login">Login!</button>
            </form>
       </div>
    </div>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
    name: 'Loginp',
    data () {
      return{
        email: '',
        password: '',
        error: null
      }
    },

    methods: {
      async login () {
        try{
         const response = await AuthenticationService.login({
            email: this.email,
            password: this.password
          })
          this.$store.dispatch('setToken', response.data.token)
          this.$store.dispatch('setUser', response.data.user)
        }
        catch (error) {
          this.error = error.response.data.error
          // console.log(error.response.data.error)
        }
      }
    }
}
</script>

<style>
.inputs{
/* margin-left:50%; */
background-color: aliceblue;
margin-top:100px;
padding:30px;
text-align: center;
border-radius: 10px;
box-shadow: 0 0 10px rgba(0, 0, 0, .5);
}

.main{
    margin-bottom: 50px;
}

</style>
