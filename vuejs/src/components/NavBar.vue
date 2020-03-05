<template>
   <header id="navbar">
            <span><router-link to="/">VueJS</router-link></span>
            <ul>
               <li><router-link to="/page1">Link 1</router-link></li>
               <li><router-link to="/page2">Link 2</router-link></li>
               <li><router-link to="/page3">Link 3</router-link></li>
               <li><router-link to="/page4">Link 4</router-link></li>
            </ul>
         </header>
</template>

<script>
export default {}
</script>

<style scoped>
#navbar{
   width: 100%;
   height: 55px;
   background-color: coral;
   color: #2e2e2e;
   padding: 10px;
   vertical-align: middle;
   display: flex;
   justify-content: space-between;
   align-items: center;
}

#navbar span{
   font-size: 35px;
   font-weight: bold;
   margin-left: 30px;
}

#navbar ul{
   list-style-type: none;
}

#navbar ul li{
   display: inline-block;
   margin: 0 30px;
}

#navbar ul li a, #navbar span a{
   color: #2e2e2e;
   text-decoration: none;
}
</style>