<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Page not found</h1>
    <h1 v-else>
      <p v-if="error.statusCode === 403">Access Forbiden</p>
       <p v-else>An error occurred</p>
    </h1>

    <a href="/">Home page</a>
  </div>
</template>

<script>
/**
You can customize the error page by adding a layouts/error.vue file.

This layout is special, since you should not include <nuxt/> inside its template. You must see this layout as a component displayed when an error occurs (404, 500, etc.).

The default error page source code is available on GitHub.
*/
export default {
  props: ['error'],
  //layout: 'blog' // you can set a custom layout for the error page
}
</script>
