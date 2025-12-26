<script>
    import WorkComponent from './WorkComponent.svelte';
</script>

<h2 id="work">Work Experience</h2>
<p>I'm lucky to have learned from the talented teams at each of my roles. Here's where I've contributed to shareholder value - see <a href="https://www.linkedin.com/in/emmaxing/"> Linkedin </a> for more.</p>
<section class="timeline">
    <WorkComponent name="Incoming @TextQL" title="Intern of Technical Staff" time="Jan. 2026 - Apr. 2026" desc=""/>
    <WorkComponent name="RBC Borealis" title="Machine Learning Software Engineer" time="Sept. 2025 - Dec. 2025" desc="Delivered machine learning models for credit adjudication."/>
    <WorkComponent name="RBC" title="Full Stack Developer" time="May. 2025 - Aug. 2025" desc=""/>
</section>

<style>
  .timeline {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    padding-left: 1rem;
  }

  .timeline::before {
    content: '';
    position: absolute;
    left: 6px;
    top: 0;
    bottom: 0;
    width: 1px;
    background: rgba(0,0,0,0.15);
  }
</style>
