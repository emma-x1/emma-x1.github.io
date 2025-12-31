<script lang="ts">
	import { formatDate } from '$lib/utils'
	import * as config from '$lib/config'

	let { data } = $props()
</script>

<h1>Writing</h1>
<p>I've found that the way that I learn best is through writing and synthesizing.</p>
<p>Currently, I'm focused on: </p>
<ul class="tight-list">
	<li>Exploring my interests in machine learning (RL, diffusion models, attention sparsity)</li>
	<li>Enhancing my fundamentals in data structures and algorithms (through Skiena's algorithms)</li>
	<li>Building with frontend frameworks & languages Svelte & TypeScript</li>
	<li>Learning GoLang & Haskell</li>
</ul>

<!--
<section>
	<h2>Posts</h2>
	<ul class="posts">
		{#each data.posts as post}
			<li class="post">
				<a href={post.slug} class="title">{post.title}</a>
				<p class="date">{formatDate(post.date)}, {post.description}</p>
			</li>
		{/each}
	</ul>
</section>
-->

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

	.tight-list {
		list-style-type: disc;   
		margin: 0.8rem;
		line-height: 1;
	}

	.posts {
		display: grid;
		gap: var(--size-7);

		.post {
			max-inline-size: var(--size-content-3);

			&:not(:last-child) {
				border-bottom: 1px solid var(--border);
				padding-bottom: var(--size-7);
			}

			.title {
				font-size: var(--font-size-fluid-3);
				text-transform: capitalize;
			}

			.date {
				color: var(--text-2);
			}
		}
	}
</style>
