<script>
    import building_a_simple_blog_with_svelte from '../tips/building_a_simple_bog_with_svelte.svelte';
    import building_a_simple_blog_part_three from '../tips/building_a_simple_blog_part_three.svelte';

    export let route;

    let Tips = {
        building_a_simple_blog_with_svelte,
        building_a_simple_blog_part_three
    };
</script>

<svelte:component this={Tips[route]} />