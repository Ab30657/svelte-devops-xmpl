<script>
	export let title = ''
	export let content = ''

	import MarkdownIt from 'markdown-it'
	const markdown = new MarkdownIt()
	$: rendered = markdown.render(content)
</script>

{#if title}
	<h1 class="text-3x1 mb-3">{title}</h1>
{:else}
	<h1 class="text-3x1 mb-3 text-gray-600">No title</h1>
{/if}

<div class="rendered">
	{#if content}
		{@html rendered}
	{:else}
		<p class="text-gray-600">No content</p>
	{/if}
</div>
