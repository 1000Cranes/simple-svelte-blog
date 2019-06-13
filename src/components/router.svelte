<script>
    import {
        currentpage,
        routes
    } from '../store.js';
    import {
        onMount
    } from 'svelte';

    let Components = [];

    onMount(async () => {
        $routes.forEach(async function (route, i) {
            const {
                default: Component
            } = await import('./pages/' + route + '.svelte');
            Components = [...Components, Component];
        });
    });
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
    {#each $routes as route, i}
		<section id="{route}">
			{#if $currentpage == route}
				<svelte:component this={Components[i]} />
			{/if}
		</section>
	{/each}
</main>