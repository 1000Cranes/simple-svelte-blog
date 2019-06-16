<script>
    import tips from '../pages/tips.svelte';
    import home from '../pages/home.svelte';
    import series from '../pages/series.svelte';

    export let route;

    let Pages = {
        home,
        tips,
        series,
    };
</script>

<svelte:component this={Pages[route]} />