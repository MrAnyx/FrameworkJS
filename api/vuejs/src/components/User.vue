<template>
   <div class="columns is-mobile is-centered">
            <div class="column is-half">

               <div class="card user">
                  <div class="card-content">
                     <div class="media">
                        <div class="media-left">
                           <figure class="image is-48x48">
                              <img :src="user.avatar_url" alt="Placeholder image"/>
                           </figure>
                        </div>
                        <div class="media-content">
                           <p class="title is-4">{{this.user.name || this.user.login}}</p>
                           <p class="subtitle is-6">@{{this.user.login}}</p>
                        </div>
                     </div>

                     <div class="content">
                        <span>{{this.user.created_at !== undefined ? this.user.created_at.split("T")[0] : ""}}</span>
                        <br/>
                        <br/>
                        {{this.user.bio}}
                     </div>
                  </div>
               </div>

            </div>
         </div>
</template>

<script>
export default {
   name: "User",
   data() {
      return {
         user: []
      }
   },
   beforeMount() {
      fetch(`https://api.github.com/users/${this.$route.params.user}`)
      .then(result => result.json())
      .then(response => {
         this.user = response
      })
   }
}
</script>


<style>
.user{
   margin-top: 50px;
   margin-bottom: 50px;
}
</style>