process.env.DEBUG = 'nuxt:*';

var path = require('path');

let axios=require('axios');
//const Nuxt = require('nuxt')
const { Nuxt, Builder } = require('nuxt');
// Import and Set Nuxt.js options
let config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');
const nuxt = new Nuxt(config);
//let builder=null;
let bb=null;
async function start() {
  // Init Nuxt.js

  // Build only in dev mode
  if (true){//config.dev) {
    const builder = new Builder(nuxt);
     return  await builder.build();

  }
  else return Promise.resolve();

}
bb=start();

// =====================================
module.exports = function(app, passport) {

  	// =====================================
  	// HOME PAGE (with login links) ========

    app.get('/', function (req, res) {
      res.render('index.ejs', { title: 'vue-express starter' });
    });

        //**************************************************************************
        // NUXT SSR GENERIC RENDER FUNCTION
        //**************************************************************************

          function nuxtrender(path,req, res, next,sparms) {
          bb.then(()=>{
          nuxt.render(req,res,( html, error )=> {
      // You can check error to know if your app displayed the error page for this route
      // Useful to set the correct status status code if an error appended:
      console.log('********',req.url)

      if (error) {
      return res.status(error.statusCode || 500).send(html)
      }
      /*
      rews.send(json)
      */
      let sess=req.session;
      sess.user=req.user;
      req.session=sess;
      res.send(html);

      });
    });
    }


        //**************************************************************************
        // NUXT SSR GENERIC RENDERRoute FUNCTION
        //**************************************************************************
          function nuxtrenderRoute(path,req, res, next,ctx,query) {
          bb.then(()=>{
            let context={req:req,session:req.session,user:req.user};
           nuxt.renderRoute(path,context)
    .then(({ html, error, redirected }) => {
      // `html` will be always a string

      // `error` not null when the error layout is displayed, the error format is:
      // { statusCode: 500, message: 'My error message' }
      if (error) {
      return res.send({ statusCode: 500, message: error.message })
      }
      // `redirected` is not `false` when `redirect()` has been used in `data()` or `fetch()`
      // { path: '/other-path', query: {}, status: 302 }
      if(redirected){
        return res.send({path:redirected.path,query:(redirected.query||query||{}),status:302});
      }

      let sess=req.session;
      sess.user=req.user;
      req.session=sess;
//res.send(html);
      res.status(200).send(html);
    });
})
}
    //**************************************************************************
    // NUXT RENDER private path example
    //**************************************************************************
    app.get('/vueprofile',isLoggedIn,function (req, res,next) {
        nuxtrenderRoute('/vueprofile',req,res,next);
    });

        //**************************************************************************
        // NUXT RENDER public path example
        //**************************************************************************
        app.get('/vuelogin',function (req, res,next) {
    //      start();
    nuxtrenderRoute('/vuelogin',req,res,next);
    });
  	// =====================================
  	// LOGIN ===============================
  	// =====================================
  	// show the login form
    app.get('/login', function(req, res) {

  		// render the page and pass in any flash data if it exists
  		res.render('login.ejs', { message: req.flash('loginMessage') });
  	});
  	// process the login form
    app.post('/login', passport.authenticate('local-login', {
  		successRedirect : '/vueprofile', // redirect to the secure profile section
  		failureRedirect : '/login', // redirect back to the signup page if there is an error
  		failureFlash : true // allow flash messages
  	}));

  	// =====================================
  	// SIGNUP ==============================
  	// =====================================
  	// show the signup form
  	app.get('/signup', function(req, res) {

  		// render the page and pass in any flash data if it exists
  		res.render('signup.ejs', { message: req.flash('signupMessage') });
  	});

  	// process the signup form
  	app.post('/signup', passport.authenticate('local-signup', {
  		successRedirect : '/vueprofile', // redirect to the secure profile section
  		failureRedirect : '/signup', // rpedirect back to the signup page if there is an error
  		failureFlash : true // allow flash messages
  	}));

  	// =====================================
  	// PROFILE SECTION =========================
  	// =====================================
  	// we will want this protected so you have to be logged in to visit
  	// we will use route middleware to verify this (the isLoggedIn function)
    app.get('/profile', isLoggedIn, function(req, res) {
  		res.render('profile.ejs', {
  			user : req.user // get the user out of session and pass to template
  		});
  	});
      	// =====================================
      	// AXIOS API RESP SECTION =========================0
      	// =====================================
/*
        app.post('/vuelogin', passport.authenticate('local-login', {
          successRedirect : '/vueprofile', // redirect to the secure profile section
          failureRedirect : '/vuelogin', // redirect back to the signup page if there is an error
          failureFlash : true // allow flash messages
        }));*/
        app.post('/vuelogin', passport.authenticate('local-login', {
          successRedirect : '/profilevue', // redirect to the secure profile section
          failureRedirect : '/loginvue', // redirect back to the signup page if there is an error
          failureFlash : false // allow flash messages
      }));
              app.post('/profilevue', isLoggedIn, function(req, res) {
          		res.send({found:true,user : req.user,path:'/vueprofile' });// get the user out of session and pass to template
          	});
            app.post('/loginvue', isLoggedIn, function(req, res) {
            res.send({found:false,user : req.user,path:'/vuelogin' });// get the user out of session and pass to template
          	});
      app.get('/profilevue',isLoggedIn, function(req, res) {
        res.send({found:true,user : req.user,path:'/vueprofile' });// get the user out of session and pass to template
  	});
    app.get('/loginvue', function(req, res) {
    	res.send({found:false,user : req.user,path:'/vuelogin' });// get the user out of session and pass to template
  	});
    app.post('/isLoggedIn',  function(req, res) {
    	res.send({isLoggedIn:(req.user && req.isAuthenticated())?1:0 });// get the user out of session and pass to template
  	});

    app.post('/getLoggedInUser', isLoggedIn, function(req, res) {

      		res.send({user:req.user });// get the user out of session and pass to template
      	});

    // =====================================
  	// =====================================
  	app.post('/logoutvue', function(req, res) {
  		req.logout();
      res.redirect('/');
  	});
    // =====================================
  	// LOGOUT ==============================
  	// =====================================
  	app.get('/logout', function(req, res) {
  		req.logout();
      res.redirect('/');
  	});


  // route middleware to make sure
  function isLoggedIn(req, res, next) {

  	// if user is authenticated in the session, carry on
  	if (req.isAuthenticated())
  		return next();

  	// if they aren't redirect them to the home page
  	res.redirect('/vuelogin');
  }

app.get('/example-server-route', function (req, res) {
  res.render('example-server-route.ejs', { title: 'example server route', message: 'hello!' });
});

    //**************************************************************************
    // NUXT RENDER public path example
    //**************************************************************************
    app.get('/*',function (req, res,next) {
//      start();
nuxtrender(path,req,res,next);
});
}
