<script lang="ts">
	import { onMount, onDestroy } from 'svelte';

	import favicon from '$lib/assets/favicon.png';
	import hamburger from '$lib/assets/hamburger.png';
	import logo from '$lib/assets/logo-dark.png';
	import signature from '$lib/assets/signature-rotated-dark.png';

	let { children } = $props();

	let open = $state(false);
	let menuEl: HTMLElement;
	let buttonEl: HTMLElement;

	function toggleMenu(){
		open = !open;
	}

</script>

<svelte:head>
	<link rel="icon" href={favicon} />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

	<link
		href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;1,400&family=Inter:ital,wght@0,400;0,500;0,700&display=swap"
		rel="stylesheet"
	/>
</svelte:head>

<header class="site-header">
	<a href="/"><img src={logo}/></a>

	<!--
	<button 
		onclick={toggleMenu}
		aria-expanded={open}
		aria-label="Toggle menu"> 
		<img src={hamburger}/>
	</button>
	-->

	{#if open}
		<nav class="menu">
			<a href="/" onclick={() => (open = false)}><img src={ signature }></a>
			<a href="/#work" onclick={() => (open = false)}>Work Experience</a>
			<a href="/#projects" onclick={() => (open = false)}>Projects</a>
			<a href="/#misc" onclick={() => (open = false)}>Miscellaneous</a>
			<a href="/writing" onclick={() => (open = false)}>Writing</a>
		</nav>
	{/if}
</header>

<div class=main>
	{@render children()}
</div>

<style>
	.main{
		padding-left: 5rem;
		padding-right: 5rem;
	}
	a {
		text-decoration: none;
		color: inherit;
	}
	.site-header{
		position: relative;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left:-1rem;
		padding: 1rem 0;
	}

	button{
		z-index: 20;
		background: none;
		border:none;
	}

	img{
		height:3rem;
	}
	
	button img{
		height:1rem;
		display: block;
	}

	.menu{
		position:absolute;
		top: 35%;
		right: 0;
		display: flex;
		flex-direction: column;
		gap: 0.75rem;
		z-index: 10;
	}

	.menu img{
		height:1.5rem;
	}

	:global(body){
		font-family: 'Inter', system-ui, sans-serif;
	}

	:global(h1, h2, h3){
		font-family: 'Cormorant Garamond', serif;
	}
</style>
