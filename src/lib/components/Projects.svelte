<script lang=ts>

  import ProjectCard from './ProjectCard.svelte';
  import ProjectModal from './ProjectModal.svelte';
  import { projects, type Project } from '$lib/data/projects';

  let selected = $state<Project | null>(null);

</script>

<h2 id="projects">Projects</h2>
<p>I want to build tech that is interesting and intentional. Here's an subset of what I've worked on.</p>


<section class="grid">
  {#each projects as project (project.id)}
    <ProjectCard
      {project}
      on:open={(e) => (selected = project)}
    />
  {/each}
</section>

{#if selected}
  <ProjectModal
    project={selected}
    on:close={() => (selected = null)}
  />
{/if}

<style>
  .grid {
    display: grid;
    gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
  }
</style>
