<script>
	import { onMount } from 'svelte';

	let { diagram } = $props();
	let container;

	onMount(async () => {
		const mermaid = (await import('mermaid')).default;
		mermaid.initialize({ startOnLoad: false });
		const { svg } = await mermaid.render('mermaid-' + Math.random().toString(36).slice(2), diagram);
		container.innerHTML = svg;
	});
</script>

<div bind:this={container}></div>
