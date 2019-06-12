<script>
	export let name;
	let currentPage = 'home';

	function handleHashChange(event) {
		currentPage = location.hash.slice(1);

		if (location.hash.slice(1) == "") {
			window.location.hash = "home"; // Set it to the initial page.
			currentPage = 'home';
		}
	}
</script>

<style>
	main > * {
		display: none;
	}

	main > *:last-child {
		display: block;
	}

	@keyframes pulse {
		0% { transform: scale(1) }
		50% { transform: scale(1.05) }
		100% { transform: scale(1) }
	}

	main > *:target {
		display: block;
		animation: pulse 0.5s linear 1;
	}

	main > *:target ~ * {
		display: none;
	}
</style>

<svelte:window on:hashchange={handleHashChange} />


<h1>{currentPage}</h1>
<nav role="navigation">
	<ul>
		<li><a href="#home">home</a></li>
		<li><a href="#dashboard">dashboard</a></li>
		<li><a href="#ledgers">ledgers</a></li>
	</ul>
</nav>
<main role="main">
	<section id="dashboard">
		Now we see it {name}
	</section>
	<section id="ledgers">
		Now we don't
	</section>
	<section id="home">
		Hello there
	</section>
</main>
