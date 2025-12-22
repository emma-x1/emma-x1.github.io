<script lang="ts">
    import flower1 from '$lib/assets/flower1-dark.png'
    import flower2 from '$lib/assets/flower2-dark.png'
    import flower3 from '$lib/assets/flower3-dark.png'
</script>

<div class="flowers">
    <img src={flower1}>
    <img src={flower2}>
    <img src={flower3}>
    <img src={flower1}>
    <img src={flower2}>
</div>

<style>
    .flowers {
        position: relative;
        bottom: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        gap: 1rem;

    }

    .flowers img {
        height: 4rem;
        opacity: 0.8;
    }
</style>