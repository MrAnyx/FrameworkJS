<!-- App.svelte -->
<script>
  import { Router, Link, Route } from "svelte-routing";
  import NavBar from "./NavBar.svelte"
  import Homepage from "./Homepage.svelte"
  import Content from "./Content.svelte"

  export let url = "";
</script>

<Router url="{url}">
  <NavBar/>
  <div>
    <Route path="/:page" component="{Content}" />
    <Route path="/" component="{Homepage}"/>
  </div>
</Router>


<style>

@font-face {
	font-family: ProductSans;
	src: url("./assets/ProductSans-Regular.ttf");
}

:global(body){
	margin: 0px;
	padding: 0px;
	font-family: ProductSans;
	box-sizing: border-box;
	vertical-align: middle;
}
</style>