<script>
	// Components
	import Navbar from './components/Navbar.svelte'
	import Router from 'svelte-spa-router'
	import routes from './routes'
	// Stores
	</script>

<Navbar />

<div class="container mx-auto w-full lg:w-3/5 px-2 pt-2 mt-2">
	<!-- {#if $view == "add"}
        <ViewAdd />
    {:else if $view && $view.startsWith("view/")}
        <ViewObject objectId={$view.substring(5)} />
    {:else}
        <ViewList />
    {/if} -->
	<Router {routes} />
</div>
