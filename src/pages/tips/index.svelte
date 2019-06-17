<script>
    import building_a_simple_blog_with_svelte from '../tips/building_a_simple_bog_with_svelte.svelte';

    export let route;

    let Tips = {
        building_a_simple_blog_with_svelte
    };
</script>

<svelte:component this={Tips[route]} />