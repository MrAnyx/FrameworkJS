<!-- App.svelte -->
<script>
  import { links } from "svelte-routing";
</script>

<header id="navbar" use:links>
   <span><a href="/">Svelte</a></span>
   <ul>
      <li><a href="/page1" replace>Link 1</a></li>
      <li><a href="/page2" replace>Link 2</a></li>
      <li><a href="/page3" replace>Link 3</a></li>
      <li><a href="/page4" replace>Link 4</a></li>
   </ul>
</header>

<style>
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