<!-- src/lib/components/ProjectModal.svelte -->
<script lang="ts">
  import { onMount, createEventDispatcher } from 'svelte';
  import type { Project } from '$lib/data/projects';

  let { project } = $props();

  function close() {
    dispatch('close');
  }

  onMount(() => {
    document.body.style.overflow = 'hidden';
    return () => (document.body.style.overflow = '');
  });

  const dispatch = createEventDispatcher<{
    open: Project;
  }>();
</script>

<div class="backdrop" onclick={close}>
  <div class="modal" onclick={(e) => e.stopPropagation()}>
    <button class="close" onclick={close}>×</button>

    <header>
      <h2>{project.name}</h2>
    </header>

    {#if project.image}
      <img src={project.image} alt={project.name} />
    {/if}

    {#if project.video}
      <video controls src={project.video} />
    {/if}

    <p class="long">{project.longDescription}</p>

    <ul class="tech">
      {#each project.tech as t}
        <li>{t}</li>
      {/each}
    </ul>
  </div>
</div>

<style>
  .backdrop {
    position: fixed;
    inset: 0;
    background: rgba(0,0,0,0.45);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 100;
  }

  .modal {
    background: white;
    width: min(640px, 80vw);
    max-height: 85vh;
    overflow-y: auto;
    padding: 2rem 2.25rem;
    border-radius: 20px;
    position: relative;
  }

  img, video {
    width: 100%;
    border-radius: 12px;
    margin: 1rem 0;
  }

  .long {
    line-height: 1.6;
    margin-top: 1rem;
  }

  .tech {
    list-style: none;
    padding: 0;
    display: flex;
    gap: 0.5rem;
    flex-wrap: wrap;
    margin-top: 1rem;
  }

  .tech li {
    background: #f0f0f0;
    padding: 0.3rem 0.6rem;
    border-radius: 999px;
    font-size: 0.8rem;
  }

  .close {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: none;
    border: none;
    font-size: 1.5rem;
    cursor: pointer;
  }
</style>
