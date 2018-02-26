 <template>
     <div>
      <div>
        <nav>
            <h1><span class="fa fa-lock"></span>Vue nuxt links: </h1>
        <a href="/"  class="btn btn-default">Home</a>
          <nuxt-link to="/vuelogin" class="btn btn-default">vuelogin</nuxt-link>
          <nuxt-link to="/vueprofile" class="btn btn-default">protectedlink</nuxt-link>
          <nuxt-link to="/getUser" class="btn btn-default">getUser</nuxt-link>
          <A href='/login'  class="btn btn-default">expressLogin</a>
            <nuxt-link to="/about"  class="btn btn-default">About</nuxt-link>
          <nuxt-link to="/contacts"  class="btn btn-default">Contacts</nuxt-link>
          <nuxt-link to="/!@#$%"  class="btn btn-default">404 page</nuxt-link></nav>
          <!--router-view></router-view-->
      </div>
      <nuxt/>
    </div>
</template>

<script>
/**
You can extend the main layout by adding a layouts/default.vue file.

Make sure to add the <nuxt/> component when creating a layout to display the page component.

The default layout source code is:

<template>
  <nuxt/>
</template>

Error Page
You can customize the error page by adding a layouts/error.vue file.

This layout is special, since you should not include <nuxt/> inside its template. You must see this layout as a component displayed when an error occurs (404, 500, etc.).

The default error page source code is available on GitHub.

Example of a custom error page in layouts/error.vue:

<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/">Home page</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error'],
  layout: 'blog' // you can set a custom layout for the error page
}
<&/script>
Custom Layout
Every file (first level) in the layouts directory will create a custom layout accessible with the layout property in the page component.

Make sure to add the <nuxt/> component when creating a layout to display the page component.

Example of layouts/blog.vue:

<template>
  <div>
    <div>My blog navigation bar here</div>
    <nuxt/>
  </div>
</template>
And then in pages/posts.vue, you can tell Nuxt.js to use your custom layout:

<script>
export default {
  layout: 'blog'
}
<&/script>
More information about the layout property: API Pages layout

Check the demonstration video to see it in action.
*/
export default {

  head: {
      // Set Meta Tags for this Page
      script: [
        { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
      ],
      link: [
        { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/bootstrap/3.0.2/css/bootstrap.min.css' },
        //{ rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' },
        { rel: 'stylesheet', href: '//netdna.bootstrapcdn.com/font-awesome/4.0.3/css/font-awesome.min.css' }
      ]
    }
}
</script>

<style>
html
{
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
*, *:before, *:after
{
  box-sizing: border-box;
  margin: 0;
}
.button--green
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #3b8070;
  color: #3b8070;
  text-decoration: none;
  padding: 10px 30px;
}
.button--green:hover
{
  color: #fff;
  background-color: #3b8070;
}
.button--grey
{
  display: inline-block;
  border-radius: 4px;
  border: 1px solid #35495e;
  color: #35495e;
  text-decoration: none;
  padding: 10px 30px;
  margin-left: 15px;
}
.button--grey:hover
{
  color: #fff;
  background-color: #35495e;
}
</style>
