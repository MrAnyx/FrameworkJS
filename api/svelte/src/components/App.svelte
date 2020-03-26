<script>
	import { Router, Link, Route } from "svelte-routing";
	import NavBar from "./NavBar.svelte"
	import Homepage from "./Homepage.svelte"
	import User from "./User.svelte"
	import ListeUsers from "./ListeUsers.svelte"
	import Footer from "./Footer.svelte"
	export let url = ""
</script>

<main>

<Router url="{url}">
  	<NavBar/>
  	<div>
		<Route path="/users" component="{ListeUsers}"/>
		<Route path="/user/:user" let:params>
			<User id="{params.user}"/>
	 	</Route>
    	<Route path="/" component="{Homepage}"/>
  	</div>
	<Footer/>
</Router>

</main>

<style>

</style>