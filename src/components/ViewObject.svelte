<script>
	import {fade} from 'svelte/transition'
	import Obj from './Obj.svelte'
	export let params = {}
</script>

<div in:fade>
	<Obj objectId={params.objectId} />
</div>
