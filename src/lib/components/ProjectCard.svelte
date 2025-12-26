<script lang="ts">
  import type { Project } from '$lib/data/projects';
  import { createEventDispatcher } from 'svelte';

  let { project } = $props();
  let hovered = $state(false);

    const dispatch = createEventDispatcher<{
      open: Project;
    }>();
</script>

<article
  class="card"
  onmouseenter={() => hovered = true}
  onmouseleave={() => hovered = false}
  onclick={() => dispatch('open', project)}
>
  <h3>{project.name}</h3>
  <p>{project.description}</p>

  <span class:visible={hovered}>View →</span>
</article>

<style>
  .card {
    border-radius: 14px;
    padding: 1.5rem;
    border: 1px solid rgba(0,0,0,0.08);
    cursor: pointer;
    transition: transform 0.2s ease, box-shadow 0.2s ease;
  }

  .card:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0,0,0,0.08);
  }

  h3 {
    margin: 0;
    font-size: 1.05rem;
  }

  p {
    margin-top: 0.5rem;
    opacity: 0.85;
  }

  span {
    display: inline-block;
    margin-top: 0.75rem;
    opacity: 0;
    transition: opacity 0.15s ease;
    font-weight: 500;
  }

  .visible {
    opacity: 1;
  }
</style>
