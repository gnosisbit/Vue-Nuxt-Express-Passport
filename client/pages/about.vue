<template>
  <div class="page page--about">
    <h3>About page</h3>
    <p>{{ welcome }}</p>

  </div>
</template>

      <script>
      //Every Page component is a Vue component, but Nuxt.js adds special keys to make the development of your universal application as easy as possible.
      export default {
        asyncData (context) {
          // called every time before loading the component
          return   {welcome: 'Welcome to about page!'}
        },
        fetch () {
          // The `fetch` method is used to fill the store before rendering the page
        },

        head: {
            // Set Meta Tags for this Page
            script: [
              { src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js' }
            ],
            link: [
              { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto' }
            ]
          }
        // and more functionality to discover
      //  ...
      /***********

      ATTRIBUTE	DESCRIPTION
      asyncData,	The most important key. It can be asynchronous and receives the context as argument. Please read the async data documentation to learn how it works.
      fetch,	Used to fill the store before rendering the page. It's like the data method, except it doesn't set the component data. See the API Pages fetch documentation.
      head,	Set specific <meta> tags for the current page. See API Pages head documentation.
      layout,	Specify a layout defined in the layouts directory. See API Pages layout documentation.
      transition,	Set a specific transition for the page. See API Pages transition.
      scrollToTop,	Boolean (default: false). Specify if you want the page to scroll to the top before rendering the page. It's used for nested routes.
      validate,	Validator function for dynamic routes.
      middleware,	Set middleware for this page. The middleware will be called before rendering the page. See routes middleware.
      More information about the pages properties usage: API Pages


      */
      }
      </script>


<style scoped>
  .about-logo a {
    padding: 20px;
    outline: 1px solid rgb(169, 169, 169);
    display: inline-block;
  }

  .about-logo a:hover {
    opacity: 0.8;
  }
</style>
