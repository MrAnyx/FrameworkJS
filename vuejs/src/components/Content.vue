<template>
   <div>
      <p id="page">{{text}}</p>
   </div>
</template>

<script>
import data from "../assets/data.json"

export default  {
   data() {
      return {
         text: data[this.$route.params.page]
      }
   },
   watch: {
      "$route": "updateText"
   },
   methods: {
      updateText() {
         this.text = data[this.$route.params.page]
      }
   }

}
</script>

<style>
#page{
   
   width: 80%;
   color: #2e2e2e;
   text-align: justify;
   margin: 50px auto 0 auto;
}
</style>