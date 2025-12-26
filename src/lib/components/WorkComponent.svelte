<script lang="ts">
  let { name, title, time, desc } = $props();
</script>

<div class="item">

  <div class="content">
    <h3>{title}</h3>
    <p class="company">{name}</p>
    <p class="time">{time}</p>
    <p class="desc">{desc}</p>
  </div>
</div>

<style>
  .item {
    display: flex;
    gap: 1.25rem;
    position: relative;
  }

  .marker {
    width: 12px;
    height: 12px;
    background: black;
    border-radius: 50%;
    margin-top: 0.4rem;
    flex-shrink: 0;
  }

  .content h3 {
    margin: 0;
    font-size: 1rem;
  }

  .company {
    margin: 0.2rem 0;
    font-weight: 500;
    opacity: 0.85;
  }

  .time {
    margin: 0;
    font-size: 0.85rem;
    opacity: 0.6;
  }

  .desc {
    margin-top: 0.5rem;
    line-height: 1.5;
  }
</style>
