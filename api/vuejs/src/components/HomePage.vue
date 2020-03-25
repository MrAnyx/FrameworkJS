<template>
   <section class="hero is-success is-bold is-medium">
            <div class="hero-body">
               <div class="container has-text-centered">
                  <h1 class="title">
                     Vue application
                  </h1>
                  <div class="subtitle has-text-centered">
                     <router-link class="button is-white" :to="{name: 'users'}">List of Users</router-link>
                     <router-link class="button is-white" :to="{name: 'user', params: { user:'MrAnyx' }}">My Info</router-link>
                  </div>
               </div>
            </div>
         </section>
</template>

<script>
export default {
   name: "HomePage"
}
</script>


<style>
.button {
   margin: 20px 10px;
}
</style>