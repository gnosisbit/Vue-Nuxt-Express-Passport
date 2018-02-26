<template lang='ejs'>
  <div class="page page--profile">
    <h3>getLoggedInUser page</h3>
    <p>{{ welcome }}</p>
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css">
    	<link rel="stylesheet" href="//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css">


    <div style="padding-top:80px; word-wrap:break-word;">
    <div class="container">

    	<div class="row">
          getLoggedInUser:{{ user }} <br />
            store.state.user:{{ this.$store.state.user }}
      <!-- LOCAL INFORMATION -->
    		<div class="col-sm-6">
    			<div class="well">

    			</div>
    		</div>

    	</div>

    </div>
  </div>

  </div>
</template>

<script>

import { mapState,mapActions } from 'vuex'
import { ADD_MESSAGE, ADD_NOTIFICATION, SET_USER,USER, SESSION, LOGIN, LOGOUT, LOGIN_SUCCESS, LOGIN_ERROR, LOGIN_FAILED, ISLOGGEDIN} from "~/store/types";
export default {
  computed:mapActions(['getLoggedInUser']),
  methods:{
      //},
      asyncData (context) {
       ///getLoggedInUser()
    return {
      welcome: 'Welcome to getLoggedInUser page!',
      user:  this.$store.state.user
    }
  }
  },

}
</script>

<style scoped>
  .profile-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }

  .profile-logo a:hover {
    opacity: 0.8;
  }
</style>
