<script>

export let id

fetch(`https://api.github.com/users/${id}`)
.then(result => result.json())
.then(response => {
   console.log(response)
})


</script>

<main>
   <p>{id}</p>
</main>

<style>

</style>
