<template>
    <nav class="navbar is-dark">
      <div class="navbar-brand">
         <router-link class="navbar-item" :to="{name: 'home'}">
            <img src="../assets/logo.png"/>
         </router-link>
      </div>
   </nav>
</template>

<script>

export default {
   name: "NavBar"
}
</script>


<style>

</style>