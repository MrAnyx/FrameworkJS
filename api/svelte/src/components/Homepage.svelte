<script>
   import { Link } from "svelte-routing"
</script>

<main>
   <section class="hero is-success is-bold is-medium">
            <div class="hero-body">
               <div class="container has-text-centered">
                  <h1 class="title">
                     Vue application
                  </h1>
                  <div class="subtitle has-text-centered">
                     <a class="button is-white" href="/users">List of Users</a>
                     <a class="button is-white" href="/user/MrAnyx">My Info</a>
                  </div>
               </div>
            </div>
         </section>
</main>

<style>
.button {
   margin: 20px 10px;
}
</style>