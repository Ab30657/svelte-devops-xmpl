<script>
	import {fade} from 'svelte/transition'
	import Calendar from './Calendar.svelte'
	import List from './List.svelte'
	let date = null
</script>

<div in:fade>
	<Calendar bind:date />
	<List bind:date />
</div>
