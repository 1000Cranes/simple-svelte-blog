<script>
    import { currentpage, pages, tips } from '../store.js';

    import Pages from '../pages/index.svelte';
    import Tips from '../pages/tips/index.svelte';
</script>

<style>
    main {
        width: 80%;
        margin: 0px auto;
        background: white;
    }

    main section {
        padding: 2em;
    }

    main>* {
        display: none;
    }

    main>*:last-child {
        display: block;
    }

    @keyframes pulse {
        0% {
            transform: scale(1)
        }

        50% {
            transform: scale(1.05)
        }

        100% {
            transform: scale(1)
        }
    }

    main>*:target {
        display: block;
        animation: pulse 0.5s linear 1;
    }

    main>*:target~* {
        display: none;
    }
</style>

<main role="main">
	{#each $pages as route}
		<section id="{route}">
			<Pages route="{route}" />
		</section>
    {/each}
    {#each $tips as route}
    <section id="{route}">
        <Tips route="{route}" />
    </section>
	{/each}
	<section id="default">
	
	</section>
</main>