<template>
  <div class="container">

  <div class="col-sm-6 col-sm-offset-3">

  	<h2 style="margin-top:25px"><span class="fa fa-sign-in"></span> Login</h2>


<!--div style="  background:red; color:white; padding:10px;" v-if="failedlogin">
I should only display if  <strong>failedlogin</strong>
</div
<div class="">

<div class="loginForm-holder">-->
  <div><small>Login</small></div>
  <form class="" method="POST">

<!--form method="POST" action="/vuelogin" @submit.prevent="login({ email, password })"-->
  <div class="">
  Username:  <input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="email" type="email" placeholder="email">
  </div>
  <div class="">
    Password:<input class="rounded-0 border-top-0 border-left-0 border-right-0 form-control" v-model="password" type="password" placeholder="password">
  </div>
  <button @click="onAction" class="form-control button ">LOGIN</button>
  <!--button type="submit" class="rounded-0 btn btn-secondary btn-block">LOGIN</button-->
</form>
<!---/div>-->
<hr/>

</div>



<hr>

<p>Need an account? <a href="/signup">Signup</a></p>
<p>Or go <a href="/">home</a>.</p>

<div class="flash">

  <!-- show any messages that come back with authentication -->

  <!--div v-if="messages">
  <div v-if="messages.error" class="alert alert-danger">{{messages.error}}</div>
  <div v-if="messages.success" class="alert alert-success">{{messages.success}}</div>
  <div v-if="messages.info" class="alert alert-danger">{{messages.info}}</div>
</div-->
</div>
</div>
</template>
<!--script src="/scripts/frontend.js"></script-->

<script>

import {mapActions} from 'vuex'
import * as axios from 'axios'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  asyncData (context) {
    return{
  email: '',
  password: ''
}
},
computed: {
},
methods: {
...mapActions([ 'authenticate']),
onAction: function(ev) {
  ev.preventDefault()
  ev.stopPropagation()
 let sr=this.$router
let sdata={
    email: this.email,
    password: this.password,
    router:sr
  }
  this.$store.dispatch('authenticate',sdata)
  //this.authenticate(sdata);
}

}
}
</script>
<style scoped>
button {
cursor: pointer
}
</style>
