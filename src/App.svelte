<script>
	import { onMount } from 'svelte';

	import NavBar from './components/navbar.svelte';
	import MainRouter from './components/router.svelte';
	import Footer from './components/footer.svelte';
	import Header from './components/header.svelte';

	import { currentpage } from './store.js';

	function handleHashChange(event) {
		if (currentpage != undefined) {
			currentpage.set(location.hash.slice(1));
		}
		if (location.hash.slice(1) == "") {
			window.location.hash = "home"; // Set it to the initial page.
		}
	}

	onMount(() => {
		window.location.hash = "home";
		currentpage.set("home");
	});
</script>

<svelte:window on:hashchange={handleHashChange} />

<Header />
<NavBar />
<MainRouter />
<Footer />