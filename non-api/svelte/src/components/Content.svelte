<script>

   import { afterUpdate } from "svelte";
   import data from "../assets/data.js"

   export let page;

   let content = ""

   afterUpdate(() => {
      content = data[page]
   });

</script>

<main>
   <p id="page">{content}</p>
</main>

<style>
   #page{
      
      width: 80%;
      color: #2e2e2e;
      text-align: justify;
      margin: 50px auto 0 auto;
   }
</style>