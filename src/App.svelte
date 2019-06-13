<script>
	import NavBar from './components/navbar.svelte';
	import MainRouter from './components/router.svelte';
	import Footer from './components/footer.svelte';

	import { currentpage } from './store.js';

	function handleHashChange(event) {
		if (currentpage != undefined) {
			currentpage.set(location.hash.slice(1));
		}
		if (location.hash.slice(1) == "") {
			window.location.hash = "home"; // Set it to the initial page.
		}
	}
</script>

<style>
	div {
		background: url("https://www.toptal.com/designers/subtlepatterns/patterns/ignasi_pattern_s.png");
		height: 100%;
		width: 100%;
	}

	header {
		height: 10em;
		width: 80%;
		margin: 0px auto;
	}

	header h1 {
		text-align: center;
		line-height: 5em;
	}

	header h1 a {
		padding: 0.5em;
		border: 5px solid black;
		color: black;
		text-transform: uppercase;
		background: white;
	}
</style>

<svelte:window on:hashchange={handleHashChange} />

<div>
	<header>
		<h1>
			<a href="#home">Sample Blog</a>
		</h1>
	</header>
	<NavBar />
	<MainRouter />

</div>