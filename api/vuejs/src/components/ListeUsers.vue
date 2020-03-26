<template>
   <section class="section">
         <div class="container">
            <div class="columns is-multiline">
               <div class="column is-3" v-for="(user, index) in users" v-bind:key="index">
                  <router-link :to="{name: 'user', params: {user: user.login}}">
                     <div class="card navbar-item">
                        <div class="card-content">
                           {{ user.login }}
                        </div>      
                     </div> 
                  </router-link>
               </div>
            </div>
         </div>
      </section>
</template>

<script>
export default {
   name: "Users",
   data() {
      return {
         users: []
      }
   },
   beforeMount() {
      fetch("https://api.github.com/users?per_page=10")
      .then(response => response.json())
      .then(result => {
         this.users = result
      })
   }
}
</script>


<style>

</style>