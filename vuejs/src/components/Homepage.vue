<template>
   <div>
      <vue-typer text='Homepage' :repeat='Infinity' initial-action='typing' :pre-type-delay='500' :type-delay='120' erase-style='erase' :pre-erase-delay='2000' :erase-delay='70' :erase-on-complete='false' caret-animation='phase'></vue-typer>
   </div>
</template>

<script>
import { VueTyper } from 'vue-typer'

export default {
   components: {
      VueTyper
   }
}
</script>

<style scoped>

div{
   width: 100%;
   position: absolute;
   top: 55px;
   bottom: 0px;
   display: flex;
   flex-direction: row;
   justify-content: center;
   align-items: center;
   
  font-size: 55px;
}
.vue-typer .custom.char.typed {
  color: #2e2e2e;
}
</style>