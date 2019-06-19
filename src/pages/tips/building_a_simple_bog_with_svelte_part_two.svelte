<h1>Building a simple blog with svelte - part Two.</h1>

<ul>
    <li>Basic layout</li>
    <li>Store.js contains routing</li>
</ul>

<main>
<h1>Building a Simple Blog with Svelte - Part Two</h1>
<h2>Let's Add Routing</h2>
<p>
    Now that we have our components ready from <a href="#building_a_simple_bog_with_svelte">last time</a>
    and we have a svelte app up and running it is time to move onto routing.  What is routing?  It's a technique
    used in single page applications so that when the user moves between sections of the app old sections are hidden
    and the new section is then shown.
</p>
<p>
    Now we could go and find a svelte 3 routing library, add it to our code, and then configure it.  Or we can attempt
    to roll our own.  I'm going with option 2. 
</p>
<h3>CSS First?</h3>
<p>
    Since I'm interested in making a light-weight blog.  I don't want the overhead of piles of javascript to do what
    CSS can do just fine.  Hide and show things.  So the first thing I did was pour through google search results
    of "css based routing for single page applications". I went through some duds until I stumbled upon 
    <a href="https://www.smashingmagazine.com/2015/12/reimagining-single-page-applications-progressive-enhancement/">
    Reimagining Single-Page Applications With Progressive Enhancement from Smashing Magazine</a> which sounded 
    spot on for what I wanted.
</p>
</main>