<script lang="ts">
    export let data;
</script>

<h1>Writing</h1>
<p>I've found that the way that I learn best is through writing and synthesizing.</p>
<p>Currently, I'm focused on: </p>
<li>Machine learning (RL, diffusion models, attention sparsity)</li>
<li>Data structures and algorithms (through Skiena's algorithms)</li>
<li>Svelte & TypeScript</li>
<li>GoLang & Haskell</li>

<section class="writing-index">
	<h1>Writing</h1>

	<ul>
		{#each data.posts as post}
			<li>
				<a href={`/writing/${post.slug}`}>
					<h2>{post.title}</h2>
					<time>{post.date}</time>
				</a>
			</li>
		{/each}
	</ul>
</section>

<style>
	.writing-index {
		max-width: 40rem;
		margin: 0 auto;
	}

	ul {
		list-style: none;
		padding: 0;
	}

	li {
		margin-bottom: 2rem;
	}

	time {
		font-size: 0.9rem;
		opacity: 0.6;
	}
</style>
