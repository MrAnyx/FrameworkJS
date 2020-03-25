<template>
   <div>
      <ul>
         <li v-for-key="user in users">{{ user.login }}</li>
      </ul>
   </div>
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
         console.log(this.users)
      })
   }
}
</script>


<style>

</style>