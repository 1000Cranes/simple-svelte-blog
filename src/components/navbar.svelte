<script>
    import {
        currentpage,
        pages
    } from '../store.js';
</script>

<style>
    nav {
        background: rgba(0, 225, 0, 0.5);
        height: 4em;
        width: 80%;
        margin: 0px auto;
        line-height: 4em;
    }

    nav ul {
        list-style: none;
        text-transform: uppercase;
        padding: 0;
        margin: 0;
        height: 100%;
        overflow: hidden;
    }

    nav ul li {
        float: left;
        letter-spacing: .175em;
        font-size: 0.95em;
        font-weight: 600;
        height: 100%;
    }

    nav ul li a {
        display: block;
        padding: 0 2em;
        color: black;

    }

    nav ul li.active a {
        background: white;
        color: black;
        text-shadow: none;
    }

    nav ul li a:hover {
        background: rgba(0, 225, 0, 0.5);
        color: black;
        text-decoration: none;
        text-shadow: none;
    }
</style>

<nav role="navigation">
    <ul>
        {#each $pages as route}
			<li class:active="{$currentpage === route}"><a href="#{route}">{route}</a></li>
		{/each}
	</ul>
</nav>