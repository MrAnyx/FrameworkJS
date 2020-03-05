<template>
	<div id="app">
		<NavBar/>
		<router-view/>
	</div>
</template>

<script>
import NavBar from "./components/NavBar.vue"

export default {
	components: {
		NavBar
	}
}
</script>

<style>
/* Import font product sans */
@font-face {
	font-family: ProductSans;
	src: url("./assets/ProductSans-Regular.ttf");
}

/* Reset Style */
*{
	margin: 0px;
	padding: 0px;
	font-family: ProductSans;
	box-sizing: border-box;
	vertical-align: middle;
}

body, html{
	margin: 0;
	width: 100%;
	height: 100%;
}
</style>
